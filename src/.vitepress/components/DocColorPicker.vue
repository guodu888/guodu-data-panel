<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 09:56:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 09:56:54
 * @Description: DocColorPicker
-->
<script setup lang="ts">
import { colorPickerProps } from 'naive-ui'

const props = defineProps(colorPickerProps)
</script>

<template>
  <ClientOnly>
    <NColorPicker v-bind="props" />
  </ClientOnly>
</template>
