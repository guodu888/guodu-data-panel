<script setup>
import { defineClientComponent } from 'vitepress'
const DemoMap = defineClientComponent(() => {
  return import('./demo.vue')
})

</script>

# 地图

可以从[阿里云DataV数据可视化平台](https://datav.aliyun.com/portal/school/atlas/area_selector)获取`geo json`

## 示例

[示例源码](https://github.com/shy1118999/guodu-data-panel/blob/main/src/components/chart/GeoMap/demo.vue)

<ClientOnly>
    <DemoMap />
</ClientOnly>

:::danger 提示
当前示例是用`useEcharts`实现的，未导出组件，详细使用方法请参考源码。
:::
