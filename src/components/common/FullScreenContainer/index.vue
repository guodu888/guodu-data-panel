<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 13:47:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 13:47:16
 * @Description: FullScreenContainer
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  width: number
  height: number
  background: string
}>(), {
  background: '#030303',
})
// 获取浏览器宽高
const boxRef = ref<HTMLElement | null>(null)
const { width: boxW, height: boxH } = useElementSize(boxRef)

// 根据浏览器宽高和传入的宽高计算缩放比例
const scale = computed(() => {
  const { width: w, height: h } = props
  // 使子元素按比例撑满box
  const scaleW = boxW.value / w
  const scaleH = boxH.value / h
  return Math.min(scaleW, scaleH)
})
</script>

<template>
  <div ref="boxRef" class="full-screen-container" :style="{ background: props.background }">
    <div :style="{ transform: `scale(${scale})`, position: 'absolute' }">
      <div class="full-screen-container-inner" :style="{ width: `${props.width}px`, height: `${props.height}px` }">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.full-screen-container {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: auto;
}
.full-screen-container-inner {
  position: relative;
  line-height: 1em;
}
</style>
