import { canUseDom } from './can-use-dom'

let onePxTest: HTMLDivElement | null = null
let tester: HTMLDivElement | null = null

if (canUseDom) {
  onePxTest = document.createElement('div')
  onePxTest.className = 'adm-px-tester'
  document.body.appendChild(onePxTest)
  tester = document.createElement('div')
  tester.className = 'adm-px-tester'
  document.body.appendChild(tester)
}

export function convertPx(px: number) {
  if (onePxTest === null || tester === null) return px
  if (onePxTest.getBoundingClientRect().height === 1) {
    return px
  }
  tester.style.setProperty('--size', px.toString())
  return tester.getBoundingClientRect().height
}
