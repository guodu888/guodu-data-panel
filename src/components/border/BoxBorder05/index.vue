<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 15:59:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 15:59:16
 * @Description: BoxBorder05
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
  reverse?: boolean
}>(), {
  colors: () => ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],
  backgroundColor: 'transparent',
  reverse: false,
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="border-box-5">
    <svg :class="`border-svg-container  ${reverse && 'reverse'}`" :width="width" :height="height">
      <polygon :fill="props.backgroundColor" :points="`10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}`" />

      <polyline class="bb5-line-1" :stroke="props.colors[0]" :points="`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100} ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`" />
      <polyline class="bb5-line-2" :stroke="props.colors[1]" :points="`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60} ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`" />
      <polyline class="bb5-line-3" :stroke="props.colors[1]" :points="`50, 13 ${width - 35}, 13`" />
      <polyline class="bb5-line-4" :stroke="props.colors[1]" :points="`15, 20 ${width - 35}, 20`" />
      <polyline class="bb5-line-5" :stroke="props.colors[1]" :points="`15, ${height - 20} ${width - 110}, ${height - 20}`" />
      <polyline class="bb5-line-6" :stroke="props.colors[1]" :points="`15, ${height - 13} ${width - 110}, ${height - 13}`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-5 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-5 .reverse {
  transform: rotate(180deg);
}
.border-box-5 .border-svg-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.border-box-5 .border-svg-container  > polyline {
  fill: none;
}
.border-box-5 .bb5-line-1,
.border-box-5 .bb5-line-2 {
  stroke-width: 1;
}
.border-box-5 .bb5-line-3,
.border-box-5 .bb5-line-6 {
  stroke-width: 5;
}
.border-box-5 .bb5-line-4,
.border-box-5 .bb5-line-5 {
  stroke-width: 2;
}
.border-box-5 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
