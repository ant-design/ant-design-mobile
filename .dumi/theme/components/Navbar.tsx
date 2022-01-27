import type { FC, MouseEvent } from 'react'
import React, { useContext } from 'react'
import { context, Link, NavLink } from 'dumi/theme'
import LocaleSelect from './LocaleSelect'
import './Navbar.less'
import p from '../../../package.json'
import SearchBar from './SearchBar'

interface INavbarProps {
  location: any
  darkPrefix?: React.ReactNode
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void
}

const Navbar: FC<INavbarProps> = ({
  onMobileMenuClick,
  location,
  darkPrefix,
}) => {
  const {
    base,
    config: { title, logo },
    nav: navItems,
  } = useContext(context)

  return (
    <div className='__dumi-default-navbar'>
      <button
        className='__dumi-default-navbar-toggle'
        onClick={onMobileMenuClick}
      />
      <div className='left-part'>
        <Link className='__dumi-default-navbar-logo' to={base}>
          <img src={logo.toString()} alt='logo' />
          <div className='title'>{title}</div>
          <div className='version'>{`v${p.version}`}</div>
        </Link>
      </div>
      <nav>
        <div className='nav-item'>
          <SearchBar />
        </div>
        {navItems.map(nav => {
          const child = Boolean(nav.children?.length) && (
            <ul>
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

          return (
            <span key={nav.title || nav.path}>
              {nav.path ? (
                <NavLink to={nav.path} key={nav.path}>
                  {nav.title}
                </NavLink>
              ) : (
                nav.title
              )}
              {child}
            </span>
          )
        })}
        <div className='__dumi-default-navbar-tool'>
          <LocaleSelect location={location} />
          {darkPrefix}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
