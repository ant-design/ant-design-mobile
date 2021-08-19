# 高清适配（试验性）

在部分项目中，你可能希望使用 2 倍大小的样式文件，antd-mobile 为了降低你的接入成本，内置了一套经过预处理的 2 倍大小的代码，放置在 `2x` 子目录下。

你可以把项目中对 `antd-mobile` 的 import 替换为 `antd-mobile/2x`，这样加载的就是 2 倍大小版本的组件了，例如：

```js
import { Button } from 'antd-mobile'
// ⬇️
import { Button } from 'antd-mobile/2x'
```

如果你觉得每次引入都要额外加个 `2x` 太麻烦，可以考虑在 webpack 中配置一个从 `antd-mobile` 到 `antd-mobile/2x` 的别名，具体的配置方法请参考 [webpack 文档](https://webpack.js.org/configuration/resolve/#resolvealias)或 [umi 文档](https://umijs.org/zh-CN/config#alias)。
