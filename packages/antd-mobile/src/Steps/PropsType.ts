import { BasePropsType } from '../_internal'

type Direction = 'vertical' | 'horizontal'

export interface StepPropsType extends BasePropsType {
  title: string
  index?: number
  description?: string
  fail?: boolean
}

export interface StepsPropsType extends BasePropsType {
  direction?: Direction
  current?: number
  children?: any[]
}
