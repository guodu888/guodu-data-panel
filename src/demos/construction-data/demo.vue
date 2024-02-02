<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-02 16:53:02
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-02 16:53:02
 * @Description: demo
-->
<script setup lang="ts">
import { defineClientComponent } from 'vitepress'

const MyChart = defineClientComponent(() => {
  return import('./components/chart.vue')
})
</script>

<template>
  <ClientOnly>
    <MyChart />
  </ClientOnly>
</template>
