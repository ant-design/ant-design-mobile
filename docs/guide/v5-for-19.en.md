# React 19 Compatibility

<Alert type="info">
  antd-mobile v5 compatibility with React 16 ~ 18 by default. For React 19, you can use the following compatibility methods to adapt. This compatibility method and interface will be removed in the next major version.
</Alert>

### React 19 Compatibility Issues

Since React 19 adjusted the export method of `react-dom`, antd-mobile cannot directly use the `ReactDOM.render` method. Therefore, using antd-mobile will encounter the following problems:

- React 19 RC react-dom no longer exports createRoot [#6635](https://github.com/ant-design/ant-design-mobile/issues/6635)
- Toast not supported in the latest React version [#6842](https://github.com/ant-design/ant-design-mobile/issues/6842)
- Uncaught (in promise) TypeError: reactRender is not a function [#6814](https://github.com/ant-design/ant-design-mobile/issues/6814)

Therefore, you need to use a compatibility configuration to make antd-mobile work properly in React 19.

### Compatibility Methods

#### unstableSetRender

`unstableSetRender` is a low-level registration method that allows developers to modify the rendering method of ReactDOM. Write the following code at the entry of your application:

```js
import { unstableSetRender } from 'antd-mobile' // Support since version ^5.39.1
import { createRoot } from 'react-dom/client'

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container)
  const root = container._reactRoot
  root.render(node)
  return async () => {
    await new Promise(resolve => setTimeout(resolve, 0))
    root.unmount()
  }
})
```
