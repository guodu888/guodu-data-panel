<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 18:10:28
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 18:10:28
 * @Description: Decoration02
-->
<script setup lang="ts">
import Decoration02 from './index.vue'

const form = ref({
  color1: '#3faacb',
  color2: '#fff',
  dur: 6,
  reverse: false,
  size: 3,
})

const source = computed(() => `
<Decoration02 :colors="['${form.value.color1}', '${form.value.color2}']" :dur="${form.value.dur}" :reverse="${form.value.reverse}" :size="${form.value.size}" class="w-full h-full" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full h-100 flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration02 :colors="[form.color1, form.color2]" :dur="form.dur" :reverse="form.reverse" :size="form.size" class="w-full h-full" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.color1" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.color2" />
        </DocFormItem>
        <DocFormItem label="dur">
          <DocInputNumber v-model:value="form.dur" />
        </DocFormItem>
        <DocFormItem label="reverse">
          <DocSwitch v-model:value="form.reverse" />
        </DocFormItem>
        <DocFormItem label="size">
          <DocInputNumber v-model:value="form.size" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
