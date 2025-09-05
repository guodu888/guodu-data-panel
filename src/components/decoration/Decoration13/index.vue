<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 11:30:09
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 11:30:09
 * @Description: Decoration01
-->
<script lang="ts" setup>
import { useElementSize } from '@vueuse/core'
import { computed, reactive, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  size?: number
  row?: number
  column?: number
}>(), {
  colors: () => ['#fff', '#0de7c2'],
  size: 2.5,
  row: 4,
  column: 20,
})

const decoration01Ref = ref<HTMLElement>()

const halfSize = computed(() => props.size / 2)

const state = reactive({
  rects: [] as Array<[number, number]>,
  points: [] as Array<{
    x: number
    y: number
    blink: boolean
    delay: number
  }>,
})

const { width, height } = useElementSize(decoration01Ref)

watch([width, height, () => props.row, () => props.column], () => {
  calcSVGData()
}, { immediate: true })

function calcPointsPosition() {
  const [w, h] = [width.value, height.value]
  const horizontalGap = w / (props.column + 1)
  const verticalGap = h / (props.row + 1)

  const newPoints: Array<any> = Array.from({ length: props.row }).flatMap((_, i) =>
    Array.from({ length: props.column }).map((_, j) => ({
      x: horizontalGap * (j + 1),
      y: verticalGap * (i + 1),
      blink: Math.random() > 0.5, // 是否闪烁
      delay: Math.random() * 2, // 动画延迟
    })),
  )

  state.points = newPoints
}

function calcRectsPosition() {
  const rect1 = state.points[props.column * 2 - 1]
  const rect2 = state.points[props.column * 2 - 3]
  state.rects = [rect1, rect2].filter(Boolean).map(p => [p.x, p.y])
}

function calcSVGData() {
  calcPointsPosition()
  calcRectsPosition()
}
</script>

<template>
  <div ref="decoration01Ref">
    <svg :width="`${width}px`" :height="`${height}px`">
      <!-- 普通点 -->
      <g v-for="(point, idx) in state.points" :key="idx">
        <rect
          v-if="point.blink"
          class="blink"
          :style="{ animationDelay: `${point.delay}s` }"
          :fill="props.colors[0]"
          :x="point.x - halfSize"
          :y="point.y - halfSize"
          :width="props.size"
          :height="props.size"
        />
      </g>

      <!-- 特殊矩形动画 -->
      <rect
        v-if="state.rects[0]"
        class="pulse-rect"
        :fill="props.colors[1]"
        :x="state.rects[0][0] - props.size"
        :y="state.rects[0][1] - props.size"
        :width="props.size * 2"
        :height="props.size * 2"
      />
      <rect
        v-if="state.rects[1]"
        class="slide-rect"
        :fill="props.colors[1]"
        :x="state.rects[1][0] - 40"
        :y="state.rects[1][1] - props.size"
        width="40"
        :height="props.size * 2"
      />
    </svg>
  </div>
</template>

<style scoped>
/* 普通点闪烁动画 */
.blink {
  animation: blink 1.5s infinite;
}
@keyframes blink {
  0% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 1 }
}

/* 大方块呼吸动画 */
.pulse-rect {
  transform-origin: center center;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { transform: scale(0) }
  100% { transform: scale(1) }
}

/* 长条矩形横向收缩动画 */
.slide-rect {
  transform-origin: left center;
  animation: slide 2s infinite;
}
@keyframes slide {
  0%   { transform: scaleX(0) }
  50%  { transform: scaleX(1) }
  100% { transform: scaleX(0) }
}
</style>
