# Icon 图标

图标是在一个单独的 npm 包中，如果你想使用图标，需要先安装它：

```bash
npm install --save antd-mobile-icons
# or
yarn add antd-mobile-icons
```

然后从这个包中引入你所需要的图标即可：

```js
import { AntOutline } from 'antd-mobile-icons'
```

由于主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。

## 图标列表

<code src="./demo-all.tsx" inline="true"></code>

## 使用示例

<code src="./demo-single.tsx"></code>
