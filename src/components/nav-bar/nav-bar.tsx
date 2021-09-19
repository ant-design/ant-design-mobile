import { ReactNode } from 'react'
import React from 'react'
import classNames from 'classnames'
import { LeftOutlined } from '@ant-design/icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'

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

export const NavBar = withDefaultProps(defaultProps)<NavBarProps>(props => {
  const { back, backArrow } = props

  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      <div className={`${classPrefix}-left`} role='button'>
        {back !== null && (
          <div className={`${classPrefix}-back`} onClick={props.onBack}>
            <span className={`${classPrefix}-back-arrow`}>
              {backArrow === true ? <LeftOutlined /> : backArrow}
            </span>
            <span aria-hidden='true'>{back}</span>
          </div>
        )}
        {props.left}
      </div>
      <div className={`${classPrefix}-title`}>{props.children}</div>
      <div className={`${classPrefix}-right`}>{props.right}</div>
    </div>
  )
})
