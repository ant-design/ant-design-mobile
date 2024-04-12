# ConfigProvider 配置

用于全局配置本地化文案和个性化图标。

## 何时使用

- 您想使用除英文之外的语言。
- 您想使用自己的图标集，而不是内置的 `antd-mobile-icons`。

## 示例

<code src="./demos/demo1.tsx" ></code>

<code src="./demos/demo2.tsx" ></code>

## ConfigProvider

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 本地化文案 | `Locale` | [zh-CN] |
| checkList | CheckList 配置 | `{ activeIcon?: ReactNode }` | - |
| collapse | Collapse 配置 | `{ arrowIcon?: ReactNode \| ((active: boolean) => ReactNode) }` | - |
| dropdown | Dropdown 配置 | `{ arrowIcon?: ReactNode }` | - |
| form | Form 配置 | `{ helpIcon?: ReactNode }` | - |
| input | Input 配置 | `{ clearIcon?: ReactNode }` | - |
| list | List 配置 | `{ arrowIcon?: ReactNode }` | - |
| navBar | NavBar 配置 | `{ backIcon?: ReactNode }` | - |
| noticeBar | NoticeBar 配置 | `{ icon?: ReactNode, closeIcon?: ReactNode }` | - |
| popup | Popup 配置 | `{ closeIcon?: ReactNode }` | - |
| result | Result 配置 | `{ successIcon?: ReactNode, errorIcon?: ReactNode, infoIcon?: ReactNode, waitingIcon?: ReactNode, warningIcon?: ReactNode }` | - |
| searchBar | SearchBar 配置 | `{ icon?: ReactNode }` | - |
| toast | Toast 配置 | `{ successIcon?: ReactNode, failIcon?: ReactNode, loadingIcon?: ReactNode }` | - |

[zh-CN]: https://github.com/ant-design/ant-design-mobile/blob/master/src/locales/zh-CN.ts
