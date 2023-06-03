# Pre-Built Bundles

antd-mobile provides a set of pre-built bundles, consisting of two parts:

js resource:

```text
/bundle/antd-mobile.cjs.development.js
/bundle/antd-mobile.es.development.js
/bundle/antd-mobile.umd.development.js
```

The above bundles with `.development` are only meant for development, and are not suitable for production. Minified and optimized production bundles are available at:

```text
/bundle/antd-mobile.cjs.js
/bundle/antd-mobile.es.js
/bundle/antd-mobile.umd.js
/bundle/antd-mobile.compatible.umd.js
```

Among them, we provide two versions of umd files, one is `antd-mobile.umd.js` not processed by babel, the compatibility is `Chrome >= 61` `iOS >= 11`, the other is processed by babel `antd-mobile.compatible.umd.js`, compatibility is `Chrome >= 49` `iOS >= 9`.

css resource:

```text
/bundle/css-vars-patch.css
/bundle/style.css
```

These pre-built js files do not contain css content, so usually, you need to selectively import a certain version of js resources (such as `/bundle/antd-mobile.umd.js`), and then add additional Import `/bundle/style.css`.

You can find it at [unpkg](https://unpkg.com/browse/antd-mobile@5/bundle/) or [jsdelivr](https://www.jsdelivr.com/package/npm/antd-mobile?path =bundle).
