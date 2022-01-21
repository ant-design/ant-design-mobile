# FAQ

### 支持小程序吗？

antd-mobile 本身只支持 React 技术栈。

目前我们正在开发对应的支付宝小程序版本，预计最近会作为一个单独的的组件库发布出来。

微信和其他平台的小程序暂时还没有对应的孪生组件库，欢迎社区同学开发。

### 支持 React Native 吗？

不支持。可以考虑使用 [antd-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn)。

### 为什么从 v2 直接跳跃到了 v5？v3 和 v4 跑到哪里去了？

v2 已经是很久之前发布的版本了，最近两年在公司内部，我们开发了 v3 v4 两个版本，但最终并未发布到社区上，此次 v5 版本我们将同步发布到社区。

### 我应该现在开始使用 v5 版本吗？

对于新项目，我们推荐直接使用 v5 版本。

对于旧项目，我们建议采用渐进式的[迁移方案](./migration)。

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

请参考[迁移指南](./migration)。

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
