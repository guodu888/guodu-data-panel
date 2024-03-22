import type { VNode } from 'vue'

export interface TableColumn<T = any> {
  key: string
  title: string
  span?: number
  render?: (row: T, index: number) => VNode
}
