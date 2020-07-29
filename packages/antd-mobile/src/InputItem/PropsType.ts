import { BasePropsType, IconType } from '../_internal'
export type InputItemEvent = (v: string | undefined) => void

export interface InputItemPropsType extends BasePropsType {
  label: string
  value?: string
  defaultValue?: string
  placeholder?: string
  extraClassName?: string
  maxlength?: number
  disabled?: boolean
  extra?: IconType
  vertical?: boolean
  autoFocus?: boolean
  onFocus?: InputItemEvent
  onBlur?: InputItemEvent
  onChange?: InputItemEvent
  onPressExtra?: (e?: React.SyntheticEvent) => void
}
