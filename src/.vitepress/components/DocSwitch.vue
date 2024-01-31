<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 11:19:29
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 11:19:29
 * @Description: DicSwitch
-->
<script setup lang="ts">
import { switchProps } from 'naive-ui'

const props = defineProps(switchProps)
</script>

<template>
  <ClientOnly>
    <NSwitch v-bind="props" />
  </ClientOnly>
</template>
