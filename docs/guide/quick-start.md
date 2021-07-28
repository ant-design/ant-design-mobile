# 快速上手

## 安装

```bash
$ npm install --save antd-mobile@alpha
# or
$ yarn add antd-mobile@alpha
```

## 引入

需要先在入口文件（例如 `app.ts`）中引入样式文件：

```js
import 'antd-mobile/es/index.css'
```

如果是 2 倍布局的话（例如 750 高清方案），需要引入 2x 版本的样式文件：

```js
import 'antd-mobile/es/index@2x.css'
```

接下来就可以正常地使用组件了，例如：

```js
import { Button } from 'antd-mobile'
```
