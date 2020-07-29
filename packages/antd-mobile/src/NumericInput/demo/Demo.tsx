import * as React from 'react'
import { unstable_List as List } from '@ant-design/mobile'

const Demo: React.FC<{ desc: string; brief?: string }> & {
  ignore: boolean
} = props => {
  return (
    <List.Item extra={props.children} brief={props.brief}>
      {props.desc}
    </List.Item>
  )
}

Demo.ignore = true

export default Demo
