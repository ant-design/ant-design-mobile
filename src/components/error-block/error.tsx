import DefaultErrorIcon from '../../assets/default.svg'
import Busy from '../../assets/busy.svg'
import DisconnectedIcon from '../../assets/disconnected.svg'
import EmptyErrorIcon from '../../assets/empty.svg'

export const iconRecord: Record<
  'default' | 'disconnected' | 'empty' | 'busy',
  string
> = {
  default: DefaultErrorIcon,
  busy: Busy,
  disconnected: DisconnectedIcon,
  empty: EmptyErrorIcon,
}
