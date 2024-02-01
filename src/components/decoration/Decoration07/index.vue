<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:08:45
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:08:45
 * @Description: Decoration07
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
}>(), {
  colors: () => ['#1dc1f5', '#1dc1f5'],
})
</script>

<template>
  <div class="decoration-7">
    <svg width="21px" height="20px">
      <polyline
        stroke-width="4"
        fill="transparent"
        :stroke="props.colors[0]"
        points="10, 0 19, 10 10, 20"
      />
      <polyline
        stroke-width="2"
        fill="transparent"
        :stroke="props.colors[1]"
        points="2, 0 11, 10 2, 20"
      />
    </svg>
    <slot />
    <svg width="21px" height="20px">
      <polyline
        stroke-width="4"
        fill="transparent"
        :stroke="props.colors[0]"
        points="11, 0 2, 10 11, 20"
      />
      <polyline
        stroke-width="2"
        fill="transparent"
        :stroke="props.colors[1]"
        points="19, 0 10, 10 19, 20"
      />
    </svg>
  </div>
</template>

<style>
.decoration-7 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>
