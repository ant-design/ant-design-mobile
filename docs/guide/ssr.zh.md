# 服务端渲染 / SSR <Experimental></Experimental>

对 SSR（服务端渲染）的支持目前还处在比较初始的阶段，如果你在使用过程中发现了 bug，欢迎向我们提交 issue。

> 在 5.9.0 版本中，我们调整了 SSR 的适配方案，下文中的介绍是针对于最新版的 antd-mobile 的
>
> 对于 < 5.9.0 版本的 antd-mobile，请参阅[此处](https://github.com/ant-design/ant-design-mobile/blob/c1ff75ddb23270f2ef56288ea5f142001cc6763f/docs/guide/ssr.zh.md)

antd-mobile 会根据当前所处的环境自动 import 对应的文件，所以你无需做额外的配置。

但是需要注意的是，**在 SSR 环境（也就是 node 环境）中，antd-mobile 不会自动加载 CSS 文件**，因此，你需要在 SSR 环境中手动引入 `bundle/antd-mobile.css`。
