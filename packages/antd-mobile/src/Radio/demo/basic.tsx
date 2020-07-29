import * as React from 'react'
import {
  unstable_Radio as Radio,
  unstable_List as List,
} from '@ant-design/mobile'

const { Group, Item } = Radio

export default () => {
  return (
    <>
      <Group
        name="demo1"
        defaultValue="3"
        onChange={e => {
          console.log(e)
        }}
      >
        <Item value="1" brief="选啥呢">
          第一个
        </Item>
        <Item value="2">第二个</Item>
        <Item value="3">第三个</Item>
        <Item value="4" disabled>
          第四个
        </Item>
      </Group>
    </>
  )
}
