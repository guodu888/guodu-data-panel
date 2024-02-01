<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 14:13:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 14:13:36
 * @Description: BaseWave
-->
<script setup lang="ts">
const selfRef = ref<HTMLElement>()
const activeRef = ref(false)
let animationTimerId: number | null = null
onBeforeUnmount(() => {
  if (animationTimerId !== null)
    window.clearTimeout(animationTimerId)
})

function play() {
  if (animationTimerId !== null) {
    window.clearTimeout(animationTimerId)
    activeRef.value = false
    animationTimerId = null
  }
  void nextTick(() => {
    void selfRef.value?.offsetHeight
    activeRef.value = true
    animationTimerId = window.setTimeout(() => {
      activeRef.value = false
      animationTimerId = null
    }, 1000)
  })
}
defineExpose({ play })
</script>

<template>
  <div
    ref="selfRef"
    aria-hidden
    :style="{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, borderRadius: 'inherit' }"
    class="base-ware"
    :class="{ 'base-ware-active': activeRef }"
  />
</template>

<style scoped>
.base-ware{
    pointer-events: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation-iteration-count: 1;
    animation-duration: .6s;
    animation-timing-function: cubic-bezier(0, 0, .2, 1), cubic-bezier(0, 0, .2, 1);
}
.base-ware-active{
    z-index:1;
    animation-name: button-ware-opacity, button-wave-spread;
}
@keyframes button-wave-spread {
    0% {
        box-shadow: 0 0 0.5px 0 var(--ripple-color);
    }
    100% {
        box-shadow: 0 0 0.5px 4.5px var(--ripple-color);
    }
}

@keyframes button-ware-opacity {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
