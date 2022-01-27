import React, { useState } from 'react'
import { SideBar } from 'antd-mobile'
import { tabs } from './tabs'
import styles from './demo3.less'
import classNames from 'classnames'

export default () => {
  const [activeKey, setActiveKey] = useState('key1')

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <SideBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </div>
      <div className={styles.main}>
        <div
          className={classNames(
            styles.content,
            activeKey === 'key1' && styles.active
          )}
        >
          页面 1
        </div>
        <div
          className={classNames(
            styles.content,
            activeKey === 'key2' && styles.active
          )}
        >
          页面 2
        </div>
        <div
          className={classNames(
            styles.content,
            activeKey === 'key3' && styles.active
          )}
        >
          页面 3
        </div>
      </div>
    </div>
  )
}
