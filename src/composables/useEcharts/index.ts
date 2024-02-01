import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts/core'

/**
 * Echarts hooks函数
 * @param options - 图表配置
 * @param renderFun - 图表渲染函数(例如：图表监听函数)
 * @lazyUpdate Useful when setOption frequently.
 * @description 按需引入图表组件，没注册的组件需要先引入
 */
export function useEcharts(
  options: Ref<EChartsOption> | ComputedRef<EChartsOption>,
  renderFun?: (chartInstance: echarts.ECharts) => void,
  lazyUpdate = true,
) {
  const domRef = ref<HTMLElement | null>(null)

  const initialSize = { width: 0, height: 0 }
  const { width, height } = useElementSize(domRef, initialSize)

  let chart: echarts.ECharts | null = null

  function canRender() {
    return initialSize.width > 0 && initialSize.height > 0
  }

  function isRendered() {
    return Boolean(domRef.value && chart)
  }

  function update(updateOptions: EChartsOption) {
    if (isRendered())
      chart!.setOption({ ...updateOptions, backgroundColor: 'transparent' }, lazyUpdate)
  }

  async function render() {
    if (domRef.value) {
      await nextTick()
      chart = echarts.init(domRef.value)
      if (renderFun)
        renderFun(chart)

      update(options.value)
    }
  }

  function resize() {
    chart?.resize()
  }

  function destroy() {
    chart?.dispose()
  }

  const stopSizeWatch = watch([width, height], ([newWidth, newHeight]) => {
    initialSize.width = newWidth
    initialSize.height = newHeight
    if (newWidth === 0 && newHeight === 0) {
      // 节点被删除 将chart置为空
      chart = null
    }
    if (canRender()) {
      if (!isRendered())
        render()

      else
        resize()
    }
  })

  const stopOptionWatch = watch(options, (newValue) => {
    update(newValue)
  })

  onUnmounted(() => {
    destroy()
    stopSizeWatch()
    stopOptionWatch()
  })

  return {
    domRef,
  }
}
