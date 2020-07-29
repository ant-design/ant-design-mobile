import * as React from 'react'
import { unstable_Container as Container } from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

export default () => {
  const [state, view] = useSelect({
    iconType: {
      desc: '图标',
      v: 'arrow',
      type: 'radio',
      options: ['arrow', 'close', 'more', ''],
    },
    thumb: {
      desc: '图片',
      v: false,
    },
  })

  const addProps = {
    icon: {
      type: state.iconType,
    },
    className: 'test',
    thumb: state.thumb
      ? 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
      : undefined,
  }

  return (
    <div>
      {view}
      <Container title="花见花开" {...addProps}>
        支付宝移动设计
      </Container>
    </div>
  )
}
