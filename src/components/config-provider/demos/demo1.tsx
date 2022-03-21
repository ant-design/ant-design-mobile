import React from 'react'
import { ConfigProvider, ErrorBlock } from 'antd-mobile'
import { DemoBlock } from 'demos'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import enUS from 'antd-mobile/es/locales/en-US'
import faIR from 'antd-mobile/es/locales/fa-IR'

export default () => {
  return (
    <>
      <DemoBlock title='中文'>
        <ConfigProvider locale={zhCN}>
          <ErrorBlock />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='英文'>
        <ConfigProvider locale={enUS}>
          <ErrorBlock />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='波斯语'>
        <ConfigProvider locale={faIR}>
          <ErrorBlock />
        </ConfigProvider>
      </DemoBlock>
    </>
  )
}
