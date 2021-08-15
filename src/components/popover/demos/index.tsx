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
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <DemoBlock background='gray' title='基本的气泡'>
        <Popover content='Hello World' placement={'right'}>
          <Button>touch me</Button>
        </Popover>
      </DemoBlock>
      <DemoBlock background='gray' title='带菜单的气泡'>
        <Popover.Menu
          actions={[{ text: '菜单1' }, { text: '菜单2', disabled: true }]}
          onSelect={node => Toast.show({ content: `选择了 ${node.text}` })}
          placement={'bottomLeft'}
        >
          <Button>touch me</Button>
        </Popover.Menu>
      </DemoBlock>
      <DemoBlock background='gray' title='带图标的菜单气泡'>
        <Popover.Menu
          actions={[
            { text: '菜单1', icon: <UploadOutlined /> },
            { text: '菜单2', icon: <SafetyOutlined /> },
          ]}
          placement={'topRight'}
          onSelect={node => Toast.show({ content: `选择了 ${node.text}` })}
        >
          <Button>touch me</Button>
        </Popover.Menu>
      </DemoBlock>
      <DemoBlock background='gray' title='黑色背景'>
        <Popover content='Hello World' placement={'right'} mode='dark'>
          <Button>touch me</Button>
        </Popover>
      </DemoBlock>
      <DemoBlock background='gray' title='受控模式'>
        <Popover
          key={direction}
          visible
          content='Popover'
          placement={direction}
        >
          <div
            style={{
              marginLeft: '50%',
              transform: 'translateX(-50%)',
              background: 'white',
              height: 100,
              width: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {direction}
          </div>
        </Popover>
      </DemoBlock>
    </>
  )
}
