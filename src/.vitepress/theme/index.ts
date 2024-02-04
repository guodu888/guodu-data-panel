// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'

// @ts-expect-error env
if (!import.meta.env.SSR) {
  import('echarts/core').then((echarts) => {
    import('echarts/charts').then(({ BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart }) => {
      echarts.use([
        BarChart,
        GaugeChart,
        LineChart,
        PictorialBarChart,
        PieChart,
        RadarChart,
        ScatterChart,
      ])
    })
    import('echarts/components').then(({ DataZoomComponent, DatasetComponent, GridComponent, LegendComponent, MarkAreaComponent, MarkLineComponent, PolarComponent, TitleComponent, ToolboxComponent, TooltipComponent, TransformComponent }) => {
      echarts.use([
        DataZoomComponent,
        DatasetComponent,
        GridComponent,
        LegendComponent,
        MarkAreaComponent,
        MarkLineComponent,
        PolarComponent,
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        TransformComponent,
      ])
    })
    import('echarts/features').then(({ LabelLayout, UniversalTransition }) => {
      echarts.use([
        LabelLayout,
        UniversalTransition,
      ])
    })
    import('echarts/renderers').then(({ CanvasRenderer }) => {
      echarts.use([
        CanvasRenderer,
      ])
    })
  })
}

export default {
  extends: DefaultTheme,
} satisfies Theme
