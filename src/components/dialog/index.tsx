import React from 'react'
import { show } from './show'
import { alert } from './alert'
import { confirm } from './confirm'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Dialog } from './dialog'

export type { DialogProps } from './dialog'

export interface DialogBtnProps {
  loading?: boolean
  disabled?: boolean
}

// 可返回用于销毁此弹窗的方法
// function show(props: DialogProps) {
//   const {
//     afterClose,
//     onCancel = noop,
//     onOk = noop,
//     cancelProps,
//     okProps,
//     ...restProps
//   } = props
//
//   const userContainer = resolveContainer(props.getContainer)
//   const container = document.createElement('div')
//   userContainer.appendChild(container)
//   let destroy = noop
//
//   const TempDialog = () => {
//     const [cancelLoading, setCancelLoading] = useState(false)
//     const [okLoading, setOkLoading] = useState(false)
//     const [visible, setVisible] = useState(false)
//     useEffect(() => {
//       setVisible(true)
//     }, [])
//     destroy = () => {
//       setVisible(false)
//       if (afterClose) {
//         afterClose()
//       }
//     }
//
//     const _afterClose = () => {
//       const unmountResult = ReactDOM.unmountComponentAtNode(container)
//       if (unmountResult && container.parentNode) {
//         container.parentNode.removeChild(container)
//       }
//     }
//     const _onOk = async (e: React.MouseEvent) => {
//       const i = setTimeout(() => setOkLoading(true))
//       if ((await onOk(e)) !== false) {
//         clearTimeout(i)
//         destroy()
//       } else {
//         clearTimeout(i)
//         setOkLoading(false)
//       }
//     }
//     const _onCancel = async (e: React.MouseEvent) => {
//       const i = setTimeout(() => setCancelLoading(true))
//       if ((await onCancel(e)) !== false) {
//         clearTimeout(i)
//         destroy()
//       } else {
//         clearTimeout(i)
//         setCancelLoading(false)
//       }
//     }
//     return (
//       <InternalDialog
//         {...restProps}
//         visible={visible}
//         getContainer={() => container}
//         cancelProps={{ loading: cancelLoading, ...cancelProps }}
//         okProps={{ loading: okLoading, ...okProps }}
//         onCancel={_onCancel}
//         onOk={_onOk}
//         afterClose={_afterClose}
//       />
//     )
//   }
//   if (props.headerImage && props.waitImageLoad !== false) {
//     const preloadImage = new Image()
//     preloadImage.src = props.headerImage
//     preloadImage.onload = () => {
//       ReactDOM.render(<TempDialog />, container)
//     }
//   } else {
//     ReactDOM.render(<TempDialog />, container)
//   }
//
//   return destroy
// }

export default attachPropertiesToComponent(Dialog, {
  show,
  alert,
  confirm,
})
