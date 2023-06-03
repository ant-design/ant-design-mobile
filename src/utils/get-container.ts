export type GetContainer = () => HTMLElement

export function resolveContainer(
  getContainer: HTMLElement | GetContainer | undefined | null
) {
  const container =
    typeof getContainer === 'function'
      ? (getContainer as GetContainer)()
      : getContainer
  return container || document.body
}
