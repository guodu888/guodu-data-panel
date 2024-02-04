<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-04 14:09:50
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-04 14:09:50
 * @Description: ProgressPool
-->
<script setup lang="ts">
import ProgressPool from './index.vue'

const form = ref({
  value: 10,
  colors: ['#3DE7C9', '#00BAFF'],
  borderWidth: 3,
  borderGap: 3,
  lineDash: [5, 1] as [number, number],
  textColor: '#fff',
  borderRadius: 5,
  localGradient: false,
  formatter: '{value}%',
  width: 200,
  height: 100,
})

const source = computed(() => `
<ProgressPool
  :value="${form.value.value}"
  :colors="[${form.value.colors.map(x => `'${x}'`).join(', ')}]"
  :border-width="${form.value.borderWidth}"
  :border-gap="${form.value.borderGap}"
  :line-dash="[${form.value.lineDash}]"
  :text-color="${form.value.textColor}"
  :border-radius="${form.value.borderRadius}"
  :local-gradient="${form.value.localGradient}"
  formatter="${form.value.formatter}"
  class="mx-auto"
  :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }"
/>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" @copy="handleCopy">
      <ProgressPool
        :value="form.value"
        :colors="form.colors"
        :border-width="form.borderWidth"
        :border-gap="form.borderGap"
        :line-dash="form.lineDash"
        :text-color="form.textColor"
        :border-radius="form.borderRadius"
        :local-gradient="form.localGradient"
        :formatter="form.formatter"
        class="mx-auto"
        :style="{ width: `${form.width}px`, height: `${form.height}px` }"
      />
    </DocDemoBox>
    <div class="mt-3 flex gap-2">
      <button class="px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="form.value += 5">
        增加
      </button>
      <button class="px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="form.value -= 5">
        减少
      </button>
    </div>
    <DocForm class="mt-3">
      <DocFormItem label="value" :is-required="true">
        <DocInputNumber v-model:value="form.value" />
      </DocFormItem>
      <DocFormItem v-for="_, i in form.colors" :key="i" :label="`colors[${i}]`">
        <DocColorPicker v-model:value="form.colors[i]" />
      </DocFormItem>
      <DocFormItem label="">
        <button class="px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="form.colors.push('#0084ff')">
          增加一种颜色
        </button>
      </DocFormItem>
      <DocFormItem label="borderWidth">
        <DocInputNumber v-model:value="form.borderWidth" />
      </DocFormItem>
      <DocFormItem label="borderGap">
        <DocInputNumber v-model:value="form.borderGap" />
      </DocFormItem>
      <DocFormItem label="lineDash[0]">
        <DocInputNumber v-model:value="form.lineDash[0]" />
      </DocFormItem>
      <DocFormItem label="lineDash[1]">
        <DocInputNumber v-model:value="form.lineDash[1]" />
      </DocFormItem>
      <DocFormItem label="textColor">
        <DocColorPicker v-model:value="form.textColor" />
      </DocFormItem>
      <DocFormItem label="borderRadius">
        <DocInputNumber v-model:value="form.borderRadius" />
      </DocFormItem>
      <DocFormItem label="localGradient">
        <DocSwitch v-model:value="form.localGradient" />
      </DocFormItem>
      <DocFormItem label="formatter">
        <DocInput v-model:value="form.formatter" />
      </DocFormItem>
      <DocFormItem :is-component-props="false" label="width(Box's width)">
        <DocInputNumber v-model:value="form.width" />
      </DocFormItem>
      <DocFormItem :is-component-props="false" label="height(Box's height)">
        <DocInputNumber v-model:value="form.height" />
      </DocFormItem>
    </DocForm>
  </div>
</template>
