# FAQ

### Does it support mini program?

antd-mobile itself only supports React stack.

For Alipay mini programs, you can use [antd-mini](https://mini.ant.design/).

There is no corresponding twin component library for mini programs on WeChat and other platforms, and community members are welcome to develop them.

### Does it support React Native?

No. Consider using [antd-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn).

### Why did you jump from v2 to v5? Where did v3 and v4 go?

V2 has been released a long time ago. In the last two years, we have developed two versions of v3 and v4 within the company, but they have not been released to the community in the end.

### Should I start using the v5 version now?

For new projects, we recommend using the v5 version directly.

For old projects, we recommend a gradual [migration plan](/guide/migration).

### How to check the exact version of antd-mobile installed in the project?

Open `node_modules/antd-mobile/package.json`, the value of the `version` field is the exact version of antd-mobile installed in the current project.

### How to solve the error after installing antd-mobile v5 in the umi project?

Due to the conflict between the old version of the umi plugin and antd-mobile v5, you may encounter errors similar to the following:

```
These dependencies were not found:

* antd-mobile/es/button in ./src/pages/home-my/index.tsx
* antd-mobile/es/button/style in ./src/pages/home-my/index.tsx
...
```

The solution is to upgrade the plug-in:

1. If your project relies on `@umijs/preset-react` (you can see it in the `package.json` file), please upgrade it to the latest version
2. If your project relies on `@umijs/plugin-antd` (you can see it in the `package.json` file), please upgrade it to the latest version
3. If your project has no dependencies on the above two npm packages, you can install the latest version of the `@umijs/plugin-antd-mobile` plugin

### How do I migrate from v2 to v5?

Please refer to the [migration guide](/guide/migration).

### How to avoid the 300ms delay of click?

Add this into `head` element：

```html
<meta name="viewport" content="width=device-width">
```

Or add some global style:

```css
html {
  touch-action: manipulation;
}
```

For the detailed explanation, please refer to:

- [300ms tap delay, gone away](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away)
- [More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)

### In my project, the component gesture operation of antd-mobile cannot take effect, how to solve it?

Please check if fastclick is introduced in the project, if so, try to remove it and try again.

### About React Hot Loader

React Hot Loader is relatively intrusive to the project, and many components in antd-mobile (such as Swiper Tabs Form TabBar SideBar Dropdown Space Steps) are not compatible with it, and React Hot Loader itself is also recommended in the README. Don't use it anymore, so please consider removing React Hot Loader or replacing it with [React Fast Refresh](https://github.com/facebook/react/issues/16604).

### How to write a duplicate demo on CodesandBox

Codesandbox is a browser-side sandbox runtime environment that supports a variety of popular build templates and can be used for rapid prototyping, DEMO presentations, Bug recovery, and more.

1. create a CodesandBox

   visit https://codesandbox.io/s/antd-mobile-snrxr to create a codesandbox online example

2. To ensure accurate reproduction, make sure that the version of your bug is the same as the antd-mobile version in the CodesandBox dependency.

3. When you're done reliving the code, don't forget to `save` to create a new instance, and then click the Share button appearing in the upper right corner to copy the URL to Issues.

### What is the `import xxx from 'demos'` that appears in the documentation demo?

`demos` is not an npm package, but an alias created in the antd-mobile project. Its implementation is [here](https://github.com/ant-design/ant-design-mobile/blob/master/src/demos/index.ts).

Please don't try `npm install demos`. You can just ignore them.

### Does antd-mobile have umd package on CDN?

Yes, please refer to [this document](/guide/pre-built-bundles) for specific usage.
