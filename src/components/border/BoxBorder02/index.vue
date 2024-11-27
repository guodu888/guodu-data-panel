<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-29 16:51:39
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-29 16:51:39
 * @Description: BoxBorder02
-->
<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  dur?: number
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  dur: 1,
  colors: () => ['#4FD2DDFF', '#235FA7FF'],
  backgroundColor: '#00000000',
})
const boxRef = ref<HTMLDivElement>()
const { width: w, height: h } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="box-border">
    <svg :width="w" :height="h">
      <path
        :fill="props.backgroundColor" :stroke="props.colors[0]" :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10 L ${w - 20} 10 L ${w - 5} 25 L ${w - 5} ${h - 5} L 20 ${h - 5} L 5 ${h - 20} L 5 20`"
      />
      <path
        fill="transparent" stroke-w="3" stroke-linecap="round" stroke-dasharray="10, 5" :stroke="props.colors[0]"
        d="M 16 9 L 61 9"
      />
      <path fill="transparent" :stroke="props.colors[1]" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" />
      <path fill="transparent" :stroke="props.colors[1]" :d="`M ${w - 5} ${h - 30} L ${w - 5} ${h - 5} L ${w - 30} ${h - 5}`" />
    </svg>
    <div class="box-border-inner">
      <slot />
    </div>
  </div>
</template>

<style  scoped>
.box-border {
  position: relative;
}
.box-border-inner {
  position: absolute;
  padding: 15px;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
