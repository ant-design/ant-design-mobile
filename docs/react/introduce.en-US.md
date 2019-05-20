---
order: 0
title: Ant Design Mobile of React
---

`antd-mobile` is the React implementation of the [Ant Design](http://ant.design)'s mobile specification, serving the ant and koubei wireless service.

<div class="pic-plus">
  <img width="160" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

## Features and Advantages

- The UI is fully Configurable and Scalable, easily adapt to all kinds of product style.
- Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes. (antd-mobile-rn)
- Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.
- Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development.
- Fully compatible with react / preact.

## Applicable Scenes

- Medium-sized and large-scale applications.
- Multi-terminal applications based on react / preact / react-native.
- Custom UI-style applications.

## Getting Started

> Before delving into Ant Design React, a good knowledge of [React](http://facebook.github.io/react/) and [ES2015](http://babeljs.io/docs/learn-es2015/) is needed.
>
> Make sure that you had installed [Node.js](https://nodejs.org/en/)(> v4.x) correctly.

### 1. Create a New Project

Can be an existing project, or a newly created empty project with [dva](https://github.com/dvajs/dva) / create-react-app, you can also copy and modify from the official example [scaffolding](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web).

> More official [examples](https://github.com/ant-design/antd-mobile-samples).
> Also, you can use any [scaffold](https://github.com/enaqx/awesome-react#boilerplates) available in React ecosystem.

### 2. Installation

```bash
$ npm install antd-mobile --save
```

### 3. Usage

Entry html page settings:

> Add [FastClick](https://github.com/ftlabs/fastclick) and set the html `meta` (more ref [#576](https://github.com/ant-design/ant-design-mobile/issues/576))
>
> Use Promise fallback support (some Android phones do not support Promise)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- set `maximum-scale` for some compatibility issues -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
  </script>
</head>
<body></body>
</html>
```

Example of usage:

```jsx
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

And import stylesheets manually:

```jsx
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
```

##### Use modularized antd-mobile

**Note: Strongly recommended.**

The following two ways used to load the **only components you used**, select one of the ways you like.

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { "libraryName": "antd-mobile", "style": "css" }] // `style: true` for less
     ]
   }
   ```

   This allows you to import components from antd-mobile without having to manually import the corresponding stylesheet. The babel plugin will automatically import stylesheets.

   ```jsx
   // import js and css modularly, parsed by babel-plugin-import
   import { DatePicker } from 'antd-mobile';
   ```

- Manually import

   ```jsx
   import DatePicker from 'antd-mobile/lib/date-picker';  // for js
   import 'antd-mobile/lib/date-picker/style/css';        // for css
   // import 'antd-mobile/lib/date-picker/style';         // that will import less
   ```

##### More enhanced (optional):

> Your custom UI library based on antd-mobile: [web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro)


## Version

- Stable: [![npm package](http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](http://npmjs.com/package/antd-mobile)
- Next: [![npm package](https://img.shields.io/npm/v/antd-mobile/next.svg)](http://npmjs.com/package/antd-mobile)

## Size

- Components are loaded on demand, in other words, components that are not imported are not packed.
- <p><a href="https://ant-design.github.io/ant-design-analysis/" target="_blank">The size and dependency analysis</a> of `./dist/antd-mobile.min.js`</p>

## Environment Support

- `iOS`
- `Android 4.0+`

## Links

- [Home Page](https://mobile.ant.design/)
- [Developer Instruction](http://github.com/ant-design/ant-design-mobile/blob/master/development.en-US.md)
- [React components](http://github.com/react-component)

## Companies using antd-mobile

- [Ant Financial](http://www.antgroup.com/index.htm?locale=en_US)
- [Alibaba](http://www.alibaba.com/)
- [Koubei](http://www.koubei.com/)

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md) first.

If you'd like to help us improve antd-mobile, just create a [Pull Request](https://github.com/ant-design/ant-design-mobile/pulls). Feel free to report bugs and issues [here](https://github.com/ant-design/ant-design-mobile/issues/new).

> If you're new to posting issues, we ask that you read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use antd, please post questions to [stackoverflow](http://stackoverflow.com/questions/tagged/antd) using the `antd`/`antd-mobile` tag. If you're not finding what you need on stackoverflow, you can find us on [gitter](https://gitter.im/ant-design/ant-design-mobile?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) as well.

As always, we encourage experienced users to help those who are not familiar with `antd`!

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design-mobile](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design-mobile?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
