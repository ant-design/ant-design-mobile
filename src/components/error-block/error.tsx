import DefaultErrorIcon from '../../assets/default.svg'
import Busy from '../../assets/busy.svg'
import DisconnectedIcon from '../../assets/disconnected.svg'
import EmptyErrorIcon from '../../assets/empty.svg'

interface ErrorConfig {
  icon: string
  title: string
  description?: string
}

export const errorConfigRecord: Record<
  'default' | 'disconnected' | 'empty' | 'busy',
  ErrorConfig
> = {
  default: {
    icon: DefaultErrorIcon,
    title: '页面遇到一些小问题',
    description: '待会来试试',
  },
  busy: {
    icon: Busy,
    title: '前方拥堵',
    description: '刷新试试',
  },
  disconnected: {
    icon: DisconnectedIcon,
    title: '网络有点忙',
    description: '动动手指帮忙修复',
  },
  empty: {
    icon: EmptyErrorIcon,
    title: '没有找到你需要的东西',
    description: '找找其他的吧',
  },
}
