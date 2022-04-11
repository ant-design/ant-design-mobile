# Import On Demand

antd-mobile supports on-demand loading based on Tree Shaking, most of the build tools (such as webpack 4+ and rollup) support Tree Shaking, so **in most cases, you don't need to do additional configuration** to have better Small package size.

## Import On Demand Manually

If your environment does not support Tree Shaking, then you can manually introduce some components:

```js
import Button from 'antd-mobile/es/components/button'
```

It should be noted that **when manually loading on demand, you also need to import the `global` file in the entry file to load some antd-mobile global logic and styles**:

```js
import 'antd-mobile/es/global'
```

Of course, if you think the above writing method is too cumbersome, you can also use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) for automatic syntax conversion. It can be configured like this in `.babelrc`:

```js
module.exports = {
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es/components", "style": false}]
  ]
}
```

<Alert type="error">
  Even if you use `babel-plugin-import`, you still need to manually import the `global` file in the entry file.
</Alert>

It is not difficult to find that manual on-demand loading is very difficult to maintain, especially when there are multiple entry files in your project. So unless you have a sufficient understanding of the packaging and construction process and antd-mobile itself, we do not recommend this manual processing.
