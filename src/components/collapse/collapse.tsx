import React, {
  FC,
  ReactElement,
  ComponentProps,
  useEffect,
  useRef,
} from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List from '../list'
import { RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useInitialized } from '../../utils/use-initialized'
import { useSpring, animated } from '@react-spring/web'
import { useNewControllableValue } from '../../utils/use-controllable-value'

export type CollapsePanelProps = {
  key: string
  title: string
  disabled?: boolean
  forceRender?: boolean
}

export const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null
}

const CollapsePanelContent: FC<{
  visible: boolean
  forceRender: boolean
}> = props => {
  const { visible } = props
  const innerRef = useRef<HTMLDivElement>(null)
  const initialized = useInitialized(visible || props.forceRender)
  const [style, api] = useSpring(() => ({
    from: { height: visible ? 'auto' : 0 },
  }))

  useEffect(() => {
    if (visible) {
      const inner = innerRef.current
      if (!inner) return
      api.start({
        height: inner.offsetHeight,
      })
    } else {
      api.start({
        height: 0,
      })
    }
  }, [visible])

  return initialized ? (
    <animated.div className='adm-collapse-panel-content' style={style}>
      <div className='adm-collapse-panel-content-inner' ref={innerRef}>
        <List.Item>{props.children}</List.Item>
      </div>
    </animated.div>
  ) : null
}

type ValueProps<T> = {
  activeKey?: T
  defaultActiveKey?: T
  onChange?: (activeKey: T) => void
}

export type CollapseProps = (
  | ({
      accordion?: false
    } & ValueProps<string[]>)
  | ({
      accordion: true
    } & ValueProps<string | null>)
) &
  NativeProps

export const Collapse: FC<CollapseProps> = props => {
  const panels: ReactElement<ComponentProps<typeof CollapsePanel>>[] = []
  React.Children.forEach(props.children, child => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    panels.push(child)
  })

  const [activeKey, setActiveKey] = useNewControllableValue<string[]>(
    props.accordion
      ? {
          value:
            props.activeKey === undefined
              ? undefined
              : props.activeKey === null
              ? []
              : [props.activeKey],
          defaultValue:
            props.defaultActiveKey === undefined ||
            props.defaultActiveKey === null
              ? []
              : [props.defaultActiveKey],
          onChange: v => {
            props.onChange?.(v[0] ?? null)
          },
        }
      : {
          value: props.activeKey,
          defaultValue: props.defaultActiveKey ?? [],
          onChange: props.onChange,
        }
  )
  const activeKeyList =
    activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey]

  return withNativeProps(
    props,
    <div className='adm-collapse'>
      <List>
        {panels.map(panel => {
          const key = panel.key as string
          const active = activeKeyList.includes(key)
          function handleClick() {
            if (props.accordion) {
              if (active) {
                setActiveKey([])
              } else {
                setActiveKey([key])
              }
            } else {
              if (active) {
                setActiveKey(activeKeyList.filter(v => v !== key))
              } else {
                setActiveKey([...activeKeyList, key])
              }
            }
          }

          return (
            <React.Fragment key={key}>
              <List.Item
                className={classNames('adm-collapse-panel-header', {
                  'adm-collapse-panel-header-disabled': panel.props.disabled,
                })}
                onClick={panel.props.disabled ? undefined : handleClick}
                arrow={
                  <div
                    className={classNames('adm-collapse-arrow', {
                      'adm-collapse-arrow-active': active,
                    })}
                  >
                    <RightOutlined />
                  </div>
                }
              >
                {panel.props.title}
              </List.Item>
              <CollapsePanelContent
                visible={active}
                forceRender={!!panel.props.forceRender}
              >
                {panel.props.children}
              </CollapsePanelContent>
            </React.Fragment>
          )
        })}
      </List>
    </div>
  )
}
