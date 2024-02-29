import React, { useContext } from 'react'
import type { FC, ReactNode } from 'react'
import { Locale } from '../../locales/base'
import zhCN from '../../locales/zh-CN'

type Config = {
  locale: Locale
}

export const defaultConfigRef: {
  current: Config
} = {
  current: {
    locale: zhCN,
  },
}

export function setDefaultConfig(config: Config) {
  defaultConfigRef.current = config
}

export function getDefaultConfig() {
  return defaultConfigRef.current
}

const ConfigContext = React.createContext<Config | null>(null)

export type ConfigProviderProps = Config & {
  children?: ReactNode
}

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, ...config } = props
  const parentConfig = useConfig()

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig()
}
