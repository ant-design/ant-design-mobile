import React, { FC, ReactNode, useContext } from 'react'
import { Locale } from '../../locales/base'
import zhCN from '../../locales/zh-CN'

type GetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => string

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
  getPrefixCls: GetPrefixCls
}
export const defaultPrefixCls = 'adm'

export const defaultConfigRef: {
  current: Config
} = {
  current: {
    locale: zhCN,
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
      if (customizePrefixCls) {
        return customizePrefixCls
      }
      return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls
    },
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

  const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) {
      return customizePrefixCls
    }
    const mergedPrefixCls =
      config.prefixCls || parentConfig.prefixCls || defaultPrefixCls
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls
  }

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
        getPrefixCls,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig()
}
