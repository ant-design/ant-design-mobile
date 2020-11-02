import * as React from 'react'

// 无限循环的回调
export const useIntervalCallback = <T extends (...args: any[]) => void>(
  cb: T,
  speed: number,
) => {
  const cbRef = React.useRef(cb)
  const interval = React.useRef<ReturnType<typeof setInterval>>()

  React.useEffect(() => {
    // hack, 保持回调函数的实时更新
    cbRef.current = cb
  }, [cb])

  React.useEffect(() => {
    return stop
  }, [])

  const stop = () => {
    interval.current && clearInterval(interval.current)
  }

  const cbWithInterval = (...args: any[]) => {
    interval.current = setInterval(() => {
      cbRef.current(...args)
    }, speed)
  }

  return {
    callback: cbWithInterval as T,
    stop,
  }
}

// 专为 stepper 定制，先执行一次，间隔 0.6s 后开始无限循环
/**
 * When click and hold on a button - the speed of auto change the value.
 */
const SPEED = 100

/**
 * When click and hold on a button - the delay before auto change the value.
 */
const DELAY = 600
export const useStep = <T extends (...args: any[]) => void>(cb: T) => {
  const { callback, stop } = useIntervalCallback(cb, SPEED)
  const timeout = React.useRef<ReturnType<typeof setTimeout>>()

  React.useEffect(() => {
    return stopStep
  }, [])

  const stopStep = () => {
    timeout.current && clearTimeout(timeout.current)
    stop()
  }

  const callbackStep = (...args: any[]) => {
    // 先执行一次
    cb(...args)
    // 延迟后开始无限循环
    timeout.current = setTimeout(() => {
      callback(...args)
    }, DELAY)
  }

  return {
    callback: callbackStep as T,
    stop: stopStep,
  }
}
