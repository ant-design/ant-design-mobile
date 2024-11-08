export const openUrl = ({
  href,
  target,
}: {
  href: string
  target?: string
}) => {
  switch (target) {
    case '_blank':
      window.open(href, target)
      break
    default:
      window.location.href = href
  }
}
