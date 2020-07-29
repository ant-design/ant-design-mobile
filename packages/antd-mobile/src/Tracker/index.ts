/**
 * 记录组件使用情况
 *
 */
import { version } from 'react'

export interface IBaseParam {
  // antd-mobile 版本
  version: string
  // react 版本
  reactVersion: string
  // 日志类型
  type: LogType
  // 组件额外的参数
  c1?: any
}

// 上报类型
export enum LogType {
  // 组件渲染
  RENDERED = 'RENDERED',
  // 其他自定义的错误类型
  CUSTOM = 'CUSTOM',
  // 组件内部错误
  ERROR = 'ERROR',
}

export const baseData = {
  // @ts-ignore
  version: __VERSION__,
  reactVersion: version,
}

export interface ITracker {
  log(component: string, options: IBaseParam, ext?: any): void
}

let tracker: ITracker | null = null

export const setTracker = (Tracker: ITracker) => {
  if (typeof Tracker?.log === 'function') {
    tracker = Tracker
  }
}

export const getTracker: () => ITracker = () => {
  if (typeof tracker?.log === 'function') {
    return tracker
  }

  // 默认模拟一个空函数
  return {
    log() {},
  }
}

export default {
  setTracker,
}
