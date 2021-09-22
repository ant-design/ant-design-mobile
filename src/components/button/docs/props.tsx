import React from 'react'
import { createPropsTable } from 'demos'

// | color       | 按钮的颜色                   | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'     | 'default' |
// | fill        | 填充模式                     | 'solid' \| 'outline' \| 'none'                                   | 'solid'   |
// | size        | 大小                         | 'mini' \| 'small' \| 'middle' \| 'large'                         | 'middle'  |
// | block       | 是否是块级元素               | boolean                                                          | `false`     |
// | disabled    | 是否禁用                     | boolean                                                          | false     |
// | loading     | 是否处于加载状态             | boolean                                                          | false     |
// | loadingText | 加载状态下额外展示的文字     | string                                                           | -         |
// | onClick     | 点击事件                     | (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | -         |
// | type        | 原生 button 元素的 type 属性 | 'submit' \| 'reset' \| 'button'                                  | -         |

export default createPropsTable({
  color: {
    description: '按钮的颜色',
    type: `'default' | 'primary' | 'success' | 'warning' | 'danger'`,
    default: `'default'`,
  },
  fill: {
    description: '填充模式',
    type: `'solid' | 'outline' | 'none'`,
    default: `'solid'`,
  },
  size: {
    description: '大小',
    type: `'mini' | 'small' | 'middle' | 'large'`,
  },
  block: {
    description: '是否是块级元素',
    default: `false`,
  },
  disabled: {
    description: '是否禁用',
  },
  loading: {
    description: '是否处于加载状态',
  },
  loadingText: {
    description: '加载状态下额外展示的文字',
  },
  onClick: {
    description: '点击事件',
  },
  type: {
    description: '原生 button 元素的 type 属性',
  },
})
