<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 09:37:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 09:37:22
 * @Description: DocFormItem
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  description?: string
  isRequired?: boolean
  isComponentProps?: boolean
}>(), {
  description: '',
  isRequired: false,
  isComponentProps: true,
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <span><span v-if="props.isComponentProps" class="text-#00A76E bg-#00A76E44 p-1 mx-1">组件属性</span><span v-if="props.isRequired" class="text-red">*</span>{{ props.label }} <span class="text-gray text-sm">{{ props.description }}</span></span>
    </div>
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>
