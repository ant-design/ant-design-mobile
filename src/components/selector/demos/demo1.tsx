import React from 'react'
import { Selector, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { options } from './options'

export default () => {
  return (
    <>
      <DemoBlock title='单选'>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>

      <DemoBlock title='多选'>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>

      <DemoBlock title='两列布局'>
        <Selector
          columns={2}
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
        />
      </DemoBlock>

      <DemoBlock title='三列布局'>
        <Selector
          columns={3}
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
        />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Space block direction='vertical'>
          <Selector options={options} defaultValue={['1']} disabled={true} />
          <Selector
            options={[
              {
                label: '选项一',
                value: '1',
              },
              {
                label: '选项二',
                value: '2',
                disabled: true,
              },
              {
                label: '选项三',
                value: '3',
              },
            ]}
            defaultValue={['3']}
          />
        </Space>
      </DemoBlock>
    </>
  )
}
