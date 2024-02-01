<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 10:41:45
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 10:41:45
 * @Description: Decoration10
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  colors?: [string, string]
}>(), {
  colors: () => ['#00c2ff', 'rgba(0, 194, 255, 0.3)'],
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
const id = Math.random().toString(36).substr(2)
const state = {
  animationId1: `decoration101${id}`,
  animationId2: `decoration102${id}`,
  animationId3: `decoration103${id}`,
  animationId4: `decoration104${id}`,
  animationId5: `decoration105${id}`,
  animationId6: `decoration106${id}`,
  animationId7: `decoration107${id}`,
}
</script>

<template>
  <div ref="boxRef">
    <svg :width="width" :height="height">
      <polyline
        :stroke="props.colors[1]"
        stroke-width="2"
        :points="`0, ${height / 2} ${width}, ${height / 2}`"
      />

      <polyline
        :stroke="props.colors[0]"
        stroke-width="2"
        :points="`5, ${height / 2} ${width * 0.2 - 3}, ${height / 2}`"
        :stroke-dasharray="`0, ${width * 0.2}`"
        fill="freeze"
      >
        <animate
          :id="state.animationId2"
          attributeName="stroke-dasharray"
          :values="`0, ${width * 0.2};${width * 0.2}, 0;`"
          dur="3s"
          :begin="`${state.animationId1}.end`"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          :values="`${width * 0.2}, 0;0, ${width * 0.2}`"
          dur="0.01s"
          :begin="`${state.animationId7}.end`"
          fill="freeze"
        />
      </polyline>

      <polyline
        :stroke="props.colors[0]"
        stroke-width="2"
        :points="`${width * 0.2 + 3}, ${height / 2} ${width * 0.8 - 3}, ${height / 2}`"
        :stroke-dasharray="`0, ${width * 0.6}`"
      >
        <animate
          :id="state.animationId4"
          attributeName="stroke-dasharray"
          :values="`0, ${width * 0.6};${width * 0.6}, 0`"
          dur="3s"
          :begin="`${state.animationId3}.end + 1s`"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          :values="`${width * 0.6}, 0;0, ${width * 0.6}`"
          dur="0.01s"
          :begin="`${state.animationId7}.end`"
          fill="freeze"
        />
      </polyline>

      <polyline
        :stroke="props.colors[0]"
        stroke-width="2"
        :points="`${width * 0.8 + 3}, ${height / 2} ${width - 5}, ${height / 2}`"
        :stroke-dasharray="`0, ${width * 0.2}`"
      >
        <animate
          :id="state.animationId6"
          attributeName="stroke-dasharray"
          :values="`0, ${width * 0.2};${width * 0.2}, 0`"
          dur="3s"
          :begin="`${state.animationId5}.end + 1s`"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          :values="`${width * 0.2}, 0;0, ${width * 0.3}`"
          dur="0.01s"
          :begin="`${state.animationId7}.end`"
          fill="freeze"
        />
      </polyline>

      <circle cx="2" :cy="height / 2" r="2" :fill="props.colors[1]">
        <animate
          :id="state.animationId1"
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[0]}`"
          :begin="`0s;${state.animationId7}.end`"
          dur="0.3s"
          fill="freeze"
        />
      </circle>

      <circle :cx="width * 0.2" :cy="height / 2" r="2" :fill="props.colors[1]">
        <animate
          :id="state.animationId3"
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[0]}`"
          :begin="`${state.animationId2}.end`"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[1]}`"
          dur="0.01s"
          :begin="`${state.animationId7}.end`"
          fill="freeze"
        />
      </circle>

      <circle :cx="width * 0.8" :cy="height / 2" r="2" :fill="props.colors[1]">
        <animate
          :id="state.animationId5"
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[0]}`"
          :begin="`${state.animationId4}.end`"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[1]}`"
          dur="0.01s"
          :begin="`${state.animationId7}.end`"
          fill="freeze"
        />
      </circle>

      <circle :cx="width - 2" :cy="height / 2" r="2" :fill="props.colors[1]">
        <animate
          :id="state.animationId7"
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[0]}`"
          :begin="`${state.animationId6}.end`"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          :values="`${props.colors[1]};${props.colors[1]}`"
          dur="0.01s"
          :begin="`${state.animationId7}.end`"
          fill="freeze"
        />
      </circle>
    </svg>
  </div>
</template>
