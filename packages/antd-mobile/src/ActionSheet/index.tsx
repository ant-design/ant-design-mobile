import * as React from 'react'
import classnames from 'classnames'
import Dialog from 'rmc-dialog'
import { Touchable } from '../rmc'
import { promisify, createGlobalElement } from '../_internal'
import createStandard from './standard'

import '@ant-design/mobile-styles/lib/ActionSheet'

interface ActionSheetOptions {
  maskClosable?: boolean
  title?: React.ReactNode
  items: (
    | string
    | {
        value: string
        warn?: boolean
      }
  )[]
}

interface ActionCallBack {
  // -1 表示取消
  (res: { index: number }): void
}

const prefixCls = 'amd-action-sheet'

const Item: React.FC<{
  warn?: boolean
  className: string
  onPress: (e: React.SyntheticEvent) => void
}> = props => {
  const [active, setActive] = React.useState(false)

  const cls = classnames(props.className, {
    [prefixCls + '-active']: active,
    [prefixCls + '-warn']: !!props.warn,
  })

  return (
    <Touchable
      onPress={props.onPress}
      onPressIn={() => {
        setActive(true)
      }}
      onPressOut={() => {
        setActive(false)
      }}
    >
      <div className={cls}>{props.children}</div>
    </Touchable>
  )
}

function createActionSheet(
  options: ActionSheetOptions,
  callback: ActionCallBack,
) {
  const content = (
    <>
      {options.title && (
        <div className={prefixCls + '-title'}>{options.title}</div>
      )}
      <div className={prefixCls + '-list'}>
        {options.items.map((item, i) => {
          let fixedItem = {} as any
          if (typeof item === 'string') {
            fixedItem.value = item
          } else {
            fixedItem = item
          }
          return (
            <Item
              warn={fixedItem.warn}
              key={i}
              className={prefixCls + '-item'}
              onPress={() => cb(i)}
            >
              {fixedItem.value}
            </Item>
          )
        })}
      </div>
      <Item className={prefixCls + '-cancel'} onPress={() => cb(-1)}>
        取消
      </Item>
    </>
  )

  const close = createGlobalElement(
    // @ts-ignore
    <Dialog
      visible
      title=""
      footer=""
      prefixCls={prefixCls}
      transitionName={'amd-slide-up'}
      maskTransitionName={'amd-fade'}
      onClose={() => cb(-1)}
      maskClosable={options.maskClosable}
    >
      {content}
    </Dialog>,
    'ActionSheet',
  )

  function cb(index: number) {
    close()
    callback({
      index,
    })
  }
}

export default {
  show: promisify(createActionSheet),
  standard: createStandard,
}
