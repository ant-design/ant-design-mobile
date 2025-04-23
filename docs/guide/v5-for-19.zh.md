# React 19 兼容

<Alert type="info">
  antd-mobile v5 默认兼容 React 16 ~ 18 版本，对于 React 19 版本，可以使用以下兼容方法进行适配。该兼容方式以及接口将在下一个 major 版本被移除。
</Alert>

### React 19 兼容问题

由于 React 19 调整了 `react-dom` 的导出方式，导致 antd-mobile 无法直接使用 `ReactDOM.render` 方法。因而使用 antd-mobile 会遇到以下问题：

- React 19 RC react-dom 不再导出 createRoot [#6635](https://github.com/ant-design/ant-design-mobile/issues/6635)
- Toast 在最新的 react 版本上不支持 [#6842](https://github.com/ant-design/ant-design-mobile/issues/6842)
- Uncaught (in promise) TypeError: reactRender is not a function [#6814](https://github.com/ant-design/ant-design-mobile/issues/6814)

因而需要通过兼容配置，使 antd-mobile 在 React 19 中正常工作。

### 兼容方式

#### unstableSetRender

`unstableSetRender` 为底层注册方法，允许开发者修改 ReactDOM 的渲染方法。在你的应用入口处写入：

```js
import { unstableSetRender } from 'antd-mobile'; // Support since version ^5.39.1
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
```
