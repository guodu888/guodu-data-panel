<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 18:35:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 18:35:16
 * @Description: Decoration03
-->
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  colors?: [string, string]
  size?: number
  row?: number
  column?: number
}>(), {
  colors: () => ['#7acaec', 'transparent'],
  size: 7,
  row: 2,
  column: 25,
})

const halfSize = computed(() => props.size / 2)
const boxRef = ref<HTMLElement>()
const state = reactive({
  points: [] as number[][],
})
const { width, height } = useElementSize(boxRef)

function calcPointsPosition() {
  const [w, h] = [width.value, height.value]
  const horizontalGap = w / (props.column + 1)
  const verticalGap = h / (props.row + 1)

  const points = Array.from({ length: props.row }).fill(0).map((foo, i) =>
    Array.from({ length: props.column }).fill(0).map((foo, j) => [
      horizontalGap * (j + 1),
      verticalGap * (i + 1),
    ]))

  state.points = points.reduce((all, item) => [...all, ...item], [])
}

watch([width, height, () => props.row, () => props.column], () => {
  calcPointsPosition()
})
</script>

<template>
  <div ref="boxRef" class="decoration-3">
    <svg :width="`${width}px`" :height="`${height}px`">
      <template v-for="point in state.points" :key="point">
        <rect
          :fill="props.colors[0]" :x="point[0] - halfSize"
          :y="point[1] - halfSize" :width="props.size" :height="props.size"
        >
          <animate
            v-if="Math.random() > 0.6" attributeName="fill" :values="`${props.colors.join(';')}`"
            :dur="`${Math.random() + 1}s`" :begin="Math.random() * 2" repeatCount="indefinite"
          />
        </rect>
      </template>
    </svg>
  </div>
</template>

<style>
.decoration-3 {
    width: 100%;
    height: 100%;

}

.decoration-3 svg {
    transform-origin: left top;
}
</style>
