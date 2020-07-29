import * as React from 'react'
import {
  unstable_Modal as Modal,
  unstable_Button as Button,
} from '@ant-design/mobile'

export default () => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Modal
        maskClosable
        type="product"
        visible={show}
        onClose={() => setShow(false)}
      >
        内容内容
      </Modal>

      <Button
        onPress={() => {
          setShow(true)
        }}
      >
        产品,点蒙层可关闭
      </Button>
    </>
  )
}
