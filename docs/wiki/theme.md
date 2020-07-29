# 主题定制

利用了 [less-loader](https://github.com/webpack-contrib/less-loader#less-options) 的 modifyVars 来进行主题配置。

```
{
  loader: 'less-loader',
  options: {
    modifyVars: {
      '@color-brand-1': 'xxx'
    }
  }
}
```

umi 的配置见 https://umijs.org/config/#lessloaderoptions

可定制的变量见 [alipay-style](https://code.alipay.com/Yan-1/alipay-style/blob/master/style/theme/default.less)
