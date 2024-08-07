import React, { useState } from 'react'
import { Avatar, Button, Segmented } from 'antd-mobile'
import { AppOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

const defaultOptions = ['Daily', 'Weekly', 'Monthly']

export default () => {
  const [value, setValue] = useState<string | number>('Map')

  const [options, setOptions] = useState(defaultOptions)
  const [moreLoaded, setMoreLoaded] = useState(false)

  const handleLoadOptions = () => {
    setOptions([...defaultOptions, 'Quarterly', 'Yearly'])
    setMoreLoaded(true)
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} />
      </DemoBlock>

      <DemoBlock title='`block` 属性使其适合父元素宽度'>
        <Segmented block options={[123, 456, 'long-long-long']} />
      </DemoBlock>

      <DemoBlock title='受控的 Segmented'>
        <Segmented
          options={['Map', 'Transit', 'Satellite']}
          value={value}
          onChange={setValue}
        />
      </DemoBlock>

      <DemoBlock title='禁用状态 1'>
        <Segmented
          options={[
            'Daily',
            { label: 'Weekly', value: 'Weekly', disabled: true },
            'Monthly',
            { label: 'Yearly', value: 'Yearly', disabled: true },
          ]}
        />
      </DemoBlock>

      <DemoBlock title='禁用状态 2'>
        <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
      </DemoBlock>

      <DemoBlock title='动态数据'>
        <Segmented options={options} />
        <Button
          style={{ marginTop: 10 }}
          size='mini'
          disabled={moreLoaded}
          onClick={handleLoadOptions}
        >
          Load more options
        </Button>
      </DemoBlock>

      <DemoBlock title='设置图标'>
        <Segmented
          options={[
            {
              label: 'List',
              value: 'List',
              icon: <UnorderedListOutline />,
            },
            {
              label: 'Kanban',
              value: 'Kanban',
              icon: <AppOutline />,
            },
          ]}
        />
      </DemoBlock>

      <DemoBlock title='只设置图标'>
        <Segmented
          options={[
            {
              value: 'List',
              icon: <UnorderedListOutline />,
            },
            {
              value: 'Kanban',
              icon: <AppOutline />,
            },
          ]}
        />
      </DemoBlock>

      <DemoBlock title='自定义渲染 1'>
        <Segmented
          options={[
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar src='https://joeschmoe.io/api/v1/random' />
                  <div>User 1</div>
                </div>
              ),
              value: 'user1',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar src='https://joeschmoe.io/api/v1/random' />
                  <div>User 2</div>
                </div>
              ),
              value: 'user2',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar src='https://joeschmoe.io/api/v1/random' />
                  <div>User 3</div>
                </div>
              ),
              value: 'user3',
            },
          ]}
        />
      </DemoBlock>

      <DemoBlock title='自定义渲染 2'>
        <Segmented
          options={[
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Spring</div>
                  <div>Jan-Mar</div>
                </div>
              ),
              value: 'spring',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Summer</div>
                  <div>Apr-Jun</div>
                </div>
              ),
              value: 'summer',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Autumn</div>
                  <div>Jul-Sept</div>
                </div>
              ),
              value: 'autumn',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Winter</div>
                  <div>Oct-Dec</div>
                </div>
              ),
              value: 'winter',
            },
          ]}
        />
      </DemoBlock>
    </>
  )
}
