<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 17:30:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 17:30:12
 * @Description: Loading
-->
<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()
</script>

<template>
  <div class="outer-container">
    <div v-if="props.show" class="loading-container">
      <svg width="50px" height="50px">
        <circle
          cx="25" cy="25" r="20" fill="transparent" stroke-width="3" stroke-dasharray="31.415, 31.415"
          stroke="#02bcfe" stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform" type="rotate" values="0, 25 25;360, 25 25" dur="1.5s"
            repeatCount="indefinite"
          />
          <animate attributeName="stroke" values="#02bcfe;#3be6cb;#02bcfe" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle
          cx="25" cy="25" r="10" fill="transparent" stroke-width="3" stroke-dasharray="15.7, 15.7"
          stroke="#3be6cb" stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform" type="rotate" values="360, 25 25;0, 25 25" dur="1.5s"
            repeatCount="indefinite"
          />
          <animate attributeName="stroke" values="#3be6cb;#02bcfe;#3be6cb" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div class="loading-tips">
        <slot name="tips" />
      </div>
    </div>
    <div :style="{ opacity: props.show ? 0 : 1 }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.outer-container {
    position: relative;
    min-height: 50px;
}
.loading-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.loading-tips {
    font-size: 15px;
}
</style>
