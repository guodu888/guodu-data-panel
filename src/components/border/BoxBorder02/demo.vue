<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 15:32:23
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 15:32:23
 * @Description: BoxBorder02
-->

<script setup lang="ts">
import { ref } from 'vue'
import BoxBorder02 from './index.vue'

const form = ref({
  color1: '#4FD2DDFF',
  color2: '#235FA7FF',
  dur: 1,
  backgroundColor: '#00000000',
})
const source = computed(() => `
<BoxBorder02 class="w-full h-full" :colors="['${form.value.color1}', '${form.value.color2}']" :dur="${form.value.dur}" background-color="${form.value.backgroundColor}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder02 Inner
  </div>
</BoxBorder02>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder02 class="w-full h-full" :colors="[form.color1, form.color2]" :dur="form.dur" :background-color="form.backgroundColor">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder02 Inner
        </div>
      </BoxBorder02>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.color1" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.color2" />
        </DocFormItem>
        <DocFormItem label="dur">
          <DocInputNumber v-model:value="form.dur" />
        </DocFormItem>
        <DocFormItem label="backgroundColor">
          <DocColorPicker v-model:value="form.backgroundColor" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
