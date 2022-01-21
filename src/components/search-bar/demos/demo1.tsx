import React, { ReactNode, useRef, useState } from 'react'
import { Button, SearchBar, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SearchBarRef } from 'antd-mobile/es/components/search-bar'
import { SearchOutline, SetOutline } from 'antd-mobile-icons'

export default () => {
  const searchRef = useRef<SearchBarRef>(null)
  const [icon, setIcon] = useState<ReactNode | null>(<SetOutline />)

  return (
    <>
      <DemoBlock title='基础用法'>
        <SearchBar placeholder='请输入内容' />
      </DemoBlock>

      <DemoBlock title='白色的搜索框' background='#f5f5f5'>
        <SearchBar
          placeholder='请输入内容'
          style={{ '--background': '#ffffff' }}
        />
      </DemoBlock>

      <DemoBlock title='带取消按钮的搜索框'>
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

      <DemoBlock title='自定义样式'>
        <SearchBar
          placeholder='请输入内容'
          showCancelButton
          style={{
            '--border-radius': '100px',
            '--background': '#ffffff',
            '--height': '32px',
            '--padding-left': '12px',
          }}
        />
      </DemoBlock>

      <DemoBlock title='自定义 icon'>
        <Space block direction='vertical'>
          <SearchBar icon={icon} placeholder='请输入内容' />
          <Space>
            <Button onClick={() => setIcon(null)}>不显示 icon</Button>
            <Button onClick={() => setIcon(<SearchOutline />)}>
              默认 icon
            </Button>
            <Button onClick={() => setIcon(<SetOutline />)}>自定义 icon</Button>
          </Space>
        </Space>
      </DemoBlock>
    </>
  )
}
