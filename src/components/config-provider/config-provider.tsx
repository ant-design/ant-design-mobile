import React, { FC, useContext } from 'react'
import { Locale } from '../../locales/base'
import zhCN from '../../locales/zh-CN'
import { globalConfig, GlobalConfig } from '../../global/global-config'
import { mergeGlobalConfig } from '../../utils/merge-global-config'

type Config = {
  locale: Locale
  globalConfig: GlobalConfig
}

const defaultConfig = {
  locale: zhCN,
  globalConfig: globalConfig,
}

export const defaultConfigRef: {
  current: Config
} = {
  current: defaultConfig,
}

export function setDefaultConfig(config: {
  locale?: Locale
  globalConfig?: Partial<GlobalConfig>
}) {
  defaultConfigRef.current = mergeGlobalConfig(defaultConfig, config)
}

export function getDefaultConfig() {
  return defaultConfigRef.current
}

const ConfigContext = React.createContext<Config | null>(null)

export type ConfigProviderProps = {
  locale: Locale
  globalConfig?: GlobalConfig
}

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, ...config } = props
  const parentConfig = useConfig()
  const value = mergeGlobalConfig(parentConfig, config)
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig()
}
