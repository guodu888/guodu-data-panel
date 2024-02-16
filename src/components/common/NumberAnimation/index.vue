<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-16 10:42:47
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-16 10:42:47
 * @Description: NumberAnimation
-->
<script setup lang="ts">
import { round } from 'lodash-es'
import { tween } from './utils'

const props = withDefaults(defineProps<{
  from: number
  to: number
  duration?: number
  precision?: number
  showSeparator?: boolean
  active?: boolean
}>(), {
  duration: 3000,
  precision: 0,
  showSeparator: false,
  active: true,
})

const emits = defineEmits(['finish'])
const displayedValueRef = ref(props.from)
let animating = false
function onUpdate(currentValue: number): void {
  displayedValueRef.value = currentValue
}
function onFinish(): void {
  displayedValueRef.value = props.to
  animating = false
  emits('finish')
}
function animate(from: number = props.from, to: number = props.to): void {
  animating = true
  displayedValueRef.value = props.from
  if (from !== to)
    tween({ from, to, duration: props.duration, onUpdate, onFinish })
}
const formattedValueRef = computed(() => {
  const formatted: string = round(displayedValueRef.value, props.precision).toFixed(props.precision)
  const splitValue = formatted.split('.')
  const numberFormatter = new Intl.NumberFormat('en-US', { useGrouping: true })
  const decimalSeparator = numberFormatter.formatToParts(0.5).find(part => part.type === 'decimal')?.value
  const integer = props.showSeparator ? numberFormatter.format(Number(splitValue[0])) : splitValue[0]
  const decimal = splitValue[1]
  return {
    integer,
    decimal,
    decimalSeparator,
  }
})

function play(): void {
  if (animating)
    return
  animate()
}
onMounted(() => {
  watchEffect(() => {
    if (props.active)
      animate()
  })
})

defineExpose({
  play,
})
</script>

<template>
  <span>
    {{ formattedValueRef.integer }}{{ formattedValueRef.decimal ? formattedValueRef.decimalSeparator : '' }}{{ formattedValueRef.decimal }}
  </span>
</template>
