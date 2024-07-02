import { LeftOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProp, mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

const classPrefix = `adm-nav-bar`

export type NavBarProps = {
  back?: ReactNode
  backIcon?: boolean | ReactNode
  /**
   * @deprecated use `backIcon` instead
   */
  backArrow?: boolean | ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
  children?: ReactNode
} & NativeProps<'--height' | '--border-bottom'>

const defaultBackIcon = <LeftOutline />

export const NavBar: FC<NavBarProps> = props => {
  const { navBar: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(componentConfig, props)
  const { back, backIcon, backArrow } = mergedProps

  const mergedDefaultBackIcon = componentConfig.backIcon || defaultBackIcon

  const mergedBackIcon = mergeProp<ReactNode>(
    defaultBackIcon,
    componentConfig.backIcon,
    backArrow === true ? mergedDefaultBackIcon : backArrow,
    backIcon === true ? mergedDefaultBackIcon : backIcon
  )

  return withNativeProps(
    mergedProps,
    <div className={classNames(classPrefix)}>
      <div className={`${classPrefix}-left`} role='button'>
        {back !== null && (
          <div className={`${classPrefix}-back`} onClick={mergedProps.onBack}>
            {mergedBackIcon && (
              <span className={`${classPrefix}-back-arrow`}>
                {mergedBackIcon}
              </span>
            )}
            <span aria-hidden='true'>{back}</span>
          </div>
        )}
        {mergedProps.left}
      </div>
      <div className={`${classPrefix}-title`}>{mergedProps.children}</div>
      <div className={`${classPrefix}-right`}>{mergedProps.right}</div>
    </div>
  )
}
