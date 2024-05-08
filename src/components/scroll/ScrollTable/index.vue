<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-01 18:01:33
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-01 18:01:33
 * @Description: ScrollTable
-->
<script setup lang="ts" generic="T">
import type { TableColumn } from '../../../types'

const props = withDefaults(defineProps<{
  data: T[]
  columns: TableColumn[]
  rowNum?: number
  rowHeight?: number
}>(), {
  rowNum: 50,
  rowHeight: 40,
})

// const data = ref([1, 2, 3])
const rowNum = computed(() => Math.min(props.rowNum, props.data.length))
const initList = [...Array.from({ length: rowNum.value }).fill(true), ...Array.from({ length: props.data.length * 3 - rowNum.value }).fill(false)]
const list = ref([...initList])
const showAnimation = ref(true)
const gapTime = 1500
const animationDuration = 300
function handleChange() {
  // 将list向后移动一位，最后一个放到第一个
  list.value.unshift(list.value.pop() as boolean)
  if (list.value[list.value.length - 1]) {
    setTimeout(() => {
      showAnimation.value = false
      list.value = [...Array.from({ length: props.data.length * 3 }).map((_, index) => !!((index >= props.data.length - rowNum.value && index < props.data.length)))]
      setTimeout(() => {
        nextTick(() => {
          showAnimation.value = true
        })
      }, 100)
    }, animationDuration)
  }
}

const transition = computed(() => showAnimation.value ? `all ${animationDuration}ms` : '')

let interval: NodeJS.Timeout | null = null
onMounted(() => {
  interval = setInterval(() => {
    handleChange()
  }, gapTime)
})

function handleStopInterval() {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

function handleStartInterval() {
  if (interval)
    return
  interval = setInterval(() => {
    handleChange()
  }, gapTime)
}

onUnmounted(() => {
  if (interval)
    clearInterval(interval)
})

const gridTemplateColumns = computed(() => {
  return props.columns.map(column => `${column.span ?? 1}fr`).join(' ')
})
</script>

<template>
  <div>
    <div
      class="scroll-table" :style="{ height: `${(props.rowNum + 1) * props.rowHeight}px` }"
      @mouseenter="handleStopInterval" @mouseout="handleStartInterval"
    >
      <div class="w-full grid scroll-table-header" :style="{ gridTemplateColumns, height: `${props.rowHeight}px` }">
        <div v-for="item in props.columns" :key="item.key" class="scroll-table-header-item">
          {{ item.title }}
        </div>
      </div>
      <div
        v-for="i, ii in [...data, ...data, ...data]" :key="ii"
        class="grid scroll-table-row h-40px justify-center items-center"
        :style="{ height: list[ii] ? `${props.rowHeight}px` : 0, transition, gridTemplateColumns }"
      >
        <div v-for="item in props.columns" :key="item.key" class="scroll-table-row-item">
          <component :is="item.render(i, ii % data.length)" v-if="item.render" />
          <template v-else>
            {{ (i[item.key as keyof T] ?? '') }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-table {
  width: 100%;
  overflow: auto;
  overflow: hidden;

}

.scroll-table-header,
.scroll-table-row {
  /* 禁止触发事件 */
  pointer-events: none;
}

.scroll-table-row {
  overflow: hidden;
}
</style>
