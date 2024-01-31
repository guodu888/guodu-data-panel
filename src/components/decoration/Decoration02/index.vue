<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-30 13:46:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-30 13:46:18
 * @Description: Decoration02
-->
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  colors?: [string, string]
  reverse?: boolean
  dur?: number
  size?: number
}>(), {
  colors: () => ['#3faacb', '#fff'],
  reverse: false,
  dur: 6,
  size: 3,
})

const decoration01Ref = ref<HTMLElement>()
const { width, height } = useElementSize(decoration01Ref)

const state = computed(() => (props.reverse
  ? {
      w: width.value,
      h: height.value,
      x: 0,
      y: 0,
    }
  : {
      w: width.value,
      h: props.size,
      x: 0,
      y: 0,
    }))
</script>

<template>
  <div ref="decoration01Ref" class="decoration-02">
    <svg :width="`${reverse ? size : width}px`" :height="`${reverse ? height : size}px`">
      <rect :x="state.x" :y="state.y" :width="state.w" :height="state.h" :fill="props.colors[0]">
        <animate
          :attributeName="reverse ? 'height' : 'width'" from="0" :to="reverse ? height : width"
          :dur="`${dur}s`" calcMode="spline" keyTimes="0;1" keySplines=".42,0,.58,1" repeatCount="indefinite"
        />
      </rect>

      <rect :x="state.x" :y="state.y" :width="size" :height="size" :fill="props.colors[1]">
        <animate
          :attributeName="reverse ? 'y' : 'x'" from="0" :to="reverse ? height : width"
          :dur="`${dur}s`" calcMode="spline" keyTimes="0;1" keySplines="0.42,0,0.58,1" repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</template>

<style>
.decoration-02{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
