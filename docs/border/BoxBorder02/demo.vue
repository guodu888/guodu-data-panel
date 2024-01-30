<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 15:32:23
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 15:32:23
 * @Description: BoxBorder02
-->

<script setup lang="ts">
import { NColorPicker, NForm, NFormItem, NInputNumber } from 'naive-ui'
import { ref } from 'vue'
import { BoxBorder02 } from '~/index'

const form = ref({
  color1: '#4FD2DDFF',
  color2: '#235FA7FF',
  dur: 1,
  backgroundColor: '#00000000',
})
</script>

<template>
  <div class="p-3">
    <div class="w-full h-400px bg-dark p-3 rounded">
      <BoxBorder02 class="w-full h-full" :colors="[form.color1, form.color2]" :dur="form.dur" :background-color="form.backgroundColor">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder02 Inner
        </div>
      </BoxBorder02>
    </div>
    <div class="mt-3">
      <NForm :model="form">
        <NFormItem label="color[0]">
          <NColorPicker v-model:value="form.color1" />
        </NFormItem>
        <NFormItem label="color[1]">
          <NColorPicker v-model:value="form.color2" />
        </NFormItem>
        <NFormItem label="dur">
          <NInputNumber v-model:value="form.dur" />
        </NFormItem>
        <NFormItem label="backgroundColor">
          <NColorPicker v-model:value="form.backgroundColor" />
        </NFormItem>
      </NForm>
    </div>
  </div>
</template>
