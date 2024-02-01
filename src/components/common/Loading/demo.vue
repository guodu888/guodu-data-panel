<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 17:30:41
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 17:30:41
 * @Description: Demo
-->
<script setup lang="ts">
import Loading from './index.vue'

const form = ref({
  show: true,
  text: 'Loading',
})

const source = computed(() => `
<Loading :show="${form.value.show}">
    <template #tips>
        <div class="text-white">
            ${form.value.text}
        </div>
    </template>
    <div>
       
    </div>
</Loading>`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" class="w-full flex items-center justify-center" @copy="handleCopy">
      <Loading :show="form.show">
        <template #tips>
          <div class="text-white">
            {{ form.text }}
          </div>
        </template>
        <div class="text-white">
          这是内部的内容
          <br>
          <br>
          这是内部的内容
          这是内部的内容
          <br>
          这是内部的内容
          这是内部的内容
          <br>
          这是内部的内容
          这是内部的内容
          <br>
          <br>
          这是内部的内容
          这是内部的内容
          <br>
          这是内部的内容
          这是内部的内容
          <br>
          这是内部的内容
        </div>
      </Loading>
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="show">
          <DocSwitch v-model:value="form.show" />
        </DocFormItem>
        <DocFormItem label="text">
          <DocInput v-model:value="form.text" />
        </DocFormItem>
      </DocForm>
    </div>
  </div>
</template>
