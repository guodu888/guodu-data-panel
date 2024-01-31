<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 15:31:42
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 15:31:42
 * @Description: BoxBorder03
-->
<script setup lang="ts">
import BoxBorder03 from './index.vue'

const form = ref<{
  colors: [string, string, string, string]
  backgroundColor: string
}>({
  colors: ['#2862b7', '#2862b7', '#2862b7', '#2862b7'],
  backgroundColor: '#00000000',
})

const source = computed(() => `
<BoxBorder03 class="w-full h-full" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]"  background-color="${form.value.backgroundColor}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder03 Inner
  </div>
</BoxBorder03>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder03 class="w-full h-full" :colors="form.colors" :background-color="form.backgroundColor">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder03 Inner
        </div>
      </BoxBorder03>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="colors[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="colors[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
        <DocFormItem label="colors[2]">
          <DocColorPicker v-model:value="form.colors[2]" />
        </DocFormItem>
        <DocFormItem label="colors[3]">
          <DocColorPicker v-model:value="form.colors[3]" />
        </DocFormItem>
        <DocFormItem label="backgroundColor">
          <DocColorPicker v-model:value="form.backgroundColor" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
