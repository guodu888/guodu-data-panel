<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-04 14:09:25
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-04 14:09:25
 * @Description: ProgressPool
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: number
  colors?: string[]
  borderWidth?: number
  borderGap?: number
  lineDash?: [number, number]
  textColor?: string
  borderRadius?: number
  localGradient?: boolean
  formatter?: string
}>(), {
  colors: () => ['#3DE7C9', '#00BAFF'],
  borderWidth: 3,
  borderGap: 3,
  lineDash: () => [5, 1],
  textColor: '#fff',
  borderRadius: 5,
  localGradient: false,
  formatter: '{value}%',
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)

const id = Math.random().toString(36).slice(2, 8)
const state = {
  gradientId1: `percent-pond-gradientId1-${id}`,
  gradientId2: `percent-pond-gradientId2-${id}`,
}

const linearGradient = computed<[number, string][]>(() => {
  const { colors } = props
  const colorNum = colors.length
  const colorOffsetGap = 100 / (colorNum - 1)
  return colors.map((c, i) => [colorOffsetGap * i, c])
})

const polylineGradient = computed(() => {
  if (props.localGradient)
    return state.gradientId1
  return state.gradientId2
})

const gradient2XPos = computed(() => {
  return `${200 - props.value}%`
})

const rectWidth = computed(() => {
  const { borderWidth } = props
  return width.value - borderWidth
})

const rectHeight = computed(() => {
  const { borderWidth } = props
  return height.value - borderWidth
})

const polylineWidth = computed(() => {
  const { borderWidth, borderGap } = props
  return height.value - (borderWidth + borderGap) * 2
})

const points = computed(() => {
  const halfHeight = height.value / 2
  const { borderWidth, borderGap, value } = props
  const polylineLength = (width.value - (borderWidth + borderGap) * 2) / 100 * value

  return `
        ${borderWidth + borderGap}, ${halfHeight}
        ${borderWidth + borderGap + polylineLength}, ${halfHeight + 0.001}
      `
})

const details = computed(() => {
  const { value: v, formatter } = props
  return formatter.replace('{value}', v.toString())
})
</script>

<template>
  <div ref="boxRef" class="percent-pond">
    <svg>
      <defs>
        <linearGradient :id="state.gradientId1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            v-for="lc in linearGradient" :key="lc[0]"
            :offset="`${lc[0]}%`"
            :stop-color="lc[1]"
          />
        </linearGradient>

        <linearGradient :id="state.gradientId2" x1="0%" y1="0%" :x2="gradient2XPos" y2="0%">
          <stop
            v-for="lc in linearGradient" :key="lc[0]"
            :offset="`${lc[0]}%`"
            :stop-color="lc[1]"
          />
        </linearGradient>
      </defs>
      <rect
        :x="props.borderWidth / 2"
        :y="props.borderWidth / 2"
        :rx="props.borderRadius"
        :ry="props.borderRadius"
        fill="transparent"
        :stroke-width="props.borderWidth"
        :stroke="`url(#${state.gradientId1})`"
        :width="rectWidth > 0 ? rectWidth : 0"
        :height="rectHeight > 0 ? rectHeight : 0"
      />
      <polyline
        :stroke-width="polylineWidth"
        :stroke-dasharray="props.lineDash.join(',')"
        :stroke="`url(#${polylineGradient})`"
        :points="points"
      />
      <text
        :stroke="props.textColor"
        :fill="props.textColor"
        :x="width / 2"
        :y="height / 2"
      >
        {{ details }}
      </text>
    </svg>
  </div>
</template>

<style scoped>
.percent-pond {
  position: relative;
  display: flex;
  flex-direction: column;
}
.percent-pond svg {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.percent-pond polyline {
  transition: all 0.3s;
}
.percent-pond text {
  font-size: 25px;
  font-weight: bold;
  text-anchor: middle;
  dominant-baseline: middle;
}
</style>
