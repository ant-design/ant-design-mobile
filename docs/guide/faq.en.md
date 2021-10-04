# FAQ

### Why did you jump from v2 to v5? Where did v3 and v4 go?

V2 has been released a long time ago. In the last two years, we have developed two versions of v3 and v4 within the company, but they have not been released to the community in the end. We will release the v5 version to the community simultaneously.

### Should I start using the v5 version now?

If you have enough energy to pay attention to v5's [change log](https://github.com/ant-design/ant-design-mobile/releases) and continue to follow up on the upgraded version, then start to access v5 now No problem.

For old projects, we recommend that you carefully consider whether you want to upgrade now based on the actual situation; for new projects, we recommend using the v5 version directly to avoid the cost of a second upgrade in the future.

### How to solve the error after installing antd-mobile v5 in the umi project?

If you introduce an error like the following when you introduce antd-mobile in the umi project:

```
These dependencies were not found:

* antd-mobile/es/button in ./src/pages/home-my/index.tsx
* antd-mobile/es/button/style in ./src/pages/home-my/index.tsx
...
```

Then you can try to add the following configuration in `config.js`:

```js
{
  antd: { mobile: false }
}
```

### 从 v2 如何迁移到 v5？

v5 is a completely rewritten version, so the difference between v2 and v5 is very big, and migration means that a lot of component replacements may be required.

In order to reduce the cost of migration, you can install antd-mobile v5 through aliases while keeping the v2 version:

```bash
$ npm install --save antd-mobile-v5@npm:antd-mobile@next
# or
$ yarn add antd-mobile-v5@npm:antd-mobile@next
```

The corresponding package.json is:

```json
{
  "antd-mobile": "^2.3.2",
  "antd-mobile-v5": "npm:antd-mobile@next"
}
```

In this way, the two versions can coexist temporarily, so that components can be replaced gradually.

```js
import { Button } from 'antd-mobile' // v2
import { Button } from 'antd-mobile-v5' // v5
```

### Which browsers are compatible?

The current compatibility standards are iOS >= 10 and Android >= 5.
