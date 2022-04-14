import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd-mobile'
import { DemoBlock, lorem } from 'demos'
import styles from './demo4.less'
import { useThrottleFn } from 'ahooks'

const tabItems = [
  { key: '1', title: '第一项', text: lorem.generateParagraphs(8) },
  { key: '2', title: '第二项', text: lorem.generateParagraphs(8) },
  { key: '3', title: '第三项', text: lorem.generateParagraphs(8) },
  { key: '4', title: '第四项', text: lorem.generateParagraphs(8) },
]

const tabHeight = 42

export default () => {
  const [activeKey, setActiveKey] = useState('1')

  const { run: handleScroll } = useThrottleFn(
    () => {
      let currentKey = tabItems[0].key
      for (const item of tabItems) {
        const element = document.getElementById(`anchor-${item.key}`)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= tabHeight) {
          currentKey = item.key
        } else {
          break
        }
      }
      setActiveKey(currentKey)
    },
    {
      leading: true,
      trailing: true,
      wait: 100,
    }
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <DemoBlock title='作为页面滚动的导航' padding='0'>
        <div className={styles.tabsContainer}>
          <Tabs
            activeKey={activeKey}
            onChange={key => {
              document.getElementById(`anchor-${key}`)?.scrollIntoView()
              window.scrollTo({
                top: window.scrollY - tabHeight,
              })
            }}
          >
            {tabItems.map(item => (
              <Tabs.Tab title={item.title} key={item.key} />
            ))}
          </Tabs>
        </div>
        <div className={styles.content}>
          {tabItems.map(item => (
            <div key={item.key}>
              <h2 id={`anchor-${item.key}`}>{item.title}</h2>
              {item.text}
            </div>
          ))}
        </div>
      </DemoBlock>
    </>
  )
}
