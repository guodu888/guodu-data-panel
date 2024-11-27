<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-16 14:52:30
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-16 14:52:30
 * @Description: electronic-file
-->
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
import { computed } from 'vue'
import { BoxBorder01, BoxBorder03, BoxBorder04, Decoration01, Decoration02, FullScreenContainer, useEcharts } from '../../../index'
import PieRingChart from './PieRingChart.vue'

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
const chart1Data = [
  {
    name: '收费系统',
    value: 167,
  },
  {
    name: '通信系统',
    value: 67,
  },
  {
    name: '监控系统',
    value: 123,
  },
  {
    name: '供配电系统',
    value: 55,
  },
  {
    name: '其他',
    value: 98,
  },
]
const chart1Options = computed(() => ({
  grid: {
    left: '26%',
    right: '5%',
    top: '5%',
    bottom: '12%',
  },
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
    data: chart1Data.map(x => x.name),
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
      data: chart1Data.map(x => x.value),
      type: 'bar',
      showBackground: true,
      // barWidth: '20%',
      barMaxWidth: 10,
      barMinWidth: 8,
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
const { domRef: chart1Ref } = useEcharts(chart1Options)

const chart2Data = [
  { name: '收费系统', value: 93 },
  { name: '通信系统', value: 32 },
  { name: '监控系统', value: 65 },
  { name: '供配电系统', value: 44 },
  { name: '其他', value: 52 },
]
const chart2Options = computed(() => ({
  series: [
    {
      type: 'pie',
      data: chart2Data,
      radius: ['45%', '65%'],
      insideLabel: {
        show: false,
      },
      outsideLabel: {
        labelLineEndLength: 10,
        formatter: '{percent}%\n{name}',
        style: {
          fontSize: 14,
          fill: '#fff',
        },
      },
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
} as EChartsOption))
const { domRef: chart2Ref } = useEcharts(chart2Options)

const chart3Data = [
  {
    name: '收费系统',
    value: 78,
  },
  {
    name: '通信系统',
    value: 54,
  },
  {
    name: '监控系统',
    value: 123,
  },
  {
    name: '供配电系统',
    value: 167,
  },
  {
    name: '其他',
    value: 77,
  },
]
const chart3Options = computed(() => ({
  grid: {
    left: '26%',
    right: '5%',
    top: '5%',
    bottom: '12%',
  },
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
    data: chart3Data.map(x => x.name),
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
      data: chart3Data.map(x => x.value),
      type: 'bar',
      showBackground: true,
      // barWidth: '20%',
      barMaxWidth: 10,
      barMinWidth: 8,
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
const { domRef: chart3Ref } = useEcharts(chart3Options)

const chart4Data = [
  {
    name: '收费站',
    value: 1315,
  },
  {
    name: '监控中心',
    value: 415,
  },
  {
    name: '道路外场',
    value: 90,
  },
  {
    name: '其他',
    value: 317,
  },
]

const bottomData1 = [
  { name: '收费站', value: 356 },
  { name: '监控中心', value: 215 },
  { name: '道路外场', value: 90 },
  { name: '其他', value: 317 },
]

const bottomData2 = [
  { name: '收费站', value: 615 },
  { name: '监控中心', value: 322 },
  { name: '道路外场', value: 198 },
  { name: '其他', value: 80 },
]

const bottomData3 = [
  {
    name: '收费站',
    value: 452,
  },
  {
    name: '监控中心',
    value: 512,
  },
  {
    name: '道路外场',
    value: 333,
  },
  {
    name: '其他',
    value: 255,
  },
]

const bottomData4 = [
  {
    name: '收费站',
    value: 156,
  },
  {
    name: '监控中心',
    value: 415,
  },
  {
    name: '道路外场',
    value: 90,
  },
  {
    name: '其他',
    value: 210,
  },
]
const rightChartData1 = [
  {
    name: '收费系统',
    value: 25,
  },
  {
    name: '通信系统',
    value: 66,
  },
  {
    name: '监控系统',
    value: 123,
  },
  {
    name: '供配电系统',
    value: 72,
  },
  {
    name: '其他',
    value: 99,
  },
]
const rightChartOptions1 = computed(() => ({
  grid: {
    left: '28%',
    right: '5%',
    top: '5%',
    bottom: '12%',
  },
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
    data: rightChartData1.map(x => x.name),
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
      data: rightChartData1.map(x => x.value),
      type: 'bar',
      showBackground: true,
      // barWidth: '20%',
      barMaxWidth: 10,
      barMinWidth: 8,
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

}) as EChartsOption)
const { domRef: rightChart1Ref } = useEcharts(rightChartOptions1)

const rightChartOptions2 = computed(() => ({
  series: [
    {
      type: 'pie',
      data: [
        { name: '收费系统', value: 93 },
        { name: '通信系统', value: 66 },
        { name: '监控系统', value: 52 },
        { name: '供配电系统', value: 34 },
        { name: '其他', value: 22 },
      ],
      radius: ['45%', '65%'],
      insideLabel: {
        show: false,
      },
      outsideLabel: {
        labelLineEndLength: 10,
        formatter: '{percent}%\n{name}',
        style: {
          fontSize: 14,
          fill: '#fff',
        },
      },
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
}) as EChartsOption)
const { domRef: rightChart2Ref } = useEcharts(rightChartOptions2)

const router = useRouter()
function back() {
  router.go('/demo.html')
}
</script>

<template>
  <div class="p-3">
    <UseFullscreen v-slot="{ toggle }">
      <FullScreenContainer :width="1920" :height="1080" background="center no-repeat url(/assets/electronic-file-bg.png)" class="text-white text-24px">
        <div class="flex h-100px gap-50px items-center justify-center pt-20px relative">
          <p class="text-2em font-bold">
            机电设备电子档案
          </p>
          <div class="absolute w-50px h-50px z-999999 cursor-pointer right-20px" @click="() => toggle()">
            <div class="i-carbon:fit-to-screen w-full" />
          </div>
          <div class="absolute w-50px h-50px z-999999 cursor-pointer left-20px" @click="back">
            <div class="i-carbon:arrow-left w-full" />
          </div>
        </div>
        <div class="p-20px">
          <!-- 1880*940 -->
          <BoxBorder01 class="w-full h-940px">
            <div class="w-full h-full p-10px flex gap-20px">
              <BoxBorder03 class="w-400px h-full">
                <!-- 左侧 -->
                <div class="w-full h-full p-20px">
                  <!-- 430*850 -->
                  <h2 class="text-28px text-center leading-40px">
                    张三收费站
                  </h2>
                  <div class="flex items-center justify-start text-20px">
                    设备运行总数<div class="text-blue mx-2 text-1.3em leading-1em font-bold">
                      430
                    </div>
                  </div>
                  <div ref="chart1Ref" class="w-full h-200px" />
                  <Decoration02 class="w-full h-5px my-10px" :colors="['rgba(63, 170, 203, 0.5)', '#fff']" />
                  <h2 class="text-20px leading-40px">
                    李四收费站
                  </h2>
                  <div class="flex items-center justify-start text-20px">
                    设备运行总数<div class="text-blue mx-2 text-1.3em leading-1em font-bold">
                      430
                    </div>
                  </div>
                  <div ref="chart2Ref" class="w-full h-200px" />
                  <Decoration02 class="w-full h-5px my-10px" :colors="['rgba(63, 170, 203, 0.5)', '#fff']" />
                  <h2 class="text-20px leading-40px">
                    王五收费站
                  </h2>
                  <div class="flex items-center justify-start text-20px">
                    设备运行总数<div class="text-blue mx-2 text-1.3em leading-1em font-bold">
                      430
                    </div>
                  </div>
                  <div ref="chart3Ref" class="w-full h-200px" />
                </div>
              </BoxBorder03>
              <div class="flex-1 h-full flex flex-col">
                <!-- 右侧 -->
                <!-- 上 -->
                <div class="flex w-full flex-1">
                  <BoxBorder03 class="flex-1 h-full">
                    <div class="w-full h-full p-24px flex flex-col">
                      <div class="flex items-center justify-between h-50px">
                        <Decoration01 class="h-full w-180px" />
                        <div>机电设备总数</div>
                        <Decoration01 class="h-full w-180px" />
                      </div>
                      <div class="w-full h-80px flex items-center justify-center gap-10px">
                        <div>设备总数</div>
                        <div class="text-#08e5ff bg-#04318099 w-60px h-60px text-center leading-60px">
                          2
                        </div>
                        <div class="text-#08e5ff bg-#04318099 w-60px h-60px text-center leading-60px">
                          1
                        </div>
                        <div class="text-#08e5ff bg-#04318099 w-60px h-60px text-center leading-60px">
                          3
                        </div>
                        <div class="text-#08e5ff bg-#04318099 w-60px h-60px text-center leading-60px">
                          7
                        </div>
                      </div>
                      <div class="flex-1 w-full flex justify-center items-center">
                        <div class="h-full w-25% flex flex-col items-center justify-center">
                          <p class="leading-2.5em flex items-center">
                            收费站<span class="text-2em mx-1">1315</span>
                          </p>
                          <p class="leading-2.5em flex items-center">
                            监控中心<span class="text-2em mx-1">415</span>
                          </p>
                        </div>
                        <div class="flex-1 h-full">
                          <PieRingChart :data="chart4Data" />
                        </div>
                        <div class="h-full w-25% flex flex-col items-center justify-center">
                          <p class="leading-2.5em flex items-center">
                            <span class="text-2em mx-1">90</span>道路外场
                          </p>
                          <p class="leading-2.5em flex items-center">
                            <span class="text-2em mx-1">317</span>其他
                          </p>
                        </div>
                      </div>
                    </div>
                  </BoxBorder03>
                  <div class="flex flex-col h-full w-470px">
                    <BoxBorder03 class="flex-1 w-full">
                      <div class="w-full h-full p-20px flex flex-col ">
                        <h2 class="text-20px leading-40px">
                          赵六收费站
                        </h2>
                        <div class="flex flex-1">
                          <div class="flex flex-col items-center justify-center text-20px">
                            <div class="text-blue mx-2 text-1.3em leading-2em font-bold">
                              262
                            </div>
                            <div class="leading-3em">
                              设备运行总数
                            </div>
                          </div>
                          <div ref="rightChart1Ref" class="h-full flex-1" />
                        </div>
                      </div>
                    </BoxBorder03>
                    <BoxBorder04 :reverse="true" class="flex-1 w-full">
                      <div class="w-full h-full flex flex-col px-20px py-10px">
                        <h2 class="text-20px leading-40px">
                          孙七收费站
                        </h2>
                        <div class="flex flex-1">
                          <div class="flex flex-col items-center justify-center text-20px">
                            <div class="text-blue mx-2 text-1.3em leading-2em font-bold">
                              267
                            </div>
                            <div class="leading-3em">
                              设备运行总数
                            </div>
                          </div>
                          <div ref="rightChart2Ref" class="h-full flex-1" />
                        </div>
                      </div>
                    </BoxBorder04>
                  </div>
                </div>
                <!-- 下 -->
                <BoxBorder04 class="w-full h-310px">
                  <div class="w-full h-full flex p-20px">
                    <div class="flex-1 h-full flex flex-col relative">
                      <p class="text-center text-center w-full top-10px absolute">
                        赵钱收费站
                      </p>
                      <div class="flex-1 w-full">
                        <PieRingChart :data="bottomData1" :bottom="true" />
                      </div>
                    </div>
                    <Decoration02 class="h-full w-5px my-10px" :reverse="true" :colors="['rgba(63, 170, 203, 0.5)', '#fff']" />
                    <div class="flex-1 h-full flex flex-col relative">
                      <p class="text-center text-center w-full top-10px absolute">
                        赵钱收费站
                      </p>
                      <div class="flex-1 w-full">
                        <PieRingChart :data="bottomData2" :bottom="true" />
                      </div>
                    </div>
                    <Decoration02 class="h-full w-5px my-10px" :reverse="true" :colors="['rgba(63, 170, 203, 0.5)', '#fff']" />
                    <div class="flex-1 h-full flex flex-col relative">
                      <p class="text-center text-center w-full top-10px absolute">
                        赵钱收费站
                      </p>
                      <div class="flex-1 w-full">
                        <PieRingChart :data="bottomData3" :bottom="true" />
                      </div>
                    </div>
                    <Decoration02 class="h-full w-5px my-10px" :reverse="true" :colors="['rgba(63, 170, 203, 0.5)', '#fff']" />
                    <div class="flex-1 h-full flex flex-col relative">
                      <p class="text-center text-center w-full top-10px absolute">
                        赵钱收费站
                      </p>
                      <div class="flex-1 w-full">
                        <PieRingChart :data="bottomData4" :bottom="true" />
                      </div>
                    </div>
                  </div>
                </BoxBorder04>
              </div>
            </div>
          </BoxBorder01>
        </div>
      </FullScreenContainer>
    </UseFullscreen>
  </div>
</template>
