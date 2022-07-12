import type { FC } from 'react'
import React, { useContext } from 'react'
import { context, NavLink } from 'dumi/theme'
import './SideMenu.less'
// import { DocSearch } from '@docsearch/react'
// import '@docsearch/css'

interface INavbarProps {
  location: any
  darkPrefix?: React.ReactNode
}

const SideMenu: FC<INavbarProps> = ({ location }) => {
  const {
    config: { mode },
    menu,
    meta,
  } = useContext(context)
  const isHiddenMenus =
    Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') ||
    meta.sidemenu === false ||
    undefined

  if (isHiddenMenus) return null

  return (
    <div className='__dumi-default-menu'>
      <div className='__dumi-default-menu-inner'>
        {/* menu list */}
        <ul className='__dumi-default-menu-list'>
          {/*<DocSearch*/}
          {/*  appId='BH4D9OD16A'*/}
          {/*  indexName='ant_design_mobile'*/}
          {/*  apiKey='3f05ea4cbd28d07129a5e32e87a856b5'*/}
          {/*/>*/}
          {menu.map(item => {
            // always use meta from routes to reduce menu data size
            const hasChildren = item.children && Boolean(item.children.length)
            const menuPaths = hasChildren
              ? item.children?.map(i => i.path)
              : [
                  item.path,
                  // handle menu group which has no index route and no valid children
                  location.pathname.startsWith(`${item.path}/`)
                    ? location.pathname
                    : null,
                ]

            if (hasChildren) {
              return (
                <li key={item.path || item.title}>
                  <NavLink
                    to={item.path}
                    isActive={() =>
                      menuPaths?.includes(location.pathname) ?? false
                    }
                  >
                    <span className='adm-doc-group-title'>{item.title}</span>
                  </NavLink>
                  <ul>
                    {item.children?.map(child => (
                      <li key={child.path}>
                        <NavLink to={child.path} exact>
                          <span>{child.title}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            } else {
              return (
                <li key={item.path}>
                  <NavLink to={item.path} exact>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
