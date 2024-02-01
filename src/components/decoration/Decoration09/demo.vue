<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:27:47
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:27:47
 * @Description: Decoration09
-->
<script setup lang="ts">
import Decoration09 from './index.vue'

const form = ref({
  colors: ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'] as [string, string],
  width: 150,
  height: 150,
  text: '50%',
})

const source = computed(() => `
<Decoration09 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }" }">
  <div class="color-green font-bold text-xl">
    ${form.value.text}
  </div>
</Decoration09>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration09 :colors="form.colors" class="mx-auto" :style="{ width: `${form.width}px`, height: `${form.height}px` }">
        <div class="color-green font-bold text-xl">
          {{ form.text }}
        </div>
      </Decoration09>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color[0]">
          <DocColorPicker v-model:value="form.colors[0]" />
        </DocFormItem>
        <DocFormItem label="color[1]">
          <DocColorPicker v-model:value="form.colors[1]" />
        </DocFormItem>
        <DocFormItem :is-component-props="false" label="width(Box's width)">
          <DocInputNumber v-model:value="form.width" />
        </DocFormItem>
        <DocFormItem :is-component-props="false" label="height(Box's height)">
          <DocInputNumber v-model:value="form.height" />
        </DocFormItem>
        <DocFormItem label="text" :is-component-props="false" description="slot内容">
          <DocInput v-model:value="form.text" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
