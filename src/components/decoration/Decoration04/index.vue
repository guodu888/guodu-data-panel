<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 08:59:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 08:59:11
 * @Description: Decoration04
-->
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  colors?: [string, string]
  reverse?: boolean
  dur?: number
  size?: number
}>(), {
  colors: () => ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'],
  reverse: false,
  dur: 3,
  size: 5,
})

const boxRef = ref<HTMLElement>()
const { width, height } = useElementSize(boxRef)
</script>

<template>
  <div ref="boxRef" class="decoration-4">
    <div
      :class="`container ${props.reverse ? 'reverse' : 'normal'}`"
      :style="props.reverse ? `width:${width}px;height:${props.size}px;animation-duration:${props.dur}s` : `width:${props.size}px;height:${height}px;animation-duration:${props.dur}s`"
    >
      <svg :width="props.reverse ? width : props.size" :height="props.reverse ? props.size : height">
        <polyline
          :stroke="props.colors[0]" :stroke-width="props.size / 2"
          :points="props.reverse ? `0,${props.size / 2} ${width},${props.size / 2}` : `${props.size / 2}, 0 ${props.size / 2}, ${height}`"
        />
        <polyline
          class="bold-line" :stroke="props.colors[1]" :stroke-width="props.size" stroke-dasharray="20, 80"
          stroke-dashoffset="-30"
          :points="reverse ? `0, ${props.size / 2} ${width}, ${props.size / 2}` : `${props.size / 2}, 0 ${props.size / 2}, ${height}`"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.decoration-4 {
  position: relative;
}

.decoration-4 .container {
  display: flex;
  overflow: hidden;
  position: absolute;
  flex: 1;
}

.decoration-4 .normal {
  animation: ani-height ease-in-out infinite;
  left: 50%;
}

.decoration-4 .reverse {
  animation: ani-width ease-in-out infinite;
  top: 50%;
}

@keyframes ani-height {
  0% {
    height: 0%;
  }

  70% {
    height: 100%;
  }

  100% {
    height: 100%;
  }

}

@keyframes ani-width {
  0% {
    width: 0%;
  }

  70% {
    width: 100%;
  }

  100% {
    width: 100%;
  }

}
</style>
