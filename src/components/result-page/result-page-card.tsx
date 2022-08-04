import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'

const classPrefix = `adm-result-page-card`

export type ResultPageCardProps = {
  children?: ReactNode
} & NativeProps

export const ResultPageCard: FC<ResultPageCardProps> = props => {
  return withNativeProps(
    props,
    React.createElement(
      'div',
      {
        className: classNames(`${classPrefix}`),
      },
      props.children
    )
  )
}
