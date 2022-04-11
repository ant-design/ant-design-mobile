import React, { useContext, useLayoutEffect, useState } from 'react'
import type { IRouteComponentProps } from '@umijs/types'
import { context, Link } from 'dumi/theme'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import { SlugList } from '../components/slug-list'
import '../style/layout-default.less'
import '../style/layout.less'

const Hero = (hero: any) => (
  <>
    <div className='__dumi-default-layout-hero'>
      {hero.image && <img src={hero.image} width={400} />}
      <h1>{hero.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: hero.desc }} />
      {hero.actions &&
        hero.actions.map((action: any) => (
          <Link to={action.link} key={action.text}>
            <button type='button'>{action.text}</button>
          </Link>
        ))}
    </div>
  </>
)

const Features = (features: any) => (
  <div className='__dumi-default-layout-features'>
    {features.map((feat: any) => (
      <dl
        key={feat.title}
        style={{ backgroundImage: feat.icon ? `url(${feat.icon})` : undefined }}
      >
        {feat.link ? (
          <Link to={feat.link}>
            <dt>{feat.title}</dt>
          </Link>
        ) : (
          <dt>{feat.title}</dt>
        )}
        <dd dangerouslySetInnerHTML={{ __html: feat.desc }} />
      </dl>
    ))}
  </div>
)

const Layout: React.FC<IRouteComponentProps> = ({ children, location }) => {
  const {
    config: { mode, repository },
    meta,
    locale,
  } = useContext(context)
  const { url: repoUrl, branch } = repository
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true)
  const isSiteMode = mode === 'site'
  const showHero = isSiteMode && meta.hero
  const showFeatures = isSiteMode && meta.features
  const showSideMenu =
    meta.sidemenu !== false && !showHero && !showFeatures && !meta.gapless
  const showSlugs =
    !showHero &&
    !showFeatures &&
    Boolean(meta.slugs?.length) &&
    (meta.toc === 'content' || meta.toc === undefined) &&
    !meta.gapless
  const isCN = !!locale && /^zh|cn$/i.test(locale)
  const updatedTimeIns = new Date(meta.updatedTime)
  const updatedTime: any = `${updatedTimeIns.toLocaleDateString([], {
    hour12: false,
  })} ${updatedTimeIns.toLocaleTimeString([], { hour12: false })}`

  useLayoutEffect(() => {
    if (window !== window.parent) {
      return
    }
    if (
      window.innerWidth <= 600 &&
      !window.location.pathname.startsWith('/gallery')
    ) {
      window.location.href = '/gallery'
    }
  }, [])

  return (
    <div
      className='__dumi-default-layout'
      data-route={location.pathname}
      data-show-sidemenu={String(showSideMenu)}
      data-show-slugs={String(showSlugs)}
      data-site-mode={isSiteMode}
      data-gapless={String(!!meta.gapless)}
      onClick={() => {
        if (menuCollapsed) return
        setMenuCollapsed(true)
      }}
    >
      <Navbar
        location={location}
        onMobileMenuClick={ev => {
          setMenuCollapsed(val => !val)
          ev.stopPropagation()
        }}
      />
      {meta.full ? (
        <>{children}</>
      ) : (
        <>
          <SideMenu mobileMenuCollapsed={menuCollapsed} location={location} />
          {showHero && Hero(meta.hero)}
          {showFeatures && Features(meta.features)}
          <div className='__dumi-default-layout-content'>
            <div className='__dumi-default-mobile-content'>
              <article>{children}</article>
              {<SlugList slugs={meta.slugs} />}
            </div>
            {!showHero && !showFeatures && meta.filePath && !meta.gapless && (
              <div className='__dumi-default-layout-footer-meta'>
                <Link to={`${repoUrl}/edit/${branch}/${meta.filePath}`}>
                  {isCN ? `在 GitHub 上编辑此页` : `Edit this doc on GitHub`}
                </Link>
                <span
                  data-updated-text={isCN ? '最后更新时间：' : 'Last update: '}
                >
                  {updatedTime}
                </span>
              </div>
            )}
            {(showHero || showFeatures) && meta.footer && (
              <div
                className='__dumi-default-layout-footer'
                dangerouslySetInnerHTML={{ __html: meta.footer }}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Layout
