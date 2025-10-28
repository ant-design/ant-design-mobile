import { DownFill } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useShouldRender } from '../../utils/should-render'
import { mergeProp, mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import { IconContext } from './context'

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
  prefixCls?: string
} & NativeProps

const Item: FC<DropdownItemProps> = props => {
  const { dropdown: componentConfig = {}, getPrefixCls } = useConfig()
  const mergedProps = mergeProps(componentConfig, props)
  const prefixCls = getPrefixCls('dropdown-item', mergedProps.prefixCls)
  const { active, highlight, onClick, title } = mergedProps
  const cls = classNames(prefixCls, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-highlight`]: highlight ?? active,
  })

  const contextArrowIcon = React.useContext(IconContext)
  const mergedArrowIcon = mergeProp(
    <DownFill />,
    contextArrowIcon,
    mergedProps.arrow,
    mergedProps.arrowIcon
  )

  return withNativeProps(
    props,
    <div className={cls} onClick={onClick}>
      <div className={`${prefixCls}-title`}>
        <span className={`${prefixCls}-title-text`}>{title}</span>
        <span
          className={classNames(`${prefixCls}-title-arrow`, {
            [`${prefixCls}-title-arrow-active`]: active,
          })}
        >
          {mergedArrowIcon}
        </span>
      </div>
    </div>
  )
}

export default Item

type DropdownItemChildrenWrapProps = {
  onClick?: () => void
  prefixCls: string
} & Pick<
  DropdownItemProps,
  'active' | 'forceRender' | 'destroyOnClose' | 'children'
>
export const ItemChildrenWrap: FC<DropdownItemChildrenWrapProps> = props => {
  const { active = false, prefixCls } = props
  const shouldRender = useShouldRender(
    active,
    props.forceRender,
    props.destroyOnClose
  )
  const cls = classNames(`${prefixCls}-content`, {
    [`${prefixCls}-content-hidden`]: !active,
  })

  return shouldRender ? (
    <div className={cls} onClick={props.onClick}>
      {props.children}
    </div>
  ) : null
}
