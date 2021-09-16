import React, { FC, useContext } from 'react'
import { Locale } from '../../locales/base'
import enUS from '../../locales/en-US'
import { devWarning } from '../../utils/dev-log'
import { useCreation, useUnmount } from 'ahooks'
import zhCN from '../../locales/zh-CN'

type Config = {
  locale: Locale
}

const defaultConfig = {
  locale: zhCN, // TOOD: change it to enUS
}

const ConfigContext = React.createContext<
  Config & {
    isFallback: boolean
  }
>({
  ...defaultConfig,
  isFallback: true,
})

export const globalConfigRef = {
  key: null as Symbol | null,
  current: defaultConfig,
}

export type ConfigProviderProps = Config & {
  global?: boolean
}

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, global, ...config } = props

  const key = useCreation(() => Symbol(), [])

  function cleanUp() {
    if (globalConfigRef.key !== key) {
      return
    }
    devWarning('cleanUp', 'cleanUp')
    globalConfigRef.key = null
    globalConfigRef.current = defaultConfig
  }

  if (global) {
    if (globalConfigRef.key === key || globalConfigRef.key === null) {
      console.log('globalConfigRef.current = config', config.locale.Dialog)
      globalConfigRef.key = key
      globalConfigRef.current = config
      console.log('globalConfigRef2', globalConfigRef)
    } else {
      devWarning(
        'ConfigProvider',
        'It seems you are rendering more than one ConfigProvider with `global: true`. Only the first rendered component will take effect.'
      )
    }
  } else {
    cleanUp()
  }

  useUnmount(() => {
    cleanUp()
  })

  return (
    <ConfigContext.Provider value={{ ...config, isFallback: true }}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext)
}
