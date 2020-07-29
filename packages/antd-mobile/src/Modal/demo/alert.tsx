import * as React from 'react'
import {
  unstable_Modal as Modal,
  unstable_Button as Button,
  unstable_Toast as Toast,
} from '@ant-design/mobile'

export default () => {
  const handle = () => {
    Modal.alert({
      title: '标题',
      content:
        '我是多个空格合并      我是换行\n内容我是内容我是内容我是内容我是内容',
      thumb:
        'https://img03.sogoucdn.com/app/a/100520093/e18d20c94006dfe0-9eef65073f0f6be0-5c34cd7c7bd3512a8d93e4a844f991dd.jpg',
    }).then(() => {
      Toast.success({
        content: '知道了',
        duration: 1,
      })
    })
  }

  const handle2 = () => {
    Modal.alert(
      {
        content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      },
      () => {
        Toast.success({
          content: '知道了',
          duration: 1,
        })
      },
    )
  }
  return (
    <div>
      <Button type="primary" onPress={handle}>
        带缩略图
      </Button>
      <br />
      <Button type="primary" onPress={handle2}>
        简单模式
      </Button>
    </div>
  )
}
