<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 08:59:38
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 08:59:38
 * @Description: Decoration04
-->
<script setup lang="ts">
import Decoration04 from './index.vue'

const form = ref({
  colors: ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'] as [string, string],
  dur: 3,
  reverse: false,
  size: 5,
})

const source = computed(() => `
<Decoration04 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" :dur="${form.value.dur}" :reverse="${form.value.reverse}" :size="${form.value.size}" class="w-full h-full" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full h-100 flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration04 :colors="form.colors" :dur="form.dur" :reverse="form.reverse" :size="form.size" class="w-full h-full" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
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
