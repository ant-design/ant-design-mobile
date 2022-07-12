# 高清适配

在部分项目中，你可能希望使用 2 倍大小的样式文件，antd-mobile 为了降低你的接入成本，内置了一套经过预处理的 2 倍大小的代码，放置在 `2x` 子目录下。

你可以把项目中对 `antd-mobile` 的 import 替换为 `antd-mobile/2x`，这样加载的就是 2 倍大小版本的组件了，例如：

```js
import { Button } from 'antd-mobile'
// ⬇️
import { Button } from 'antd-mobile/2x'

import 'antd-mobile/es/global'
// ⬇️
import 'antd-mobile/2x/es/global'
```

如果你觉得每次引入都要额外加个 `2x` 太麻烦，可以考虑在 webpack 中配置一个从 `antd-mobile` 到 `antd-mobile/2x` 的别名，具体的配置方法请参考 [webpack 文档](https://webpack.js.org/configuration/resolve/#resolvealias)。

如果你使用的是 umi 框架，那么可以直接安装最新版的 `@umijs/preset-react` 或 `@umijs/plugin-antd-mobile`，然后在 `config.js` 中配置：

```js
{
  antdMobile: {
    hd: true
  }
}
```

需要特别注意的是，在同一个项目中，请不要混用 `import xxx from 'antd-mobile'` 和 `import xxx from 'antd-mobile/2x'`，这很有可能会导致严重的样式问题。因此，我们更推荐你使用上文提到的别名的方案进行配置。
