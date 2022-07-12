# 深色模式 <Experimental></Experimental>

antd-mobile 内置了一套深色模式的主题，你只需要在页面的 `html` 标签上设置属性 `data-prefers-color-scheme="dark"` 即可启用。

如果你需要动态控制深色模式的切换，或者是不能直接控制 `html` 标签，那么可以使用 js 来设置属性：

```js
document.documentElement.setAttribute(
  'data-prefers-color-scheme',
  'dark'
)
```

目前深色模式还在试验性阶段，未来可能会调整接入方式。另外，如果你在使用过程中，发现了某些组件对深色模式的适配不够完善，欢迎来提交 [issue](https://github.com/ant-design/ant-design-mobile/issues/new/choose)。

<code src="../../src/global/demos/dark-mode/demo1.tsx"></code>
