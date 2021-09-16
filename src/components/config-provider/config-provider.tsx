import React, { FC, useContext } from 'react'
import { Locale } from '../../locales/base'
import enUS from '../../locales/en-US'

type Config = {
  locale: Locale
}

export type ConfigProviderProps = Config

const ConfigContext = React.createContext<
  Config & {
    isFallback: boolean
  }
>({
  locale: enUS,
  isFallback: true,
})

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, ...config } = props
  return (
    <ConfigContext.Provider value={{ ...config, isFallback: true }}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext)
}
