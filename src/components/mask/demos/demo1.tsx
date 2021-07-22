import {Button, Mask} from 'antd-mobile'
import React, {useState, FC} from 'react'
import './demo1.less'

const Simple: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} />
      <Button onClick={() => setVisible(true)}>显示遮罩层</Button>
    </div>
  )
}

const WithContent: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div className='overlay-content'>内容</div>
      </Mask>
      <Button onClick={() => setVisible(true)}>显示带内容的遮罩层</Button>
    </div>
  )
}

const Dark: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity='dark'
      />
      <Button onClick={() => setVisible(true)}>显示深色的遮罩层</Button>
    </div>
  )
}

export default () => {
  return (
    <div className='overlay-container'>
      <Simple />
      <br />
      <WithContent />
      <br />
      <Dark />
    </div>
  )
}
