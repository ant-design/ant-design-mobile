import React, { useRef } from 'react'
import { Button, Dropdown } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { DropdownRef } from 'antd-mobile/es/components/dropdown'

export default () => {
  const ref = useRef<DropdownRef>(null)

  return (
    <DemoBlock title='点击内部按钮隐藏' padding={'0'}>
      <Dropdown ref={ref}>
        <Dropdown.Item key='sorter' title='排序'>
          <div style={{ padding: 12 }}>
            排序内容
            <br />
            排序内容
            <br />
            排序内容
            <br />
            排序内容
            <br />
          </div>
          <div style={{ padding: '0 12px 12px' }}>
            <Button
              color='primary'
              block
              onClick={() => {
                ref.current?.close()
              }}
            >
              确定
            </Button>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </DemoBlock>
  )
}
