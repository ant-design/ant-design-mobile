import React from 'react'
import { Dropdown } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='避免自动关闭' padding={'0'}>
      <Dropdown closeOnMaskClick={false} closeOnClickAway={false}>
        <Dropdown.Item key='sorter' title='排序'>
          <div style={{ padding: 12 }}>
            内容
            <br />
            内容
            <br />
            内容
            <br />
            内容
            <br />
          </div>
        </Dropdown.Item>
      </Dropdown>
    </DemoBlock>
  )
}
