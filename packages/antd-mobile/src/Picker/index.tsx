import * as React from 'react'
import treeFilter from 'array-tree-filter'
import RMCCascader from 'rmc-cascader/lib/Cascader'
import RMCPopupCascader from 'rmc-cascader/lib/Popup'
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker'
import RMCPicker from 'rmc-picker/lib/Picker'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import { PickerPropsType, PickerData } from './PropsType'

import '@ant-design/mobile-styles/lib/Picker'

const prefixCls = 'amd-picker'
const pickerPrefixCls = 'amd-picker-col'
const popupPrefixCls = 'amd-picker-popup'

let scrollValue: any

const setScrollValue = (v: any) => {
  scrollValue = v
}

const defaultFormat = (values: React.ReactNode[]) => {
  // label is JSX.Element or other
  if (values.length > 0 && typeof values[0] !== 'string') {
    return values
  }
  return values.join(',')
}

export const Picker: React.FC<PickerPropsType> = props => {
  useTracker(Picker.displayName)

  const {
    children,
    value = [],
    okText,
    dismissText,
    extra,
    cascade,
    data,
    cols,
    ...restProps
  } = props

  const onPickerChange = (v: any) => {
    setScrollValue(v)

    if (props.onPickerChange) {
      props.onPickerChange(v)
    }
  }

  const setCasecadeScrollValue = (v: any) => {
    // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
    if (v && scrollValue) {
      const length = scrollValue.length
      if (length === v.length && scrollValue[length - 1] === v[length - 1]) {
        return
      }
    }
    setScrollValue(v)
  }

  const getPickerCol = () => {
    return (data as PickerData[][]).map((col, index) => {
      return (
        <RMCPicker key={index} prefixCls={pickerPrefixCls} style={{ flex: 1 }}>
          {col.map(item => {
            return (
              <RMCPicker.Item key={item.value} value={item.value}>
                {item.label}
              </RMCPicker.Item>
            )
          })}
        </RMCPicker>
      )
    })
  }

  const onOk = (v: any) => {
    if (scrollValue !== undefined) {
      v = scrollValue
    }
    if (props.onChange) {
      props.onChange(v)
    }
    if (props.onOk) {
      props.onOk(v)
    }
  }

  const fixOnOk = (cascader: any) => {
    if (cascader && cascader.onOk !== onOk) {
      cascader.onOk = onOk
      cascader.forceUpdate()
    }
  }

  const onVisibleChange = (visible: boolean) => {
    setScrollValue(undefined)
    if (props.onVisibleChange) {
      props.onVisibleChange(visible)
    }
  }

  const getSel = () => {
    const value = props.value || []
    let treeChildren: PickerData[]
    if (props.cascade) {
      treeChildren = treeFilter(data as PickerData[], (c: any, level: any) => {
        return c.value === value[level]
      })
    } else {
      treeChildren = value.map((v: string | number, i: number) => {
        return (data as PickerData[][])[i].filter(d => d.value === v)[0]
      })
    }
    return (
      props.format &&
      props.format(
        treeChildren.map(v => {
          return v.label
        }),
      )
    )
  }

  let cascader: React.ReactNode = null
  let popupMoreProps = {}

  if (cascade) {
    cascader = (
      // @ts-ignore
      <RMCCascader
        prefixCls={prefixCls}
        pickerPrefixCls={pickerPrefixCls}
        data={data as PickerData[]}
        cols={cols}
        onChange={onPickerChange}
        onScrollChange={setCasecadeScrollValue}
      />
    )
  } else {
    cascader = (
      <RMCMultiPicker
        style={{ flexDirection: 'row', alignItems: 'center' }}
        prefixCls={prefixCls}
        onScrollChange={setScrollValue}
      >
        {getPickerCol()}
      </RMCMultiPicker>
    )
    popupMoreProps = {
      pickerValueProp: 'selectedValue',
      pickerValueChangeProp: 'onValueChange',
    }
  }

  console.log('cascader', cascader)

  return (
    // @ts-ignore
    <RMCPopupCascader
      cascader={cascader}
      WrapComponent="div"
      transitionName="amd-slide-up"
      maskTransitionName="amd-fade"
      {...restProps}
      prefixCls={popupPrefixCls}
      value={value}
      dismissText={dismissText}
      okText={okText}
      {...popupMoreProps}
      ref={fixOnOk}
      onVisibleChange={onVisibleChange}
    >
      {children &&
        typeof children !== 'string' &&
        React.isValidElement(children) &&
        // @ts-ignore
        React.cloneElement<{ extra?: string }>(children, {
          extra: getSel() || extra,
        })}
    </RMCPopupCascader>
  )
}

Picker.displayName = 'Picker'

Picker.defaultProps = {
  triggerType: 'onPress',
  cols: 3,
  cascade: true,
  format: defaultFormat,
  title: '',
}

export default withError(Picker)
