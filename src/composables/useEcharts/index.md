<script setup>
import { defineClientComponent } from 'vitepress'
const PictorialBar = defineClientComponent(() => {
  return import('./demo/PictorialBar.vue')
})
const BarRace = defineClientComponent(() => {
  return import('./demo/BarRace.vue')
})
</script>

# useEcharts

## 使用

```ts
/**
 * Echarts hooks函数
 * @param options - 图表配置
 * @param renderFun - 图表渲染函数(例如：图表监听函数)
 * @lazyUpdate Useful when setOption frequently.
 * @description 按需引入图表组件，没注册的组件需要先引入
 */
function useEcharts(options: Ref<EChartsOption> | ComputedRef<EChartsOption>, renderFun?: ((chartInstance: echarts.ECharts) => void) | undefined, lazyUpdate?: boolean): {
  domRef: globalThis.Ref<HTMLElement | null>
}
```

## 注意事项

+ 使用前先安装[`echarts`](https://echarts.apache.org/)
+ 使用前先将组件加载好，可以提前统一加载，例如：
```ts
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'
import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  PolarComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'

import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  PictorialBarChart,
  RadarChart,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  PolarComponent,
  MarkLineComponent,
  MarkAreaComponent,
  DataZoomComponent,
])
```

## 常见示例

### 象形柱图 pictorialBar

<ClientOnly>
    <PictorialBar/>
</ClientOnly>

### 动态排序柱状图 - 人均收入

<ClientOnly>
    <BarRace />
</ClientOnly>
