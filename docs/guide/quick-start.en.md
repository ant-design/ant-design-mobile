# Quick Start

## Installation

```bash
$ npm install --save antd-mobile
# or
$ yarn add antd-mobile
```

## Import

Just import the component directly and antd-mobile will automatically load css style files:

```js
import { Button } from 'antd-mobile'
```

If you are developing an internal project in alibaba group or ant group, please read [this additional guide](https://yuque.antfin.com/antd-mobile/kfcgs3/md4or5).

## Compatibility

If you don't do any additional processing, then antd-mobile default compatibility is iOS Safari >= 10 and Chrome >= 51 (that is, ES6 compatibility standard).

With the following babel configuration, maximum compatibility can be achieved for iOS Safari >= 10 and Chrome >= 49:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "10"
        }
      }
    ]
  ]
}
```

For TypeScript, antd-mobile is compatible with versions >= 3.8.

For React, antd-mobile is compatible with versions >= 16.8.0.

## Playground

If you don't want to configure your environment locally, you can also try it directly on [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json).

## Discussion Groups

- [DingDing](https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*hBjlR4nUWjkAAAAAAAAAAAAAARQnAQ)
- [Discord](https://discord.gg/jmNvw4WFYn)
