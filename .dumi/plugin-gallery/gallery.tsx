import React, { useEffect, useState } from 'react'
import { List, NavBar } from 'antd-mobile'
// @ts-ignore
import ComponentConfig from '@@/dumi/config'
// @ts-ignore
import DemosConfig from '@@/dumi/demos'
import styles from './gallery.less'
import classNames from 'classnames'

const components = ComponentConfig['menus']['zh']['/zh/components']

const getDemoPath = (path: string): string => {
  const keyArrs = path.split('/')
  const key = keyArrs[keyArrs.length - 1]
  if (DemosConfig[`${key}-demos`]) {
    return `/~demos/${key}-demos`
  } else if (DemosConfig[`${key}-demo1`]) {
    return `/~demos/${key}-demo1`
  }
  return path
}
export default ({}) => {
  const [url, setUrl] = useState('')
  const [currentComponent, setCurrentComponent] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  })

  return (
    <div style={{ height: window.innerHeight }} className={styles.gallery}>
      <div className={styles.header}>
        <NavBar
          backArrow={!!url}
          onBack={() => {
            setUrl('')
            setCurrentComponent('')
          }}
        >
          {currentComponent || 'Ant Design Mobile'}
        </NavBar>
      </div>
      <div className={classNames(styles.body, styles.demoBody)}>
        <iframe
          hidden={!url}
          src={url}
          style={{
            width: window.innerWidth,
            height: '100%',
            border: 'none',
          }}
        />
      </div>
      <div className={styles.body} hidden={!!url}>
        {components.map(group => {
          return (
            <List key={group.title} header={group.title}>
              {group.children.map(item => (
                <List.Item
                  key={item.title}
                  onClick={() => {
                    setUrl(getDemoPath(item.path))
                    setCurrentComponent(item.title)
                  }}
                >
                  {item.title}
                </List.Item>
              ))}
            </List>
          )
        })}
      </div>
    </div>
  )
}
