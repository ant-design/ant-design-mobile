import { BasePropsType } from '../_internal'

export interface GuideModalPropsType extends BasePropsType {
  outStepEleIds?: string[]
  fatigue?: number
  storageKey?: string
  customNext?: boolean
  showSkip?: boolean
  onChange?: (step: number, finished: boolean) => void
  onMaskPress?: (opts: { next(): void; skip(): void }) => void
}

export interface StepPropsType extends BasePropsType {
  nextBtnText?: string
}
