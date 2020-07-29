import * as React from 'react'
import {
  unstable_InputItem as InputItem,
  unstable_List as List,
} from '@ant-design/mobile'
import { PhoneBookFill } from '@ant-design/mobile-icons'
import './demo.less'
export default () => {
  const [value, setValue] = React.useState('123123')
  return (
    <div className="demo-form">
      <h2>水平布局</h2>
      <InputItem
        autoFocus
        onBlur={v => {
          console.log('blur ', v)
        }}
        onFocus={v => {
          console.log('focus ', v)
        }}
        onChange={v => {
          console.log('onChange ', v)
          v && setValue(v)
        }}
        value={value}
        label="标题五个字"
        placeholder="自动聚焦"
      />
      <InputItem label="标题五个字" placeholder="自动聚焦" />
      <h4>自定义右侧图标、颜色</h4>
      <InputItem
        onBlur={v => {
          console.log('blur ', v)
        }}
        onFocus={v => {
          console.log('focus ', v)
        }}
        onChange={v => {
          console.log('onChange ', v)
        }}
        value="3333"
        label="标题五个字"
        placeholder="请输入"
        extra={PhoneBookFill}
        extraClassName={'extra-test'}
      />
      <InputItem
        onBlur={v => {
          console.log('blur ', v)
        }}
        onFocus={v => {
          console.log('focus ', v)
        }}
        onChange={v => {
          console.log('onChange ', v)
        }}
        label="标题五个字"
        placeholder="请输入"
        extra={
          <img
            src="https://gw.alipayobjects.com/zos/finxbff/compress-tinypng/8c003944-b9d7-49a9-83f3-0fa9dd2760ba.png"
            alt=""
          />
        }
        extraClassName={'extra-test'}
      />
      <h2>纵向布局</h2>
      <InputItem
        onBlur={v => {
          console.log('blur ', v)
        }}
        onFocus={v => {
          console.log('focus ', v)
        }}
        onChange={v => {
          console.log('onChange ', v)
        }}
        label="标题五个字"
        placeholder="请输入"
        vertical
        extra={PhoneBookFill}
        extraClassName={'extra-test'}
      />

      <h2>纵向布局-无icon</h2>
      <InputItem
        onBlur={v => {
          console.log('blur ', v)
        }}
        onFocus={v => {
          console.log('focus ', v)
        }}
        onChange={v => {
          console.log('onChange ', v)
        }}
        label="标题五个字"
        placeholder="请输入"
        vertical
        extraClassName={'extra-test'}
      />
      <h2>List</h2>
      <List>
        <List.Item>
          <InputItem
            autoFocus
            onBlur={v => {
              console.log('blur ', v)
            }}
            onFocus={v => {
              console.log('focus ', v)
            }}
            onChange={v => {
              console.log('onChange ', v)
            }}
            label="标题"
            placeholder="自动聚焦"
          />
        </List.Item>
      </List>
    </div>
  )
}
