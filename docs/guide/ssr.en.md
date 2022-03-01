# Server-side Rendering / SSR <Experimental></Experimental>

The support for SSR (server-side rendering) is still in the initial stage. If you find bugs during use, please submit an issue to us.

## Next.js

Using antd-mobile in Next.js requires some additional configuration.

First, you need to install the dependencies `next-transpile-modules` and `next-images`:

```bash
$ npm install --save-dev next-transpile-modules next-images
# or
$ yarn add -D next-transpile-modules next-images
```

Then configure it in `next.config.js`:

```js
const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM(withImages({
  // other Next.js configuration in your project
}));
```
