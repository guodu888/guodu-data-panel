<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 18:00:13
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 18:00:13
 * @Description: BoxBorder12
-->

<script setup lang="ts">
import BoxBorder12 from './index.vue'

const form = ref<{
  colors: [string, string]
  backgroundColor: string
}>({
  colors: ['#11eefd', '#0078d2'],
  backgroundColor: '#00000000',
})

const source = computed(() => `
<BoxBorder12 class="w-full h-full" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]"  background-color="${form.value.backgroundColor}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder12 Inner
  </div>
</BoxBorder12>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder12 class="w-full h-full" :colors="form.colors" :background-color="form.backgroundColor">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder12 Inner
        </div>
      </BoxBorder12>
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
      </DocForm>
    </div>
  </div>
</template>
