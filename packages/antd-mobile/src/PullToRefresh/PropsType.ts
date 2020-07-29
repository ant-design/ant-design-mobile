import { BasePropsType } from '../_internal'
import { LocaleType } from '../LocaleProvider/LocaleType'
export enum PullTypeEnum {
  deactivate = 'deactivate',
  activate = 'activate',
  release = 'release',
  finish = 'finish',
}

export type IndicatorFC = React.FC<{
  progress: number
  type: PullTypeEnum
  onLoadingFinish: () => void
  locale: LocaleType
}>

export type IndicatorType = React.ReactNode | IndicatorFC

export interface PullToRefreshPropsType extends BasePropsType {
  direction?: 'down' | 'up'
  distanceToRefresh?: number
  indicator?: {
    deactivate: IndicatorType
    activate: IndicatorType
    release: IndicatorType
    finish: IndicatorType
  }

  // 刷新生效
  onRefresh?: () => void
  // 是否在刷新中，比如是否在请求中
  refreshing?: boolean
}
