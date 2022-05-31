import React, { useState } from 'react'
import { Button, CenterPopup } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo1.less'

export default () => {
  const [visible, setVisible] = useState(true)
  return (
    <DemoBlock title='中心弹出的弹层'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        打开
      </Button>
      <CenterPopup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
      >
        <div className={styles.myContent}>Hello</div>
      </CenterPopup>
    </DemoBlock>
  )
}
