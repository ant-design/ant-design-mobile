import { useState, useEffect } from 'react'
import LZString from 'lz-string'
import type { IPreviewerComponentProps } from 'dumi/theme'

const CSB_API_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define'

// ref: https://github.com/codesandbox/codesandbox-importers/blob/master/packages/import-utils/src/api/define.ts
function serialize(data: Record<string, any>) {
  return LZString.compressToBase64(JSON.stringify(data))
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, '') // Remove ending '='
}

/**
 * get serialized data that use to submit to codesandbox.io
 * @param opts  previewer props
 */
function getCSBData(opts: IPreviewerComponentProps) {
  const isTSX = Boolean(opts.sources._.tsx)
  const ext = isTSX ? '.tsx' : '.jsx'
  const files: Record<string, { content: string }> = {}
  const deps: Record<string, string> = {}
  const CSSDeps = Object.values(opts.dependencies).filter(dep => dep.css)
  const appFileName = `app${ext}`
  const entryFileName = `index${ext}`

  // generate dependencies
  Object.entries(opts.dependencies).forEach(([dep, { version }]) => {
    deps[dep] = version
  })

  // add react-dom dependency
  if (!deps['react-dom']) {
    deps['react-dom'] = deps.react || 'latest'
  }

  // append sandbox.config.json
  files['sandbox.config.json'] = {
    content: JSON.stringify(
      {
        template: isTSX ? 'create-react-app-typescript' : 'create-react-app',
      },
      null,
      2
    ),
  }

  // append package.json
  files['package.json'] = {
    content: JSON.stringify(
      {
        name: opts.title,
        main: entryFileName,
        dependencies: deps,
        // add TypeScript dependency if required, must in devDeps to avoid csb compile error
        devDependencies: isTSX ? { typescript: '^3' } : {},
      },
      null,
      2
    ),
  }

  // append index.html
  files['index.html'] = {
    content: '<div id="root"></div>',
  }

  // append entry file
  files[entryFileName] = {
    content: `/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/

import React from 'react';
import ReactDOM from 'react-dom';
${CSSDeps.map(({ css }) => `import '${css}';`).join('\n')}
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`,
  }

  // append other imported local files
  console.log(opts.sources)
  Object.entries(opts.sources).forEach(([filename, { tsx, jsx, content }]) => {
    // handle primary content
    files[filename === '_' ? appFileName : filename] = {
      content: tsx || jsx || content,
    }
  })

  return serialize({ files })
}

export function useCodeSandbox(
  opts: IPreviewerComponentProps | null,
  api: string = CSB_API_ENDPOINT
) {
  const [handler, setHandler] = useState<(...args: any) => void | undefined>()

  useEffect(() => {
    if (opts) {
      const form = document.createElement('form')
      const data = getCSBData(opts)

      form.method = 'POST'
      form.target = '_blank'
      form.style.display = 'none'
      form.action = api
      function addField(name: string, value: string) {
        const input = document.createElement('input')
        form.appendChild(input)
        input.name = name
        input.value = value
      }
      addField('parameters', data)
      addField(
        'query',
        'file=/app.tsx&resolutionWidth=375&resolutionHeight=700'
      )

      form.setAttribute('data-demo', opts.title || '')

      document.body.appendChild(form)

      setHandler(() => () => form.submit())

      return () => form.remove()
    }
  }, [opts])

  return handler
}
