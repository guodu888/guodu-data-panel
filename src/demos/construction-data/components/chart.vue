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
import { Decoration05, Decoration08, Decoration10, FullScreenContainer, ScrollRank, useEcharts } from '../../../index'

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
    name: '日常养护',
    value: 55,
  },
  {
    name: '交通事故',
    value: 120,
  },
  {
    name: '路面',
    value: 78,
  },
  {
    name: '桥通',
    value: 66,
  },
  {
    name: '计日工',
    value: 80,
  },
  {
    name: '路基',
    value: 45,
  },
  {
    name: '交安设施',
    value: 29,
  },
  {
    name: '除雪',
    value: 29,
  },
  {
    name: '绿化',
    value: 29,
  },
].map((x, i) => ({ ...x, title: x.name, ranking: i + 1 }))

const roseOptions = computed(() => ({
  series: [
    {
      type: 'pie',
      radius: '50%',
      roseSort: false,
      data: [
        { name: '路基', value: randomExtend(40, 70) },
        { name: '交安设施', value: randomExtend(20, 30) },
        { name: '日常养护', value: randomExtend(10, 50) },
        { name: '桥通', value: randomExtend(5, 20) },
        { name: '交通事故', value: randomExtend(40, 50) },
        { name: '路面', value: randomExtend(20, 30) },
        { name: '绿化', value: randomExtend(5, 10) },
        { name: '计日工', value: randomExtend(20, 35) },
        { name: '除雪', value: randomExtend(5, 10) },
      ],
      insideLabel: {
        show: false,
      },
      outsideLabel: {
        formatter: '{name} {percent}%',
        labelLineEndLength: 20,
        style: {
          fill: '#fff',
        },
        labelLineStyle: {
          stroke: '#fff',
        },
      },
      roseType: true,
    },
  ],
  color: ['#da2f00', '#fa3600', '#ff4411', '#ff724c', '#541200', '#801b00', '#a02200', '#5d1400', '#b72700'],
} as EChartsOption))
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
            施工养护综合数据
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
          <div class="h-full w-384px flex flex-col px-10px">
            <div class="text-30px leading-60px h-60px">
              巡查上报记录数量
            </div>
            <div class="h-760px w-full">
              <ScrollRank unit="" :data="(rankData.sort((a, b) => b.value - a.value).map((x, i) => ({ ...x, ranking: i + 1 })) as any)" :slides-per-view="8" />
            </div>
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
