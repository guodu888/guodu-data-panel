<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 15:52:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 15:52:11
 * @Description: BoxBorder04
-->
<script setup lang="ts">
import BoxBorder04 from './index.vue'

const form = ref<{
  colors: [string, string]
  backgroundColor: string
  reverse: boolean
}>({
  colors: ['#ff0000', 'rgba(0,0,255,0.8)'],
  backgroundColor: '#00000000',
  reverse: false,
})

const source = computed(() => `
<BoxBorder04 class="w-full h-full" :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]"  background-color="${form.value.backgroundColor}" :reverse="${form.value.reverse}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder04 Inner
  </div>
</BoxBorder04>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder04 class="w-full h-full" :colors="form.colors" :background-color="form.backgroundColor" :reverse="form.reverse">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder04 Inner
        </div>
      </BoxBorder04>
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
        <DocFormItem label="reverse">
          <DocSwitch v-model:value="form.reverse" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
