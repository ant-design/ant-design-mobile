# Server-side Rendering / SSR <Experimental></Experimental>

The support for SSR (server-side rendering) is still in the initial stage. If you find bugs during use, please submit an issue to us.

## Next.js

Using antd-mobile in Next.js requires some additional configuration.

First, you need to install `next-transpile-modules` and `next-compose-plugins`:

```bash
$ npm install --save-dev next-transpile-modules next-compose-plugins
# or
$ yarn add -D next-transpile-modules next-compose-plugins
# or
$ pnpm add -D next-transpile-modules next-compose-plugins
```

Then configure it in `next.config.js`:

```js
const nextConfig = {
  // other Next.js configuration in your project
}
const withPlugins = require("next-compose-plugins");

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withPlugins(
  [[withTM]],
  nextConfig
);
```

## Remix

Using antd-mobile in Remix requires some additional configuration.

Add antd-mobile config in `tsconfig.json` `compilerOptions.paths` field, Add `global.d.ts` in `include` field:

```json
{
  "include": ["remix.env.d.ts", "global.d.ts", "**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    ...
    "paths": {
      "antd-mobile": ["node_modules/antd-mobile/bundle/antd-mobile.es.js"]
    }
  }
}
```

Add `global.d.ts` file in project root dir.

```ts
declare module 'antd-mobile' {
  export * from 'antd-mobile/es';
}
```

Import style file in `app/root.tsx`:

```ts
import styles from "antd-mobile/bundle/style.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
```

- [remix template](https://github.com/3lang3/antd-mobile-template/tree/main/remix)
