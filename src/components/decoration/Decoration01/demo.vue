<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 17:40:30
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 17:40:30
 * @Description: Decoration01
-->
<script setup lang="ts">
import { ref } from 'vue'
import Decoration01 from './index.vue'

// 获取当前文件path

const form = ref({
  color1: '#fff',
  color2: '#0de7c2',
  size: 2.5,
  row: 4,
  column: 20,
  width: 200,
  height: 50,
})

const source = computed(() => `
<Decoration01 :size="${form.value.size}" :row="${form.value.row}" :column="${form.value.column}" :colors="['${form.value.color1}', '${form.value.color2}']" class="mx-auto" :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" @copy="handleCopy">
      <Decoration01 :size="form.size" :row="form.row" :column="form.column" :colors="[form.color1, form.color2]" class="mx-auto" :style="{ width: `${form.width}px`, height: `${form.height}px` }" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.color1" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.color2" />
        </DocFormItem>
        <DocFormItem label="size" description="单个的大小">
          <NInputNumber v-model:value="form.size" />
        </DocFormItem>
        <DocFormItem label="row">
          <DocInputNumber v-model:value="form.row" />
        </DocFormItem>
        <DocFormItem label="column">
          <DocInputNumber v-model:value="form.column" />
        </DocFormItem>
        <DocFormItem :is-component-props="false" label="width(Box's width)">
          <DocInputNumber v-model:value="form.width" />
        </DocFormItem>
        <DocFormItem :is-component-props="false" label="height(Box's height)">
          <DocInputNumber v-model:value="form.height" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
