<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 11:30:09
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 11:30:09
 * @Description: Decoration01
-->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  lineHeight?: number
  endWidth?: number
  dur?: number
}>(), {
  colors: () => ['#3FAACBFF', '#fff'],
  lineHeight: 2,
  endWidth: 5,
  dur: 3,
})
const bxoRef = ref<HTMLDivElement>()
const { width: w, height: h } = useElementSize(bxoRef)
const rectX = ref(0)
const rectY = computed(() => h.value / 2)
</script>

<template>
  <div ref="bxoRef">
    <svg :width="w" :height="h">
      <rect :x="rectX" :y="rectY" :width="w" :height="props.lineHeight" :fill="props.colors[0]">
        <animate
          attributeName="width"
          from="0"
          :to="w"
          :dur="`${props.dur}s`"
          calcMode="spline"
          keyTimes="0;1"
          keySplines=".42,0,.58,1"
          repeatCount="indefinite"
        />
      </rect>

      <rect :x="rectX" :y="rectY" :width="endWidth" :height="props.lineHeight" :fill="props.colors[1]">
        <animate
          attributeName="x"
          from="0"
          :to="w"
          :dur="`${props.dur}s`"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.42,0,0.58,1"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</template>
