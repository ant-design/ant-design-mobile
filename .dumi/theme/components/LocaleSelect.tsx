import type { FC } from 'react'
import React, { useContext, useEffect } from 'react'
// @ts-ignore
import { history } from 'dumi'
import { context, Link } from 'dumi/theme'
import './LocaleSelect.less'
import { useLocalStorageState } from 'ahooks'

const LocaleSelect: FC<{ location: any }> = ({ location }) => {
  const {
    base,
    locale,
    config: { locales },
  } = useContext(context)

  const firstDiffLocale = locales.find(({ name }) => name !== locale)

  function getLocaleTogglePath(target: string) {
    const baseWithoutLocale = base.replace(`/${locale}`, '')
    const pathnameWithoutLocale =
      location.pathname.replace(
        new RegExp(`^${base}(/|$)`),
        `${baseWithoutLocale}$1`
      ) || '/'

    // append locale prefix to path if it is not the default locale
    if (target !== locales[0].name) {
      // compatiable with integrate route prefix /~docs
      const routePrefix = `${baseWithoutLocale}/${target}`.replace(/\/\//, '/')
      const pathnameWithoutBase = location.pathname.replace(
        // to avoid stripped the first /
        base.replace(/^\/$/, '//'),
        ''
      )

      return `${routePrefix}${pathnameWithoutBase}`.replace(/\/$/, '')
    }

    return pathnameWithoutLocale
  }

  const [localeInStorage, setLocaleInStorage] = useLocalStorageState(
    'adm-doc-locale',
    {
      defaultValue: navigator.language.startsWith('zh') ? 'zh' : 'en',
    }
  )

  useEffect(() => {
    if (localeInStorage !== locale) {
      history.replace(getLocaleTogglePath(localeInStorage))
    }
  }, [])

  return firstDiffLocale ? (
    <div
      className='__dumi-default-locale-select'
      data-locale-count={locales.length}
    >
      <Link
        to={getLocaleTogglePath(firstDiffLocale.name)}
        onClick={() => {
          setLocaleInStorage(firstDiffLocale.name)
        }}
      >
        {firstDiffLocale.label}
      </Link>
    </div>
  ) : null
}

export default LocaleSelect
