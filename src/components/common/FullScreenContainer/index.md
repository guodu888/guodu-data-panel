# 全屏容器

全屏容器会根据`width`与`height`自动缩放到撑满屏幕。

## 使用

```vue
<FullScreenContainer :width="200" :height="100">
    全屏容器
</FullScreenContainer>
```

## 示例

请查看[示例](/demo)中的大屏示例。

## 参数

+ `width`: `number` - 宽度(px)
+ `height`: `number` - 高度(px)

## 最佳实践

可以使用`VueUse`中的[`useFullscreen`](https://vueuse.org/core/useFullscreen/#usefullscreen)实现全屏切换。
