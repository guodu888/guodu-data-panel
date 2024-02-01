<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 11:09:14
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 11:09:14
 * @Description: Decoration12
-->
<script setup lang="ts">
import Decoration12 from './index.vue'

const form = ref({
  colors: ['#2783ce', '#2cf7fe'] as [string, string],
  text: '',
  scanDur: 3,
  haloDur: 2,
  ringNum: 3,
  width: 150,
  height: 150,
  splitNum: 6,
  showSplitLine: true,
})

const source = computed(() => `
<Decoration12 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" :show-split-line="${form.value.showSplitLine}"  :split-num="${form.value.splitNum}" :halo-dur="${form.value.haloDur}" :scan-dur="${form.value.scanDur}" :ring-num="${form.value.ringNum}" class="mx-auto" :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }">
  <div class="text-green">
    ${form.value.text}
  </div>
</Decoration12>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration12 :colors="form.colors" :show-split-line="form.showSplitLine" :split-num="form.splitNum" :halo-dur="form.haloDur" :scan-dur="form.scanDur" :ring-num="form.ringNum" class="mx-auto" :style="{ width: `${form.width}px`, height: `${form.height}px` }">
        <div class="text-green">
          {{ form.text }}
        </div>
      </Decoration12>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
        <DocFormItem label="scanDur">
          <DocInputNumber v-model:value="form.scanDur" />
        </DocFormItem>
        <DocFormItem label="haloDur">
          <DocInputNumber v-model:value="form.haloDur" />
        </DocFormItem>
        <DocFormItem label="ringNum">
          <DocInputNumber v-model:value="form.ringNum" />
        </DocFormItem>
        <DocFormItem label="splitNum">
          <DocInputNumber v-model:value="form.splitNum" />
        </DocFormItem>
        <DocFormItem label="showSplitLine">
          <DocSwitch v-model:value="form.showSplitLine" />
        </DocFormItem>
        <DocFormItem label="text" :is-component-props="false" description="slot内容">
          <DocInput v-model:value="form.text" />
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
