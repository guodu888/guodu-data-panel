<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 09:34:06
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 09:34:06
 * @Description: Decoration05
-->
<script setup lang="ts">
import { type Point, getPolylineLength, pointsToString } from '../../../utils'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  dur?: number
}>(), {
  colors: () => ['#3f96a5', '#3f96a5'],
  dur: 1.2,
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)

const state = reactive({
  line1Points: '',
  line2Points: '',
  line1Length: 0,
  line2Length: 0,
})
function calcSVGData() {
  const line1Points: Array<Point> = [
    { x: 0, y: height.value * 0.2 },
    { x: width.value * 0.18, y: height.value * 0.2 },
    { x: width.value * 0.2, y: height.value * 0.4 },
    { x: width.value * 0.25, y: height.value * 0.4 },
    { x: width.value * 0.27, y: height.value * 0.6 },
    { x: width.value * 0.72, y: height.value * 0.6 },
    { x: width.value * 0.75, y: height.value * 0.4 },
    { x: width.value * 0.8, y: height.value * 0.4 },
    { x: width.value * 0.82, y: height.value * 0.2 },
    { x: width.value, y: height.value * 0.2 },
  ]

  const line2Points: Array<Point> = [
    { x: width.value * 0.3, y: height.value * 0.8 },
    { x: width.value * 0.7, y: height.value * 0.8 },
  ]

  const line1Length = getPolylineLength(line1Points)
  const line2Length = getPolylineLength(line2Points)

  state.line1Points = pointsToString(line1Points)
  state.line2Points = pointsToString(line2Points)

  state.line1Length = line1Length
  state.line2Length = line2Length
}
watch([width, height], () => calcSVGData(), { immediate: true })
</script>

<template>
  <div ref="boxRef">
    <svg :width="width" :height="height">
      <polyline
        fill="transparent"
        :stroke="props.colors[0]"
        stroke-width="3"
        :points="state.line1Points"
      >
        <animate
          attributeName="stroke-dasharray"
          attributeType="XML"
          :from="`0, ${state.line1Length / 2}, 0, ${state.line1Length / 2}`"
          :to="`0, 0, ${state.line1Length}, 0`"
          :dur="`${dur}s`"
          begin="0s"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.4,1,0.49,0.98"
          repeatCount="indefinite"
        />
      </polyline>
      <polyline
        fill="transparent"
        :stroke="props.colors[1]"
        stroke-width="2"
        :points="state.line2Points"
      >
        <animate
          attributeName="stroke-dasharray"
          attributeType="XML"
          :from="`0, ${state.line2Length / 2}, 0, ${state.line2Length / 2}`"
          :to="`0, 0, ${state.line2Length}, 0`"
          :dur="`${dur}s`"
          begin="0s"
          calcMode="spline"
          keyTimes="0;1"
          keySplines=".4,1,.49,.98"
          repeatCount="indefinite"
        />
      </polyline>
    </svg>
  </div>
</template>
