import type { FC, MouseEvent } from 'react'
import React, { useContext } from 'react'
import { context, Link, NavLink } from 'dumi/theme'
import LocaleSelect from './LocaleSelect'
import './Navbar.less'
import p from '../../../package.json'

interface INavbarProps {
  location: any
  navPrefix?: React.ReactNode
  darkPrefix?: React.ReactNode
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void
}

const Navbar: FC<INavbarProps> = ({
  onMobileMenuClick,
  navPrefix,
  location,
  darkPrefix,
}) => {
  const {
    base,
    config: { mode, title, logo },
    nav: navItems,
  } = useContext(context)

  return (
    <div className='__dumi-default-navbar' data-mode={mode}>
      {/* menu toogle button (only for mobile) */}
      <button
        className='__dumi-default-navbar-toggle'
        onClick={onMobileMenuClick}
      />
      {/* logo & title */}
      <div>
        <Link
          className='__dumi-default-navbar-logo'
          style={{
            backgroundImage: logo ? `url('${logo}')` : undefined,
          }}
          to={base}
          data-plaintext={logo === false || undefined}
        >
          {title}
        </Link>
        <div className='__dumi-default-navbar-version'>{`v${p.version}`}</div>
      </div>
      <nav>
        {navPrefix}
        {/* nav */}
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
