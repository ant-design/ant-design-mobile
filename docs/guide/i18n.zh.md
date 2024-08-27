# 国际化

### ConfigProvider

antd-mobile 提供了 [ConfigProvider](../components/config-provider) 组件用于全局配置国际化文案。

```jsx
import { ConfigProvider } from "antd-mobile";
import enUS from 'antd-mobile/es/locales/en-US'

return (
  <ConfigProvider locale={enUS}>
    <App />
  </ConfigProvider>
)
```

目前支持以下语言：

| 语言                 | 文件名 |
| -------------------- | ------ |
| 简体中文             | zh-CN  |
| 繁体中文（中国香港） | zh-HK  |
| 繁体中文（中国台湾） | zh-TW  |
| 英语（美式）         | en-US  |
| 波斯语               | fa-IR  |
| 西班牙语             | es-ES  |
| 韩语                 | ko-KR  |
| 日语                 | ja-JP  |
| 哈萨克语             | kk-KZ  |
| 印度尼西亚语         | id-ID  |
| 印度尼西亚语（旧版） | in-ID  |
| 意大利语             | it-IT  |
| 丹麦语               | da-DK  |
| 挪威                 | nb-NO  |
| 荷兰语               | nl-NL  |
| 俄罗斯语             | ru-RU  |
| 土耳其语             | tr-TR  |
| 泰语                 | th-TH  |
| 法语                 | fr-FR  |
| 德语                 | de-DE  |
| 马来语               | ms-MY  |
| 阿拉伯语             | ar-SA  |
| 葡萄牙语             | pt-BR  |
| 越南语               | vi-VN  |
| 克罗地亚语           | hr-HR  |
| 塞尔维亚语           | sr-RS  |
| 黑山语               | cnr-ME |

具体的使用方法请参考 [ConfigProvider](../components/config-provider) 文档。

### 增加语言包

如果你找不到你需要的语言包，欢迎你在 [英文语言包](https://github.com/ant-design/ant-design-mobile/blob/master/src/locales/en-US.ts) 的基础上创建一个新的语言包，并给我们发一个 Pull Request。 [语言对照表](http://www.lingoes.net/en/translator/langcode.htm)

基本步骤如下：

1. 在 `src/locales` 中增加语言包。
2. 在 [config-provider.test.tsx](https://github.com/ant-design/ant-design-mobile/blob/master/src/components/config-provider/tests/config-provider.test.tsx) 添加改语言的测试用例。
3. 运行 `pnpm test -u` 命令，更新 snapshots。
4. （可选）更新文档 [i18n.zh.md](https://github.com/ant-design/ant-design-mobile/blob/master/docs/guide/i18n.zh.md) 和 [i18n.en.md](https://github.com/ant-design/ant-design-mobile/blob/master/docs/guide/i18n.en.md)，增加语言列表。

## FAQ

### 为什么组件指令式的调用不支持 ConfigProvider？

以 Modal 为例，直接调用 `Modal.show` 方法，antd-mobile 会通过 ReactDOM.render 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

可以通过 `setDefaultConfig` 设置默认语言

```jsx
import { setDefaultConfig } from 'antd-mobile'

setDefaultConfig({
  locale: enUS,
})
```
