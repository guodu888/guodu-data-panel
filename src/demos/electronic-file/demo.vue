<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-16 14:52:00
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-16 14:52:00
 * @Description: electronic-file
-->
<script setup lang="ts">
import { defineClientComponent } from 'vitepress'

const MyChart = defineClientComponent(() => {
  return import('./components/chart.vue')
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <MyChart />
    </Teleport>
  </ClientOnly>
</template>
