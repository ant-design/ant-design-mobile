# Dark Mode <Experimental></Experimental>

antd-mobile has a built-in dark mode theme, you only need to set the attribute `data-prefers-color-scheme="dark"` on the `html` tag of the page to enable it.

If you need to dynamically control the switching of dark mode, or you can't directly control the `html` tag, you can use js to set the attribute:

```js
document.documentElement.setAttribute(
   'data-prefers-color-scheme',
   'dark'
)
```

At present, the dark mode is still in the experimental stage, and the access method may be adjusted in the future. In addition, if you find that some components are not fully adapted to dark mode during use, please submit an [issue](https://github.com/ant-design/ant-design-mobile/issues/new/choose).

<code src="../../src/global/demos/dark-mode/demo1.tsx"></code>
