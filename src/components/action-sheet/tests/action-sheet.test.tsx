import * as React from 'react'
import { render, testA11y, fireEvent } from 'testing'
import ActionSheet, { Action } from '../'
import Button from '../../button'
import { sleep } from '../../../utils/sleep'

const classPrefix = `adm-action-sheet`

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

test('renders Basic', async () => {
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
  await sleep(1000)
  expect(getByText('复制')).toHaveClass(`${classPrefix}-button-item-name`)
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
  expect(baseElement.lastChild).toHaveClass('adm-popup')
})
