# 快速开始

> 首先感谢大佬提供的[DataV](http://datav.jiaminghi.com/),由于`Vue3`版本的迟迟未出，故开次新档。

## 安装

```shell
pnpm add guodu-data-panel
```

> 推荐使用[`pnpm`](https://pnpm.io/)<br>
> 推荐使用[`@antfu/ni`](https://github.com/antfu/ni)

## 使用

```vue
<script setup>
import { BoxBorder01 } from 'guodu-data-panel'
</script>

<template>
  <BoxBorder01 />
</template>
```

:::danger 注意
使用前需要将全局的css引入
```js
import 'guodu-data-panel/lib/index.css'
```
:::
