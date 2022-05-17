import React, { useRef } from 'react'
import { Button, SearchBar, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SearchBarRef } from 'antd-mobile/es/components/search-bar'

export default () => {
  const searchRef = useRef<SearchBarRef>(null)

  return (
    <>
      <DemoBlock title='基础用法'>
        <SearchBar placeholder='请输入内容' />
      </DemoBlock>

      <DemoBlock title='获取焦点后显示取消按钮'>
        <SearchBar placeholder='请输入内容' showCancelButton />
      </DemoBlock>

      <DemoBlock title='取消按钮长显'>
        <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
      </DemoBlock>

      <DemoBlock title='事件监听和 Ref'>
        <Space block direction='vertical'>
          <SearchBar
            ref={searchRef}
            placeholder='请输入内容'
            showCancelButton
            onSearch={val => {
              Toast.show(`你搜索了：${val}`)
            }}
            onFocus={() => {
              Toast.show('获得焦点')
            }}
            onBlur={() => {
              Toast.show('失去焦点')
            }}
            onClear={() => {
              Toast.show('清空内容')
            }}
            onCancel={() => {
              Toast.show('取消搜索')
            }}
          />
          <Space>
            <Button
              onClick={() => {
                searchRef.current?.clear()
              }}
            >
              清空内容
            </Button>
            <Button
              onClick={() => {
                searchRef.current?.focus()
              }}
            >
              激活
            </Button>
          </Space>
        </Space>
      </DemoBlock>
    </>
  )
}
