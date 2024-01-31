<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 17:59:44
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 17:59:44
 * @Description: BoxBorder12
-->
<script setup lang="ts">
import { fade } from '.././../../utils/color'

const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
}>(), {
  colors: () => ['#11eefd', '#0078d2'],
  backgroundColor: 'transparent',
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const id = Math.random().toString(36).substr(2)
const filterId = `borderr-box-12-filterId-${id}`
</script>

<template>
  <div ref="boxRef" class="border-box-12">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
          <feFlood :flood-color="fade(props.colors[1], 70)" result="glowColor">
            <animate
              attributeName="flood-color"
              :values="`${fade(props.colors[1], 70)};${fade(props.colors[1], 30)};${fade(props.colors[1], 70)};`"
              dur="3s"
              begin="0s"
              repeatCount="indefinite"
            />
          </feFlood>
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        :fill="props.backgroundColor"
        stroke-width="2"
        :stroke="props.colors[0]"
        :d="`
        M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15
        L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${width - 15} ${height - 5}
        L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15
        Q 5 5 15 5
        `"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="props.colors[1]"
        d="M 20 5 L 15 5 Q 5 5 5 15 L 5 20"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="props.colors[1]"
        :d="`M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${width - 5} 15 L ${width - 5} 20`"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="props.colors[1]"
        :d="`M ${width - 20} ${height - 5} L ${width - 15} ${height - 5}
        Q ${width - 5} ${height - 5} ${width - 5} ${height - 15}
        L ${width - 5} ${height - 20}
        `"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="props.colors[1]"
        :d="`M 20 ${height - 5} L 15 ${height - 5}
        Q 5 ${height - 5} 5 ${height - 15}
        L 5 ${height - 20}
        `"
      />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-12 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-12 .border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.border-box-12 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
