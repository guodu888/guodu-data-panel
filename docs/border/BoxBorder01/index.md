<script setup>
import demo from './demo.vue'
</script>

# 边框01

## 示例

<ClientOnly>
  <demo />
</ClientOnly>

## 使用

```vue
<BoxBorder01 class="w-full h-full" :colors="['#4FD2DDFF', '#235FA7FF']" :dur="1" background-color="#00000000">
  <div class="text-white w-full h-full flex justify-center items-center">
    BoxBorder01 Inner
  </div>
</BoxBorder01>
```

## 属性

|       参数        |     说明     |        类型        | 可选值 |          默认值          | 是否必填 |
| :---------------: | :----------: | :----------------: | :----: | :----------------------: | :------: |
|      `color`      |   边框颜色   | `[string, string]` |   -    | `['#4fd2dd', '#235fa7']` |    否    |
| `backgroundColor` |   背景颜色   |      `string`      |   -    |      `transparent`       |    否    |
|       `dur`       | 动画时长(秒) |      `number`      |   -    |           `1`            |    否    |
