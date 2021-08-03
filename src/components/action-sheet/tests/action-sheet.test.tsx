import * as React from 'react'
import { render, testA11y, fireEvent, screen } from 'testing'
import ActionSheet, { Action } from '../'
import Button from '../../button'

const classPrefix = `am-action-sheet`

const actions: Action[] = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' },
]
it('passes a11y test', async () => {
  const { container } = render(
    <ActionSheet visible={true} actions={actions}>
      test
    </ActionSheet>
  )
  await testA11y(container)
})

test('renders Basic', () => {
  function Basic() {
    const [visible, setVisible] = React.useState(false)
    return (
      <>
        <Button onClick={() => setVisible(true)}>最简单的用法</Button>
        <ActionSheet
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
        />
      </>
    )
  }
  const { getByText } = render(<Basic />)
  fireEvent.click(getByText('最简单的用法'))
  expect(getByText('复制')).toHaveClass(`${classPrefix}-button-item-name`)
})

test('renders WithCancelButtonAndDescription', () => {
  function WithCancelButtonAndDescription() {
    const [visible, setVisible] = React.useState(false)
    return (
      <>
        <Button onClick={() => setVisible(true)}>取消按钮和额外描述</Button>
        <ActionSheet
          extra='请选择你要进行的操作'
          cancelText='取消'
          visible={visible}
          actions={actions}
          onClose={() => setVisible(false)}
        />
      </>
    )
  }
  const { getByText, baseElement } = render(<WithCancelButtonAndDescription />)
  expect(baseElement.lastChild).toHaveClass('am-popup-hidden')
  fireEvent.click(getByText('取消按钮和额外描述'))
  expect(baseElement.lastChild).not.toHaveClass('am-popup-hidden')
  fireEvent.click(getByText('取消'))
  // TODO: error ???
  // expect(baseElement.lastChild).toHaveClass('am-popup-hidden')
})

test('renders Imperative', () => {
  function Imperative() {
    return (
      <Button
        onClick={() => {
          ActionSheet.show({
            actions,
          })
        }}
      >
        显示
      </Button>
    )
  }
  const { getByText, baseElement } = render(<Imperative />)
  fireEvent.click(getByText('显示'))
  expect(baseElement.lastChild).toHaveClass('am-popup')
})
