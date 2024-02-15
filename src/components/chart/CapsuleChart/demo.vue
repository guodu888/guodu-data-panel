<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-06 10:19:26
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-06 10:19:26
 * @Description: CapsuleChart
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'

import * as echarts from 'echarts/core'
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'
import {
  DataZoomComponent,
  DatasetComponent,
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

const data = [
  {
    name: '南阳',
    value: 167,
  },
  {
    name: '周口',
    value: 123,
  },
  {
    name: '漯河',
    value: 98,
  },
  {
    name: '郑州',
    value: 75,
  },
  {
    name: '西峡',
    value: 66,
  },
]
const option = computed(() => (
  {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
      formatter: '{b}:{c}%',
    },
    xAxis: {
      type: 'value',
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
      // 坐标轴 轴线
        show: false, // 是否显示
      },
      axisLabel: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
      },
    },
    yAxis: {
      position: 'left',
      type: 'category',
      data: data.map(x => x.name),
      axisTick: {
        show: false,
      },
      axisLine: {
      // 坐标轴 轴线
        show: false, // 是否显示
      },
      axisLabel: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
      },
    },

    series: [
      {
        data: data.map(x => x.value),
        type: 'bar',
        showBackground: true,
        // barWidth: '20%',
        barMaxWidth: 15,
        barMinWidth: 10,
        backgroundStyle: {
          borderWidth: 3,
          borderColor: 'rgba(255,255,255,0.5)',
          color: 'transparent',
          borderRadius: [50, 50, 50, 50],
        },
        itemStyle: {
        // 图形的形状
          barBorderRadius: 50,
          // color: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff']
          color: (params: any) => {
            return ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'][params.dataIndex % 5]
          },
        },
      },
    ],

  } as EChartsOption))
const { domRef: chartRef } = useEcharts(option)
</script>

<template>
  <div class="p-3">
    <DocDemoBox :show-copy="false">
      <div ref="chartRef" class="w-80% mx-auto h-300px" />
    </DocDemoBox>
  </div>
</template>
