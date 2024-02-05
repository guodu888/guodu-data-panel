<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-05 14:50:13
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-05 14:50:13
 * @Description: dataPanel
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { useEcharts } from '../../../../src'

const props = defineProps<{
  title: string
  no: string
  percentage: number
  //   金额
  amount: number
  //   数量
  count: number
}>()

const options = computed(() => ({
  tooltip: {
    show: false, // 去除鼠标hover提示框
  },
  title: {
    text: `${props.percentage}%`,
    x: 'center',
    y: 'center',
    textStyle: {
      color: '#d3daf5',
      fontSize: 30,
    },
  },
  series: [{
    type: 'pie',
    name: '名称',
    radius: ['80%', '100%'], // 环的宽度
    center: ['50%', '50%'],
    hoverAnimation: false, // 鼠标hover高亮隐藏
    label: {
      normal: {
        position: 'inner',
        show: false,
      },
    },
    data: [{
      value: props.percentage,
      itemStyle: {
        normal: {
          color: '#1ed3e5',
        },
        label: {
          show: false, // 去掉指示线
        },
        labelLine: {
          show: false, // 去掉指示线
        },
      },
    }, {
      value: 100 - props.percentage,
      itemStyle: {
        normal: {
          color: '#d3daf5',
        },
        label: {
          show: false, // 去掉指示线
        },
        labelLine: {
          show: false, // 去掉指示线
        },
      },
    }],
  }],
}) as EChartsOption)

const { domRef: boxRef } = useEcharts(options)
</script>

<template>
  <div class="flex-1  b-t-5px b-t-solid b-t-#0199d180 bg-#061e5d80 h-full p-20px flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <div class="font-bold">
        {{ props.title }}
      </div>
      <div class="text-42px text-#03d3ec">
        {{ props.no }}
      </div>
    </div>
    <div class="py-20px">
      <div ref="boxRef" class="w-160px h-160px mx-auto" />
    </div>
    <div class="flex items-center justify-center gap-10px">
      <div class="flex-1 bg-#061e5db3 p-10px">
        <p class="text-20px text-center">
          累计金额
        </p>
        <p class="text-center">
          <span class="text-36px leading-1.5em text-#ea6027 font-bold">{{ props.amount }}</span>元
        </p>
      </div>
      <div class="flex-1 bg-#061e5db3 p-10px">
        <p class="text-20px text-center">
          巡查病害
        </p>
        <p class="text-center">
          <span class="text-36px leading-1.5em text-#26fcd8 font-bold">{{ props.amount }}</span>处
        </p>
      </div>
    </div>
  </div>
</template>
