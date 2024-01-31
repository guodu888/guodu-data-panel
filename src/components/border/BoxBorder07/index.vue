<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 16:20:35
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 16:20:35
 * @Description: BoxBorder07
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'],
  backgroundColor: 'transparent',
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div
    ref="boxRef"
    class="border-box-7"
    :style="`box-shadow: inset 0 0 40px ${props.colors[0]}; border: 1px solid ${props.colors[0]}; background-color: ${props.backgroundColor}`"
  >
    <svg class="border-svg-container" :width="width" :height="height">
      <polyline class="bb7-line-width-2" :stroke="props.colors[0]" points="0, 25 0, 0 25, 0" />
      <polyline class="bb7-line-width-2" :stroke="props.colors[0]" :points="`${width - 25}, 0 ${width}, 0 ${width}, 25`" />
      <polyline class="bb7-line-width-2" :stroke="props.colors[0]" :points="`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`" />
      <polyline class="bb7-line-width-2" :stroke="props.colors[0]" :points="`0, ${height - 25} 0, ${height} 25, ${height}`" />
      <polyline class="bb7-line-width-5" :stroke="props.colors[1]" points="0, 10 0, 0 10, 0" />
      <polyline class="bb7-line-width-5" :stroke="props.colors[1]" :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`" />
      <polyline class="bb7-line-width-5" :stroke="props.colors[1]" :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`" />
      <polyline class="bb7-line-width-5" :stroke="props.colors[1]" :points="`0, ${height - 10} 0, ${height} 10, ${height}`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-7 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-7 .border-svg-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.border-box-7 .border-svg-container  > polyline {
  fill: none;
  stroke-linecap: round;
}
.border-box-7 .bb7-line-width-2 {
  stroke-width: 2;
}
.border-box-7 .bb7-line-width-5 {
  stroke-width: 5;
}
.border-box-7 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
