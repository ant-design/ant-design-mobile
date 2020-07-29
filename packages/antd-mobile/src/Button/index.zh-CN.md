---
title: 按钮
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 特别的

<code src="./demo/special.tsx" />

### 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | 'default'\|'primary'\|'ghost'\|'warn' | 'default' |
| disabled | 禁用 | boolean | false |
| onPress | 点击回调 | (e?: React.SyntheticEvent) => void | - |
| className | 类名 | string | '' |
| activeClassName | 激活时类名 | string | '' |
| subTitle | 副文案 | string | '' |
| capsule | 是否胶囊按钮 | boolean | false |
| capsuleSize | 胶囊按钮尺寸 | 'sm'\|'md'\|'lg' | 'md' |
| capsuleAutoWidth | 胶囊按钮默认有个最小宽度，如果设置此属性，则不会有 | boolean | false |
| icon | 图标 | React.ReactNode\|Icon | - |
| loading | 加载状态 | boolean | false |
| loadingText | 加载文字 | string | 'Loading' |
