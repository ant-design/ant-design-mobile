import { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import React from 'react'
import classNames from 'classnames'
import Badge, { BadgeProps } from '../badge'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { Corner } from './corner'
import { traverseReactNode } from '../../utils/traverse-react-node'

const classPrefix = `adm-side-bar`

export type SideBarItemProps = {
  title?: ReactNode
  disabled?: boolean
  badge?: BadgeProps['content']
} & NativeProps

/* istanbul ignore next */
export const SideBarItem: FC<SideBarItemProps> = () => {
  return null
}

export type SideBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
  children?: React.ReactNode
} & NativeProps<
  '--width' | '--height' | '--item-border-radius' | '--background-color'
>

export const SideBar: FC<SideBarProps> = props => {
  let firstActiveKey: string | null = null

  const items: ReactElement<ComponentProps<typeof SideBarItem>>[] = []

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    items.push(child)
  })

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return
      props.onChange?.(v)
    },
  })

  const lastItem = items[items.length - 1]
  const isLastItemActive = lastItem && lastItem.key === activeKey

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-items`}>
        {items.map((item, index) => {
          const active = item.key === activeKey
          const isActiveNextSibling =
            items[index - 1] && items[index - 1].key === activeKey
          const isActivePreviousSibling =
            items[index + 1] && items[index + 1].key === activeKey
          return withNativeProps(
            item.props,
            <div
              key={item.key}
              onClick={() => {
                const { key } = item
                if (key === undefined || key === null || item.props.disabled)
                  return
                setActiveKey(key.toString())
              }}
              className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: active,
                [`${classPrefix}-item-disabled`]: item.props.disabled,
              })}
            >
              <>
                {isActiveNextSibling && (
                  <Corner
                    className={`${classPrefix}-item-corner ${classPrefix}-item-corner-top`}
                  />
                )}
                {isActivePreviousSibling && (
                  <Corner
                    className={`${classPrefix}-item-corner ${classPrefix}-item-corner-bottom`}
                  />
                )}
              </>
              <Badge
                content={item.props.badge}
                className={`${classPrefix}-badge`}
              >
                <div className={`${classPrefix}-item-title`}>
                  {active && (
                    <div className={`${classPrefix}-item-highlight`} />
                  )}
                  {item.props.title}
                </div>
              </Badge>
            </div>
          )
        })}
      </div>
      <div
        className={classNames(
          `${classPrefix}-extra-space`,
          isLastItemActive && `${classPrefix}-item-active-next-sibling`
        )}
      >
        {isLastItemActive && (
          <Corner
            className={`${classPrefix}-item-corner ${classPrefix}-item-corner-top`}
          />
        )}
      </div>
    </div>
  )
}
