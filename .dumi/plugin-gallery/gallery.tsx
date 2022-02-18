import React, { useEffect, useLayoutEffect, useState } from 'react'
import { List, NavBar, Popover, SafeArea } from 'antd-mobile'
// @ts-ignore
import ComponentConfig from '@@/dumi/config'
// @ts-ignore
import DemosConfig from '@@/dumi/demos'
import styles from './gallery.less'
import classNames from 'classnames'

const components = ComponentConfig['menus']['zh']['/zh/components'] as [
  {
    title: string
    children: {
      title: string
      path: string
    }[]
  }
]

const demos = Object.keys(DemosConfig)

const componentToDemoPaths: Record<string, string[]> = {}

components.forEach(group => {
  group.children.forEach(item => {
    const keyArrs = item.path.split('/')
    const key = keyArrs[keyArrs.length - 1]
    componentToDemoPaths[item.title] = demos.filter(val =>
      val.startsWith(`${key}-demo`)
    )
  })
})

export default ({}) => {
  const [currentDemoIndex, setCurrentDemoIndex] = useState<number | null>(null)
  const [currentComponent, setCurrentComponent] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  })

  useLayoutEffect(() => {
    if (!currentComponent) {
      setCurrentDemoIndex(null)
    } else {
      setCurrentDemoIndex(0)
    }
  }, [currentComponent])

  const demoSwitcher = currentComponent && currentDemoIndex !== null && (
    <Popover.Menu
      trigger='click'
      placement='bottomRight'
      actions={componentToDemoPaths[currentComponent].map((_, index) => ({
        text: `Demo${index + 1}`,
        onClick: () => {
          setCurrentDemoIndex(index)
        },
      }))}
    >
      <a className={styles.demoSwitcher}>
        {currentDemoIndex + 1} / {componentToDemoPaths[currentComponent].length}
      </a>
    </Popover.Menu>
  )

  return (
    <div style={{ height: window.innerHeight }} className={styles.gallery}>
      <div className={styles.header}>
        <NavBar
          backArrow={currentDemoIndex !== null}
          onBack={() => {
            setCurrentComponent('')
          }}
          right={demoSwitcher}
        >
          {currentComponent || 'Ant Design Mobile'}
        </NavBar>
      </div>
      {currentComponent && currentDemoIndex !== null && (
        <div className={classNames(styles.body, styles.demoBody)}>
          <iframe
            src={
              '/~demos/' +
              componentToDemoPaths[currentComponent][currentDemoIndex]
            }
            style={{
              width: window.innerWidth,
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      )}
      <div className={styles.body} hidden={currentDemoIndex !== null}>
        <div className={styles.guide}>
          <img
            src='https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg'
            alt='logo'
            className={styles.logo}
          />
          <p>下面是一些 Ant Design Mobile 的组件 demo，可以点进去试一试</p>
          <p>
            如果你想查阅完整的组件文档，请在桌面浏览器中访问：
            <a href={window.location.origin} target='_blank'>
              {window.location.origin}
            </a>
          </p>
        </div>
        {components.map(group => {
          return (
            <List key={group.title} header={group.title}>
              {group.children.map(item => {
                const demoPaths = componentToDemoPaths[item.title]
                if (demoPaths && demoPaths.length === 0) return null
                return (
                  <List.Item
                    key={item.title}
                    onClick={() => {
                      setCurrentComponent(item.title)
                    }}
                  >
                    {item.title}
                  </List.Item>
                )
              })}
            </List>
          )
        })}
        <SafeArea position='bottom' />
      </div>
    </div>
  )
}
