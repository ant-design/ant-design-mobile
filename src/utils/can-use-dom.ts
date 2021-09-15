export const canUseDom = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
