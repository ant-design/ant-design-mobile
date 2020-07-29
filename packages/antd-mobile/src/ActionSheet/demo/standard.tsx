import * as React from 'react'
import {
  unstable_ActionSheet as ActionSheet,
  unstable_Button as Button,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

export default () => {
  const st = React.useRef<any>(null)
  const [state, view] = useSelect({
    steps: {
      desc: '分步',
      v: false,
    },
  })
  const handle = () => {
    st.current = ActionSheet.standard({
      title: '弹层标题',
      content: state.steps
        ? [
            <Button onPress={() => st.current.next()}>下一页</Button>,
            <>
              <Button onPress={() => st.current.prev()}>上一页</Button>
              <Button onPress={() => st.current.close()}>关闭</Button>
            </>,
          ]
        : '正常内容',
      onClose() {
        Modal.alert({
          content: '已关闭',
        })
      },
    })
  }

  return (
    <div>
      {view}
      <Button type="primary" onPress={handle}>
        点击唤起 ActionSheet.standard
      </Button>
    </div>
  )
}
