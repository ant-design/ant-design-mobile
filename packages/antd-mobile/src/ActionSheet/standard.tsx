import * as React from 'react'
import Dialog from 'rmc-dialog'
import { CloseOutline, LeftOutline } from '@ant-design/mobile-icons'
import Touchable from '@ant-design/mobile-touchable'
import { createGlobalElement } from '../_internal'

interface ActionSheetStandardOptions {
  maskClosable?: boolean
  title?: React.ReactNode
  onClose?: () => void
  content?: React.ReactNode | React.ReactNode[]
}

class Updater<Data> {
  private _fns = new Set<(data: Data) => void>()

  dispatch(data: Data) {
    this._fns.forEach(fn => {
      fn?.(data)
    })
  }
  subscribe(fn: (data: Data) => void) {
    this._fns.add(fn)
  }
  unsubscribe(fn: (data: Data) => void) {
    this._fns.delete(fn)
  }

  clear() {
    this._fns.clear()
  }
}

const C: React.FC<ActionSheetStandardOptions & {
  updater: Updater<{ action: UpdaterAction }>
}> = props => {
  const [step, setStep] = React.useState(0)
  const withSteps = Array.isArray(props.content)
  const prev = React.useCallback(() => {
    if (step > 0) {
      setStep(step - 1)
    }
  }, [step])

  // next 在 withSteps 判断条件之后调用
  const next = React.useCallback(() => {
    if (step < (props.content as any).length - 1) {
      setStep(step + 1)
    }
  }, [step, props.content])

  React.useEffect(() => {
    if (withSteps) {
      // 这里干脆全删了
      props.updater.clear()
      props.updater.subscribe(({ action }) => {
        if (action === UpdaterAction.prev) {
          prev()
        }

        if (action === UpdaterAction.next) {
          next()
        }
      })
    }

    return () => props.updater.clear()
  }, [prev, next])

  const custom = withSteps
    ? (props.content as any)?.[step]
    : props?.content || null

  return (
    <>
      <div className={prefixCls + '-swipe-line'} />
      <div className={prefixCls + '-header'}>
        <Touchable onPress={prev}>
          <div className={prefixCls + '-back'}>
            {withSteps && step > 0 && <LeftOutline size="sm" />}
          </div>
        </Touchable>
        <div className={prefixCls + '-title'}>{props?.title}</div>
        <Touchable onPress={props.onClose}>
          <div className={prefixCls + '-cancel'}>
            <CloseOutline size="sm" />
          </div>
        </Touchable>
      </div>
      <div className={prefixCls + '-custom'}>{custom}</div>
    </>
  )
}

enum UpdaterAction {
  prev,
  next,
}

const prefixCls = 'amd-action-sheet-standard'

function createStandard(options?: ActionSheetStandardOptions) {
  const updater = new Updater<{ action: UpdaterAction }>()
  const close = createGlobalElement(
    // @ts-ignore
    <Dialog
      visible
      title=""
      footer=""
      prefixCls={prefixCls}
      transitionName={'amd-slide-up'}
      maskTransitionName={'amd-fade'}
      onClose={cb}
      maskClosable={options?.maskClosable}
    >
      <C {...options} updater={updater} onClose={cb} />
    </Dialog>,
    'ActionSheet.standard',
  )

  function prev() {
    updater.dispatch({
      action: UpdaterAction.prev,
    })
  }

  function next() {
    updater.dispatch({
      action: UpdaterAction.next,
    })
  }

  function cb() {
    close()
    updater.clear()
    options?.onClose?.()
  }

  return {
    prev,
    next,
    close: cb,
  }
}

export default createStandard
