<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-02 13:33:08
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-02 13:33:08
 * @Description: ScrollRank
-->
<script setup lang="ts">
import ScrollRank from './index.vue'

const data = [
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
]
</script>

<template>
  <div class="p-3">
    <DocDemoBox :show-copy="false" class="h-300px w-full">
      <ScrollRank unit="万元" :data="(data.sort((a, b) => b.value - a.value).map((x, i) => ({ ...x, ranking: i + 1 })) as any)" :slides-per-view="5" />
    </DocDemoBox>
  </div>
</template>
