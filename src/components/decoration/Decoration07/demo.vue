<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:09:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:09:12
 * @Description: Decoration07
-->
<script setup lang="ts">
import Decoration07 from './index.vue'

const form = ref({
  colors: ['#1dc1f5', '#1dc1f5'] as [string, string],
  text: 'Decoration',
})

const source = computed(() => `
<Decoration07 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" class="w-full h-full">
  <div class="text-white">
    ${form.value.text}
  </div>
</Decoration07>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration07 :colors="form.colors" class="w-full h-full">
        <div class="text-white">
          {{ form.text }}
        </div>
      </Decoration07>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
        <DocFormItem label="text" :is-component-props="false" description="slot内容">
          <DocInput v-model:value="form.text" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
