import React from 'react'
import type { Language } from 'prism-react-renderer'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { useCopy } from 'dumi/theme'
import { useLocation } from 'dumi'
import { translateCode } from './demosi18n'
import 'prismjs/themes/prism.css'
import './SourceCode.less'

export interface ICodeBlockProps {
  code: string
  lang: Language
  showCopy?: boolean
}

export default ({ code, lang, showCopy = true }: ICodeBlockProps) => {
  const [copyCode, copyStatus] = useCopy()
  const location = useLocation()

  return (
    <div className='__dumi-default-code-block'>
      <Highlight
        {...defaultProps}
        code={translateCode(code, location.pathname)}
        language={lang}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {showCopy && (
              <button
                className='__dumi-default-icon __dumi-default-code-block-copy-btn'
                data-status={copyStatus}
                onClick={() => copyCode(code)}
              />
            )}
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
