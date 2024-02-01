<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:27:26
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:27:26
 * @Description: Decoration09
-->
<script setup lang="ts">
import { fade } from '~/utils/color'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  dur?: number
}>(), {
  colors: () => ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'],
  dur: 3,
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const id = Math.random().toString(36).slice(2)
const polygonId = `decoration-9-polygon-${id}`

const svgScale = computed(() => [width.value / 100, height.value / 100])
</script>

<template>
  <div ref="boxRef" class="decoration-9">
    <svg :width="`${width}px`" :height="`${height}px`" :style="`transform:scale(${svgScale[0]},${svgScale[1]});`">
      <defs>
        <polygon :id="polygonId" points="15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5" />
      </defs>

      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        :stroke="props.colors[1]"
        stroke-width="10"
        stroke-dasharray="80, 100, 30, 100"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          :dur="`${props.dur}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        :stroke="props.colors[0]"
        stroke-width="6"
        stroke-dasharray="50, 66, 100, 66"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;-360 50 50"
          :dur="`${props.dur}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        :stroke="fade(props.colors[1], 30)"
        stroke-width="1"
        stroke-dasharray="5, 1"
      />

      <use
        v-for="(_, i) in new Array(20).fill(0)"
        :key="i"
        :xlink:href="`#${polygonId}`"
        :stroke="props.colors[1]"
        :fill="Math.random() > 0.4 ? 'transparent' : props.colors[0]"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          :dur="`${props.dur}s`"
          :begin="`${i * props.dur / 20}s`"
          repeatCount="indefinite"
        />
      </use>

      <circle
        cx="50"
        cy="50"
        r="26"
        fill="transparent"
        :stroke="fade(props.colors[1], 30)"
        stroke-width="1"
        stroke-dasharray="5, 1"
      />
    </svg>

    <slot />
  </div>
</template>

<style scoped>
.decoration-9 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.decoration-9 svg {
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: left top;
}
</style>
