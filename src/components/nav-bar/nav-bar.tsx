import { LeftOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
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

const defaultProps = {
  backIcon: true,
}

export const NavBar: FC<NavBarProps> = p => {
  const { navBar: componentConfig = {} } = useConfig()
  const props = mergeProps(defaultProps, componentConfig, p)
  const { back, backIcon, backArrow } = props

  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      <div className={`${classPrefix}-left`} role='button'>
        {back !== null && (
          <div className={`${classPrefix}-back`} onClick={props.onBack}>
            {(backIcon || backArrow) && (
              <span className={`${classPrefix}-back-arrow`}>
                {backIcon === true || backArrow === true ? (
                  <LeftOutline />
                ) : (
                  backIcon || backArrow
                )}
              </span>
            )}
            <span aria-hidden='true'>{back}</span>
          </div>
        )}
        {props.left}
      </div>
      <div className={`${classPrefix}-title`}>{props.children}</div>
      <div className={`${classPrefix}-right`}>{props.right}</div>
    </div>
  )
}
