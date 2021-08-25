export function getNativeAttributes(props: Record<string, any>) {
  const ret: Record<string, any> = {}
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      ret[key] = props[key]
    }
  }
  return ret
}
