import { useClickAway, useControllableValue } from 'ahooks'
import classNames from 'classnames'
import React, {
  cloneElement,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import Popup from '../popup'
import Item, { ItemProps } from './item'

const classPrefix = `am-dropdown`

export interface DropdownProps {
  forceRender?: boolean
  activeKey?: string
  onChange?: (key?: string) => void
  // mask?: boolean;
  className?: string
  style?: React.CSSProperties
}

const Dropdown: FC<DropdownProps> & {
  Item: React.FC<ItemProps>
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

  const contents: { [key: string]: ReactNode } = {}
  const navs = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      const childProps = {
        ...child.props,
        onClick: () => {
          changeActive(child.key as string)
        },
        active: child.key === value,
      }
      contents[child.key!] = child.props.children
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
        forceRender={props.forceRender}
      >
        <div ref={contentRef}>
          {Object.keys(contents).map(key => {
            const isActive = key === value
            const cls = classNames(`${classPrefix}-content`, {
              [`${classPrefix}-content-hidden`]: !isActive,
            })
            if (!props.forceRender && !isActive) {
              return null
            }
            return (
              <div className={cls} key={key}>
                {contents[key]}
              </div>
            )
          })}
        </div>
      </Popup>
    </div>
  )
}

Dropdown.Item = Item

export default Dropdown
