export const isRtl = (dir?: string): boolean => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    return (
      document.documentElement.getAttribute('dir') === 'rtl' ||
      document.body.getAttribute('dir') === 'rtl'
    )
  }
  return dir === 'rtl' || false
}
