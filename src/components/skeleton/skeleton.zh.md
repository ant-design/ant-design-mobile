# Skeleton 骨架屏

用图形表示内容占位。

## 何时使用

在需要等待加载内容的位置提供一个占位图形组合。

## 示例

<code src="./demos/demo1.tsx"></code>

## Skeleton

### 属性

| 属性     | 说明             | 类型      | 默认值  |
| -------- | ---------------- | --------- | ------- |
| animated | 是否启用动画效果 | `boolean` | `false` |

### CSS 变量

| 属性            | 说明 | 默认值 |
| --------------- | ---- | ------ |
| --border-radius | 圆角 | `0`    |
| --height        | 高度 | `0`    |
| --width         | 宽度 | `100%` |

## Skeleton.Title

### 属性

同 Skeleton。

## Skeleton.Paragraph

### 属性

| 属性      | 说明 | 类型     | 默认值 |
| --------- | ---- | -------- | ------ |
| lineCount | 行数 | `number` | `3`    |

此外，还支持 Skeleton 的 `animated` 属性。
