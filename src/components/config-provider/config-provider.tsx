import React, { FC, ReactNode, useContext } from 'react'
import { Locale } from '../../locales/base'
import zhCN from '../../locales/zh-CN'

type Config = {
  locale: Locale
  checkList?: {
    activeIcon?: ReactNode
  }
  collapse?: {
    arrowIcon?: ReactNode | ((active: boolean) => ReactNode)
  }
  dropdown?: {
    arrowIcon?: ReactNode
  }
  form?: {
    helpIcon?: ReactNode
  }
  input?: {
    clearIcon?: ReactNode
  }
  list?: {
    arrowIcon?: ReactNode
  }
  navBar?: {
    backIcon?: ReactNode
  }
  noticeBar?: {
    icon?: ReactNode
    closeIcon?: ReactNode
  }
  popup?: {
    closeIcon?: ReactNode
  }
  result?: {
    successIcon?: ReactNode
    errorIcon?: ReactNode
    infoIcon?: ReactNode
    waitingIcon?: ReactNode
    warningIcon?: ReactNode
  }
  searchBar?: {
    searchIcon?: ReactNode
  }
  prefixCls?: string
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
}
export const defaultPrefixCls = 'adm'
const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string
) => {
  if (customizePrefixCls) {
    return customizePrefixCls
  }
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls
}

export const defaultConfigRef: {
  current: Config
} = {
  current: {
    locale: zhCN,
    getPrefixCls: defaultGetPrefixCls,
  },
}

export function setDefaultConfig(config: Config) {
  defaultConfigRef.current = config
}

export function getDefaultConfig() {
  return defaultConfigRef.current
}

const ConfigContext = React.createContext<Config | null>(null)

export type ConfigProviderProps = Partial<Config> & {
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
        getPrefixCls: defaultGetPrefixCls,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig()
}
