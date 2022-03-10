import React from 'react'
import { Popover, Checkbox } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='配合 Checkbox'>
        <Popover
          content='Hello World'
          trigger='click'
          placement='top-start'
          defaultVisible
        >
          <Checkbox id='123'>
            请确认
            <a
              onClick={e => {
                console.log(e)
              }}
            >
              《服务协议》
            </a>
          </Checkbox>
        </Popover>
      </DemoBlock>
    </>
  )
}
