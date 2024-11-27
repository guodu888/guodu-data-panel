<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-15 10:00:28
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-15 10:00:28
 * @Description: activeRingChart
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'
import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  PolarComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'

import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { useEcharts } from '../../../composables/useEcharts'

echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  PictorialBarChart,
  RadarChart,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  PolarComponent,
  MarkLineComponent,
  MarkAreaComponent,
  DataZoomComponent,
])
const radius = 90
const lineWidth = 25
const activeRadius = 10
const style = {
  fontSize: '20',
}
const showOriginValue = false
const unit = ''

const data = [
  { name: 'Direct', value: 335 },
  { name: 'Email', value: 310 },
  { name: 'Ad', value: 234 },
  { name: 'Video', value: 135 },
  { name: 'Search', value: 1548 },
  { name: 'Baidu', value: 335 },
]

const activeTimeGap = 1500
const options = computed(() => ({
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: [`${radius - lineWidth}%`, `${radius}%`],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#00000000',
        borderWidth: 2,
        borderRadius: 2,
      },
      emphasis: {
        scaleSize: activeRadius,
        scale: true,
        label: {
          show: true,
          fontSize: style.fontSize,
          fontWeight: 'bold',
        },
      },
      label: {
        show: false,
        position: 'center',
        formatter: `{b}\n\n${showOriginValue ? `{c}${unit}` : '{d}%'}`,
      },
      labelLine: {
        show: false,
      },
      data,
    },
  ],
}) as EChartsOption)
let changePieInterval: NodeJS.Timeout
let curIndex = 0
const { domRef: boxRef } = useEcharts(options, (chart) => {
  const changeTimeout = setTimeout(() => {
    chart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 })
    clearTimeout(changeTimeout)
  }, 0)
  function selectPie() {
    chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex })
    curIndex = (curIndex + 1) % data.length
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
  <div class="p-3">
    <DocDemoBox :show-copy="false">
      <div ref="boxRef" class="w-80% mx-auto h-300px" />
    </DocDemoBox>
  </div>
</template>
