import * as React from 'react'
import { unstable_Selector as Selector } from '@ant-design/mobile'
import { SelectorItemType } from '../PropsType'

function handleChange(selectedItems: SelectorItemType[]) {
  console.log(selectedItems)
}

export default () => {
  const [v, setV] = React.useState([2])
  return (
    <>
      <h3>single choice</h3>
      <Selector
        onChange={handleChange}
        defaultValue={[1]}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
          },
        ]}
      />
      <h3>multiple choices</h3>
      <Selector
        multiple={true}
        onChange={handleChange}
        defaultValue={[1, 2]}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
          },
          {
            text: '选项三',
            value: 3,
          },
        ]}
      />
      <h3>multiple lines</h3>
      <Selector
        onChange={handleChange}
        defaultValue={[1]}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
          },
          {
            text: '选项三',
            value: 3,
          },
          {
            text: '选项四',
            value: 4,
          },
          {
            text: '选项五',
            value: 5,
          },
          {
            text: '选项六',
            value: 6,
          },
          {
            text: '选项七',
            value: 7,
          },
        ]}
      />
      <h3>disable specific items</h3>
      <Selector
        onChange={handleChange}
        defaultValue={[1]}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
            disabled: true,
          },
          {
            text: '选项三',
            value: 3,
          },
        ]}
      />
      <h3>sub text</h3>
      <Selector
        onChange={handleChange}
        defaultValue={[1]}
        items={[
          {
            text: '选项一',
            subText: '描述文案',
            value: 1,
          },
          {
            text: '选项二',
            subText: '描述文案',
            value: 2,
          },
        ]}
      />
      <h3>controller</h3>
      <Selector
        value={v}
        onChange={v => {
          setV(v)
        }}
        items={[
          {
            text: '选项一',
            value: 1,
          },
          {
            text: '选项二',
            value: 2,
          },
        ]}
      />
    </>
  )
}
