import { BasePropsType } from '../_internal'

export interface IconPropsType extends BasePropsType {
  prefixCls: string
  image?: string
}

export interface TitlePropsType extends BasePropsType {
  title?: string
  subTitle?: string
  prefixCls: string
}

export interface CouponPropsType extends BasePropsType {
  onPress?: (e?: React.SyntheticEvent) => void
  buttonText?: string
  subButtonText?: string
  subTitle?: string
  title?: string
  image?: string
}
