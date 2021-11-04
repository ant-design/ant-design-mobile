import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = 'adm-auto-center'

export type AutoCenterProps = NativeProps

export const AutoCenter: FC<AutoCenterProps> = props => {
  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </div>
  )
}
