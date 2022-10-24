# Quick Start

## Installation

```bash
$ npm install --save antd-mobile
# or
$ yarn add antd-mobile
# or
$ pnpm add antd-mobile
```

## Import

Just import the component directly and antd-mobile will automatically load css style files:

```js
import { Button } from 'antd-mobile'
```

If you are developing an internal project in alibaba group or ant group, please read [this additional guide](https://yuque.antfin.com/antd-mobile/kfcgs3/md4or5).

If you are using the umi framework, it is recommended to read "[How to solve the error after installing antd-mobile v5 in the umi project?](/guide/faq#how-to-solve-the-error-after-installing-antd-mobile-v5-in-the-umi-project)" in the FAQ.

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

<Alert type="warning">
  Do not exclude node_modules from babel compilation, otherwise the above configuration will not work
</Alert>

For TypeScript, antd-mobile is compatible with versions `>= 3.8`.

For React, antd-mobile is compatible with versions `^16.8.0` and `^17.0.0`.

Since iOS 9 does not support CSS variables, if you need to support iOS 9, please refer to [this document](/guide/css-variables#css-variables-auto-fallback) to enable automatic CSS variable degradation, and set target ios in babel configuration to `9`.

## Playground

If you don't want to configure your environment locally, you can also try it directly on [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) or [stackblitz](https://stackblitz.com/edit/antd-mobile?file=index.tsx).

## Discussion Groups

- [DingDing](https://user-images.githubusercontent.com/22469543/197447477-1f10603d-90e9-43ea-a023-6538c5cf40e2.jpeg)
- [Discord](https://discord.gg/jmNvw4WFYn)

## Contributing

Everyone are welcomed to join the community of antd-mobile. If you want to contribute, please refer to [this guide](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md).
