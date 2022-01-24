# FAQ

### Does it support mini program?

antd-mobile itself only supports React stack.

We are currently developing the corresponding Alipay mini program version, which is expected to be released as a separate component library in the near future.

There is no corresponding twin component library for mini programs on WeChat and other platforms, and community members are welcome to develop them.

### Does it support React Native?

No. Consider using [antd-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn).

### Why did you jump from v2 to v5? Where did v3 and v4 go?

V2 has been released a long time ago. In the last two years, we have developed two versions of v3 and v4 within the company, but they have not been released to the community in the end. We will release the v5 version to the community simultaneously.

### Should I start using the v5 version now?

For new projects, we recommend using the v5 version directly.

For old projects, we recommend a gradual [migration plan](./migration).

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

Please refer to the [migration guide](./migration).

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
