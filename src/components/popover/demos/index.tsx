import React, { useEffect, useState } from 'react'
import { Popover, Button, Toast } from 'antd-mobile'
import { UploadOutlined, SafetyOutlined } from '@ant-design/icons'
import { DemoBlock } from 'demos'

const directionList = [
  `top`,
  `topRight`,
  `rightTop`,
  `right`,
  `rightBottom`,
  `bottomRight`,
  `bottom`,
  `bottomLeft`,
  `leftBottom`,
  `left`,
  `leftTop`,
  `topLeft`,
] as const

type Union<T extends readonly string[]> = T[number]

export default () => {
  const [direction, setDirection] = useState<Union<typeof directionList>>('top')

  useEffect(() => {
    let current = 0

    const timer = window.setInterval(() => {
      if (current >= directionList.length - 1) {
        current = 0
      } else {
        current += 1
      }
      setDirection(directionList[current])
    }, 2000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <>
      <DemoBlock title='基本的气泡'>
        <Popover content='Hello World' placement={'right'} trigger='click'>
          <Button>touch me</Button>
        </Popover>
      </DemoBlock>
      <DemoBlock title='带菜单的气泡'>
        <Popover.Menu
          actions={[{ text: '菜单1' }, { text: '菜单2', disabled: true }]}
          onSelect={node => Toast.show(`选择了 ${node.text}`)}
          placement={'bottomLeft'}
          trigger='click'
        >
          <Button>touch me</Button>
        </Popover.Menu>
      </DemoBlock>
      <DemoBlock title='带图标的菜单气泡'>
        <Popover.Menu
          actions={[
            { text: '菜单1', icon: <UploadOutlined /> },
            { text: '菜单2', icon: <SafetyOutlined /> },
          ]}
          placement={'topRight'}
          onSelect={node => Toast.show(`选择了 ${node.text}`)}
          trigger='click'
        >
          <Button>touch me</Button>
        </Popover.Menu>
      </DemoBlock>
      <DemoBlock title='深色背景'>
        <Popover
          content='Hello World'
          placement={'right'}
          mode='dark'
          trigger='click'
        >
          <Button>touch me</Button>
        </Popover>
      </DemoBlock>
      <DemoBlock title='多种位置'>
        <Popover
          key={direction}
          visible
          content='Popover'
          placement={direction}
        >
          <div
            style={{
              margin: '32px auto',
              background: 'var(--am-color-light)',
              height: 100,
              width: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
          >
            {direction}
          </div>
        </Popover>
      </DemoBlock>
    </>
  )
}
