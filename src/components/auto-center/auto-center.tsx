import React from 'react'
import type { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = 'adm-auto-center'

export type AutoCenterProps = { children?: ReactNode } & NativeProps

export const AutoCenter: FC<AutoCenterProps> = props =>
  withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </div>
  )
