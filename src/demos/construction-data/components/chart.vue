<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { UseFullscreen } from '@vueuse/components'
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
import { useRouter } from 'vitepress'
import { Decoration05, Decoration08, Decoration10, FullScreenContainer, ScrollRank, ScrollTable, useEcharts, WaterLevelPond } from '../../../index'
import DataPanel from './dataPanel.vue'

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

const tableData = [
  ['2019-07-01 19:25:00', '路面危害-松散', '5', 'xxxxxxx'],
  ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', 'xxxxxxx'],
  ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
  ['2019-07-04 15:25:00', '路基危害-防尘网', '2', 'xxxxxxx'],
  ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
  ['2019-07-06 13:25:00', '路面危害-松散', '3', 'xxxxxxx'],
  ['2019-07-07 12:25:00', '路基危害-防尘网', '4', 'xxxxxxx'],
  ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', 'xxxxxxx'],
  ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
  ['2019-07-10 09:25:00', '路基危害-防尘网', '3', 'xxxxxxx'],
].map((x, i) => ({
  id: i + 1,
  time: x[0],
  type: x[1],
  number: x[2],
  desc: x[3],
}))
//  header: ['时间', '病害信息', '数量', '标段'],
const tableColumns = [
  { span: 1, key: 'index', title: '#', render(_: any, i: number) {
    return h('div', { class: 'scroll-table-row-item-index' }, i + 1)
  } },
  { span: 2, key: 'time', title: '时间' },
  { span: 2, key: 'type', title: '病害信息' },
  { span: 1, key: 'number', title: '数量' },
  { span: 1, key: 'desc', title: '标段' },
]

const router = useRouter()
function back() {
  router.go('/demo.html')
}
</script>

<template>
  <div class="p-3">
    <UseFullscreen v-slot="{ toggle }">
      <FullScreenContainer :width="1920" :height="1080" background="center no-repeat url(/assets/bg.png)" class="text-white text-24px">
        <!-- h:100px -->
        <div class="flex h-100px gap-50px items-center justify-center pt-20px relative">
          <Decoration08 class="w-480px h-full pb-50px" />
          <Decoration05 class="w-960px h-full pt-20px" />
          <Decoration08 class="w-480px h-full pb-40px" :reverse="true" />
          <p class="absolute text-40px">
            施工养护综合数据
          </p>
          <div class="absolute w-50px h-50px z-999999 cursor-pointer right-20px" @click="() => toggle()">
            <div class="i-carbon:fit-to-screen w-full" />
          </div>
          <div class="absolute w-50px h-50px z-999999 cursor-pointer left-20px" @click="back">
            <div class="i-carbon:arrow-left w-full" />
          </div>
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
        <div class="w-full h-800px flex mt-25px gap-20px">
          <div class="h-full w-430px flex flex-col px-10px b-t-5px b-t-solid b-t-#0199d180 bg-#061e5d80">
            <div class="text-30px leading-60px h-60px">
              巡查上报记录数量
            </div>
            <div class="h-735px w-full">
              <ScrollRank unit="" :data="(rankData.sort((a, b) => b.value - a.value).map((x, i) => ({ ...x, ranking: i + 1 })) as any)" :slides-per-view="8" />
            </div>
          </div>
          <div class="w-full flex flex-col gap-20px">
            <div class="h-400px flex gap-20px">
              <div class="h-full w-410px b-t-5px b-t-solid b-t-#0199d180 bg-#061e5d80">
                <div ref="roseChartRef" class="w-full h-full" />
              </div>
              <div class="h-full w-410px b-t-5px b-t-solid b-t-#0199d180 bg-#061e5d80">
                <p class="text-30px leading-60px h-60px text-center">
                  计划资金累计完成情况
                </p>
                <p class="text-26px leading-60px h-60px text-center">
                  累计完成<span class="text-#58a1ff text-42px mx-5px font-bold">235,680</span>元
                </p>
                <div class="mx-auto w-240px h-240px mt-20px relative">
                  <WaterLevelPond class="w-full h-full" shape="round" :percentage="45" :wave-colors="['#00BAFF55']" />
                  <div class="absolute w-full h-full top-0 left-0 flex justify-center items-center text-#00BAFF text-42px font-bold">
                    45%
                  </div>
                </div>
              </div>
              <div class="h-full w-410px flex-1">
                <ScrollTable class="h-full" :data="tableData" :columns="tableColumns" :row-height="400 / 6" />
              </div>
            </div>
            <div class="w-full flex-1 flex gap-20px">
              <template v-for="item in 5" :key="item">
                <DataPanel
                  class="flex-1 h-full"
                  :title="`资金占比${item}`"
                  :no="`0${item}`"
                  :percentage="randomExtend(20, 100)"
                  :amount="randomExtend(100, 1000)"
                  :count="randomExtend(0, 100)"
                />
              </template>
            </div>
          </div>
        </div>
      </FullScreenContainer>
    </UseFullscreen>
  </div>
</template>

<style scoped>
.menu-item + .menu-item {
    border-left: 3px solid #061e5d;
}
:deep(.scroll-table-header) {
  background-color: #1981f6;
  color: white;
  font-size: 16px;
}
:deep(.scroll-table-header-item),
:deep(.scroll-table-row-item) {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
/* 奇数的一个颜色 */
:deep(.scroll-table-row):nth-child(odd) {
  background-color: #003B51;
  color: white;
}
/* 偶数的一个颜色 */
:deep(.scroll-table-row):nth-child(even) {
  background-color: #0A2732;
  color: white;
}

:deep(.scroll-table-row-item-index) {
  color: white;
  background-color: rgb(0, 186, 255);
  border-radius: 4px;
  padding: 0 5px;
}
</style>
