<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-05 09:29:04
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-05 09:29:04
 * @Description: waterLevelPond
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  shape?: 'rect' | 'roundRect' | 'round'
  colors?: string[]
  waveColors?: string[]
  borderWidth?: number
  borderGap?: number
  cycle?: number
  percentage?: number
  dur?: number
  deep?: number
}>(), {
  shape: 'rect',
  colors: () => ['#3DE7C9', '#00BAFF'],
  waveColors: () => ['#3DE7C9', '#00BAFF'],
  borderWidth: 10,
  borderGap: 10,
  cycle: 2,
  percentage: 50,
  dur: 1000,
  deep: 0,
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const id = Math.random().toString(36).slice(2)
const gradientId = `water-level-pond-gradient-${id}`
const innerGradientId = `water-level-pond-wave-gradient-${id}`

const svgBorderGradient = computed<[number, string][]>(() => {
  return props.colors.map((c, i) => [(100 / (props.colors.length - 1)) * i, c])
})

const svgWaveGradient = computed<[number, string][]>(() => {
  return props.waveColors.map((c, i) => [(100 / (props.colors.length - 1)) * i, c])
})

const innerHeight = computed(() => height.value - props.borderWidth * 2 - props.borderGap * 2)
const innerWidth = computed(() => width.value - props.borderWidth * 2 - props.borderGap * 2)

const waveHeight = computed(() => innerHeight.value * ((100 - props.percentage) / 100))

const path = computed(() => {
  return `M 0,${innerHeight.value} 
  L 0,${waveHeight.value} 
  Q ${innerWidth.value / (props.cycle * 4)},${waveHeight.value + innerHeight.value / (props.cycle * 2) + props.deep} ${innerWidth.value / (props.cycle * 2)},${waveHeight.value}
  ${Array.from({ length: props.cycle * 2 + 1 }).map((_, i) => `T ${(innerWidth.value / (props.cycle * 2)) * (i + 2)}, ${waveHeight.value}`).join('\n')}
  L ${innerWidth.value + innerWidth.value / (props.cycle)}, ${innerHeight.value} 
  Z`
})
</script>

<template>
  <div ref="boxRef" class="relative">
    <svg v-if="width > 0 && height > 0" :width="width" :height="height">
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            v-for="lc in svgBorderGradient" :key="lc[0]"
            :offset="lc[0]"
            :stop-color="lc[1]"
          />
        </linearGradient>
      </defs>
      <ellipse
        v-if="!props.shape || props.shape === 'round'"
        :cx="width / 2"
        :cy="height / 2"
        :rx="width / 2 - props.borderWidth / 2"
        :ry="height / 2 - props.borderWidth / 2"
        :stroke="`url(#${gradientId})`"
        :stroke-width="props.borderWidth"
      />

      <rect
        v-else
        :x="props.borderWidth / 2" :y="props.borderWidth / 2"
        :rx="props.shape === 'roundRect' ? 10 : 0"
        :ry="props.shape === 'roundRect' ? 10 : 0"
        :width="width - props.borderWidth"
        :height="height - props.borderWidth"
        :stroke="`url(#${gradientId})`"
        :stroke-width="props.borderWidth"
      />

    </svg>
    <svg v-if="innerHeight > 0 && innerWidth > 0" :width="innerWidth" :height="innerHeight" class="absolute" :class="{ 'rounded-full': props.shape === 'round' }" :style="{ left: `${props.borderGap + props.borderWidth}px`, top: `${props.borderGap + props.borderWidth}px` }">
      <defs>
        <linearGradient :id="innerGradientId" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            v-for="lc in svgWaveGradient" :key="lc[0]"
            :offset="lc[0]"
            :stop-color="lc[1]"
          />
        </linearGradient>
      </defs>
      <path
        :d="path"
        :fill="`url(#${innerGradientId})`"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          attributeType="XML"
          to="0,0"
          :from="`-${innerWidth / (props.cycle)}, 0`"
          :dur="`${props.dur}ms`"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.rounded-full {
  border-radius: 9999px;
}
</style>
