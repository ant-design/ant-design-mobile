# Migrating from v2

v5 is a completely rewritten version, so there are lots of differences between v2 and v5. Actually, this shouldn't be called as "migration". It's about replacing one component library with another one.

In order to reduce the cost of migration, you can try to use some methods mentioned below to make v2 and v5 live alongside in your project at the same time.

## Method 1: Use antd-mobile-v2 (Recommended)

We have published a shadow npm package for v2 which is name as `antd-mobile-v2`. You can replace the v2 antd-mobile package in your project with this one.

First, install `antd-mobile-v2`:

```bash
$ npm install --save antd-mobile-v2
# or
$ yarn add antd-mobile-v2
```

And then, replace everything that uses `antd-mobile` with `antd-mobile-v2`. For example:

```jsx
import {Button} from 'antd-mobile'
// ⬇️
import {Button} from 'antd-mobile-v2'
```

Next, remove the old `antd-mobile` dependency. And try to run/test/build your project. Check if everything is working fine.

If you find that the component styles of v2 are lost at this time, you can manually import the style file in the entry file:

```js
import 'antd-mobile-v2/dist/antd-mobile.less';  // or 'antd-mobile-v2/dist/antd-mobile.css'
```

Finally, reinstall the `antd-mobile` package as v5:

```bash
$ npm install --save antd-mobile
# or
$ yarn add antd-mobile
```

Now, the `antd-mobile` in project is v5, and `antd-mobile-v2` is v2.

> Although the above approach is simple to operate, it may lead to the full import of v2 components, which will bring a certain amount of package size overhead. If you have such strict requirements on package volume, you can configure antd-mobile-v2 Let's take a look at babel-plugin-import. The specific configuration method will not be introduced here, and it needs to be analyzed in detail.
>
> However, please note that v5 components do not need to configure babel-plugin-import. When configuring, please be careful not to write the libraryName wrong.

## Method 2: Install v5 via alias

We recommend you to use the method 1. Although it requires a little bit migration work, it can make the whole migration process less costly and more steady.

Of course, in case your project doesn't seem to be suitable to use method 1, we provided a backup plan for you.

You can use npm alias to install v5:

```bash
$ npm install --save antd-mobile-v5@npm:antd-mobile@5
# or
$ yarn add antd-mobile-v5@npm:antd-mobile@5
```

And after that, the corresponding `package.json` is:

```json
{
  "antd-mobile": "^2.3.2",
  "antd-mobile-v5": "npm:antd-mobile@5"
}
```

Now, `antd-mobile` is v2 and `antd-mobile-v5` is v5.

```js
import { Button } from 'antd-mobile' // v2
import { Button } from 'antd-mobile-v5' // v5
```

Need to be noted, not every package manager has a well support for npm alias.
