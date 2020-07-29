import * as React from 'react'
import { unstable_Tag as Tag } from '@ant-design/mobile'
import { Left, Add, Close, Check } from '@ant-design/mobile-icons'
import { useSelect } from '../../_internal/demo'
import './demo.less'

export default () => {
  const [state, view] = useSelect({
    type: {
      desc: '类型',
      v: 'filling',
      type: 'radio',
      options: ['filling', 'filling-light', 'line', 'icon'],
    },
    size: {
      desc: '尺寸',
      v: '',
      type: 'radio',
      options: ['', 'sm'],
    },
  })

  const addProps = {
    type: state.type,
    size: state.size || undefined,
    component: state.type === 'icon' ? Add : undefined,
  }

  return (
    <div className="demo-tag">
      {view}
      <Tag {...addProps}>蓝色</Tag>
      <Tag theme="tangerine" {...addProps}>
        橘红
      </Tag>
      <Tag theme="orange" {...addProps}>
        橘黄
      </Tag>
      <Tag theme="green" {...addProps}>
        绿色
      </Tag>
    </div>
  )
}
