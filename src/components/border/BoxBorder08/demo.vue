<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 16:33:45
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 16:33:45
 * @Description: BoxBorder08
-->

<script setup lang="ts">
import BoxBorder08 from './index.vue'

const form = ref<{
  colors: [string, string]
  backgroundColor: string
  reverse: boolean
  dur: number
}>({
  colors: ['#235fa7', '#4fd2dd'],
  backgroundColor: '#00000000',
  reverse: false,
  dur: 3,
})

const source = computed(() => `
<BoxBorder08 class="w-full h-full" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]"  background-color="${form.value.backgroundColor}" :reverse="${form.value.reverse}" :dur="${form.value.dur}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder08 Inner
  </div>
</BoxBorder08>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder08 class="w-full h-full" :colors="form.colors" :background-color="form.backgroundColor" :reverse="form.reverse" :dur="form.dur">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder08 Inner
        </div>
      </BoxBorder08>
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
        <DocFormItem label="dur">
          <DocInputNumber v-model:value="form.dur" />
        </DocFormItem>
        <DocFormItem label="reverse">
          <DocSwitch v-model:value="form.reverse" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
