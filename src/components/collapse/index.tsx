import React, { FC, ReactElement, ComponentProps, ReactNode } from 'react'
import { ElementProps } from '../../utils/element-props'
import { useControllableValue } from 'ahooks'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import List from '../list'
import { RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'

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
  const activeKeyList = Array.isArray(activeKey) ? activeKey : [activeKey]

  const handleClick = (key: string) => {
    if (props.accordion) {
      setActiveKey(key)
    } else {
      if (activeKeyList.includes(key)) {
        setActiveKey(activeKeyList.filter(v => v !== key))
      } else {
        setActiveKey([...activeKeyList, key])
      }
    }
  }

  return (
    <div className='am-collapse'>
      <List>
        {panels.map(panel => {
          let children: ReactNode = null
          const key = panel.key as string
          const active = activeKeyList.includes(key)
          if (active) {
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
            <React.Fragment key={key}>
              <List.Item
                className={classNames('am-collapse-panel-header', {
                  'am-collapse-panel-header-disabled': panel.props.disabled,
                })}
                onClick={
                  panel.props.disabled
                    ? undefined
                    : () => {
                        handleClick(key)
                      }
                }
                arrow={
                  <div
                    className={classNames('am-collapse-arrow', {
                      'am-collapse-arrow-active': active,
                    })}
                  >
                    <RightOutlined />
                  </div>
                }
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
