# HD Adaptation <Experimental></Experimental>

In some projects, you may want to use 2 times the size of the style file. In order to reduce your access cost, antd-mobile has built-in a set of preprocessed 2 times the size of the code, placed in the `2x` subdirectory.

You can replace the import of `antd-mobile` in the project with `antd-mobile/2x`, so that a 2x version of the component is loaded, for example:

```js
import { Button } from 'antd-mobile'
// ⬇️
import { Button } from 'antd-mobile/2x'

import 'antd-mobile/es/global'
// ⬇️
import 'antd-mobile/2x/es/global'
```

If you think it is too troublesome to add an extra `2x` every time you import it, you can consider configuring an alias from `antd-mobile` to `antd-mobile/2x` in webpack. For specific configuration methods, please refer to [webpack documentation ](https://webpack.js.org/configuration/resolve/#resolvealias).

If you are using the umi framework, you can directly install the latest version of `@umijs/preset-react` or `@umijs/plugin-antd-mobile`, and then configure in `config.js`:

```js
{
  antdMobile: {
    hd: true
  }
}
```

It is worth mentioning that you need to take care of your imports. Please don't write both `import xxx from 'antd-mobile'` and `import xxx from 'antd-mobile/2x'` in one same project.
