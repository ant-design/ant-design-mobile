import React from 'react'
import type { IPreviewerProps } from 'dumi-theme-default/src/builtins/Previewer'
import Previewer from 'dumi-theme-default/src/builtins/Previewer'
import './Previewer.less'
import { Device } from '../components/device'
import { useDemoUrl } from 'dumi/theme'

export const ACTIVE_MSG_TYPE = 'dumi:scroll-into-demo'

export default (props: IPreviewerProps) => {
  const builtinDemoUrl = useDemoUrl(props.identifier)

  return (
    <div className='adm-doc-previewer'>
      <div className='adm-doc-previewer-source'>
        <Previewer
          {...props}
          hideActions={['EXTERNAL']}
          defaultShowCode
          compact
          children={null}
        />
      </div>
      <div className='adm-doc-previewer-device'>
        <Device url={props.demoUrl ?? builtinDemoUrl} />
      </div>
    </div>
  )
}
