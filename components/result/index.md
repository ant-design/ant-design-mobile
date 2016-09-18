---
category: UI Views
type: UI Views
chinese: 结果页
english: Result
---


在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

### 规则
- 用作非常重要的操作反馈，eg：支付成功，无网络状态。
- 个性化且优美的插画，可以提升品牌形象。
- 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。

## API


### Result
| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| imgUrl    | 插图URL        | string |    |
| title    |    title文案     | String/HTML |    |
| message    |    message文案     | String/HTML |    |
| buttonText    |    按钮文案     | string |    |
| buttonType    |    请参考button的配置     | string |    |
| buttonClick    |    按钮回调函数     | Func |    |
