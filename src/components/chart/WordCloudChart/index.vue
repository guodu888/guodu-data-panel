<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-02 18:42:46
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-02 18:42:46
 * @Description: WordCloudChart
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { useEcharts } from '~/composables/useEcharts'
import 'echarts-wordcloud'

const props = defineProps<{
  data: { name: string, value: number }[]
}>()

const options = computed(() => ({
  tooltip: {},
  series: [{
    type: 'wordCloud',
    textStyle: {
      color() {
        return `rgb(${[Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',')})`
      },
    },
    data: props.data,
  }],
}))

const { domRef: boxRef } = useEcharts(options as unknown as ComputedRef<EChartsOption>)
</script>

<template>
  <div ref="boxRef" />
</template>
