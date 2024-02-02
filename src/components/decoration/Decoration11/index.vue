<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 11:00:52
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 11:00:52
 * @Description: Decoration11
-->
<script setup lang="ts">
import { fade } from '../../../utils/color'

const props = withDefaults(defineProps<{
  colors?: [string, string]
}>(), {
  colors: () => ['#1a98fc', '#2cf7fe'],
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="decoration-11">
    <svg :width="width" :height="height">
      <polygon
        :fill="fade(props.colors[1], 10)"
        :stroke="props.colors[1]"
        points="20 10, 25 4, 55 4 60 10"
      />

      <polygon
        :fill="fade(props.colors[1], 10)"
        :stroke="props.colors[1]"
        :points="`20 ${height - 10}, 25 ${height - 4}, 55 ${height - 4} 60 ${height - 10}`"
      />

      <polygon
        :fill="fade(props.colors[1], 10)"
        :stroke="props.colors[1]"
        :points="`${width - 20} 10, ${width - 25} 4, ${width - 55} 4 ${width - 60} 10`"
      />

      <polygon
        :fill="fade(props.colors[1], 10)"
        :stroke="props.colors[1]"
        :points="`${width - 20} ${height - 10}, ${width - 25} ${height - 4}, ${width - 55} ${height - 4} ${width - 60} ${height - 10}`"
      />

      <polygon
        :fill="fade(props.colors[0], 20)"
        :stroke="props.colors[0]"
        :points="`
          20 10, 5 ${height / 2} 20 ${height - 10}
          ${width - 20} ${height - 10} ${width - 5} ${height / 2} ${width - 20} 10
        `"
      />

      <polyline
        fill="transparent"
        :stroke="fade(props.colors[0], 70)"
        :points="`25 18, 15 ${height / 2} 25 ${height - 18}`"
      />

      <polyline
        fill="transparent"
        :stroke="fade(props.colors[0], 70)"
        :points="`${width - 25} 18, ${width - 15} ${height / 2} ${width - 25} ${height - 18}`"
      />
    </svg>

    <div class="decoration-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.decoration-11 {
  position: relative;
  display: flex;
}
.decoration-11 .decoration-content {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
