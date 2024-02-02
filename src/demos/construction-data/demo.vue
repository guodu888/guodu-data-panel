<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-02 15:28:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-02 15:28:54
 * @Description: Demo
-->
<script setup lang="ts">
import { UseFullscreen } from '@vueuse/components'
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
import { Decoration05, Decoration08, Decoration10, FullScreenContainer, ScrollRank, useEcharts } from '../../index'

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
function randomExtend(minNum: number, maxNum: number) {
  if (arguments.length === 1)
    return Number.parseInt(`${Math.random() * minNum + 1}`, 10)
  else
    return Number.parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10)
}
const data = [
  {
    title: '管养里程',
    number: {
      number: [randomExtend(20000, 30000)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#4d99fc',
        fontWeight: 'bold',
      },
    },
    unit: '公里',
  },
  {
    title: '桥梁',
    number: {
      number: [randomExtend(20, 30)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#f46827',
        fontWeight: 'bold',
      },
    },
    unit: '座',
  },
  {
    title: '涵洞隧道',
    number: {
      number: [randomExtend(20, 30)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#40faee',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
  {
    title: '匝道',
    number: {
      number: [randomExtend(10, 20)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#4d99fc',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
  {
    title: '隧道',
    number: {
      number: [randomExtend(5, 10)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#f46827',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
  {
    title: '服务区',
    number: {
      number: [randomExtend(5, 10)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#40faee',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
  {
    title: '收费站',
    number: {
      number: [randomExtend(5, 10)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#4d99fc',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
  {
    title: '超限站',
    number: {
      number: [randomExtend(5, 10)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#f46827',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
  {
    title: '停车区',
    number: {
      number: [randomExtend(5, 10)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#40faee',
        fontWeight: 'bold',
      },
    },
    unit: '个',
  },
]

const rankData = [
  {
    key: 1,
    title: '周口',
    value: 55,
    ranking: 1,
  },
  {
    key: 2,
    title: '南阳',
    value: 120,
    ranking: 2,
  },
  {
    key: 3,
    title: '西峡',
    value: 78,
    ranking: 3,
  },
  {
    key: 4,
    title: '驻马店',
    value: 66,
    ranking: 4,
  },
  {
    key: 5,
    title: '新乡',
    value: 80,
    ranking: 5,
  },
  {
    key: 6,
    title: '信阳',
    value: 45,
    ranking: 6,
  },
  {
    key: 7,
    title: '漯河',
    value: 29,
    ranking: 7,
  },
  {
    key: 8,
    title: '平顶山',
    value: 29,
    ranking: 8,
  },
  {
    key: 9,
    title: '商丘',
    value: 29,
    ranking: 9,
  },
  {
    key: 10,
    title: '郑州',
    value: 29,
    ranking: 10,
  },
  {
    key: 11,
    title: '洛阳',
    value: 29,
    ranking: 11,
  },
  {
    key: 12,
    title: '开封',
    value: 29,
    ranking: 12,
  },
  {
    key: 13,
    title: '安阳',
    value: 29,
    ranking: 13,
  },
  {
    key: 14,
    title: '焦作',
    value: 29,
    ranking: 14,
  },
  {
    key: 15,
    title: '濮阳',
    value: 29,
    ranking: 15,
  },
  {
    key: 16,
    title: '许昌',
    value: 29,
    ranking: 16,
  },
  {
    key: 17,
    title: '漯河',
    value: 29,
    ranking: 17,
  },
  {
    key: 18,
    title: '三门峡',
    value: 29,
    ranking: 18,
  },
  {
    key: 19,
    title: '济源',
    value: 29,
    ranking: 19,
  },
  {
    key: 20,
    title: '鹤壁',
    value: 29,
    ranking: 20,
  },
  {
    key: 21,
    title: '濮阳',
    value: 29,
    ranking: 21,
  },
  {
    key: 22,
    title: '许昌',
    value: 29,
    ranking: 22,
  },
  {
    key: 23,
    title: '漯河',
    value: 29,
    ranking: 23,
  },
]

const roseOptions = computed<EChartsOption>(() => ({
  legend: {
    show: false,
    top: 'bottom',
    textStyle: {
      color: '#fff',
      fontSize: 16,
    },
  },
  grid: {
    containLabel: true,
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      roseType: 'area',
      radius: '40%', // 圆的大小
      center: ['50%', '50%'], // 居中
      label: {
        fontSize: 20,

      },
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' },
      ],
    },
  ],
}))
const { domRef: roseChartRef } = useEcharts(roseOptions)
</script>

<template>
  <div class="p-3">
    <UseFullscreen v-slot="{ toggle }">
      <FullScreenContainer :width="1920" :height="1080" background="center no-repeat url(/assets/bg.png)" class="text-white text-24px">
        <!-- h:100px -->
        <div class="absolute w-50px h-50px z-999999 cursor-pointer right-20px top-20px" @click="() => toggle()">
          <div class="i-carbon:fit-to-screen w-full" />
        </div>
        <div class="flex h-100px gap-50px items-center justify-center pt-20px relative">
          <Decoration08 class="w-480px h-full pb-50px" />
          <Decoration05 class="w-960px h-full pt-20px" />
          <Decoration08 class="w-480px h-full pb-40px" :reverse="true" />
          <p class="absolute text-40px">
            智慧作业
          </p>
        </div>
        <!-- h:150px -->
        <div class="flex h-150px justify-center items-center relative gap-10px bg-#061e5d80">
          <div v-for="item, i in data" :key="i" class="flex-1 menu-item text-center p-3">
            <p>{{ item.title }}</p>
            <p class="text-right">
              <span :style="{ color: item.number.style.fill }" class="font-bold text-40px leading-1.5em">{{ item.number.number[0] }}</span>{{ item.unit }}
            </p>
          </div>
          <Decoration10 class="absolute w-full h-5px bottom-0" />
        </div>
        <!-- h:825px -->
        <div class="w-full h-825px flex">
          <div class="h-full w-384px">
            <ScrollRank unit="万元" :data="(rankData.sort((a, b) => b.value - a.value).map((x, i) => ({ ...x, ranking: i + 1 })) as any)" :slides-per-view="9" />
          </div>
          <div class="w-full">
            <div class="h-410px flex">
              <div class="h-full w-410px">
                <div ref="roseChartRef" class="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </FullScreenContainer>
    </UseFullscreen>
  </div>
</template>

<style>
.menu-item + .menu-item {
    border-left: 3px solid #061e5d;
}
</style>
