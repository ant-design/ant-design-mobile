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
import Item, { DropdownItemProps, ItemChildrenWrap } from './item'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-dropdown`

export type DropdownProps = {
  activeKey?: string
  onChange?: (key?: string) => void
  // mask?: boolean;
} & NativeProps

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

  let popupForceRender = false
  const items: ReactElement<ComponentProps<typeof Item>>[] = []
  const navs = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      const childProps = {
        ...child.props,
        onClick: () => {
          changeActive(child.key as string)
        },
        active: child.key === value,
      }
      items.push(child)
      if (child.props.forceRender) popupForceRender = true
      return cloneElement(child, childProps)
    } else {
      return child
    }
  })

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-open`]: !!value,
      })}
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
        forceRender={popupForceRender}
      >
        <div ref={contentRef}>
          {items.map(item => {
            const isActive = item.key === value
            return (
              <ItemChildrenWrap
                key={item.key}
                active={isActive}
                forceRender={item.props.forceRender}
                destroyOnClose={item.props.destroyOnClose}
                onClick={
                  item.props.closeOnContentClick
                    ? () => {
                        changeActive(undefined)
                      }
                    : undefined
                }
              >
                {item.props.children}
              </ItemChildrenWrap>
            )
          })}
        </div>
      </Popup>
    </div>
  )
}

Dropdown.Item = Item

export default Dropdown
