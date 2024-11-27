<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-17 11:21:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-17 11:21:16
 * @Description: BoxBorder14
-->

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['#fff', 'rgba(255, 255, 255, 0.6)'],
  backgroundColor: 'transparent',
})

const boxRef = ref<HTMLDivElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="border-box-14">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon
        :fill="props.backgroundColor" :points="`7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}`"
      />

      <polyline
        :stroke="props.colors[0]"
        :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`"
      />
      <polyline
        :stroke="props.colors[1]"
        :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`"
      />
      <circle :fill="props.colors[0]" cx="11" cy="11" r="1" />
      <circle :fill="props.colors[0]" :cx="width - 11" cy="11" r="1" />
      <circle :fill="props.colors[0]" :cx="width - 11" :cy="height - 11" r="1" />
      <circle :fill="props.colors[0]" cx="11" :cy="height - 11" r="1" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-14 {
  position: relative;
}
.border-box-14 .border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.border-box-14 .border-svg-container > polyline {
  fill: none;
  stroke-width: 1;
}
.border-box-14 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
