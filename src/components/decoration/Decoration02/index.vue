<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 13:46:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 13:46:18
 * @Description: Decoration02
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  lineHeight?: number
  dur?: number
}>(), {
  colors: () => ['#FFFFFF4D', '#FFFFFF4D'],
  lineHeight: 2,
  dur: 3,
})
const boxRef = ref<HTMLDivElement>()
const { width: w } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" :style="`width:${w}px; height: ${props.lineHeight}px animation-duration:${props.dur}s`">
    <svg :width="w" :height="3">
      <polyline :stroke="props.colors[0]" :points="`0, 2.5 ${w}, 2.5`" />
      <polyline
        :stroke="props.colors[1]"
        stroke-width="3"
        stroke-dasharray="20, 80"
        stroke-dashoffset="-30"
        :points="`0, 2.5 ${w}, 2.5`"
      />
    </svg>
  </div>
</template>
