# Server-side Rendering / SSR <Experimental></Experimental>

The support for SSR (server-side rendering) is still in the initial stage. If you find bugs during use, please submit an issue to us.

## Next.js

Using antd-mobile in Next.js requires some additional configuration.

First, you need to install `next-transpile-modules`:

```bash
$ npm install --save-dev next-transpile-modules
# or
$ yarn add -D next-transpile-modules
```

Then configure it in `next.config.js`:

```js
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM({
  // other Next.js configuration in your project
});
```

## Remix

In the Remix project, antd-mobile will automatically import the corresponding files according to the current environment. In the server-side environment, antd-mobile will only load the js part of the logic, so you need to manually import `antd-mobile/bundle/antd-mobile.css`.
