import {
  BasePropsType,
  BaseFormItemType,
  BaseFormItemTypeWithOutFocus,
} from '../_internal'
import { CascaderValue } from 'rmc-cascader/lib/CascaderTypes'

export interface PickerData {
  value: string | number
  label: React.ReactNode
  children?: PickerData[]
}

export interface PickerPropsType
  extends BasePropsType,
    BaseFormItemTypeWithOutFocus<CascaderValue> {
  childClassName?: string
  // PickerData[][] 形式是 !cascade
  data: PickerData[] | PickerData[][]
  cascade?: boolean
  value?: CascaderValue
  defaultValue?: CascaderValue
  format?: (values: React.ReactNode[]) => string | React.ReactNode[]
  cols?: number
  title?: React.ReactNode
  okText?: string
  dismissText?: string
  onOk?: (value: CascaderValue) => void
  onDismiss?: () => void
  onPickerChange?: (value: CascaderValue) => void
}
