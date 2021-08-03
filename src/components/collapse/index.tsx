import React, { FC, ReactElement, ComponentProps } from 'react'

import { ElementProps } from '../../utils/element-props'
import { useControllableValue } from 'ahooks'
import { Button } from 'antd-mobile'

const classPrefix = `am-collapse`
export type CollapsePanelProps = {
  key: string
  title: string
  disabled?: boolean
  forceRender?: boolean
}

const CollpasePanel: FC<CollapsePanelProps> = () => {
  return null
}

export type CollapseProps = {
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  accordion?: boolean
  onChange?: (actionName: string | string[]) => void
} & ElementProps

const Collapse: React.FC<CollapseProps> & { Panel: typeof CollpasePanel } =
  props => {
    const firstActiveKey = props.defaultActiveKey
    const panels: ReactElement<ComponentProps<typeof CollpasePanel>>[] = []
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      const key = child.key
      if (typeof key !== 'string') return
      panels.push(child)
    })

    const [activeKey, setActiveKey] = useControllableValue<string | string[]>(
      props,
      {
        valuePropName: 'activeKey',
        defaultValuePropName: 'defaultActiveKey',
        defaultValue: firstActiveKey,
        trigger: 'onChange',
      }
    )

    const isShowPanel = (key: string) =>
      typeof activeKey === 'string'
        ? key === activeKey
        : activeKey.includes(key as string)

    const handleClick = (
      panel: ReactElement<ComponentProps<typeof CollpasePanel>>
    ) => {
      if (panel.props.disabled) return
      let actKey: string | string[]
      const key = panel.key as string
      if (props.accordion) {
        actKey = activeKey === key ? '' : key
      } else {
        if (typeof activeKey === 'string') {
          throw new Error('非手风琴模式，activeKey应该是一个数组而不是字符串')
        }
        if (activeKey.includes(key)) {
          actKey = activeKey.filter(_ => _ !== key)
        } else {
          actKey = [...activeKey, key]
        }
      }
      setActiveKey(actKey)
    }

    return (
      <div className={`${classPrefix}`}>
        <div className={`${classPrefix}-list`}>
          {panels.map(panel => {
            let children = null

            if (isShowPanel(panel.key as string)) {
              children = (
                <div className={`${classPrefix}-panel-children`}>
                  {panel.props.children}
                </div>
              )
            } else if (panel.props.forceRender) {
              children = (
                <div
                  className={`${classPrefix}-panel-children`}
                  style={{ display: 'none' }}
                >
                  {panel.props.children}
                </div>
              )
            }
            return (
              <div key={panel.key} className={`${classPrefix}-panel`}>
                <Button
                  className={`${classPrefix}-panel-button`}
                  disabled={panel.props.disabled}
                  block
                  fill='none'
                  onClick={() => {
                    handleClick(panel)
                  }}
                >
                  {panel.props.title}
                </Button>
                {children}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
Collapse.Panel = CollpasePanel
export default Collapse
