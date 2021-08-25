export function resolveContainer(
  getContainer: HTMLElement | (() => HTMLElement) | undefined
) {
  const container =
    typeof getContainer === 'function' ? getContainer() : getContainer
  return container || document.body
}
