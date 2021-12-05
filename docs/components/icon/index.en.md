# Icon

The icons are in a separate npm package. If you want to use the icons, you need to install it first:

```bash
npm install --save antd-mobile-icons
# or
yarn add antd-mobile-icons
```

Then just import the icons you need from this package:

```js
import { AntOutline } from 'antd-mobile-icons'
```

Since the mainstream build tools automatically do Tree-Shaking, only the icons you use will be packaged in, so you don't have to worry about package size.

## Icon List

<code src="./demo-all.tsx" inline="true"></code>

## Example

<code src="./demo-single.tsx"></code>
