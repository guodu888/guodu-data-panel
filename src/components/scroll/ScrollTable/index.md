# 滚动表格

## 参数

```ts
interface Column {
  key: string
  title: string
  span?: number
  render?: (row: T, index: number) => VNode
}

const props = withDefaults(defineProps<{
  data: T[]
  columns: Column[]
  rowNum?: number
  rowHeight?: number
}>(), {
  rowNum: 5,
  rowHeight: 40,
})
```

<demo />

```vue
<script setup lang="ts">
import ScrollTable from './index.vue'

interface Student {
  id: number
  name: string
  age: number
  address: string
}

const data = ref<Student[]>([
  { id: 1, name: '张三', age: 18, address: '北京' },
  { id: 2, name: '李四', age: 19, address: '上海' },
  { id: 3, name: '王五', age: 20, address: '广州' },
  { id: 4, name: '赵六', age: 21, address: '深圳' },
  { id: 5, name: '田七', age: 22, address: '杭州' },
  { id: 6, name: '周八', age: 23, address: '南京' },
  { id: 7, name: '吴九', age: 24, address: '苏州' },
  { id: 8, name: '郑十', age: 25, address: '成都' },
  { id: 9, name: '钱十一', age: 26, address: '重庆' },
  { id: 10, name: '孙十二', age: 27, address: '武汉' },
])

const columns = [
  { key: 'index', title: '#', render(_: Student, i: number) {
    return h('div', { class: 'scroll-table-row-item-index' }, i + 1)
  } },
  { key: 'id', title: 'ID' },
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'address', title: '地址' },
]
</script>

<template>
  <div class="p-3">
    <ScrollTable :data="data" :columns="(columns as any)" />
  </div>
</template>

<style scoped>
:deep(.scroll-table-header) {
  background-color: rgb(0, 186, 255);
  color: white;
}
:deep(.scroll-table-header-item),
:deep(.scroll-table-row-item) {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 奇数的一个颜色 */
:deep(.scroll-table-row):nth-child(odd) {
  background-color: #003B51;
  color: white;
}
/* 偶数的一个颜色 */
:deep(.scroll-table-row):nth-child(even) {
  background-color: #0A2732;
  color: white;
}

:deep(.scroll-table-row-item-index) {
  color: white;
  background-color: rgb(0, 186, 255);
  border-radius: 4px;
  padding: 0 5px;
}
</style>
```
