<script setup>
import { defineClientComponent } from 'vitepress'
const DemoMap = defineClientComponent(() => {
  return import('./demo.vue')
})

</script>

# 地图

<ClientOnly>
    <DemoMap />
</ClientOnly>

:::danger 提示
当前示例是用`useEcharts`实现的，未导出组件，详细使用方法请参考源码。
:::
