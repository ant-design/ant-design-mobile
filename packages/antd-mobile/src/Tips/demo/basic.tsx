import * as React from 'react'
import {
  unstable_Tips as Tips,
  unstable_Button as Button,
} from '@ant-design/mobile'
import { Alipay } from '@ant-design/mobile-icons'
import { useSelect } from '../../_internal/demo'
import './demo.less'

export default () => {
  const [show, setShow] = React.useState(true)

  const [state, view] = useSelect({
    offset: {
      desc: '箭头方向',
      v: '',
      type: 'radio',
      options: [
        '',
        'top',
        'top-start',
        'top-end',
        'right',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
      ],
    },
  })

  const addProps = {
    offset: state.offset,
  }
  return (
    <div className="demo-tips">
      <h3>{show ? '隐藏' : '显示'}</h3>
      <Button
        type="ghost"
        capsuleSize="sm"
        onPress={() => {
          setShow(!show)
        }}
      >
        点我{show ? '隐藏' : '显示'}
      </Button>

      <Tips
        className="default"
        show={show}
        showClose
        onClosePress={() => {
          setShow(false)
        }}
        content="箭头有8个方向。字数字数字数"
      />
      <h3>带按钮、关闭</h3>
      <Tips
        className="default"
        opText="操作按钮"
        showClose
        show
        content="箭头有8个方向。字数字数字数两行"
      />
      <Tips
        className="default defaul-icon"
        opText="操作按钮"
        showClose
        show
        icon={
          <img src="https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*x1LaT6Pn5MwAAAAAAAAAAABkARQnAQ" />
        }
        content="箭头有8个方向。字数字数字数两行"
      />
      <h3>左侧带图标</h3>
      <Tips
        className="default-icon"
        onButtonPress={() => {
          console.log('click')
        }}
        onClosePress={() => {
          console.log('close')
        }}
        icon={Alipay}
        opText="click me"
        showClose
        show
        content="箭头有8个方向。字数字数字数"
      />

      <h3>箭头</h3>
      {view}
      <Tips show={true} content="箭头有8个方向。字数字数字数" {...addProps} />
    </div>
  )
}
