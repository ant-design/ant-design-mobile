import { useClickAway, useControllableValue } from 'ahooks'
import classNames from 'classnames'
import React, {
  cloneElement,
  FC,
  ReactElement,
  ComponentProps,
  useEffect,
  useRef,
  useState,
} from 'react'
import Popup from '../popup'
import Item, { DropdownItemProps } from './item'

const classPrefix = `adm-dropdown`

export interface DropdownProps {
  activeKey?: string
  onChange?: (key?: string) => void
  // mask?: boolean;
  className?: string
  style?: React.CSSProperties
}

const Dropdown: FC<DropdownProps> & {
  Item: React.FC<DropdownItemProps>
} = props => {
  const [value, onChange] = useControllableValue<string | undefined>(props, {
    valuePropName: 'activeKey',
  })

  const navRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // 点击外部区域，关闭
  useClickAway(() => {
    onChange(undefined)
  }, [navRef, contentRef])

  // 计算 navs 的 top 值
  const [top, setTop] = useState<number>()
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (value) {
      const rect = containerRef.current!.getBoundingClientRect()
      setTop(rect.bottom)
    }
  }, [value])

  const changeActive = (key?: string) => {
    if (value === key) {
      onChange(undefined)
    } else {
      onChange(key)
    }
  }

  const itemChildren: ReactElement<ComponentProps<typeof Item>>[] = []
  const navs = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      const childProps = {
        ...child.props,
        onClick: () => {
          changeActive(child.key as string)
        },
        active: child.key === value,
      }
      itemChildren.push(child)
      return cloneElement(child, childProps)
    } else {
      return child
    }
  })

  return (
    <div
      className={classNames(classPrefix, props.className, {
        [`${classPrefix}-open`]: !!value,
      })}
      style={props.style}
      ref={containerRef}
    >
      <div className={`${classPrefix}-nav`} ref={navRef}>
        {navs}
      </div>
      <Popup
        visible={!!value}
        position='top'
        className={`${classPrefix}-popup`}
        maskClassName={`${classPrefix}-popup-mask`}
        bodyClassName={`${classPrefix}-popup-body`}
        style={{ top }}
      >
        <div ref={contentRef}>
          {itemChildren.map(itemChild => {
            const isActive = itemChild.key === value
            const cls = classNames(`${classPrefix}-content`, {
              [`${classPrefix}-content-hidden`]: !isActive,
            })

            if (isActive || itemChild.props.forceRender) {
              return (
                <div className={cls} key={itemChild.key}>
                  {itemChild.props.children}
                </div>
              )
            }

            return null
          })}
        </div>
      </Popup>
    </div>
  )
}

Dropdown.Item = Item

export default Dropdown
