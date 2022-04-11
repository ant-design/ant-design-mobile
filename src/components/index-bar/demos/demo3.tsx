import React, { useEffect, useRef, useState } from 'react'
import { IndexBar, List, SearchBar } from 'antd-mobile'
import { LoremIpsum } from 'lorem-ipsum'
import { IndexBarRef } from 'antd-mobile/es/components/index-bar'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

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
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    indexBarRef.current?.scrollTo(groups[3].title)
  }, [])

  return (
    <div style={{ height: window.innerHeight }}>
      <SearchBar
        value={searchText}
        onChange={value => setSearchText(value)}
        placeholder='请输入搜索关键词'
      />
      <IndexBar ref={indexBarRef}>
        {groups
          .filter(() => Math.random() > 0.5)
          .map(group => {
            const { title, items } = group
            return (
              <IndexBar.Panel
                // 打开下方 index 中的任一个
                index={title}
                // index={`区域`}
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
