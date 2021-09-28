import classNames from 'classnames'
import React, { FC } from 'react'

const classPrefix = `adm-dropdown-item`

export interface DropdownItemProps {
  key: string
  title: React.ReactNode
  active?: boolean
  highlight?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  className?: string
  style?: React.CSSProperties
}

const Item: FC<DropdownItemProps> = props => {
  const cls = classNames(classPrefix, props.className, {
    [`${classPrefix}-active`]: props.active,
    [`${classPrefix}-highlight`]: props.highlight,
  })

  return (
    <div className={cls} style={props.style} onClick={props.onClick}>
      <div className={`${classPrefix}-title`}>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default Item
