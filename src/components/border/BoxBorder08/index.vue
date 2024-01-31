<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 16:33:21
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 16:33:21
 * @Description: BoxBorder08
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
  backgroundColor?: string
  reverse?: boolean
  dur?: number
}>(), {
  colors: () => ['#235fa7', '#4fd2dd'],
  backgroundColor: 'transparent',
  reverse: false,
  dur: 3,
})
const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const length = computed(() => {
  return (width.value + height.value - 5) * 2
})
// 生成一个随机字符串
const id = Math.random().toString(36).substr(2)
const state = reactive({
  path: `border-box-8-path-${id}`,
  gradient: `border-box-8-gradient-${id}`,
  mask: `border-box-8-mask-${id}`,
})
const pathD = computed(() => {
  if (props.reverse)
    return `M 2.5, 2.5 L 2.5, ${height.value - 2.5} L ${width.value - 2.5}, ${height.value - 2.5} L ${width.value - 2.5}, 2.5 L 2.5, 2.5`

  return `M2.5, 2.5 L${width.value - 2.5}, 2.5 L${width.value - 2.5}, ${height.value - 2.5} L2.5, ${height.value - 2.5} L2.5, 2.5`
})
</script>

<template>
  <div ref="boxRef" class="border-box-8">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <path
          :id="state.path"
          :d="pathD"
          fill="transparent"
        />
        <radialGradient
          :id="state.gradient"
          cx="50%" cy="50%" r="50%"
        >
          <stop
            offset="0%" stop-color="#fff"
            stop-opacity="1"
          />
          <stop
            offset="100%" stop-color="#fff"
            stop-opacity="0"
          />
        </radialGradient>

        <mask :id="state.mask">
          <circle cx="0" cy="0" r="150" :fill="`url(#${state.gradient})`">

            <animateMotion
              :dur="dur"
              :path="pathD"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <polygon :fill="props.backgroundColor" :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`" />

      <use
        :stroke="props.colors[0]"
        stroke-width="1"
        :xlink:href="`#${state.path}`"
        :xlink="`#${state.path}`"
      />

      <use
        :stroke="props.colors[1]"
        stroke-width="3"
        :xlink:href="`#${state.path}`"
        :xlink="`#${state.path}`"
        :mask="`url(#${state.mask})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${length}`"
          :to="`${length}, 0`"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.border-box-8 {
  position: relative;
  width: 100%;
  height: 100%;
}
.border-box-8 .border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.border-box-8 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
