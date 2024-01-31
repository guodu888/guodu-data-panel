<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 09:59:44
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 09:59:44
 * @Description: DocInputNumber
-->
<script setup lang="ts">
import { inputNumberProps } from 'naive-ui'

const props = defineProps(inputNumberProps)
</script>

<template>
  <ClientOnly>
    <NInputNumber v-bind="props" />
  </ClientOnly>
</template>
