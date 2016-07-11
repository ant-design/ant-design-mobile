---
category: Components
type: Components
chinese: 文字提醒
english: Tooltip
---


### 定义／Definition

文字提示是一个简短的提示浮层来帮助用户理解界面中的元素。

### 规则 / Rule

- 点击icon后出现提示，移除消失，气泡浮层不承载复杂文本和操作。
- 气泡浮层最多承载一行文本15个汉字，最多不超过2行。

## API

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | bootomLeft    |
| title     | 提示文字                                 | string/React.Element | 无     |

更多 API 可参考：https://github.com/react-component/tooltip
