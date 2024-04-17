import { DownFill } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useShouldRender } from '../../utils/should-render'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

const classPrefix = `adm-dropdown-item`

export type DropdownItemProps = {
  key: string
  title: ReactNode
  active?: boolean
  highlight?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  arrowIcon?: ReactNode
  /**
   * @deprecated use `arrowIcon` instead
   */
  arrow?: ReactNode
  children?: ReactNode
} & NativeProps

const defaultProps = {
  arrowIcon: <DownFill />,
}

const Item: FC<DropdownItemProps> = props => {
  const { dropdown: componentConfig = {} } = useConfig()
  const { active, arrowIcon, highlight, onClick, title } = mergeProps(
    defaultProps,
    componentConfig,
    props
  )
  const cls = classNames(classPrefix, {
    [`${classPrefix}-active`]: active,
    [`${classPrefix}-highlight`]: highlight ?? active,
  })

  return withNativeProps(
    props,
    <div className={cls} onClick={onClick}>
      <div className={`${classPrefix}-title`}>
        <span className={`${classPrefix}-title-text`}>{title}</span>
        <span
          className={classNames(`${classPrefix}-title-arrow`, {
            [`${classPrefix}-title-arrow-active`]: active,
          })}
        >
          {arrowIcon}
        </span>
      </div>
    </div>
  )
}

export default Item

type DropdownItemChildrenWrapProps = {
  onClick?: () => void
} & Pick<
  DropdownItemProps,
  'active' | 'forceRender' | 'destroyOnClose' | 'children'
>
export const ItemChildrenWrap: FC<DropdownItemChildrenWrapProps> = props => {
  const { active = false } = props
  const shouldRender = useShouldRender(
    active,
    props.forceRender,
    props.destroyOnClose
  )
  const cls = classNames(`${classPrefix}-content`, {
    [`${classPrefix}-content-hidden`]: !active,
  })

  return shouldRender ? (
    <div className={cls} onClick={props.onClick}>
      {props.children}
    </div>
  ) : null
}
