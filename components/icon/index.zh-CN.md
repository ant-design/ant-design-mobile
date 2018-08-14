---
category: Components
type: Data Display
title: Icon
subtitle: 图标
---

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

```html
<Icon type="check" />
```

### 提示

现在，我们只支持内置的 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading' 这些 icon 类型。

**不再支持 自定义 icon**，如果需要用自定义的 icon 类型，有这几种方法：

1. 查看 [/docs/react/upgrade-notes](/docs/react/upgrade-notes#1.x-=>-2.0) 中 1.x => 2.0 的 svg icon 文档介绍
2. 使用自己的 iconfont 文件
3. 其他方法，可以复用我们已经提供的 `.am-icon` 样式名

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称   | String   |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg'  | `md` |
| color   | 图标颜色  | Color | '#000' |
