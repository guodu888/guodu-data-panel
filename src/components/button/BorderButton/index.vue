<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 13:31:21
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 13:31:21
 * @Description: BorderButton01
-->
<script setup lang="ts">
import BaseWave from '../../common/BaseWave/index.vue'
import { lighten } from '../../../utils/color'

defineOptions({
  components: {
    border01: defineAsyncComponent(() => import(`./border01.vue`)),
    border02: defineAsyncComponent(() => import(`./border02.vue`)),
    border03: defineAsyncComponent(() => import(`./border03.vue`)),
    border04: defineAsyncComponent(() => import(`./border04.vue`)),
    border05: defineAsyncComponent(() => import(`./border05.vue`)),
    border06: defineAsyncComponent(() => import(`./border06.vue`)),
  },
})

const props = withDefaults(defineProps<{
  color?: string
  fontColor?: string
  bg?: boolean
  fontSize?: number
  title: string
  bgStyle?: 'border01' | 'border02' | 'border03' | 'border04' | 'border05' | 'border06'
}>(), {
  color: '#2058c7',
  fontColor: '',
  bg: true,
  fontSize: 14,
  bgStyle: 'border01',
})

const emits = defineEmits(['click'])

const hoverColor = computed(() => lighten(props.color, 40))

const fontColorCalc = computed(() => props.fontColor === '' ? props.color : props.fontColor)

const hoverFontColor = computed(() => lighten(fontColorCalc.value, 40))

const bgDisplay = computed(() => props.bg ? 0.1 : 0.0)

const fontSize = computed(() => `${props.fontSize}px`)
const baseWaveRef = ref<typeof BaseWave | null>(null)
function handleClick(e: MouseEvent) {
  baseWaveRef.value?.play()
  emits('click', e)
}
</script>

<template>
  <div class="button-wrapper">
    <div class="button" @click="handleClick">
      <div class="button-svg-container">
        <component :is="props.bgStyle" />
      </div>
      <div class="button-text">
        {{ props.title }}
      </div>
      <BaseWave ref="baseWaveRef" />
    </div>
  </div>
</template>

<style>
.button-wrapper {
  position: relative;
  width:fit-content;
}
.button-wrapper .button {
  user-select: none;
  width: 100%;
  display: inline-block;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: v-bind('fontSize');
  text-decoration: none;
  text-shadow: v-bind('color') 0px 0px 1px;
  color: v-bind('fontColorCalc');
  cursor: pointer;
  --ripple-color: v-bind('color');
}
.button-wrapper .button:hover,
.button-wrapper .button:focus {
  text-shadow: v-bind('hoverColor') 0px 0px 1px;
  color: v-bind('hoverFontColor');
}
.button-wrapper .button:hover svg,
.button-wrapper .button:focus svg {
  filter: drop-shadow(v-bind('hoverColor') 0px 0px 2px);
}
.button-wrapper .button:hover path[data-type="shape"],
.button-wrapper .button:focus path[data-type="shape"] {
  fill: v-bind('hoverColor');
}
.button-wrapper .button-svg-container {
  position: absolute;
  inset: -2px;
  display: flex;
}
.button-wrapper .button-svg {
  display: block;
  flex: 1 1 0%;
  filter: drop-shadow(v-bind('color') 0px 0px 2px);
}
.button-wrapper .button-svg-bg {
  stroke-width: 0;
  stroke: transparent;
  fill: v-bind('color');
  opacity: v-bind('bgDisplay');
}
.button-wrapper .button-svg-line {
  stroke-width: 2;
  stroke: v-bind('color');
  vector-effect: non-scaling-stroke;
  fill: transparent;
}
.button-wrapper .button-text {
  text-align: center;
  width: 100%;
  line-height: 3em;
  padding: 0 1.5em;
}
</style>
