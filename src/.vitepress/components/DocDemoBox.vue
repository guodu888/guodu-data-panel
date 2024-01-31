<!--
 * @Author: shaohang-shy
 * @Date: 2024-01-31 10:37:41
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-01-31 10:37:41
 * @Description: DocDemoBox
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  copied?: boolean
}>(), {
  copied: false,
})
const emits = defineEmits(['copy'])
</script>

<template>
  <div class="demo-box w-full bg-dark p-3 rounded relative">
    <slot />
    <button title="Copy Code" class="copy" :class="{ copied: props.copied }" @click="emits('copy')" />
  </div>
</template>

<style>
.demo-box:hover>.copy {
  opacity: 1;
}

.copy:hover {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
}

button.copy {
  direction: ltr;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  border: 1px solid var(--vp-code-copy-code-border-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-copy-code-bg);
  opacity: 0;
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
}

button.copy:hover,
button.copy.copied {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
}

button.copy.copied,
button.copy:hover.copied {
  /*rtl:ignore*/
  border-radius: 0 4px 4px 0;
  background-color: var(--vp-code-copy-code-hover-bg);
  background-image: var(--vp-icon-copied);
}

button.copy.copied::before,
button.copy:hover.copied::before {
  position: relative;
  top: -1px;
  /*rtl:ignore*/
  transform: translateX(calc(-100% - 1px));
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--vp-code-copy-code-hover-border-color);
  /*rtl:ignore*/
  border-right: 0;
  border-radius: 4px 0 0 4px;
  padding: 0 10px;
  width: fit-content;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-code-copy-code-active-text);
  background-color: var(--vp-code-copy-code-hover-bg);
  white-space: nowrap;
  content: var(--vp-code-copy-copied-text-content);
}
</style>
