<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 15:19:45
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 15:19:45
 * @Description: BoxBorder03
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string, string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['#2862b7', '#2862b7', '#2862b7', '#2862b7'],
  backgroundColor: 'transparent',
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="border-box-3">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon :fill="props.backgroundColor" :points="`23, 23 ${width - 24}, 23 ${width - 24}, ${height - 24} 23, ${height - 24}`" />
      <polyline class="bb3-line1" :stroke="props.colors[0]" :points="`4, 4 ${width - 22} ,4 ${width - 22}, ${height - 22} 4, ${height - 22} 4, 4`" />
      <polyline class="bb3-line2" :stroke="props.colors[1]" :points="`10, 10 ${width - 16}, 10 ${width - 16}, ${height - 16} 10, ${height - 16} 10, 10`" />
      <polyline class="bb3-line2" :stroke="props.colors[2]" :points="`16, 16 ${width - 10}, 16 ${width - 10}, ${height - 10} 16, ${height - 10} 16, 16`" />
      <polyline class="bb3-line2" :stroke="props.colors[3]" :points="`22, 22 ${width - 4}, 22 ${width - 4}, ${height - 4} 22, ${height - 4} 22, 22`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-3 {
    position: relative;
}

.border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}
.border-svg-container>polyline {
    fill: none;
}

.bb3-line1 {
    stroke-width: 3;
}

.bb3-line2 {
    stroke-width: 1;
}

.border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
