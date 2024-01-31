<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 18:35:39
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 18:35:39
 * @Description: Decoration03
-->
<script setup lang="ts">
import Decoration03 from './index.vue'

// 获取当前文件path

const form = ref({
  colors: ['#7acaec', 'transparent'] as [string, string],
  size: 7,
  row: 2,
  column: 25,
  width: 300,
  height: 50,
})

const source = computed(() => `
<Decoration03 :size="${form.value.size}" :row="${form.value.row}" :column="${form.value.column}" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" class="mx-auto" :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" @copy="handleCopy">
      <Decoration03 :size="form.size" :row="form.row" :column="form.column" :colors="form.colors" class="mx-auto" :style="{ width: `${form.width}px`, height: `${form.height}px` }" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="colors[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="colors[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
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
