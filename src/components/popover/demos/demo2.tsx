import React from 'react'
import { DemoBlock } from 'demos'
import { Button, Popover, Toast } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/popover'
import {
  AntOutline,
  HandPayCircleOutline,
  ScanningOutline,
  TransportQRcodeOutline,
} from 'antd-mobile-icons'

const actions: Action[] = [
  { key: 'scan', icon: <ScanningOutline />, text: '扫一扫' },
  { key: 'payment', icon: <HandPayCircleOutline />, text: '付钱/收钱' },
  { key: 'bus', icon: <TransportQRcodeOutline />, text: '乘车码' },
  { key: 'assistant', icon: <AntOutline />, text: '智能助理' },
]

export default () => {
  return (
    <>
      <DemoBlock title='浅色的气泡菜单'>
        <Popover.Menu
          actions={actions}
          placement='bottom-start'
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          trigger='click'
        >
          <Button>点我</Button>
        </Popover.Menu>
      </DemoBlock>

      <DemoBlock title='深色的气泡菜单'>
        <Popover.Menu
          mode='dark'
          actions={actions}
          placement='right-start'
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          trigger='click'
        >
          <Button>点我</Button>
        </Popover.Menu>
      </DemoBlock>

      <DemoBlock title='不含图标的气泡菜单'>
        <Popover.Menu
          actions={actions.map(action => ({
            ...action,
            icon: null,
          }))}
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          placement='bottom-start'
          trigger='click'
        >
          <Button>点我</Button>
        </Popover.Menu>
      </DemoBlock>
    </>
  )
}
