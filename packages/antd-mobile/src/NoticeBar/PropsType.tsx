import * as React from 'react'
import { BasePropsType } from '../_internal'

export interface NoticeBarPropsType extends BasePropsType {
  type?: 'normal' | 'error' | 'active'
  mode?: 'closable' | 'link'
  onPress?: () => void
  icon?: React.ReactElement<any> | null
  action?: string | React.ReactElement<any>
  actionLeft?: string | React.ReactElement<any>
  animateSpeed?: 'slow' | 'normal' | 'fast' | number
  animateLoop?: boolean
}

export interface NoticeCapsulePropsType extends BasePropsType {
  type?: 'normal' | 'error' | 'active'
  onPress?: () => void
  items?: string[]
}
export interface NoticeTipPropsType extends BasePropsType {
  type?: 'normal' | 'error' | 'active'
  onPress?: () => void
}
