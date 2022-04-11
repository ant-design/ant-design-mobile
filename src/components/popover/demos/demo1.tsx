import React, { useEffect, useState } from 'react'
import { Popover, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { PopoverProps } from '../popover'

export default () => {
  const [placement, setPlacement] =
    useState<PopoverProps['placement']>('top-start')

  useEffect(() => {
    let current = 0

    const timer = window.setInterval(() => {
      if (current >= directionList.length - 1) {
        current = 0
      } else {
        current += 1
      }
      setPlacement(directionList[current])
    }, 2000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <>
      <DemoBlock title='基本的气泡'>
        <Popover
          content='Hello World'
          trigger='click'
          placement='right'
          defaultVisible
        >
          <Button>点我</Button>
        </Popover>
      </DemoBlock>

      <DemoBlock title='深色背景' padding='12px 12px 64px'>
        <Popover
          content='Hello World'
          placement='bottom-start'
          mode='dark'
          trigger='click'
          visible
        >
          <Button>点我</Button>
        </Popover>
      </DemoBlock>

      <DemoBlock title='多种位置'>
        <Popover
          key={placement}
          visible
          content={
            <>
              Popover
              <br />
              Content
            </>
          }
          placement={placement}
        >
          <div
            style={{
              margin: '32px auto',
              background: 'var(--adm-color-light)',
              height: 100,
              width: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
          >
            {placement}
          </div>
        </Popover>
      </DemoBlock>
    </>
  )
}

const directionList = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
] as const
