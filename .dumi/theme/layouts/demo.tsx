import type { FC, ReactNode } from 'react'
import React from 'react'
import { ConfigProvider } from 'antd-mobile'
import enUS from '../../../src/locales/en-US'
import zhCN from '../../../src/locales/zh-CN'
import { getDemoLocale } from '../utils/demo-locale'

interface DemoLayoutProps {
  children: ReactNode
  location: {
    search: string
  }
}

const DemoLayout: FC<DemoLayoutProps> = ({ children, location }) => {
  const locale = getDemoLocale(location.search) === 'en' ? enUS : zhCN

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>
}

export default DemoLayout
