import React, { useContext, useLayoutEffect, useState } from 'react'
import type { IRouteComponentProps } from '@umijs/types'
import { context, Link } from 'dumi/theme'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import Dark from '../components/Dark'
import { SlugList } from '../components/slug-list'
import '../style/layout-default.less'
import '../style/global.less'
import styles from './index.less'

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
  const showSideMenu = meta.sidemenu !== false && !meta.gapless
  const showSlugs =
    Boolean(meta.slugs?.length) &&
    (meta.toc === 'content' || meta.toc === undefined) &&
    !meta.gapless
  const isCN = !!locale && /^zh|cn$/i.test(locale)
  const updatedTimeIns = new Date(meta.updatedTime)
  const updatedTime: any = `${updatedTimeIns.toLocaleDateString([], {
    hour12: false,
  })} ${updatedTimeIns.toLocaleTimeString([], { hour12: false })}`
  const [darkSwitch, setDarkSwitch] = useState<boolean>(false)

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
      className={styles.layout}
      data-route={location.pathname}
      data-show-sidemenu={String(showSideMenu)}
      data-show-slugs={String(showSlugs)}
      data-gapless={String(!!meta.gapless)}
      onClick={() => {
        setDarkSwitch(false)
      }}
    >
      <Navbar
        location={location}
        darkPrefix={
          <Dark
            darkSwitch={darkSwitch}
            onDarkSwitchClick={ev => {
              setDarkSwitch(val => !val)
              ev.stopPropagation()
            }}
            isSideMenu={false}
          />
        }
      />
      {meta.full ? (
        <>{children}</>
      ) : (
        <div className={styles.content}>
          <div className={styles.side}>
            <SideMenu location={location} />
          </div>
          <div className={styles.main}>
            <div className={styles.mainInner}>
              <article>{children}</article>
              {meta.filePath && !meta.gapless && (
                <div className='__dumi-default-layout-footer-meta'>
                  <Link to={`${repoUrl}/edit/${branch}/${meta.filePath}`}>
                    {isCN ? `在 GitHub 上编辑此页` : `Edit this doc on GitHub`}
                  </Link>
                  <span
                    data-updated-text={
                      isCN ? '最后更新时间：' : 'Last update: '
                    }
                  >
                    {updatedTime}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.side}>
            <SlugList slugs={meta.slugs} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout
