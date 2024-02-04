<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-04 15:15:10
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-04 15:15:10
 * @Description: GeoMap
-->
<script setup lang="ts">
import * as echarts from 'echarts/core'
import { GeoComponent, VisualMapComponent } from 'echarts/components'
import { MapChart } from 'echarts/charts'
import type { EChartsOption } from 'echarts'
import geoJson from '../../../../maps/330000_full.json'
import sdGeoJson from '../../../../maps/370000_full.json'
import { useEcharts } from '~/composables/useEcharts'

echarts.use([GeoComponent, VisualMapComponent, MapChart])

// @ts-expect-error map
echarts.registerMap('ZJ', geoJson)
// @ts-expect-error map
echarts.registerMap('SD', sdGeoJson)

const options = computed<EChartsOption>(() => ({
  // 提示框组件
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{a}: {c}',
  },
  // 地理坐标系组件
  geo: {
    map: 'ZJ',
  },
  // 视觉映射组件（将数据映射到颜色等视觉元素）
  visualMap: {
    type: 'piecewise', // 分段型
    min: 0, // 最小值
    max: 20000, // 最大值
    text: ['业务量'], // 两端的文本
    splitNumber: 5, // 分段数量
    maxOpen: true, // 显示 >max 部分
    align: 'left', // 图形在左，文字在右
    showLabel: true, // 显示标注文字
    // orient: 'horizontal', // 水平摆放
    inRange: {
      color: ['lightskyblue', 'yellow', 'orange'], // 图元颜色区间（自动根据数据进行渐变）
    },
  },
  series: [
    {
      name: '业务量',
      type: 'map', // 图表类型
      map: 'ZJ', // 已注册的地图
      label: {
        show: true, // 显示标注文本
      },
      data: [
        { name: '杭州市', value: 13000 },
        { name: '湖州市', value: 1000 },
        { name: '嘉兴市', value: 1000 },
        { name: '绍兴市', value: 2000 },
        { name: '宁波市', value: 3000 },
        { name: '舟山市', value: 500 },
        { name: '金华市', value: 3000 },
        { name: '衢州市', value: 1000 },
        { name: '丽水市', value: 2000 },
        { name: '台州市', value: 200 },
        { name: '温州市', value: 6000 },
      ],
    },
  ], // 图表数据
}
))

const { domRef: boxRef } = useEcharts(options)

const sd = [
  { name: '济南市', value: 9202432 },
  { name: '青岛市', value: 10071722 },
  { name: '淄博市', value: 4704138 },
  { name: '枣庄市', value: 3855601 },
  { name: '东营市', value: 2193518 },
  { name: '烟台市', value: 7102116 },
  { name: '潍坊市', value: 9386705 },
  { name: '济宁市', value: 8357897 },
  { name: '泰安市', value: 5472217 },
  { name: '威海市', value: 2906548 },
  { name: '日照市', value: 2968365 },
  { name: '临沂市', value: 11018365 },
  { name: '德州市', value: 5611194 },
  { name: '聊城市', value: 5952128 },
  { name: '滨州市', value: 3928568 },
  { name: '菏泽市', value: 8795939 },
]
const sdOptions = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{a}: {c}人',
  },
  // 地理坐标系组件
  geo: {
    map: 'SD',
  },
  // 视觉映射组件（将数据映射到颜色等视觉元素）
  visualMap: {
    type: 'piecewise', // 分段型
    min: 2000000, // 最小值
    max: 10000000, // 最大值
    text: ['人口'], // 两端的文本
    splitNumber: 5, // 分段数量
    maxOpen: true, // 显示 >max 部分
    align: 'left', // 图形在左，文字在右
    showLabel: true, // 显示标注文字
    // orient: 'horizontal', // 水平摆放
    inRange: {
      color: ['lightskyblue', 'yellow', 'orange'], // 图元颜色区间（自动根据数据进行渐变）
    },
  },
  series: [
    {

      name: '人口',
      type: 'map', // 图表类型
      map: 'SD', // 已注册的地图
      label: {
        show: true, // 显示标注文本
      },
      data: sd,
    },
  ], // 图表数据
}))
const { domRef: sdBoxRef } = useEcharts(sdOptions)
</script>

<template>
  <div class="p-3">
    <DocDemoBox :show-copy="false">
      <div ref="boxRef" class="w-full h-500px" />
    </DocDemoBox>
    <h2>山东各地市人口</h2>
    <DocDemoBox class="mt-3" :show-copy="false">
      <div ref="sdBoxRef" class="w-full h-600px" />
    </DocDemoBox>
  </div>
</template>
