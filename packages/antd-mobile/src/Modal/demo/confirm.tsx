import * as React from 'react'
import {
  unstable_Modal as Modal,
  unstable_Button as Button,
  unstable_Toast as Toast,
} from '@ant-design/mobile'

export default () => {
  const handle = () => {
    Modal.confirm({
      content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
    }).then(res => {
      if (res) {
        Toast.success({
          content: '确认',
          duration: 1,
        })
      } else {
        Toast.warn({
          content: '取消',
          duration: 1,
        })
      }
    })
  }

  return (
    <div>
      <Button type="primary" onPress={handle}>
        简单模式
      </Button>
    </div>
  )
}
