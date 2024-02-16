<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 15:44:40
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 15:44:40
 * @Description: BoxBorder04
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
  reverse?: boolean
}>(), {
  colors: () => ['red', 'rgba(0,0,255,0.8)'],
  backgroundColor: 'transparent',
  reverse: false,
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="border-box-4">
    <svg :class="`border-svg-container ${reverse && 'reverse'}`" :width="width" :height="height">
      <polygon :fill="props.backgroundColor" :points="`${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24 16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}`" />

      <polyline class="bb4-line-1" :stroke="props.colors[0]" :points="`145, ${height - 5} 40, ${height - 5} 10, ${height - 35} 10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`" />
      <polyline :stroke="props.colors[1]" class="bb4-line-2" :points="`245, ${height - 1} 36, ${height - 1} 14, ${height - 23} 14, ${height - 100}`" />

      <polyline class="bb4-line-3" :stroke="props.colors[0]" :points="`7, ${height - 40} 7, ${height - 75}`" />
      <polyline class="bb4-line-4" :stroke="props.colors[0]" points="28, 24 13, 41 13, 64" />
      <polyline class="bb4-line-5" :stroke="props.colors[0]" points="5, 45 5, 140" />
      <polyline class="bb4-line-6" :stroke="props.colors[1]" points="14, 75 14, 180" />
      <polyline class="bb4-line-7" :stroke="props.colors[1]" points="55, 11 147, 11 167, 26 250, 26" />
      <polyline class="bb4-line-8" :stroke="props.colors[1]" points="158, 5 173, 16" />
      <polyline class="bb4-line-9" :stroke="props.colors[0]" :points="`200, 17 ${width - 10}, 17`" />
      <polyline class="bb4-line-10" :stroke="props.colors[1]" :points="`385, 17 ${width - 10}, 17`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-4 {
  position: relative;
}
.border-box-4 .reverse {
  transform: rotate(180deg);
}
.border-box-4 .border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.border-box-4 .border-svg-container  > polyline {
  fill: none;
}
.border-box-4 .sw1 {
  stroke-width: 1;
}
.border-box-4 .sw3 {
  stroke-width: 3px;
  stroke-linecap: round;
}
.border-box-4 .bb4-line-1 {
  stroke-width: 1;
}
.border-box-4 .bb4-line-2 {
  stroke-width: 1;
}
.border-box-4 .bb4-line-3 {
  stroke-width: 3px;
  stroke-linecap: round;
}
.border-box-4 .bb4-line-4 {
  stroke-width: 3px;
  stroke-linecap: round;
}
.border-box-4 .bb4-line-5 {
  stroke-width: 1;
}
.border-box-4 .bb4-line-6 {
  stroke-width: 1;
}
.border-box-4 .bb4-line-7 {
  stroke-width: 1;
}
.border-box-4 .bb4-line-8 {
  stroke-width: 3px;
  stroke-linecap: round;
}
.border-box-4 .bb4-line-9 {
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 100 250;
}
.border-box-4 .bb4-line-10 {
  stroke-width: 1;
  stroke-dasharray: 80 270;
}
.border-box-4 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
