import { BasePropsType, BaseFormItemType } from '../_internal'

export interface StepperPropsType
  extends BasePropsType,
    BaseFormItemType<number> {
  min?: number
  max?: number
  step?: number
  precision?: number
  value?: number
  defaultValue?: number
}
