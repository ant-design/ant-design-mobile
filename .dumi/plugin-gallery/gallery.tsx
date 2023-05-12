import React, { useEffect, useLayoutEffect, useState } from 'react'
import { List, NavBar, Popover, SafeArea, SearchBar } from 'antd-mobile'
// @ts-ignore
import ComponentConfig from '@@/dumi/config'
// @ts-ignore
import DemosConfig from '@@/dumi/demos'
import styles from './gallery.less'
import classNames from 'classnames'
import { useDebounceEffect } from 'ahooks'
import { cloneDeep } from 'lodash'

type ComponentGroup = {
  title: string
  children: {
    title: string
    path: string
  }[]
}

const components: ComponentGroup[] =
  ComponentConfig['menus']['zh']['/zh/components']

const demos = Object.keys(DemosConfig)

const componentToDemoPaths: Record<string, string[]> = {}
const componentToTitle: Record<string, string> = {}

components.forEach(group => {
  group.children.forEach(item => {
    const keyArrs = item.path.split('/')
    const key = keyArrs[keyArrs.length - 1]
    componentToDemoPaths[key] = demos.filter(val =>
      val.startsWith(`${key}-demo`)
    )
    componentToTitle[key] = item.title
  })
})

export default props => {
  const [currentDemoIndex, setCurrentDemoIndex] = useState<number | null>(null)
  const [currentComponent, setCurrentComponent] = useState('')
  const [title, setTitle] = useState('Ant Design Mobile')
  const [searchValue, setSearchValue] = useState<string>('')
  const [componentGroups, setComponentGroups] = useState(components)
  const { history, match } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  })

  useLayoutEffect(() => {
    const { component = '' } = match.params
    setCurrentComponent(component)
    setTitle(componentToTitle[component] || 'Ant Design Mobile')
  }, [match.params])

  useLayoutEffect(() => {
    if (!currentComponent) {
      setCurrentDemoIndex(null)
    } else {
      setCurrentDemoIndex(0)
    }
  }, [currentComponent])

  useDebounceEffect(
    () => {
      let filterGroups = cloneDeep(components)
      filterGroups.forEach(group => {
        group.children = group.children.filter(item =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      })
      setComponentGroups(filterGroups.filter(group => group.children.length))
    },
    [searchValue],
    {
      wait: 200,
      leading: false,
      trailing: true,
    }
  )

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
            history.push('/gallery')
          }}
          right={demoSwitcher}
        >
          {title}
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
        <div className={styles.search}>
          <SearchBar
            placeholder='搜索组件'
            value={searchValue}
            onChange={val => setSearchValue(val)}
          />
        </div>

        {componentGroups.map(group => {
          return (
            <List key={group.title} header={group.title}>
              {group.children.map(item => {
                const keyArrs = item.path.split('/')
                const key = keyArrs[keyArrs.length - 1]
                const demoPaths = componentToDemoPaths[key]
                if (demoPaths && demoPaths.length === 0) return null
                return (
                  <List.Item
                    key={key}
                    onClick={() => {
                      history.push(`/gallery/${key}`)
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
