<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 17:26:35
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 17:26:35
 * @Description: BoxBorder11
-->

<script setup lang="ts">
import BoxBorder11 from './index.vue'

const form = ref<{
  colors: [string, string]
  backgroundColor: string
  animate: boolean
  title: string
  titleWidth: number
  titleSize: number
}>({
  colors: ['#8aaafb', '#1f33a2'],
  backgroundColor: '#00000000',
  animate: false,
  title: '标题',
  titleWidth: 250,
  titleSize: 10,
})

const source = computed(() => `
<BoxBorder11 class="w-full h-full" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]"  background-color="${form.value.backgroundColor}">
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
      <BoxBorder11 class="w-full h-full" :colors="form.colors" :background-color="form.backgroundColor" :animate="form.animate" :title="form.title" :title-width="form.titleWidth" :title-size="form.titleSize">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder11 Inner
        </div>
      </BoxBorder11>
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
        <DocFormItem label="animate">
          <DocSwitch v-model:value="form.animate" />
        </DocFormItem>
        <DocFormItem label="title">
          <DocInput v-model:value="form.title" />
        </DocFormItem>
        <DocFormItem label="titleWidth">
          <DocInputNumber v-model:value="form.titleWidth" />
        </DocFormItem>
        <DocFormItem label="titleSize">
          <DocInputNumber v-model:value="form.titleSize" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
