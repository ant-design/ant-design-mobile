export function resolveContainer(
  getContainer: HTMLElement | (() => HTMLElement) | undefined | null
) {
  const container =
    typeof getContainer === 'function' ? getContainer() : getContainer
  return container || document.body
}
