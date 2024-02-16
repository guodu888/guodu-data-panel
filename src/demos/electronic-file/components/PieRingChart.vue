<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-16 16:14:07
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-16 16:14:07
 * @Description: RingChart
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { useEcharts } from '../../../index'

const props = withDefaults(defineProps<{
  data: { name: string, value: number }[]
  bottom?: boolean
}>(), {
  bottom: false,
})

const activeTimeGap = 1500
const options = computed(() => ({
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
  legend: {
    show: true,
    bottom: 5,
    textStyle: {
      color: 'white',
      fontSize: props.bottom ? 12 : 18,
    },
  },
  grid: {
    top: 0,
    bottom: 200,
    left: 100,
    right: 100,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: [`${(props.bottom ? 60 : 70) - 25}%`, `${props.bottom ? 60 : 70}%`],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#00000000',
        borderWidth: 2,
        borderRadius: 2,
      },
      emphasis: {
        scaleSize: 10,
        scale: true,
        label: {
          show: true,
          fontSize: props.bottom ? 16 : 26,
          fontWeight: 'bold',
        },
      },
      label: {
        show: false,
        position: 'center',
        formatter: `{b}\n\n{d}%`,
      },
      labelLine: {
        show: false,
      },
      data: props.data,

    },
  ],

}) as EChartsOption)
let changePieInterval: NodeJS.Timeout
let curIndex = 0
const { domRef: chartRef } = useEcharts(options, (chart) => {
  const changeTimeout = setTimeout(() => {
    chart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 })
    clearTimeout(changeTimeout)
  }, 0)
  function selectPie() {
    chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex })
    curIndex = (curIndex + 1) % props.data.length
    chart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: curIndex })
  }
  // 自动轮播
  changePieInterval = setInterval(selectPie, activeTimeGap)
  // 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形
  chart.on('mouseover', (params) => {
    clearInterval(changePieInterval)
    if (curIndex !== params.dataIndex) {
      chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex })
      curIndex = params.dataIndex
    }
  })

  // 用户鼠标移出时，重新开始自动切换
  chart.on('mouseout', () => {
    if (changePieInterval)
      clearInterval(changePieInterval)
    chart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: curIndex })
    changePieInterval = setInterval(selectPie, activeTimeGap)
  })
})

onUnmounted(() => {
  if (changePieInterval)
    clearInterval(changePieInterval)
})
</script>

<template>
  <div ref="chartRef" class="w-full h-full" />
</template>
