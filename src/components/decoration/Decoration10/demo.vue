<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:42:10
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:42:10
 * @Description: Decoration10
-->
<script setup lang="ts">
import Decoration10 from './index.vue'

const form = ref({
  colors: ['#00c2ff', 'rgba(0, 194, 255, 0.3)'] as [string, string],
})

const source = computed(() => `
<Decoration10  :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" class="mx-auto"  />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" @copy="handleCopy">
      <Decoration10 :colors="form.colors" class="w-full h-5px" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="colors[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="colors[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
