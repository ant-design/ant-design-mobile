import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { LeftOutline } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-nav-bar`

export type NavBarProps = {
  back?: string | null
  backArrow?: boolean | ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
} & NativeProps<'--height' | '--border-bottom'>

const defaultProps = {
  back: '',
  backArrow: true,
}
export const NavBar: FC<NavBarProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { back, backArrow } = props

  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      <div className={`${classPrefix}-left`} role='button'>
        {back !== null && (
          <div className={`${classPrefix}-back`} onClick={props.onBack}>
            {backArrow && (
              <span className={`${classPrefix}-back-arrow`}>
                {backArrow === true ? <LeftOutline /> : backArrow}
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
