import React, { useEffect, useRef } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { lorem } from 'demos'
import { IndexBarRef } from 'antd-mobile/src/components/index-bar'

const getRandomList = (min: number, max: number): string[] => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill('')
}

const charCodeOfA = 'A'.charCodeAt(0)
const groups = Array(26)
  .fill('')
  .map((_, i) => ({
    title: String.fromCharCode(charCodeOfA + i),
    items: getRandomList(3, 10).map(() => lorem.generateWords(2)),
  }))

export default () => {
  const indexBarRef = useRef<IndexBarRef>(null)

  useEffect(() => {
    indexBarRef.current?.scrollTo(groups[3].title)
  }, [])

  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar ref={indexBarRef}>
        {groups.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={`标题${title}`}
              key={`标题${title}`}
            >
              <List>
                {items.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}
