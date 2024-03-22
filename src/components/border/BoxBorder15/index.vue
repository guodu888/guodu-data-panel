<!--
 * @Author: shaohang-shy
 * @Date: 2024-03-22 13:48:32
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-03-22 13:48:32
 * @Description: BoxBorder15
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
  borderWidth?: number
  dur?: number
}>(), {
  colors: () => ['#5ddcff', '#4e00c2'],
  backgroundColor: 'transparent',
  borderWidth: 3,
  dur: 4,
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const id = Math.random().toString(36).substr(2)
const symbolId = `border-box-15-symbolId-${id}`
</script>

<template>
  <div ref="boxRef" class="border-box-15">
    <svg :height="height" :width="width" class="border-svg-container">
      <defs>
        <linearGradient :id="symbolId" x1="50%" y1="0%" x2="75%" y2="100%">
          <stop offset="0%" :stop-color="props.colors[0]">
            <animate
              attributeName="stop-color" :values="`${props.colors[1]};${props.colors.join(';')}`" :dur="`${props.dur}s`"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" :stop-color="props.colors[1]">
            <animate
              attributeName="stop-color" :values="`${props.colors.join(';')};${props.colors[0]}`" :dur="`${props.dur}s`"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <rect
        :x="props.borderWidth / 2" :y="props.borderWidth / 2" :rx="props.borderWidth" :height="height - props.borderWidth" :width="width - props.borderWidth" :stroke="`url(#${symbolId})`"
        :fill="props.backgroundColor" :stroke-width="props.borderWidth"
      />
    </svg>
    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-15 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-15 .border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.border-box-15 .border-svg-container  > polyline {
  fill: none;
  stroke-width: 1;
}
.border-box-15 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
