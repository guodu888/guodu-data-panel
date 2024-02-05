<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-05 09:29:53
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-05 09:29:53
 * @Description: waterLevelPond
-->
<script setup lang="ts">
import WaterLevelPond from './index.vue'

const form = reactive({
  borderWidth: 10,
  shape: 'rect' as 'rect' | 'roundRect' | 'round',
  percentage: 50,
  borderGap: 10,
  cycle: 2,
  dur: 1000,
  colors: ['#3DE7C9', '#00BAFF'],
  waveColors: ['#3DE7C9', '#00BAFF'],
  deep: 0,
})

const shapes = ['rect', 'roundRect', 'round'] as const
</script>

<template>
  <div class="p-3">
    <DocDemoBox>
      <WaterLevelPond :percentage="form.percentage" :colors="form.colors" :wave-colors="form.waveColors" :deep="form.deep" :cycle="form.cycle" :dur="form.dur" :border-width="form.borderWidth" :border-gap="form.borderGap" :shape="form.shape" class="w-200px h-200px mx-auto" />
    </DocDemoBox>
    <DocForm class="mt-3">
      <DocFormItem label="percentage">
        <DocInputNumber v-model:value="form.percentage" />
      </DocFormItem>
      <DocFormItem label="colors[0]">
        <DocColorPicker v-model:value="form.colors[0]" />
      </DocFormItem>
      <DocFormItem label="colors[1]">
        <DocColorPicker v-model:value="form.colors[1]" />
      </DocFormItem>
      <DocFormItem label="waveColors[0]">
        <DocColorPicker v-model:value="form.waveColors[0]" />
      </DocFormItem>
      <DocFormItem label="waveColors[1]">
        <DocColorPicker v-model:value="form.waveColors[1]" />
      </DocFormItem>
      <DocFormItem label="cycle">
        <DocInputNumber v-model:value="form.cycle" />
      </DocFormItem>
      <DocFormItem label="dur" description="（ms）">
        <DocInputNumber v-model:value="form.dur" />
      </DocFormItem>
      <DocFormItem label="shape">
        <div class="flex gap-2 flex-wrap">
          <div v-for="item in shapes" :key="item" class="flex">
            <input :id="item" name="bgStyle" type="radio" :checked="form.shape === item" @input="() => form.shape = item">
            <label :for="item">{{ item }}</label>
          </div>
        </div>
      </DocFormItem>
      <DocFormItem label="borderWidth">
        <DocInputNumber v-model:value="form.borderWidth" />
      </DocFormItem>
      <DocFormItem label="borderGap">
        <DocInputNumber v-model:value="form.borderGap" />
      </DocFormItem>
      <DocFormItem label="deep">
        <DocInputNumber v-model:value="form.deep" />
      </DocFormItem>
    </DocForm>
  </div>
</template>
