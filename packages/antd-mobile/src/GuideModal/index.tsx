import * as React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'

import { withError, Touchable } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker, useContainer, useBodyScrollLock } from '../hooks'
import { renderOuterStep, clearOutStep, buildChildren, prefixCls } from './util'
import { GuideModalPropsType } from './PropsType'
import Step from './Step'
import Next from './Next'
export { Step, Next }
import '@ant-design/mobile-styles/lib/GuideModal'

const STORAGE_KEY = 'GUIDE_MODAL'

const showTimes: { [key: string]: number } = {}
type TGuideModal = React.FC<GuideModalPropsType> & {
  Step: typeof Step
  Next: typeof Next
}
const GuideModal: TGuideModal = props => {
  const {
    className,
    children,
    outStepEleIds,
    fatigue,
    storageKey = STORAGE_KEY,
    customNext,
    onChange,
    onMaskPress,
    showSkip = true,
  } = props
  const [activeStep, setActiveStep] = useState(0)
  const [isSkip, setIsSkip] = useState(false)
  useTracker(GuideModal.displayName)

  const showFatigue = fatigue || 1
  // 整个运行周期只更新一次获取值
  // 不能在每次render时都获取，因为useEffect里更新了一次loaclStorage，导致后来render获取的疲劳度包含本次
  if (typeof showTimes[storageKey] === 'undefined') {
    showTimes[storageKey] = +(localStorage.getItem(storageKey) || 0)
  }

  const firstOuterEle = outStepEleIds && outStepEleIds[0]

  let stepLen = 0
  if (Array.isArray(children)) {
    React.Children.forEach(children, (child: any) => {
      if (child && child.type && child.type.displayName === 'Step') {
        stepLen += 1
      }
    })
  } else {
    stepLen = 1
  }

  useEffect(() => {
    onChange?.(activeStep, activeStep === stepLen)
  }, [activeStep])
  useEffect(() => {
    // 不直接用外部的showTimes，因为showTimes一定会更新一次
    if (firstOuterEle && showTimes[storageKey] < +showFatigue) {
      // 延时等待页面元素先渲染完
      setTimeout(() => {
        renderOuterStep(firstOuterEle)
      }, 300)
    }
  }, [firstOuterEle, showFatigue, storageKey])

  useEffect(() => {
    if (showTimes[storageKey] <= +showFatigue) {
      localStorage.setItem(storageKey, String(showTimes[storageKey] + 1))
    }
  }, [storageKey, showFatigue])

  const goNext = React.useCallback(() => {
    setActiveStep(activeStep + 1)
    const outerStepEle = outStepEleIds && outStepEleIds[activeStep + 1]
    if (outerStepEle) {
      renderOuterStep(outerStepEle, outStepEleIds && outStepEleIds[activeStep])
    }
  }, [activeStep, outStepEleIds])

  const goSkip = React.useCallback(() => {
    setIsSkip(true)
  }, [])

  const childrenWithProps = useMemo(() => {
    return buildChildren(
      children,
      'Step',
      (_child: JSX.Element, index: number) => ({
        goNext,
        stepIndex: index,
        activeStep,
        customNext,
        stepLen,
        showSkip,
        goSkip,
      }),
    )
  }, [activeStep, children, outStepEleIds, customNext])

  // 在进行到最后一步或者跳过时，清除最后一个渲染出来的镂空元素
  useEffect(() => {
    if (activeStep >= stepLen && outStepEleIds && outStepEleIds[stepLen - 1]) {
      clearOutStep(outStepEleIds[stepLen - 1])
    }
    if (isSkip && outStepEleIds && outStepEleIds[activeStep]) {
      clearOutStep(outStepEleIds[activeStep])
      // 如果是跳过的话，调整一下 activeStep
      setActiveStep(stepLen)
    }
  }, [activeStep, outStepEleIds, stepLen, isSkip])

  const hideMask =
    showTimes[storageKey] >= +showFatigue || activeStep >= stepLen || isSkip

  const dom = useContainer('guide-modal', !hideMask)

  useBodyScrollLock(!hideMask)

  if (hideMask) {
    return null
  }

  const showStepIndicator = stepLen !== 1 && !customNext
  let indicatorView = null
  if (showStepIndicator) {
    let indicatorArr = []
    for (let i = 0; i < stepLen; i++) {
      indicatorArr.push(
        <span
          key={i}
          className={
            `${prefixCls}-indicator` +
            (activeStep === i ? ` ${prefixCls}-indicator-active` : '')
          }
        ></span>,
      )
    }
    indicatorView = (
      <div className={`${prefixCls}-indicator-area`}>{indicatorArr}</div>
    )
  }

  const cls = classnames({
    [`${prefixCls}`]: true,
    [`${className}`]: !!className,
  })
  return createPortal(
    <Touchable onPress={() => onMaskPress?.({ next: goNext, skip: goSkip })}>
      <div {...getDataAttr(props)} className={cls}>
        {childrenWithProps}
        {indicatorView}
      </div>
    </Touchable>,
    dom!,
  )
}

GuideModal.Step = Step
GuideModal.Next = Next

GuideModal.displayName = 'GuideModal'

export default withError(GuideModal)
