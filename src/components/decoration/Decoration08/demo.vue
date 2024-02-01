<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:17:32
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:17:32
 * @Description: Decoration08
-->
<script setup lang="ts">
import Decoration08 from './index.vue'

const form = ref({
  colors: ['#3f96a5', '#3f96a5'] as [string, string],
  reverse: false,
  width: 300,
  height: 50,
})

const source = computed(() => `
<Decoration08 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" :reverse="${form.value.reverse}"  class="mx-auto" :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration08 :colors="form.colors" :reverse="form.reverse" class="mx-auto" :style="{ width: `${form.width}px`, height: `${form.height}px` }" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
        <DocFormItem label="reverse">
          <DocSwitch v-model:value="form.reverse" />
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
