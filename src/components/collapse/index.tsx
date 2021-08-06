import React, { FC, ReactElement, ComponentProps } from 'react'
import { ElementProps } from '../../utils/element-props'
import { useControllableValue } from 'ahooks'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import List from '../list'

export type CollapsePanelProps = {
  key: string
  title: string
  disabled?: boolean
  forceRender?: boolean
}

const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null
}

export type CollapseProps = {
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  accordion?: boolean
  onChange?: (actionName: string | string[]) => void
} & ElementProps

const Collapse: FC<CollapseProps> = props => {
  const panels: ReactElement<ComponentProps<typeof CollapsePanel>>[] = []
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
      defaultValue: [],
      trigger: 'onChange',
    }
  )

  const isShowPanel = (key: string) =>
    typeof activeKey === 'string'
      ? key === activeKey
      : activeKey.includes(key as string)

  const handleClick = (
    panel: ReactElement<ComponentProps<typeof CollapsePanel>>
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
    <div className='am-collapse'>
      <List>
        {panels.map(panel => {
          let children = null

          if (isShowPanel(panel.key as string)) {
            children = (
              <List.Item>
                <div className='am-collapse-panel-content'>
                  {panel.props.children}
                </div>
              </List.Item>
            )
          } else if (panel.props.forceRender) {
            children = (
              <List.Item style={{ display: 'none' }}>
                <div className='am-collapse-panel-content'>
                  {panel.props.children}
                </div>
              </List.Item>
            )
          }
          return (
            <React.Fragment key={panel.key}>
              <List.Item
                // disabled={panel.props.disabled}
                onClick={() => {
                  handleClick(panel)
                }}
              >
                {panel.props.title}
              </List.Item>
              {children}
            </React.Fragment>
          )
        })}
      </List>
    </div>
  )
}

export default attachPropertiesToComponent(Collapse, {
  Panel: CollapsePanel,
})
