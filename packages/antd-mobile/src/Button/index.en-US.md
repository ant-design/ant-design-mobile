---
title: Button
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### SPECIAL

<code src="./demo/special.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| type | 按钮类型 | 'default'\|'primary'\|'ghost'\|'warn' | 'default' |
| disabled | 禁用 | boolean | false |
| onPress | 点击回调 | (e?: React.SyntheticEvent) => void | - |
| className | 类名 | string | '' |
| activeClassName | 激活时类名 | string | '' |
| subTitle | 副文案 | string | '' |
| capsule | 是否胶囊按钮 | boolean | false |
| capsuleSize | 胶囊按钮尺寸 | 'sm'\|'md'\|'lg' | 'md' |
| capsuleAutoWidth | disabled min-width of capsule | boolean | false |
| icon | 图标 | React.ReactNode\|Icon | - |
| loading | 加载状态, 胶囊按钮不支持 | boolean | false |
| loadingText | 加载文字 | string | 正在加载 |
