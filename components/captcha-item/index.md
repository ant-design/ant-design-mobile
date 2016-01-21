# Captcha

- category: Components
- chinese: 校验码
- type: 表单

---

校验码

## 何时使用

看demo就了然了吧

## API

### Tab.Item
| 成员        | 说明           | 类型       |   可选值           | 默认值       |
|------------|----------------|--------------------|--------------|
| mode       | 校验码类型        | String | `sms`、`figure` |`sms`  |
| status       | 组件状态,有初始,发送中,已发送三种状态        | String |  `initial`、`sending`、`sent`  | `initial` |
| value       | 输入框value        | String |  | '' |
| onSend       | 点击重发验证码或者刷新验证图事件        | Func |    | |
| onChange       | 输入框value的change事件,一般由`rc-form`来提供,看例子     | Func |  |  |
| maxLength       | 输入文字长度限制	    | number |    | 6 |
| placeholder       | 输入提示文案        | String |    | '' |
| clear       | 是否出现清除按钮        | Bool |  true |  |
| seconds       | 倒计时总秒数,只对`sms`类型校验码有效        | number |  | 60  |
| tpl    |    读秒模板     | Func |    | '秒后重发' |
| pic    |    验证图地址     | String | |   |  |
| error    |    校验码错误     | Bool | |   | false |
