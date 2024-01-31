<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 17:52:30
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 17:52:30
 * @Description: DocInput
-->
<script setup lang="ts">
import { inputProps } from 'naive-ui'

const props = defineProps(inputProps)
</script>

<template>
  <ClientOnly>
    <NInput v-bind="props" />
  </ClientOnly>
</template>
