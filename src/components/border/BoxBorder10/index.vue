<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 17:19:00
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 17:19:00
 * @Description: BoxBorder10
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['#11eefd', '#0078d2'],
  backgroundColor: 'transparent',
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const borders = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
</script>

<template>
  <div ref="boxRef" class="border-box-10" :style="`box-shadow: inset 0 0 25px 3px ${props.colors[0]}`">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon
        :fill="props.backgroundColor" :points="`4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height} 4, ${height} 0, ${height - 4} 0, 4`"
      />
    </svg>
    <template v-for="item in borders" :key="item">
      <svg width="150px" height="150px" :class="`${item} border-svg-container`">
        <polygon :fill="props.colors[1]" points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3" />
      </svg>
    </template>
    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-10 {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 6px;
}

.border-box-10 .border-svg-container {
    position: absolute;
    display: block;
}

.border-box-10 .right-top {
    right: 0px;
    transform: rotatey(180deg);
}

.border-box-10 .left-bottom {
    bottom: 0px;
    transform: rotatex(180deg);
}

.border-box-10 .right-bottom {
    right: 0px;
    bottom: 0px;
    transform: rotatex(180deg) rotatey(180deg);
}

.border-box-10 .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
