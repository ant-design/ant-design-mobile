# Server-side Rendering / SSR <Experimental></Experimental>

The support for SSR (server-side rendering) is still in the initial stage. If you find bugs during use, please submit an issue to us.

> In version 5.9.0, we adjusted the adaptation scheme of SSR, the following introduction is for the latest version of antd-mobile
>
> For < 5.9.0 version of antd-mobile, see [here](https://github.com/ant-design/ant-design-mobile/blob/c1ff75ddb23270f2ef56288ea5f142001cc6763f/docs/guide/ssr.en.md)

antd-mobile will automatically import the corresponding files according to the current environment, so you do not need to do additional configuration.

But it should be noted that **in the SSR environment (that is, the node environment), antd-mobile will not automatically load CSS files**, therefore, you need to manually import `bundle/antd-mobile.css` in the SSR environment .
