# PortalProvider 配置

让你能够像风一般自由地以 `hooks` 形式指令式调用 `Modal` 或者 `Popup` 等组件。

## 何时使用

- 假设您想试用 `useModal` 或者 `usePopup` (`🚧 假设本PR通过时`) 时需要 `PortalProvider`

## 示例

<code src="./demos/demo1.tsx" ></code>

## PortalProvider

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 需要用到 `useModal` 的子组件 (一般是应用入口) | `Locale` | [zh-CN] | - |
