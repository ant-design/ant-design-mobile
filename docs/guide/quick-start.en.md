# Quick Start

## Installation

```bash
$ npm install --save antd-mobile@next
# or
$ yarn add antd-mobile@next
```

## Import

Just import the component directly and antd-mobile will automatically load css style files:

```js
import { Button } from 'antd-mobile'
```

If you are developing an internal project in alibaba group or ant group, please read [this additional guide](https://yuque.antfin.com/antd-mobile/kfcgs3/md4or5).

## Compatibility

The current compatibility standards are iOS Safari >= 10 and Chrome >= 49.

However, it is needed to add some babel config in your project:

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

And of course, you can adjust the `targets` config according to your requirements. Or just don't do babel transpiling.

## Playground

If you don't want to configure your environment locally, you can also try it directly on [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json).

## Discussion Groups

- [DingDing](https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*hBjlR4nUWjkAAAAAAAAAAAAAARQnAQ)
- [Discord](https://discord.gg/jmNvw4WFYn)
