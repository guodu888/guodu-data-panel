<!--
 * @Author: shaohang-shy
 * @Date: 2024-03-22 13:45:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-03-22 13:45:11
 * @Description: BoxBorder15
-->
<script setup lang="ts">
import BoxBorder15 from './index.vue'

const form = ref<{
  colors: [string, string]
  backgroundColor: string
  borderWidth: number
  dur: number
}>({
  colors: ['#5ddcff', '#4e00c2'],
  backgroundColor: '#00000000',
  borderWidth: 3,
  dur: 4,
})

const source = computed(() => `
<BoxBorder11 class="w-full h-full" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]"  background-color="${form.value.backgroundColor}" :border-width="${form.value.borderWidth}" :dur="${form.value.dur}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder11 Inner
  </div>
</BoxBorder11>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder15 class="w-full h-full" :colors="form.colors" :background-color="form.backgroundColor" :border-width="form.borderWidth" :dur="form.dur">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder15 Inner
        </div>
      </BoxBorder15>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="colors[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="colors[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
        <DocFormItem label="backgroundColor">
          <DocColorPicker v-model:value="form.backgroundColor" />
        </DocFormItem>
        <DocFormItem label="borderWidth">
          <DocInputNumber v-model:value="form.borderWidth" />
        </DocFormItem>
        <DocFormItem label="dur">
          <DocInputNumber v-model:value="form.dur" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
