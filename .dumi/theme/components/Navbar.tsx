import type { FC } from 'react'
import React, { useContext, useMemo } from 'react'
import { context, Link, NavLink } from 'dumi/theme'
import LocaleSelect from './LocaleSelect'
import './Navbar.less'
import p from '../../../package.json'
import SearchBar from './SearchBar'
import { Popover } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/popover'

interface INavbarProps {
  location: any
  darkPrefix?: React.ReactNode
}

const Navbar: FC<INavbarProps> = ({ location, darkPrefix }) => {
  const {
    base,
    config: { title, logo },
    nav,
    locale,
  } = useContext(context)

  const navItems = useMemo(() => {
    const isCN = !!locale && /^zh|cn$/i.test(locale)

    if (
      isCN &&
      typeof window !== undefined &&
      window.location.host === 'ant-design-mobile.antgroup.com'
    ) {
      return nav.filter(item => item.title !== '国内镜像')
    }

    return nav
  }, [nav, locale])

  return (
    <div className='__dumi-default-navbar'>
      <button className='__dumi-default-navbar-toggle' />
      <div className='left-part'>
        <Link className='__dumi-default-navbar-logo' to={base}>
          <img src={logo.toString()} alt='logo' />
          <div className='title'>{title}</div>
          <div className='version'>{`v${p.version}`}</div>
        </Link>
      </div>
      <div className='middle-part'>
        <SearchBar />
      </div>
      <div className='right-part'>
        <nav>
          {navItems.map(nav => {
            const key = nav.title || nav.path
            const actions: Action[] =
              Boolean(nav.children?.length) &&
              nav.children.map(item => ({
                text: item.title,
                onClick: () => {
                  window.open(item.path, '_blank')
                },
              }))
            const span = (
              <span key={key}>
                {nav.path ? (
                  <NavLink to={nav.path}>{nav.title}</NavLink>
                ) : (
                  <a>{nav.title}</a>
                )}
              </span>
            )
            return actions ? (
              <Popover.Menu trigger='click' actions={actions} key={key}>
                {span}
              </Popover.Menu>
            ) : (
              span
            )
          })}
          <div className='__dumi-default-navbar-tool'>
            <LocaleSelect location={location} />
            {darkPrefix}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
