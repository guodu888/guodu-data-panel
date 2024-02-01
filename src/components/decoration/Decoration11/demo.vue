<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 11:01:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 11:01:18
 * @Description: Decoration11
-->
<script setup lang="ts">
import Decoration11 from './index.vue'

const form = ref({
  colors: ['#1a98fc', '#2cf7fe'] as [string, string],
  text: 'Decoration',
  width: 200,
  height: 50,
})

const source = computed(() => `
<Decoration11 :colors="[${form.value.colors.map(x => `'${x}'`).join(' ,')}]" class="mx-auto" :style="{ width: '${form.value.width}px', height: '${form.value.height}px' }">
  <div class="text-green">
    ${form.value.text}
  </div>
</Decoration11>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox class="w-full flex items-center justify-center" :copied="copied" @copy="handleCopy">
      <Decoration11 :colors="form.colors" class="mx-auto" :style="{ width: `${form.width}px`, height: `${form.height}px` }">
        <div class="text-green">
          {{ form.text }}
        </div>
      </Decoration11>
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
        <DocFormItem :is-component-props="false" label="width(Box's width)">
          <DocInputNumber v-model:value="form.width" />
        </DocFormItem>
        <DocFormItem :is-component-props="false" label="height(Box's height)">
          <DocInputNumber v-model:value="form.height" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
