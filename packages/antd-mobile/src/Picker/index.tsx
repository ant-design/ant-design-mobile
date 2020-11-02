import * as React from 'react'
import treeFilter from 'array-tree-filter'
import classnames from 'classnames'
import RMCCascader from 'rmc-cascader/lib/Cascader'
import RMCPopupCascader from 'rmc-cascader/lib/Popup'
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker'
import RMCPicker from 'rmc-picker/lib/Picker'
import { withError, Labelable } from '../rmc'
import { useTracker, useControlledByValue, useCompleteLocale } from '../hooks'
import { PickerPropsType, PickerData } from './PropsType'

import '@ant-design/mobile-styles/lib/Picker'

const prefixCls = 'amd-picker'
const pickerPrefixCls = 'amd-picker-col'
const popupPrefixCls = 'amd-picker-popup'

const defaultFormat = (values: React.ReactNode[]) => {
  if (values.length > 0 && typeof values[0] !== 'string') {
    return values
  }
  return values.join(',')
}

export const Picker: React.FC<PickerPropsType> = props => {
  useTracker(Picker.displayName)

  const lang = useCompleteLocale().Picker

  const {
    className,
    childClassName,
    title,
    okText,
    dismissText,
    children,
    cascade,
    data,
    cols,
    disabled,

    format,
    onOk,
    onDismiss,
  } = props

  const { value, onChange } = useControlledByValue(props)

  const onPickerChange = (v: any) => {
    props.onPickerChange?.(v)
  }

  const getPickerCol = () => {
    return (data as PickerData[][]).map((col, index) => {
      return (
        <RMCPicker key={index} prefixCls={pickerPrefixCls}>
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

  const getSel = () => {
    const safeValue = value || []
    let treeChildren: PickerData[]
    if (props.cascade) {
      treeChildren = treeFilter(data as PickerData[], (c: any, level: any) => {
        return c.value === safeValue[level]
      })
    } else {
      treeChildren = safeValue.map((v: string | number, i: number) => {
        return (data as PickerData[][])[i]?.filter(d => d.value === v)[0]
      })
    }
    return format?.(
      treeChildren.map(v => {
        return v?.label
      }),
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
        onChange={onPickerChange}
        cols={cols}
      />
    )
  } else {
    cascader = (
      <RMCMultiPicker prefixCls={prefixCls} onValueChange={onPickerChange}>
        {getPickerCol()}
      </RMCMultiPicker>
    )
    popupMoreProps = {
      pickerValueProp: 'selectedValue',
      pickerValueChangeProp: 'onValueChange',
    }
  }

  const childCls = classnames(childClassName, 'amd-picker-children')

  return (
    // @ts-ignore
    <RMCPopupCascader
      cascader={cascader}
      WrapComponent="div"
      transitionName="amd-slide-up"
      maskTransitionName="amd-fade"
      className={className}
      format={format}
      prefixCls={popupPrefixCls}
      value={value}
      disabled={disabled}
      dismissText={dismissText || lang.dismissText}
      okText={okText || lang.okText}
      title={title}
      {...popupMoreProps}
      onChange={onChange}
      // Labelable 内置 onFocus
      triggerType="onFocus"
      onOk={onOk}
      onDismiss={onDismiss}
    >
      <Labelable
        {...Labelable.getProps(props)}
        // @ts-ignore
        value={value}
      >
        <div className={childCls}>{getSel() || children}</div>
      </Labelable>
    </RMCPopupCascader>
  )
}

Picker.displayName = 'Picker'

Picker.defaultProps = {
  cols: 3,
  cascade: true,
  format: defaultFormat,
  title: '',
  defaultValue: [],
}

export default withError(Picker)
