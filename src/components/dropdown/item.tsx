import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useShouldRender } from '../../utils/use-should-render'

const classPrefix = `adm-dropdown-item`

export type DropdownItemProps = {
  key: string
  title: React.ReactNode
  active?: boolean
  highlight?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  closeOnContentClick?: boolean | ((key: string) => void)
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & NativeProps

const Item: FC<DropdownItemProps> = props => {
  const cls = classNames(classPrefix, {
    [`${classPrefix}-active`]: props.active,
    [`${classPrefix}-highlight`]: props.highlight,
  })

  return withNativeProps(
    props,
    <div className={cls} onClick={props.onClick}>
      <div className={`${classPrefix}-title`}>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default Item

type DropdownItemChildrenWrapProps = {
  dataKey: string
  changeActive: (key?: string) => void
} & Pick<
  DropdownItemProps,
  'active' | 'forceRender' | 'destroyOnClose' | 'closeOnContentClick'
>
export const ItemChildrenWrap: FC<DropdownItemChildrenWrapProps> = props => {
  const { active = false, closeOnContentClick } = props
  const shouldRender = useShouldRender(
    active,
    props.forceRender,
    props.destroyOnClose
  )
  const cls = classNames(`${classPrefix}-content`, {
    [`${classPrefix}-content-hidden`]: !active,
  })

  let onContentClick
  if (closeOnContentClick) {
    onContentClick = () => {
      props.changeActive(undefined)
      if (typeof closeOnContentClick === 'function')
        closeOnContentClick(props.dataKey)
    }
  }

  return shouldRender ? (
    <div className={cls} onClick={onContentClick}>
      {props.children}
    </div>
  ) : null
}
