import * as React from 'react'
import {
  unstable_List as List,
  unstable_Switch as Switch,
  unstable_Radio as Radio,
} from '@ant-design/mobile'

type RadioDataValue = string[]
interface Data {
  [key: string]: {
    hide?: (d: any) => boolean
    desc?: string
    v: string | boolean
    type?: 'switch' | 'radio'
    options?: RadioDataValue
  }
}

type Ret<T, W> = {
  [K in keyof T]: W
}

export default function<T extends Data>(data: T) {
  const fixData = Object.keys(data).reduce((ret, k) => {
    const v = data[k].v
    return {
      ...ret,
      [k]: v,
    }
    // 现在没有办法返回正确的 Ret 类型
  }, {} as Ret<T, any>)

  const [d, sd] = React.useState(fixData)

  // 这里顺序会受 Object.keys(d) 的变化而变化。
  // let a = { a: 1, b: 2, c: 3 }
  // alert(JSON.stringify(Object.keys(a)))
  // a = { ...a, a: 4 }
  // alert(JSON.stringify(Object.keys(a)))
  // 比如以上例子，在 pc chrome 是 ['a', 'b', 'c']，在 ios chrome 则是 ['b', 'c', 'a']
  // 因此，考虑到 state 不会新增 key, 这里为了简单起见，先固定 d 的顺序

  const sortedD = React.useRef(Object.keys(d))

  const view = (
    <List renderHeader="条件筛选" renderFooter=" ">
      {sortedD.current.map(k => {
        if (data[k].hide?.(d)) {
          return null
        }
        // default is switch
        if (data[k].type === 'switch' || data[k].type === undefined) {
          return (
            <List.Item
              key={k}
              extra={
                <Switch
                  checked={d[k] as boolean}
                  onChange={c => {
                    sd({
                      ...d,
                      [k]: c,
                    })
                  }}
                />
              }
            >
              {data[k].desc || k}
            </List.Item>
          )
        }

        return (
          <Radio.Group
            defaultValue={d[k]}
            key={k}
            onChange={v => {
              sd({
                ...d,
                [k]: v,
              })
            }}
          >
            {data[k].options!.map(i => {
              return (
                <Radio.Item key={i} value={i}>
                  {data[k].desc || k}: {i || '无'}
                </Radio.Item>
              )
            })}
          </Radio.Group>
        )
      })}
    </List>
  )

  return [d, view] as [typeof fixData, JSX.Element]
}
