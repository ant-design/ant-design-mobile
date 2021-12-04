import React, { useState, FC } from 'react'
import { Button, Mask, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo1.less'

// 基础用法
const Simple: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>显示遮罩层</Button>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} />
    </>
  )
}

// 自定义内容
const WithContent: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div className={styles.overlayContent}>内容</div>
      </Mask>
      <Button onClick={() => setVisible(true)}>显示带内容的遮罩层</Button>
    </>
  )
}

// 遮罩层的颜色深度 - 深一些
const Thick: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity='thick'
      />
      <Button onClick={() => setVisible(true)}>显示深一些的遮罩层</Button>
    </>
  )
}

// 遮罩层的颜色深度 - 浅一些
const Thin: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity='thin'
      />
      <Button onClick={() => setVisible(true)}>显示浅一些的遮罩层</Button>
    </>
  )
}

// 遮罩层的颜色深度 - 自定义
const CustomOpacity: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity={1}
      />
      <Button onClick={() => setVisible(true)}>显示自定义透明度的遮罩层</Button>
    </>
  )
}

// 白色的遮罩层
const White: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>显示白色的遮罩层</Button>
      <Mask
        color='white'
        visible={visible}
        onMaskClick={() => setVisible(false)}
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Simple />
      </DemoBlock>

      <DemoBlock title='遮罩层的颜色深度'>
        <Space wrap>
          <Thin />
          <Thick />
          <CustomOpacity />
        </Space>
      </DemoBlock>

      <DemoBlock title='白色的遮罩层'>
        <White />
      </DemoBlock>

      <DemoBlock title='自定义内容'>
        <WithContent />
      </DemoBlock>
    </>
  )
}
