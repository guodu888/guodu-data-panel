<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 13:34:41
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 13:34:41
 * @Description: BorderButton01
-->
<script setup lang="ts">
import BorderButton01 from './index.vue'

const bgStyles = ['border01', 'border02', 'border03', 'border04', 'border05', 'border06'] as const

const form = ref({
  color: '#ff0000',
  bgStyle: 'border01' as 'border01' | 'border02' | 'border03' | 'border04' | 'border05' | 'border06',
  title: '智慧教育',
})

const source = computed(() => `<BorderButton01 title="${form.value.title}" color="${form.value.color}" bg-style="${form.value.bgStyle}" class="mx-auto" />`)
const { copy, copied } = useClipboard({ source })

function handleCopy() {
  copy()
}
</script>

<template>
  <div class="p-3">
    <DocDemoBox :copied="copied" class="p-5" @copy="handleCopy">
      <BorderButton01 :title="form.title" :color="form.color" :bg-style="form.bgStyle" class="mx-auto" />
    </DocDemoBox>
    <div class="mt-3">
      <DocForm>
        <DocFormItem label="color">
          <DocColorPicker v-model:value="form.color" />
        </DocFormItem>
        <DocFormItem label="title">
          <DocInput v-model:value="form.title" />
        </DocFormItem>
        <DocFormItem label="bgStyle">
          <div class="flex gap-2 flex-wrap">
            <div v-for="item in bgStyles" :key="item" class="flex">
              <input :id="item" name="bgStyle" type="radio" :checked="form.bgStyle === item" @input="() => form.bgStyle = item">
              <label :for="item">{{ item }}</label>
            </div>
          </div>
        </DocFormItem>
      </DocForm>
    </div>
    <div class="mt-15 w-full flex flex-col gap-3">
      <DocDemoBox :show-copy="false" class="p-5">
        <BorderButton01 title="智慧教育" class="mx-auto" />
      </DocDemoBox>

      <DocDemoBox :show-copy="false" class="p-5">
        <BorderButton01 title="智慧教育" bg-style="border02" color="red" class="mx-auto" />
      </DocDemoBox>

      <DocDemoBox :show-copy="false" class="p-5">
        <BorderButton01 title="智慧教育" bg-style="border03" color="green" class="mx-auto" />
      </DocDemoBox>

      <DocDemoBox :show-copy="false" class="p-5">
        <BorderButton01 title="智慧教育" bg-style="border04" color="orange" class="mx-auto" />
      </DocDemoBox>

      <DocDemoBox :show-copy="false" class="p-5">
        <BorderButton01 title="智慧交通交通交通交通" bg-style="border05" color="#0084ff" class="mx-auto" />
      </DocDemoBox>

      <DocDemoBox :show-copy="false" class="p-5">
        <BorderButton01 title="智慧教育" bg-style="border06" color="#F9DC71" class="mx-auto" />
      </DocDemoBox>
    </div>
  </div>
</template>
