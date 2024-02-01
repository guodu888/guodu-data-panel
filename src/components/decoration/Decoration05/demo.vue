<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 09:34:31
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 09:34:31
 * @Description: Decoration05
-->
<script setup lang="ts">
import Decoration05 from './index.vue'

const form = ref({
  colors: ['#3f96a5', '#3f96a5'] as [string, string],
  dur: 1.2,
})

const source = computed(() => `
<Decoration05 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" :dur="${form.value.dur}" class="w-full h-full" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full h-20 flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration05 :colors="form.colors" :dur="form.dur" class="w-full h-full" />
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
      </DocForm>
    </div>
  </div>
</template>
