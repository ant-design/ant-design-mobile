import { DemoBlock } from 'demos'
import { Button, Popover, Toast } from 'antd-mobile'
import { CheckShieldOutline, UploadOutline } from 'antd-mobile-icons'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='气泡菜单'>
        <Popover.Menu
          actions={[{ text: '菜单1' }, { text: '菜单2', disabled: true }]}
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          placement='bottomLeft'
          trigger='click'
        >
          <Button>touch me</Button>
        </Popover.Menu>
      </DemoBlock>

      <DemoBlock title='带图标的气泡菜单'>
        <Popover.Menu
          actions={[
            { text: '菜单1', icon: <UploadOutline /> },
            { text: '菜单2', icon: <CheckShieldOutline /> },
          ]}
          placement='topRight'
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          trigger='click'
        >
          <Button>touch me</Button>
        </Popover.Menu>
      </DemoBlock>
    </>
  )
}
