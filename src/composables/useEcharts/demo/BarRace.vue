<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 16:21:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 16:21:18
 * @Description: BarRace
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts/core'
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'
import {
  DataZoomComponent,
  DatasetComponent,
  GraphicComponent,
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
import { useEcharts } from '..'

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
  GraphicComponent,
])
const updateFrequency = 2000
const dimension = 0
const countryColors = {
  'Australia': '#00008b',
  'Canada': '#f00',
  'China': '#ffde00',
  'Cuba': '#002a8f',
  'Finland': '#003580',
  'France': '#ed2939',
  'Germany': '#000',
  'Iceland': '#003897',
  'India': '#f93',
  'Japan': '#bc002d',
  'North Korea': '#024fa2',
  'South Korea': '#000',
  'New Zealand': '#00247d',
  'Norway': '#ef2b2d',
  'Poland': '#dc143c',
  'Russia': '#d52b1e',
  'Turkey': '#e30a17',
  'United Kingdom': '#00247d',
  'United States': '#b22234',
}
const startYear = ref(0)
const showYear = ref('')
let allData: any[] = []
const data = ref<any[]>([])
const flags = ref<{
  code: string
  emoji: string
  unicode: string
  name: string
  title: string
  dialCode: string
}[]>([])
function getFlag(countryName: string) {
  if (!countryName)
    return ''

  return (
    flags.value.find((item) => {
      return item.name === countryName
    }) || {}
  ).emoji
}

Promise.all(
  [fetch('/assets/emoji-flags.json').then(response => response.json()), fetch(`/assets/life-expectancy-table.json`).then(response => response.json())],
).then(([res0, res1]: [any, any]) => {
  flags.value = res0
  allData = res1
  startPlay()
})
let isStart = false
function startPlay() {
  if (isStart)
    return
  isStart = true
  const years: number[] = []
  for (let i = 0; i < allData.length; ++i) {
    if (years.length === 0 || years[years.length - 1] !== allData[i][4])
      years.push(allData[i][4])
  }

  const startIndex = 10
  startYear.value = years[startIndex]
  function updateYear(year: number) {
    const source = allData.slice(1).filter((d: any) => {
      return d[4] === year
    })
    data.value = source
    showYear.value = `${year}`
  }
  for (let i = 10; i < years.length - 1; ++i) {
    (function (i) {
      setTimeout(() => {
        updateYear(years[i + 1])
        if (i === years.length - 2)
          isStart = false
      }, (i - startIndex) * updateFrequency)
    })(i)
  }
}

const options = computed<EChartsOption>(() => ({
  grid: {
    top: 10,
    bottom: 30,
    left: 150,
    right: 80,
  },
  xAxis: {
    max: 'dataMax',
    axisLabel: {
      formatter(n: any) {
        return `${Math.round(n)}`
      },
    },
  },
  dataset: {
    source: data.value,
  },
  yAxis: {
    type: 'category',
    inverse: true,
    max: 10,
    axisLabel: {
      show: true,
      fontSize: 14,
      formatter(value: any) {
        return `${value}{flag|${getFlag(value)}}`
      },
      rich: {
        flag: {
          fontSize: 25,
          padding: 5,
        },
      },
    },
    animationDuration: 300,
    animationDurationUpdate: 300,
  },
  series: [
    {
      realtimeSort: true,
      seriesLayoutBy: 'column',
      type: 'bar',
      itemStyle: {
        color(param: any) {
          // @ts-expect-error xxx
          return countryColors[param.value[3]] || '#5470c6'
        },
      },
      encode: {
        x: dimension,
        y: 3,
      },
      label: {
        show: true,
        precision: 1,
        position: 'right',
        valueAnimation: true,
        fontFamily: 'monospace',
      },
    },
  ],
  // Disable init animation.
  animationDuration: 0,
  animationDurationUpdate: updateFrequency,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
  graphic: {
    elements: [
      {
        type: 'text',
        right: 0,
        bottom: 60,
        style: {
          text: showYear.value,
          font: 'bolder 80px monospace',
          fill: 'rgba(100, 100, 100, 0.25)',
        },
        z: 100,
      },
    ],
  },
}))

const { domRef: chartRef } = useEcharts(options)
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :show-copy="false">
      <div ref="chartRef" class="w-full h-full" />
    </DocDemoBox>
    <button class="bg-blue text-white px-2 text-xl py-1" @click="startPlay">
      开始
    </button>
  </div>
</template>
