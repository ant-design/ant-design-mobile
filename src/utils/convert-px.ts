const tester = document.createElement('div')
tester.className = 'am-one-px-tester'
document.body.appendChild(tester)

export function convertPx(px: number) {
  const ratio = tester.clientHeight || 1
  return px * ratio
}
