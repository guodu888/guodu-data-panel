<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 09:48:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 09:48:49
 * @Description: Decoration06
-->
<script setup lang="ts">
import { randomExtend } from '~/utils'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  size?: number
  column?: number
}>(), {
  colors: () => ['#7acaec', '#7acaec'],
  size: 7,
  column: 40,
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const state = reactive({
  points: [] as number[][],
  heights: [] as number[],
  minHeights: [] as number[],
  randoms: [] as number[],
})

function calcPointsPosition() {
  const [w, h] = [width.value, height.value]

  const horizontalGap = w / (props.column + 1)
  const verticalGap = h / 2

  const points = Array.from({ length: 1 }).fill(0).map((foo, i) =>
    Array.from({ length: props.column }).fill(0).map((foo, j) => [
      horizontalGap * (j + 1),
      verticalGap * (i + 1),
    ]))

  state.points = points.reduce((all, item) => [...all, ...item], [])
  const heights = state.heights = Array.from({ length: props.column })
    .fill(0).map(_ => Math.random() > 0.8 ? randomExtend(0.7 * h, h) : randomExtend(0.2 * h, 0.5 * h))

  state.minHeights = Array.from({ length: props.column })
    .fill(0).map((_, i) => heights[i] * Math.random())

  state.randoms = Array.from({ length: props.column })
    .fill(0).map(_ => Math.random() + 1.5)
}
watch([width, height, () => props.column], () => calcPointsPosition(), { immediate: true })
</script>

<template>
  <div ref="boxRef" class="dv-decoration-6">
    <svg :width="`${width}px`" :height="`${height}px`">
      <template
        v-for="(point, i) in state.points"
        :key="i"
      >
        <rect
          :fill="props.colors[Math.random() > 0.5 ? 0 : 1]"
          :x="point[0] - props.size / 2"
          :y="point[1] - state.heights[i] / 2"
          :width="props.size"
          :height="state.heights[i]"
        >
          <animate
            attributeName="y"
            :values="`${point[1] - state.minHeights[i] / 2};${point[1] - state.heights[i] / 2};${point[1] - state.minHeights[i] / 2}`"
            :dur="`${state.randoms[i]}s`"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            :values="`${state.minHeights[i]};${state.heights[i]};${state.minHeights[i]}`"
            :dur="`${state.randoms[i]}s`"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </template>
    </svg>
  </div>
</template>
