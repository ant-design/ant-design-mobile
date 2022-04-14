import type { FC, MouseEvent } from 'react'
import React, { useContext } from 'react'
import { context, Link, NavLink } from 'dumi/theme'
import LocaleSelect from './LocaleSelect'
import './Navbar.less'
import p from '../../../package.json'
import SearchBar from './SearchBar'
import { Popover } from 'antd-mobile'

interface INavbarProps {
  location: any
  darkPrefix?: React.ReactNode
}

const Navbar: FC<INavbarProps> = ({ location, darkPrefix }) => {
  const {
    base,
    config: { title, logo },
    nav: navItems,
  } = useContext(context)

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
            const popoverContent = Boolean(nav.children?.length) && (
              <ul className='nav-popover-ul'>
                {nav.children.map(
                  item =>
                    !!item.path && (
                      <li key={item.path}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                      </li>
                    )
                )}
              </ul>
            )
            const span = (
              <span key={nav.title || nav.path}>
                {nav.path ? (
                  <NavLink to={nav.path}>{nav.title}</NavLink>
                ) : (
                  <a>{nav.title}</a>
                )}
              </span>
            )
            return popoverContent ? (
              <Popover content={popoverContent} trigger='click'>
                {span}
              </Popover>
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
