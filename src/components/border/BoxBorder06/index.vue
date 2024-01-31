<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 16:09:35
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 16:09:35
 * @Description: BoxBorder06
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],
  backgroundColor: 'transparent',
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="border-box-6">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon :fill="props.backgroundColor" :points="`9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}`" />

      <circle :fill="props.colors[1]" :cx="5" cy="5" r="2" />
      <circle :fill="props.colors[1]" :cx="width - 5" cy="5" r="2" />
      <circle :fill="props.colors[1]" :cx="width - 5" :cy="height - 5" r="2" />
      <circle :fill="props.colors[1]" :cx="5" :cy="height - 5" r="2" />
      <polyline :stroke="props.colors[0]" :points="`10, 4 ${width - 10}, 4`" />
      <polyline :stroke="props.colors[0]" :points="`10, ${height - 4} ${width - 10}, ${height - 4}`" />
      <polyline :stroke="props.colors[0]" :points="`5, 70 5, ${height - 70}`" />
      <polyline :stroke="props.colors[0]" :points="`${width - 5}, 70 ${width - 5}, ${height - 70}`" />
      <polyline :stroke="props.colors[0]" points="3, 10, 3, 50" />
      <polyline :stroke="props.colors[0]" points="7, 30 7, 80" />
      <polyline :stroke="props.colors[0]" :points="`${width - 3}, 10 ${width - 3}, 50`" />
      <polyline :stroke="props.colors[0]" :points="`${width - 7}, 30 ${width - 7}, 80`" />
      <polyline :stroke="props.colors[0]" :points="`3, ${height - 10} 3, ${height - 50}`" />
      <polyline :stroke="props.colors[0]" :points="`7, ${height - 30} 7, ${height - 80}`" />
      <polyline :stroke="props.colors[0]" :points="`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`" />
      <polyline :stroke="props.colors[0]" :points="`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-6 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-6 .border-svg-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.border-box-6 .border-svg-container  > polyline {
  fill: none;
  stroke-width: 1;
}
.border-box-6 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
