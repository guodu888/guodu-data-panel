<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-17 11:21:46
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-17 11:21:46
 * @Description: BoxBorder14
-->
<script setup lang="ts">
import { ref } from 'vue'
import BoxBorder14 from './index.vue'

const form = ref({
  color1: '#fff',
  color2: 'rgba(255, 255, 255, 0.6)',
  backgroundColor: '#00000000',
})

const source = computed(() => `
<BoxBorder14 class="w-full h-full" :colors="['${form.value.color1}', '${form.value.color2}']" background-color="${form.value.backgroundColor}">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder14 Inner
  </div>
</BoxBorder14>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="h-400px" :copied="copied" @copy="handleCopy">
      <BoxBorder14 class="w-full h-full" :colors="[form.color1, form.color2]" :background-color="form.backgroundColor">
        <div class="text-white w-full h-full flex justify-center items-center">
          BoxBorder14 Inner
        </div>
      </BoxBorder14>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.color1" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.color2" />
        </DocFormItem>
        <DocFormItem label="backgroundColor">
          <DocColorPicker v-model:value="form.backgroundColor" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
