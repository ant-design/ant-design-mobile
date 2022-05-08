import { devWarning } from './dev-log'
import { useMemo, useState } from 'react'

export interface Actions {
  open: () => void
  close: () => void
  toggle: () => void
}

function warn(method: string) {
  devWarning(
    'Picker',
    `\`${method}\` will not work when \`visible\` prop is set.`
  )
}
export function useControllableVisible(defaultVisible: boolean | undefined) {
  const [innerVisible, setInnerVisible] = useState(defaultVisible)
  const visible = defaultVisible ?? innerVisible

  const actions: Actions = useMemo(() => {
    const isBool = typeof defaultVisible === 'boolean'
    return {
      toggle: () => {
        if (isBool) return warn('toggle')
        setInnerVisible(v => !v)
      },
      open: () => {
        if (isBool) return warn('open')
        setInnerVisible(true)
      },
      close: () => {
        if (isBool) return warn('close')
        setInnerVisible(false)
      },
    }
  }, [defaultVisible])

  return [visible, actions] as const
}
