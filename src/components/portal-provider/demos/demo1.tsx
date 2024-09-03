import { ConfigProvider, ErrorBlock, PortalProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import { DemoBlock } from 'demos'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='中文'>
        <ConfigProvider locale={zhCN}>
          {/* should be wrapped with `<PortalProvider />` */}
          <PortalProvider>
            <ErrorBlock status='disconnected' />
          </PortalProvider>
        </ConfigProvider>
      </DemoBlock>
    </>
  )
}
