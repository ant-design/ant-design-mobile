import React, { useRef, useEffect, useState, useContext } from 'react'
import { context } from 'dumi/theme'
import type { IPreviewerProps } from 'dumi-theme-default/src/builtins/Previewer'
import Previewer from 'dumi-theme-default/src/builtins/Previewer'
import { debounce } from 'lodash'
import './Previewer.less'

export const ACTIVE_MSG_TYPE = 'dumi:scroll-into-demo'

export default (props: IPreviewerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { meta } = useContext(context)
  const [previewerProps, setPreviewerProps] = useState<null | IPreviewerProps>(
    null
  )
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // skip if page not loaded
    /* istanbul ignore next */
    if (!meta.title) return

    const isFirstDemo =
      document.querySelector('.__dumi-default-mobile-previewer') === ref.current
    const handler = debounce(() => {
      const scrollTop = document.documentElement.scrollTop + 128

      // post message if scroll into current demo
      if (
        // fallback to first demo
        (isFirstDemo && scrollTop < (ref?.current?.offsetTop ?? 0)) ||
        // detect scroll position
        // @ts-ignore
        (scrollTop > ref?.current?.offsetTop &&
          // @ts-ignore
          scrollTop < ref?.current?.offsetTop + ref?.current?.offsetHeight)
      ) {
        window.postMessage(
          {
            type: ACTIVE_MSG_TYPE,
            value: JSON.stringify({
              identifier: props.identifier,
              demoUrl: props.demoUrl,
            }),
          },
          '*'
        )
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }, 50)

    if (
      // only render mobile phone when screen max than 960px
      window?.outerWidth > 960 &&
      // do not disable mobile simulator
      meta.mobile !== false
    ) {
      // active source code wrapper if scroll into demo
      handler()
      window.addEventListener('scroll', handler)

      // rewrite props for device mode
      setPreviewerProps(
        Object.assign({}, props, {
          // omit iframe
          iframe: null,
          // omit children
          children: null,
          // show source code
          defaultShowCode: true,
          // hide external action
          // @ts-ignore
          hideActions: ['EXTERNAL' as IPreviewerProps['hideActions'][0]].concat(
            props.hideActions
          ),
        })
      )
    } else {
      // use standard mode if screen min than 960px
      setPreviewerProps(props)
    }

    return () => window.removeEventListener('scroll', handler)
  }, [props, meta])

  return (
    <div
      className={
        meta.mobile !== false ? '__dumi-default-mobile-previewer' : undefined
      }
      ref={ref}
    >
      {previewerProps && (
        <Previewer
          className={isActive ? '__dumi-default-previewer-target' : null}
          {...previewerProps}
        />
      )}
    </div>
  )
}
