import type { FC } from 'react'
import React, { useContext } from 'react'
import { context, Link, NavLink } from 'dumi/theme'
import LocaleSelect from './LocaleSelect'
import './SideMenu.less'

interface INavbarProps {
  mobileMenuCollapsed: boolean
  location: any
  darkPrefix?: React.ReactNode
}

const SideMenu: FC<INavbarProps> = ({
  mobileMenuCollapsed,
  location,
  darkPrefix,
}) => {
  const {
    config: { mode },
    menu,
    nav: navItems,
    base,
    meta,
  } = useContext(context)
  const isHiddenMenus =
    Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') ||
    meta.sidemenu === false ||
    undefined

  return (
    <div
      className='__dumi-default-menu'
      data-mode={mode}
      data-hidden={isHiddenMenus}
      data-mobile-show={!mobileMenuCollapsed || undefined}
    >
      <div className='__dumi-default-menu-inner'>
        {/* mobile nav list */}
        <div className='__dumi-default-menu-mobile-area'>
          {!!navItems.length && (
            <ul className='__dumi-default-menu-nav-list'>
              {navItems.map(nav => {
                const child = Boolean(nav.children?.length) && (
                  <ul>
                    {nav.children.map(item => (
                      <li key={item.path || item.title}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                )

                return (
                  <li key={nav.path || nav.title}>
                    {nav.path ? (
                      <NavLink to={nav.path}>{nav.title}</NavLink>
                    ) : (
                      nav.title
                    )}
                    {child}
                  </li>
                )
              })}
            </ul>
          )}
          {/* site mode locale select */}
          <LocaleSelect location={location} />
          {darkPrefix}
        </div>
        {/* menu list */}
        <ul className='__dumi-default-menu-list'>
          {!isHiddenMenus &&
            menu.map(item => {
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
