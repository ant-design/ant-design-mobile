import React from 'react'
import { Selector } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'

export default () => {
  const ItemList = [
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
    {
      label: '选项四',
      value: '4',
    },
  ]

  return (
    <div>
      <DemoBlock title='单选'>
        <Selector
          options={ItemList}
          defaultValue={['1']}
          onChange={arr => console.log(arr)}
        ></Selector>
      </DemoBlock>
      <DemoBlock title='多选'>
        <Selector
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={arr => console.log(arr)}
        ></Selector>
      </DemoBlock>
      <DemoBlock title='全局禁止'>
        <Selector
          options={ItemList}
          defaultValue={['1']}
          disabled={true}
          onChange={arr => console.log(arr)}
        ></Selector>
      </DemoBlock>
      <DemoBlock title='固定两列'>
        <Selector
          columns={2}
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={arr => console.log(arr)}
        ></Selector>
      </DemoBlock>
      <DemoBlock title='固定三列'>
        <Selector
          columns={3}
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={arr => console.log(arr)}
        ></Selector>
      </DemoBlock>
    </div>
  )
}
