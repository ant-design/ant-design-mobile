import React, { useState, useContext, useRef } from 'react'
import { Tabs } from 'antd-mobile'
// @ts-ignore
import { history } from 'dumi'
import type { IPreviewerComponentProps } from 'dumi/theme'
import {
  context,
  // useRiddle,
  useMotions,
  useCopy,
  useLocaleProps,
  useTSPlaygroundUrl,
  Link,
  AnchorLink,
  usePrefersColor,
} from 'dumi/theme'
import { useCodeSandbox } from './use-code-sandbox'
import type { ICodeBlockProps } from '../SourceCode'
import SourceCode from '../SourceCode'
import './Previewer.less'

export interface IPreviewerProps extends IPreviewerComponentProps {
  /**
   * enable transform to change CSS containing block for demo
   */
  transform?: boolean
  /**
   * modify background for demo area
   */
  background?: string
  /**
   * configurations for action button
   */
  hideActions?: ('CSB' | 'RIDDLE')[]
  /**
   * replace builtin demo url
   */
  demoUrl?: string
}

/**
 * get source code type for file
 * @param file    file path
 * @param source  file source object
 */
function getSourceType(
  file: string,
  source: IPreviewerComponentProps['sources']['_']
) {
  // use file extension as source type first
  let type = file.match(/\.(\w+)$/)?.[1]

  if (!type) {
    type = source.tsx ? 'tsx' : 'jsx'
  }

  return type as ICodeBlockProps['lang']
}

const Previewer: React.FC<IPreviewerProps> = oProps => {
  const demoRef = useRef<HTMLDivElement>(null)
  const { locale } = useContext(context)
  const props = useLocaleProps<IPreviewerProps>(locale, oProps)
  const isActive = history?.location.hash === `#${props.identifier}`
  const isSingleFile = Object.keys(props.sources).length === 1
  const openCSB = useCodeSandbox(
    props.hideActions?.includes('CSB') ? null : props
  )
  // const openRiddle = useRiddle(
  //   props.hideActions?.includes('RIDDLE') ? null : props
  // )
  const [execMotions, isMotionRunning] = useMotions(
    props.motions || [],
    demoRef.current
  )
  const [copyCode, copyStatus] = useCopy()
  const [currentFile, setCurrentFile] = useState('_')
  const [sourceType, setSourceType] = useState(
    getSourceType(currentFile, props.sources[currentFile])
  )
  const currentFileCode =
    props.sources[currentFile][sourceType] || props.sources[currentFile].content
  const playgroundUrl = useTSPlaygroundUrl(locale, currentFileCode)
  const [color] = usePrefersColor()

  function handleFileChange(filename: string) {
    setCurrentFile(filename)
    setSourceType(getSourceType(filename, props.sources[filename]))
  }

  return (
    <div
      style={props.style}
      className={[
        props.className,
        '__dumi-default-previewer',
        isActive ? '__dumi-default-previewer-target' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      id={props.identifier}
      data-debug={props.debug || undefined}
    >
      <div className='__dumi-default-previewer-desc' data-title={props.title}>
        {props.title && (
          <AnchorLink to={`#${props.identifier}`}>{props.title}</AnchorLink>
        )}
        {props.description && (
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        )}
      </div>
      <div className='__dumi-default-previewer-actions'>
        {props.debug && <span className='debug-badge'>Debug Only</span>}
        {openCSB && (
          <button
            title='Open demo on CodeSandbox.io'
            className='__dumi-default-icon'
            role='codesandbox'
            onClick={openCSB}
          />
        )}
        {/*{openRiddle && (*/}
        {/*  <button*/}
        {/*    title='Open demo on Riddle'*/}
        {/*    className='__dumi-default-icon'*/}
        {/*    role='riddle'*/}
        {/*    onClick={openRiddle}*/}
        {/*  />*/}
        {/*)}*/}
        {props.motions && (
          <button
            title='Execute motions'
            className='__dumi-default-icon'
            role='motions'
            disabled={isMotionRunning}
            onClick={() => execMotions()}
          />
        )}
        <div className='spacer' />
        <button
          title='Copy source code'
          className='__dumi-default-icon'
          role='copy'
          data-status={copyStatus}
          onClick={() => copyCode(currentFileCode)}
        />
        {sourceType === 'tsx' && (
          <Link target='_blank' to={playgroundUrl}>
            <button
              title='Get JSX via TypeScript Playground'
              className='__dumi-default-icon'
              role='change-tsx'
              type='button'
            />
          </Link>
        )}
      </div>
      <div className='__dumi-default-previewer-source-wrapper'>
        {!isSingleFile && (
          <Tabs
            className='__dumi-default-previewer-source-tab'
            // prefixCls='__dumi-default-tabs'
            // moreIcon='···'
            stretch={false}
            defaultActiveKey={currentFile}
            onChange={handleFileChange}
          >
            {Object.keys(props.sources).map(filename => (
              <Tabs.Tab
                title={
                  filename === '_'
                    ? `index.${getSourceType(
                        filename,
                        props.sources[filename]
                      )}`
                    : filename
                }
                key={filename}
              />
            ))}
          </Tabs>
        )}
        <div className='__dumi-default-previewer-source'>
          <SourceCode
            code={currentFileCode}
            lang={sourceType}
            showCopy={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Previewer
