// 用于 standard 和 notice 之间共享

import * as React from 'react'
import classnames from 'classnames'
import Dialog from 'rmc-dialog'
import { createGlobalElement, uuid } from '../_internal'
import { StandardOptions, BaseModalOptions } from './PropsType'

const renderContent = (options: BaseModalOptions, prefix: string) => {
  const contentPrefix = prefix + '-content'
  const thumbCls = classnames(contentPrefix + '-thumb', {
    [`${contentPrefix}-thumb-lg`]: options.thumbSize === 'lg',
  })
  return (
    <>
      {options.background && (
        <img
          className={contentPrefix + '-background'}
          src={options.background}
        />
      )}
      <div className={contentPrefix + '-comb'}>
        {options.thumb && <img className={thumbCls} src={options.thumb} />}
        {options.title && (
          <div className={contentPrefix + '-title'}>{options.title}</div>
        )}
        <div className={contentPrefix + '-content'}>{options.content}</div>
        {options.custom && (
          <div className={contentPrefix + '-custom'}>{options.custom}</div>
        )}
      </div>
    </>
  )
}

export function createModal(
  options: StandardOptions,
  prefixCls: string,
  footer: (
    options: StandardOptions,
    prefixCls: string,
    cb: any,
  ) => React.ReactNode,
) {
  const content = renderContent(options, prefixCls)
  const close = createGlobalElement(
    // @ts-ignore
    <Dialog
      visible
      title=""
      footer={footer(options, prefixCls, cb)}
      prefixCls={prefixCls}
      transitionName="amd-zoom"
      maskTransitionName="amd-fade"
      maskClosable={false}
      className={options.className}
    >
      {content}
    </Dialog>,
    `Modal-${uuid()}`,
  )

  function cb(fn?: () => void) {
    return () => {
      close()
      options.onClose?.()
      fn?.()
    }
  }
}
