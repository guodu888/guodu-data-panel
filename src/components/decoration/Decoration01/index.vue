<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 11:30:09
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 11:30:09
 * @Description: Decoration01
-->
<script lang="ts" setup>
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
  rects: [],
  points: [],
})

const { width, height } = useElementSize(decoration01Ref)

watch([width, height, () => props.row, () => props.column], () => {
  calcSVGData()
})

function calcPointsPosition() {
  const [w, h] = [width.value, height.value]
  const horizontalGap = w / (props.column + 1)
  const verticalGap = h / (props.row + 1)

  const newPoints: Array<any> = Array.from({ length: props.row }).fill(0).map((foo, i) =>
    Array.from({ length: props.column }).fill(0).map((foo, j) => [
      horizontalGap * (j + 1),
      verticalGap * (i + 1),
    ]))

  state.points = newPoints.reduce((all, item) => [...all, ...item], [])
}

function calcRectsPosition() {
  const rect1 = state.points[props.column * 2 - 1]
  const rect2 = state.points[props.column * 2 - 3]

  state.rects = [rect1, rect2]
}

function calcSVGData() {
  calcPointsPosition()
  calcRectsPosition()
}
</script>

<template>
  <div ref="decoration01Ref">
    <svg :width="`${width}px`" :height="`${height}px`">

      <g v-for="point in state.points" :key="point">
        <rect
          v-if="Math.random() > 0.5" :fill="props.colors[0]" :x="point[0] - halfSize"
          :y="point[1] - halfSize" :width="props.size" :height="props.size"
        >
          <animate
            v-if="Math.random() > 0.5" attributeName="fill" :values="`${props.colors[0]};transparent`" dur="1s"
            :begin="Math.random() * 2" repeatCount="indefinite"
          />
        </rect>
      </g>

      <rect
        v-if="state.rects[0]" :fill="props.colors[1]" :x="state.rects[0][0] - props.size"
        :y="state.rects[0][1] - props.size" :width="props.size * 2" :height="props.size * 2"
      >
        <animate attributeName="width" :values="`0;${props.size * 2}`" dur="2s" repeatCount="indefinite" />
        <animate attributeName="height" :values="`0;${props.size * 2}`" dur="2s" repeatCount="indefinite" />
        <animate
          attributeName="x" :values="`${state.rects[0][0]};${state.rects[0][0] - props.size}`" dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y" :values="`${state.rects[0][1]};${state.rects[0][1] - props.size}`" dur="2s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        v-if="state.rects[1]" :fill="props.colors[1]" :x="state.rects[1][0] - 40"
        :y="state.rects[1][1] - props.size" :width="40" :height="props.size * 2"
      >
        <animate attributeName="width" values="0;40;0" dur="2s" repeatCount="indefinite" />
        <animate
          attributeName="x" :values="`${state.rects[1][0]};${state.rects[1][0] - 40};${state.rects[1][0]}`"
          dur="2s" repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</template>
