# Empty 空状态

<Alert type="warning">
  Empty 组件已弃用，并将在下个大版本（v6）中被移除，建议切换到 ErrorBlock 组件。
</Alert>

使用场景插画表示内容为空。

## 何时使用

适用于于信息为空时的占位提示。

## 示例

<code src="./demos/demo1.tsx"></code>

## Empty

### 属性

| 属性        | 说明                                     | 类型            | 默认值 |
| ----------- | ---------------------------------------- | --------------- | ------ |
| description | 图片下方的描述文字                       | `ReactNode`     | -      |
| image       | 自定义图片，为 `string` 时表示图片 `URL` | `ReactNode`     | -      |
| imageStyle  | 图片样式                                 | `CSSProperties` | -      |
