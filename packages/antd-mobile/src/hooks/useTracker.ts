import { useEffect } from 'react'
import { LogType, getTracker, IBaseParam, baseData } from '../Tracker'

export { LogType }

export default (component: string = 'UNKNOWN', c1?: IBaseParam['c1']) => {
  const tracker = getTracker()
  const data: IBaseParam = {
    ...baseData,
    type: LogType.RENDERED,
    ...(c1 ? { c1 } : {}),
  }

  useEffect(() => {
    tracker.log(component, data)
  }, [])

  // 返回的函数执行会上报 data.type=CUSTOM 的数据
  return (ext: any) => {
    return tracker.log(component, { ...data, type: LogType.CUSTOM }, ext)
  }
}
