# 预构建产物

antd-mobile 提供了一套预构建的产物，包括两部分：

js 资源：

```text
/bundle/antd-mobile.cjs.development.js
/bundle/antd-mobile.es.development.js
/bundle/antd-mobile.umd.development.js
```

上述带有 `.development` 的产物仅适用于开发环境，不适合用于生产环境。压缩优化后可用于生产环境的产物如下：

```text
/bundle/antd-mobile.cjs.js
/bundle/antd-mobile.es.js
/bundle/antd-mobile.umd.js
/bundle/antd-mobile.compatible.umd.js
```

其中我们提供了两个版本的 umd 文件，一个是未被 babel 处理的 `antd-mobile.umd.js`，兼容性为 `Chrome >= 61` `iOS >= 11`，另一个是经过 babel 处理的 `antd-mobile.compatible.umd.js`，兼容性为 `Chrome >= 49` `iOS >= 9`。

css 资源：

```text
/bundle/css-vars-patch.css
/bundle/style.css
```

这些预构建的 js 文件中是不包含 css 内容的，因此通常情况下，你需要选择性地引入某一个版本的 js 资源（例如 `/bundle/antd-mobile.umd.js`），然后再额外引入 `/bundle/style.css`。

你可以在 [unpkg](https://unpkg.com/browse/antd-mobile@5/bundle/) 或 [jsdelivr](https://www.jsdelivr.com/package/npm/antd-mobile?path=bundle) 上找到这些文件。
