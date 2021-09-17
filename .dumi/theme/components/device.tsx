import type { FC } from 'react'
import React, { useState, useContext, useEffect } from 'react'
import QRCode from 'qrcode.react'
import { context, usePrefersColor } from 'dumi/theme'
import './device.less'

interface IDeviceProps {
  className?: string
  url: string
}

export const Device: FC<IDeviceProps> = ({ url, className }) => {
  const [renderKey, setRenderKey] = useState(Math.random())
  const [color] = usePrefersColor()
  const {
    config: { mode, theme },
  } = useContext(context)
  const carrier = theme?.carrier || 'dumi'

  // re-render iframe if prefers color changed
  useEffect(() => {
    setRenderKey(Math.random())
  }, [color])

  return (
    <div
      className={'__dumi-default-device'}
      data-device-type='iOS'
      data-mode={mode}
    >
      <div className='__dumi-default-device-status'>
        <span className='__dumi-default-device-status-carrier'>{carrier}</span>
        <span>10:24</span>
      </div>
      <iframe title='dumi-previewer' src={url} key={renderKey} />
      <div className='__dumi-default-device-action'>
        <button
          className='__dumi-default-icon'
          role='refresh'
          onClick={() => setRenderKey(Math.random())}
        />
        <button className='__dumi-default-icon' role='qrcode'>
          <QRCode value={url} size={96} />
        </button>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='__dumi-default-icon'
          role='open-demo'
        />
      </div>
    </div>
  )
}
