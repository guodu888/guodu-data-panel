# 进度池

<demo />

## 用法示例

```vue
<script setup lang="ts">
const form = ref({
  value: 10,
  colors: ['#3DE7C9', '#00BAFF'],
  borderWidth: 3,
  borderGap: 3,
  lineDash: [5, 1] as [number, number],
  textColor: '#fff',
  borderRadius: 5,
  localGradient: false,
  formatter: '{value}%',
  width: 200,
  height: 100,
})
</script>

<template>
  <ProgressPool
    :value="form.value"
    :colors="form.colors"
    :border-width="form.borderWidth"
    :border-gap="form.borderGap"
    :line-dash="form.lineDash"
    :text-color="form.textColor"
    :border-radius="form.borderRadius"
    :local-gradient="form.localGradient"
    :formatter="form.formatter"
    class="mx-auto"
    :style="{ width: `${form.width}px`, height: `${form.height}px` }"
  />
</template>
```
