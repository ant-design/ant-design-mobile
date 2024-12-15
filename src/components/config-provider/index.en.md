# ConfigProvider

Configure locale messages and custom icons globally.

## When to use

- You want to use other languages than English
- You want to use your own icon set instead of `antd-mobile-icons`

## Demos

<code src="./demos/demo1.tsx" ></code>

<code src="./demos/demo2.tsx" ></code>

## ConfigProvider

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| locale | Locale messages | `Locale` | [zh-CN] |
| checkList | CheckList config | `{ activeIcon?: ReactNode }` | - |
| collapse | Collapse config | `{ arrowIcon?: ReactNode \| ((active: boolean) => ReactNode) }` | - |
| dropdown | Dropdown config | `{ arrowIcon?: ReactNode }` | - |
| form | Form config | `{ helpIcon?: ReactNode }` | - |
| input | Input config | `{ clearIcon?: ReactNode }` | - |
| list | List config | `{ arrowIcon?: ReactNode }` | - |
| navBar | NavBar config | `{ backIcon?: ReactNode }` | - |
| noticeBar | NoticeBar config | `{ icon?: ReactNode, closeIcon?: ReactNode }` | - |
| popup | Popup config | `{ closeIcon?: ReactNode }` | - |
| result | Result config | `{ successIcon?: ReactNode, errorIcon?: ReactNode, infoIcon?: ReactNode, waitingIcon?: ReactNode, warningIcon?: ReactNode }` | - |
| searchBar | SearchBar config | `{ searchIcon?: ReactNode }` | - |
| toast | Toast config | `{ successIcon?: ReactNode, failIcon?: ReactNode, loadingIcon?: ReactNode }` | - |

[zh-CN]: https://github.com/ant-design/ant-design-mobile/blob/master/src/locales/zh-CN.ts
