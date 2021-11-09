import React from 'react'
import type { IPreviewerProps } from './preview-default/Previewer'
import Previewer from './preview-default/Previewer'
import './Previewer.less'
import { Device } from '../components/device'
import { useDemoUrl } from 'dumi/theme'

export const ACTIVE_MSG_TYPE = 'dumi:scroll-into-demo'

export default (props: IPreviewerProps) => {
  const builtinDemoUrl = useDemoUrl(props.identifier)

  return (
    <div className='adm-doc-previewer' data-debug={props.debug || undefined}>
      <div className='adm-doc-previewer-source'>
        <Previewer {...props} />
      </div>
      <div className='adm-doc-previewer-device'>
        <Device url={props.demoUrl ?? builtinDemoUrl} />
      </div>
    </div>
  )
}
