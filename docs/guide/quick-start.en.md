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

If you are using the umi framework, it is recommended to read "[How to solve the error after installing antd-mobile v5 in the umi project?](./faq#how-to-solve-the-error-after-installing-antd-mobile-v5-in-the-umi-project)" in the FAQ.

## Compatibility

We recommend adding the following babel configuration, so that maximum compatibility can be achieved (iOS Safari `>= 10` and Chrome `>= 49`):

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

For TypeScript, antd-mobile is compatible with versions `>= 3.8`.

For React, antd-mobile is compatible with versions `^16.8.0` and `^17.0.0`.

<Alert type="warning">
  Compatibility for React 18 is still in progress, please follow <a target="_blank" href="https://github.com/ant-design/ant-design-mobile/issues/5044">this issue</a>.
</Alert>

## Playground

If you don't want to configure your environment locally, you can also try it directly on [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) or [stackblitz](https://stackblitz.com/edit/antd-mobile?file=index.tsx).

## Discussion Groups

- [DingDing](https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*hBjlR4nUWjkAAAAAAAAAAAAAARQnAQ)
- [Discord](https://discord.gg/jmNvw4WFYn)
