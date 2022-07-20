# FAQ

### 支持小程序吗？

antd-mobile 本身只支持 React 技术栈。

对于支付宝小程序，可以使用 [antd-mini](https://mini.ant.design/)。

微信和其他平台的小程序暂时还没有对应的孪生组件库，欢迎社区同学开发。

### 支持 React Native 吗？

不支持。可以考虑使用 [antd-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn)。

### 为什么从 v2 直接跳跃到了 v5？v3 和 v4 跑到哪里去了？

v2 已经是很久之前发布的版本了，最近两年在公司内部，我们开发了 v3 v4 两个版本，但最终并未发布到社区上。

### 我应该现在开始使用 v5 版本吗？

对于新项目，我们推荐直接使用 v5 版本。

对于旧项目，我们建议采用渐进式的[迁移方案](/zh/guide/migration)。

### 如何查看项目中安装的 antd-mobile 的准确版本？

打开 `node_modules/antd-mobile/package.json`，里面 `version` 字段的值就是当前项目中安装的 antd-mobile 的准确版本。

### umi 项目安装 antd-mobile v5 后报错如何解决？

由于旧版本的 umi 插件和 antd-mobile v5 有一定的冲突，所以你可能会遇到类似下面这样的报错：

```
These dependencies were not found:

* antd-mobile/es/button in ./src/pages/home-my/index.tsx
* antd-mobile/es/button/style in ./src/pages/home-my/index.tsx
...
```

解决方法就是对插件进行一下升级：

1. 如果你的项目中依赖了 `@umijs/preset-react` （可以在 `package.json` 文件中看到），那么请把它升级到最新版
2. 如果你的项目中依赖了 `@umijs/plugin-antd` （可以在 `package.json` 文件中看到），那么请把它升级到最新版
3. 如果你的项目中上述两个 npm 包都没有依赖，那么可以安装最新版的 `@umijs/plugin-antd-mobile` 插件

### 从 v2 如何迁移到 v5？

请参考[迁移指南](/zh/guide/migration)。

### 如何避免 300ms 的点击延迟？

在 `head` 中增加以下内容：

```html
<meta name="viewport" content="width=device-width">
```

或者增加以下全局样式：

```css
html {
  touch-action: manipulation;
}
```

具体请参考这两篇文章：

- [300ms tap delay, gone away](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away)
- [More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)

### 在我的项目中，antd-mobile 的组件手势操作无法生效，该怎么解决？

请检查项目中是不是引入了 fastclick，如果有的话，尝试移除掉再试一下。

### 关于 React Hot Loader

React Hot Loader 对项目有比较大的侵入性， 而 antd-mobile 中的很多组件（例如 Swiper Tabs Form TabBar SideBar Dropdown Space Steps）并不能和它兼容，而且 React Hot Loader 本身也在 README 中写了推荐大家不要再使用，所以请考虑移除 React Hot Loader 或将其替换为 [React Fast Refresh](https://github.com/facebook/react/issues/16604)。

### 如何在 codesandbox 上写一个复现 demo

codesandbox 是一个浏览器端的沙盒运行环境，支持多种流行的构建模板，可以用于快速原型开发、DEMO 展示、Bug 还原等等。

1. 创建一个 codesandbox

   访问 https://codesandbox.io/s/antd-mobile-snrxr 创建一个 codesandbox 的在线示例

2. 为了保证准确复现，请保证你出现 bug 的版本与 codesandbox 依赖中的 antd-mobile 版本一致。

3. 完成代码复现后，别忘了`保存`以创建一个新的实例，然后点击右上角出现的 share 按钮，复制 url。

### 文档 demo 中出现的 `import xxx from 'demos'` 是什么？

`demos` 并不是一个 npm 包，而是 antd-mobile 项目中创建的一个别名。它的实现在[这里](https://github.com/ant-design/ant-design-mobile/blob/master/src/demos/index.ts)。

请不要尝试 `npm install demos`。你可以直接忽略它们。

### antd-mobile 有 CDN 上的 umd 包吗？

有的，具体用法请参考[这篇文档](/zh/guide/pre-built-bundles)。
