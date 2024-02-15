<script setup>
import { defineClientComponent } from 'vitepress'
const DemoActiveRingChart = defineClientComponent(() => {
  return import('./demo.vue')
})

</script>

# 动态圆环

## 示例

[示例源码](https://github.com/shy1118999/guodu-data-panel/blob/main/src/components/chart/ActiveRingChart/demo.vue)

<ClientOnly>
    <DemoActiveRingChart />
</ClientOnly>

:::danger 提示
当前示例是用`useEcharts`实现的，未导出组件，详细使用方法请参考源码。
:::
