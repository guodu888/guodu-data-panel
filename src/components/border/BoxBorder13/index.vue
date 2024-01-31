<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 18:27:50
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 18:27:50
 * @Description: BoxBorder13
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['#6586ec', '#2cf7fe'],
  backgroundColor: 'transparent',
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="border-box-13">
    <svg class="border-svg-container" :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="props.colors[0]"
        :d="`
        M 5 20 L 5 10 L 12 3 L 60 3 L 68 10
        L ${width - 20} 10 L ${width - 5} 25
        L ${width - 5} ${height - 5} L 20 ${height - 5}
        L 5 ${height - 20} L 5 20
        `"
      />

      <path
        fill="transparent"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="10, 5"
        :stroke="props.colors[0]"
        d="M 16 9 L 61 9"
      />

      <path
        fill="transparent"
        :stroke="props.colors[1]"
        d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"
      />

      <path
        fill="transparent"
        :stroke="props.colors[1]"
        :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${height - 5}`"
      />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-13 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-13 .border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.border-box-13 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
