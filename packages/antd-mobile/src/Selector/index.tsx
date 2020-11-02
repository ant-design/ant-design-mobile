import * as React from 'react'
import classnames from 'classnames'
import { Touchable, withError, Labelable } from '../rmc'
import { useTracker, useControlledByValue } from '../hooks'
import { SelectorPropsType, SelectorItemType } from './PropsType'
import '@ant-design/mobile-styles/lib/Selector'

const prefixCls = 'amd-selector'

// 这里使用泛型，不能使用 React.FC 的方式
export const Selector = function<T = string | number>(
  props: SelectorPropsType<T>,
) {
  const { items, className, activeItemClassName, multiple, disabled } = props
  useTracker(Selector.displayName)

  const { value, onChange } = useControlledByValue(props)

  const col = items.length >= 3 ? 3 : 2

  const clsStr = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-col-${col}`]: true,
    [`${className}`]: !!className,
  })

  // 通过 value 和 items 更新 renderItems
  const renderItems = items.map(item => {
    const renderItem: SelectorItemType<typeof value[0]> & {
      active?: boolean
    } = { ...item }

    if (value?.indexOf(item.value) !== -1) {
      renderItem.active = true
    } else {
      renderItem.active = false
    }

    return renderItem
  })

  // 将 value 重新按 options 排序
  const sortValue = (v: T[]) => {
    return renderItems
      .map(item => item.value)
      .filter(item => v.indexOf(item) !== -1)
  }

  function updateValue(currentIndex: number) {
    const willActiveValue = items[currentIndex].value

    let nextValue: typeof value

    // 多选
    if (multiple) {
      // 之前已经选中，删除它
      if (value?.indexOf(willActiveValue) !== -1) {
        nextValue = value?.filter(v => v !== willActiveValue)
      } else {
        // 之前未选中，增加
        nextValue = [...value, willActiveValue]
      }
    } else {
      // 单选
      // 取消选中
      if (value?.[0] === willActiveValue) {
        nextValue = []
      } else {
        // 选中
        nextValue = [willActiveValue]
      }
    }

    nextValue = sortValue(nextValue)

    onChange(nextValue)
  }

  return (
    <div className={clsStr} role="Selector">
      {renderItems.map((item, index) => {
        const itemDisabled = disabled || item.disabled

        const itemClsStr = classnames({
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-active`]: !!item.active,
          [`${prefixCls}-item-disabled`]: itemDisabled,
          [`${activeItemClassName}`]: !!item.active,
        })

        return (
          <Touchable
            key={index}
            onPress={() => updateValue(index)}
            disabled={itemDisabled}
          >
            <div className={itemClsStr} aria-disabled={item.disabled}>
              <div className={`${prefixCls}-item-text`}>{item.text}</div>
              {item.subText && (
                <div className={`${prefixCls}-item-sub-text`}>
                  {item.subText}
                </div>
              )}
              <div className={`${prefixCls}-item-badge-active`}></div>
              {/* hack, add input for html */}
              <Labelable
                {...Labelable.getProps(props)}
                value={String(item.value)}
                checked={item.active}
                // 修正 disabled
                disabled={itemDisabled}
                // 不分配 id
                id={undefined}
              />
            </div>
          </Touchable>
        )
      })}
    </div>
  )
}

Selector.displayName = 'Selector'
Selector.defaultProps = {
  className: '',
  activeItemClassName: '',
  multiple: false,
  disabled: false,
  defaultValue: [],
  onChange: () => {},
}

export default withError(Selector)
