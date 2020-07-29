import * as React from 'react'
import classnames from 'classnames'
import { Touchable, withError } from '../rmc'
import { useTracker } from '../hooks'
import { SelectorPropsType, SelectorItemType } from './PropsType'
import '@ant-design/mobile-styles/lib/Selector'

const prefixCls = 'amd-selector'

export const Selector: React.FC<SelectorPropsType> = props => {
  const { items, className, activeItemClassName, multiple, onChange } = props
  useTracker(Selector.displayName)

  const col = items.length >= 3 ? 3 : 2

  const clsStr = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-col-${col}`]: true,
    [`${className}`]: !!className,
  })

  const [renderItems, setRenderItems] = React.useState(items)

  function updateItemState(currentIndex: number) {
    const nextRenderItems: Array<SelectorItemType> = renderItems.map(
      (item, index) => {
        item = { ...item }

        if (currentIndex === index) {
          item.active = !item.active
        } else if (!multiple) {
          item.active = false
        }

        return item
      },
    )

    setRenderItems(nextRenderItems)
    const selectedItems = nextRenderItems.filter(item => item.active)
    onChange && onChange(selectedItems)
  }

  return (
    <div className={clsStr} role="Selector">
      {renderItems.map((item, index) => {
        const itemClsStr = classnames({
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-active`]: !!item.active,
          [`${prefixCls}-item-disabled`]: item.disabled,
          [`${activeItemClassName}`]: !!item.active,
        })

        return (
          <Touchable
            key={index}
            onPress={() => updateItemState(index)}
            disabled={item.disabled}
          >
            <div className={itemClsStr} aria-disabled={item.disabled}>
              <div className={`${prefixCls}-item-text`}>{item.text}</div>
              {item.subText && (
                <div className={`${prefixCls}-item-sub-text`}>
                  {item.subText}
                </div>
              )}
              <div className={`${prefixCls}-item-badge-active`}></div>
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
  onChange: () => {},
}

export default withError(Selector)
