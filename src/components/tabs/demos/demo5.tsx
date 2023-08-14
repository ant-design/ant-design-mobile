import React, { useState } from 'react'
import { Tabs, Radio, Space, Divider, Switch } from 'antd-mobile'
import type { TabsProps } from 'antd-mobile'
import { DemoBlock } from 'demos'

const modes = ['auto', 'full', 'fixed'] as const

type ActiveLineMode = TabsProps['activeLineMode']

export default () => {
  const [rtl, setRtl] = useState(true)
  const [activeLineMode, setActiveLineMode] = useState<ActiveLineMode>('auto')

  return (
    <DemoBlock title='RTL' padding='0'>
      <Switch
        checkedText={'RTL'}
        uncheckedText={'LTR'}
        checked={rtl}
        onChange={v => {
          setRtl(v)
        }}
      />
      <Divider />
      activeLineMode:
      <Radio.Group
        value={activeLineMode}
        onChange={v => {
          setActiveLineMode(v as ActiveLineMode)
        }}
      >
        <Space>
          {modes.map(mode => (
            <Radio value={mode} key={mode}>
              {mode}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <Divider />
      <Tabs
        defaultActiveKey='1'
        style={{ marginTop: 12 }}
        direction={rtl ? 'rtl' : 'ltr'}
        activeLineMode={activeLineMode}
      >
        <Tabs.Tab title='Espresso' key='1'>
          1
        </Tabs.Tab>
        <Tabs.Tab title='Coffee Latte' key='2'>
          2
        </Tabs.Tab>
        <Tabs.Tab title='Cappuccino' key='3'>
          3
        </Tabs.Tab>
        <Tabs.Tab title='Americano' key='4'>
          4
        </Tabs.Tab>
        <Tabs.Tab title='Flat White' key='5'>
          5
        </Tabs.Tab>
        <Tabs.Tab title='Caramel Macchiato' key='6'>
          6
        </Tabs.Tab>
        <Tabs.Tab title='Cafe Mocha' key='7'>
          7
        </Tabs.Tab>
      </Tabs>
    </DemoBlock>
  )
}
