<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:17:09
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:17:09
 * @Description: Decoration08
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  reverse?: boolean
}>(), {
  colors: () => ['#3f96a5', '#3f96a5'],
  reverse: false,
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
function xPos(pos: number, reverse = false) {
  if (!reverse)
    return pos

  return width.value - pos
}
</script>

<template>
  <div ref="boxRef">
    <svg :width="width" :height="height">
      <polyline
        :stroke="props.colors[0]"
        stroke-width="2"
        fill="transparent"
        :points="`${xPos(0, props.reverse)}, 0 ${xPos(30, props.reverse)}, ${height / 2}`"
      />

      <polyline
        :stroke="props.colors[0]"
        stroke-width="2"
        fill="transparent"
        :points="`${xPos(20, props.reverse)}, 0 ${xPos(50, props.reverse)}, ${height / 2} ${xPos(width, props.reverse)}, ${height / 2}`"
      />

      <polyline
        :stroke="props.colors[1]"
        fill="transparent"
        stroke-width="3"
        :points="`${xPos(0, props.reverse)}, ${height - 3}, ${xPos(200, props.reverse)}, ${height - 3}`"
      />
    </svg>
  </div>
</template>
