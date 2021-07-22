export function convertPx(px: number) {
  let ratio = 1
  const rootStyle = window.getComputedStyle(document.documentElement)
  const onePx = rootStyle.getPropertyValue('--one-px').trim()
  if (onePx.endsWith('rem')) {
    const fontSize = rootStyle.fontSize
    ratio = parseFloat(onePx) * parseFloat(fontSize)
  } else if (onePx.endsWith('vw')) {
    ratio = (parseFloat(onePx) * window.innerWidth) / 100
  }
  return px * ratio
}
