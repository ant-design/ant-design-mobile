import { DeprecatedPlacement, Placement } from './index'

const record: Record<DeprecatedPlacement, Placement> = {
  'topLeft': 'top-start',
  'topRight': 'top-end',
  'bottomLeft': 'bottom-start',
  'bottomRight': 'bottom-end',
  'leftTop': 'left-start',
  'leftBottom': 'left-end',
  'rightTop': 'right-start',
  'rightBottom': 'right-end',
}

export function normalizePlacement(
  placement: Placement | DeprecatedPlacement
): Placement {
  return record[placement as DeprecatedPlacement] ?? placement
}
