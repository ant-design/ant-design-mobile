import * as React from 'react'
import {
  unstable_ActionSheet as ActionSheet,
  unstable_Button as Button,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

export default () => {
  const handle = (maskClosable: boolean, showTitle = true) => () => {
    ActionSheet.show(
      {
        title: showTitle ? '12345' : undefined,
        items: ['第1个', '第2个', { value: '第3个', warn: true }],
        maskClosable: maskClosable,
      },
      res => console.log('callback', res),
    ).then(res => {
      console.log('promise', res)
      Modal.alert({ content: `第 ${res.index} 个被点击` })
    })
  }

  const [state, view] = useSelect({
    maskClosable: {
      desc: '点击蒙层可关闭',
      v: false,
    },
    title: {
      desc: '是否有标题',
      v: false,
    },
  })

  return (
    <div>
      {view}
      <Button type="primary" onPress={handle(state.maskClosable, state.title)}>
        点击唤起 ActionSheet
      </Button>
    </div>
  )
}
