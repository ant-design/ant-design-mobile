import React from 'react'
import {IndexBar} from 'antd-mobile'

export default () => {
  const getRandomList = (min: number, max: number): string[] => {
    return new Array(Math.floor(Math.random() * (max - min) + min)).fill('')
  }

  const ItemList = (() => {
    const charCodeOfA = 'A'.charCodeAt(0)
    const indexList = Array(26)
      .fill('')
      .map((_, i) => String.fromCharCode(charCodeOfA + i))

    return indexList
  })()

  return (
    <div style={{height: '500px'}}>
      <IndexBar>
        {ItemList.map(item => {
          return (
            <IndexBar.Panel
              index={item}
              title={`标题${item}`}
              key={`标题${item}`}
            >
              {getRandomList(3, 10).map(() => (
                <div key={Math.random()}>文本</div>
              ))}
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}
