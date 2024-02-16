<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-16 10:43:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-16 10:43:22
 * @Description: NumberAnimation
-->
<script setup lang="ts">
import NumberAnimation from './index.vue'

const form = ref({
  from: 0,
  to: 10000,
  duration: 3000,
  precision: 2,
  showSeparator: true,
  active: true,
})
const animationRef = ref<InstanceType<typeof NumberAnimation>>()
const source = computed(() => `
<NumberAnimation ref="animationRef" class="text-white text-2em font-mono" :from="${form.value.from}" :to="${form.value.to}" :duration="${form.value.duration}" :precision="${form.value.precision}" :show-separator="${form.value.showSeparator}" :active="${form.value.active}" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" @copy="handleCopy">
      <p class="text-center font-mono">
        <NumberAnimation ref="animationRef" class="font-mono text-white text-2em" v-bind="form" />
      </p>
    </DocDemoBox>
    <DocForm class="mt-3">
      <DocFormItem label="from">
        <DocInputNumber v-model:value="form.from" />
      </DocFormItem>
      <DocFormItem label="to">
        <DocInputNumber v-model:value="form.to" />
      </DocFormItem>
      <DocFormItem label="duration">
        <DocInputNumber v-model:value="form.duration" />
      </DocFormItem>
      <DocFormItem label="precision">
        <DocInputNumber v-model:value="form.precision" />
      </DocFormItem>
      <DocFormItem label="showSeparator">
        <DocSwitch v-model:value="form.showSeparator" />
      </DocFormItem>
      <DocFormItem label="active">
        <DocSwitch v-model:value="form.active" />
      </DocFormItem>
      <button class="px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="animationRef?.play()">
        play
      </button>
    </DocForm>
  </div>
</template>
