<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 11:08:35
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 11:08:35
 * @Description: Decoration12
-->
<script setup lang="ts">
import { fade } from '~/utils/color'
import { getCircleRadianPoint } from '~/utils'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  scanDur?: number
  haloDur?: number
  ringNum?: number
  splitNum?: number
  showSplitLine?: boolean
}>(), {
  colors: () => ['#2783ce', '#2cf7fe'],
  scanDur: 3,
  haloDur: 2,
  ringNum: 3,
  splitNum: 6,
  showSplitLine: true,
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)

const x = computed(() => width.value / 2)
const y = computed(() => height.value / 2)

const id = Math.random().toString(36).slice(2)
const gId = `decoration-12-g-${id}`
const gradientId = `decoration-12-gradient-${id}`

const state = reactive({
  pathD: [] as string[],
  pathColor: [] as string[],
  circleR: [] as number[],
  splitLinePoints: [] as string[],
  arcD: [] as string[],
  segment: 30,
  sectorAngle: Math.PI / 3,
  ringWidth: 1,
})

function calcPathD() {
  const startAngle = -Math.PI / 2
  const angleGap = state.sectorAngle / state.segment
  const r = width.value / 4
  let lastEndPoints = getCircleRadianPoint(x.value, y.value, r, startAngle)

  state.pathD = Array.from({ length: state.segment })
    .fill('')
    .map((_, i) => {
      const endPoints = getCircleRadianPoint(x.value, y.value, r, startAngle - (i + 1) * angleGap).map(_ => Number.parseFloat(_.toFixed(5)))
      const d = `M${lastEndPoints.join(',')} A${r}, ${r} 0 0 0 ${endPoints.join(',')}`
      lastEndPoints = endPoints
      return d
    })
}

function calcPathColor() {
  const colorGap = 100 / (state.segment - 1)

  state.pathColor = Array.from({ length: state.segment })
    .fill(props.colors[0])
    .map((_, i) => fade(props.colors[0], 100 - i * colorGap))
}

watch(() => props.colors[0], () => calcPathColor(), { immediate: true })

function calcCircleR() {
  const radiusGap = (width.value / 2 - state.ringWidth / 2) / props.ringNum

  state.circleR = Array.from({ length: props.ringNum })
    .fill(0)
    .map((_, i) => radiusGap * (i + 1))
}

function calcSplitLinePoints() {
  const angleGap = Math.PI / props.splitNum
  const r = width.value / 2

  state.splitLinePoints = Array.from({ length: props.splitNum })
    .fill('')
    .map((_, i) => {
      const startAngle = angleGap * (i + 1)
      const endAngle = startAngle + Math.PI
      const startPoint = getCircleRadianPoint(x.value, y.value, r, startAngle)
      const endPoint = getCircleRadianPoint(x.value, y.value, r, endAngle)

      return `${startPoint.join(',')} ${endPoint.join(',')}`
    })
}

function calcArcD() {
  const angleGap = Math.PI / 6
  const r = width.value / 2 - 1

  state.arcD = Array.from({ length: 4 })
    .fill('')
    .map((_, i) => {
      const startAngle = angleGap * (3 * i + 1)
      const endAngle = startAngle + angleGap
      const startPoint = getCircleRadianPoint(x.value, y.value, r, startAngle)
      const endPoint = getCircleRadianPoint(x.value, y.value, r, endAngle)

      return `M${startPoint.join(',')} A${x.value}, ${y.value} 0 0 1 ${endPoint.join(',')}`
    })
}

watch([width, height, () => props.ringNum, () => props.splitNum], () => {
  calcPathD()
  calcCircleR()
  calcSplitLinePoints()
  calcArcD()
})
</script>

<template>
  <div ref="boxRef" class="decoration-12">
    <svg :width="width" :height="height">
      <defs>
        <g :id="gId">
          <path
            v-for="(d, i) in state.pathD" :key="d" :stroke="state.pathColor[i]" :stroke-width="width / 2"
            fill="transparent" :d="d"
          />
        </g>

        <radialGradient :id="gradientId" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="transparent" stop-opacity="1" />
          <stop offset="100%" :stop-color="fade(props.colors[1], 30)" stop-opacity="1" />
        </radialGradient>
      </defs>

      <circle
        v-for="r in state.circleR" :key="r" :r="r" :cx="x" :cy="y" :stroke="props.colors[1]"
        :stroke-width="0.8" fill="transparent"
      />

      <circle r="1" :cx="x" :cy="y" stroke="transparent" :fill="`url(#${gradientId})`">
        <animate attributeName="r" :values="`1;${width / 2}`" :dur="`${haloDur}s`" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" :dur="`${haloDur}s`" repeatCount="indefinite" />
      </circle>

      <circle r="2" :cx="x" :cy="y" :fill="props.colors[1]" />

      <g v-if="props.showSplitLine">
        <polyline
          v-for="p in state.splitLinePoints" :key="p" :points="p" :stroke="props.colors[1]"
          :stroke-width="0.5" opacity="50"
        />
      </g>

      <path
        v-for="d in state.arcD" :key="d" :d="d" :stroke="props.colors[1]" stroke-width="2.3"
        fill="transparent"
      />

      <use :xlink:href="`#${gId}`">
        <animateTransform
          attributeName="transform" type="rotate" :values="`0, ${x} ${y};360, ${x} ${y}`"
          :dur="`${scanDur}s`" repeatCount="indefinite"
        />
      </use>
    </svg>

    <div class="decoration-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.decoration-12 {
  position: relative;
  display: flex;
}
.decoration-12 .decoration-content {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
