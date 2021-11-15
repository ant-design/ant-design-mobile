import { canUseDom } from './can-use-dom'
import { isDev } from './is-dev'
import { devError } from './dev-log'

let onePxTest: HTMLDivElement | null = null
let tester: HTMLDivElement | null = null

if (canUseDom) {
  onePxTest = document.createElement('div')
  onePxTest.className = 'adm-px-tester'
  document.body.appendChild(onePxTest)
  tester = document.createElement('div')
  tester.className = 'adm-px-tester'
  document.body.appendChild(tester)
  if (isDev) {
    if (window.getComputedStyle(tester).position !== 'fixed') {
      devError(
        'Global',
        'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.'
      )
    }
  }
}

export function convertPx(px: number) {
  if (onePxTest === null || tester === null) return px
  if (onePxTest.getBoundingClientRect().height === 1) {
    return px
  }
  tester.style.setProperty('--size', px.toString())
  return tester.getBoundingClientRect().height
}
