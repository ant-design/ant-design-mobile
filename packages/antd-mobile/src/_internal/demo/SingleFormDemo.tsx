import * as React from 'react'
import {
  unstable_Button as Button,
  unstable_List as List,
  unstable_Switch as Switch,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'
import { uuid } from '..'

const SingleFormDemo: React.FC<{
  noLabel?: boolean
}> = ({ children, noLabel }) => {
  const [id] = React.useState(uuid())
  const [disabled, setDisabled] = React.useState(false)

  // @ts-ignore
  const unControlledChild = React.cloneElement(children, {
    name: 't1',
    disabled,
    id,
    autoFocus: true,
  })
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        // @ts-ignore
        const data = new FormData(e.currentTarget).entries()
        const object: any = {}
        // 处理 FormData 里的值，兼顾多选的场景
        for (const item of data) {
          const [key, value] = item

          if (!Reflect.has(object, key)) {
            object[key] = value
            continue
          }
          if (!Array.isArray(object[key])) {
            object[key] = [object[key]]
          }
          object[key].push(value)
        }

        Modal.alert({
          title: 'html form 表单提交',
          content: JSON.stringify(object),
        })
      }}
    >
      <List renderHeader="单独使用，配合 dom 实际数据">
        <List.Item
          extra={<Switch checked={disabled} onChange={setDisabled}></Switch>}
        >
          禁用
        </List.Item>

        {!noLabel && (
          <label htmlFor={id}>
            <List.Item>Label 区域也可点</List.Item>
          </label>
        )}
      </List>

      <div>
        <h3>非受控模式</h3>
        {unControlledChild}
      </div>

      <WhiteSpace></WhiteSpace>
      <WingBlank>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </WingBlank>
    </form>
  )
}

SingleFormDemo.defaultProps = {
  noLabel: false,
}

export default SingleFormDemo
