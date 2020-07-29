import { BasePropsType } from '../_internal'

export interface ErrorBlockPropsType extends BasePropsType {
  title?: string
  error: {
    src: string
    text: string
  }
}
