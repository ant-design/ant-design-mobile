import * as React from 'react'
import classnames from 'classnames'
import { CloseOutline } from '@ant-design/mobile-icons'
import Button from '../Button'
import { StandardOptions } from './PropsType'
import { createModal } from './common'

const prefixCls = 'amd-modal-standard'

function renderFooter(options: StandardOptions, prefixCls: string, cb: any) {
  const mainType = options.mainButton.type ?? 'normal'
  const mainButtonType = mainType === 'primary' ? 'primary' : undefined
  const closeCls = classnames(
    prefixCls + '-close-icon',
    prefixCls + '-close-icon-' + (options.closeType || 'dark'),
  )

  // 按钮布局方式
  const direction = (() => {
    // 1. 3 按钮只能纵向
    if (options.mainButton && options.addonButton && options.cancelButton) {
      return 'column'
    }
    // 2. 两个按钮，某个按钮文字长度超过 5 就纵向
    if (
      options.mainButton.text.length > 5 ||
      Number(options.addonButton?.text?.length) > 5
    ) {
      return 'column'
    }
    // 3. 主按钮是强调类的，也是纵向
    if (options.mainButton.type === 'primary') {
      return 'column'
    }
    // 默认横向
    return 'row'
  })()

  return (
    <>
      <div className={prefixCls + '-buttons-' + direction}>
        <Button
          type={mainButtonType}
          onPress={cb(options.mainButton.onPress)}
          className={prefixCls + '-button-main-' + mainType}
        >
          {options.mainButton.text}
        </Button>
        {options.addonButton && (
          <Button
            onPress={cb(options.addonButton.onPress)}
            className={prefixCls + '-button-addon'}
          >
            {options.addonButton.text}
          </Button>
        )}
        {options.cancelButton && (
          <Button
            onPress={cb(options.cancelButton.onPress)}
            className={prefixCls + '-button-cancel'}
          >
            {options.cancelButton.text}
          </Button>
        )}
        <CloseOutline className={closeCls} onPress={cb(options.onDismiss)} />
      </div>
    </>
  )
}

function createStandard(options: StandardOptions) {
  return createModal(options, prefixCls, renderFooter as any)
}

export default createStandard
