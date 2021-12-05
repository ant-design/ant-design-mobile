import React from 'react'
import { Button, Dialog, setDefaultConfig, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import enUS from 'antd-mobile/es/locales/en-US'

export default () => {
  function toChinese() {
    setDefaultConfig({
      locale: zhCN,
    })
    Dialog.alert({
      content: '已切换到中文',
    })
  }
  function toEnglish() {
    setDefaultConfig({
      locale: enUS,
    })
    Dialog.alert({
      content: 'Switched to English',
    })
  }
  return (
    <DemoBlock title='设置全局默认值'>
      <Space>
        <Button onClick={toChinese}>切换到中文</Button>
        <Button onClick={toEnglish}>Switch to English</Button>
      </Space>
    </DemoBlock>
  )
}
