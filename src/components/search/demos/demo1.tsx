import React from 'react'
import { Search, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Search placeholder='请输入内容' />
      </DemoBlock>
      <DemoBlock title='带取消按钮的搜索框'>
        <Search placeholder='请输入内容' showCancelButton />
      </DemoBlock>
      <DemoBlock title='事件监听'>
        <Search
          placeholder='请输入内容'
          showCancelButton
          onSearch={val => {
            Toast.show({
              content: `你搜索了：${val}`,
            })
          }}
          onFocus={() => {
            Toast.show({
              content: '获得焦点',
            })
          }}
          onBlur={() => {
            Toast.show({
              content: '失去焦点',
            })
          }}
          onClear={() => {
            Toast.show({
              content: '清空内容',
            })
          }}
          onCancel={() => {
            Toast.show({
              content: '取消搜索',
            })
          }}
        />
      </DemoBlock>
    </>
  )
}
