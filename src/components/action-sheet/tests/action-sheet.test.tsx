import * as React from 'react'
import { render, testA11y, fireEvent } from 'testing'
import ActionSheet, { Action } from '../'
import { Basic } from '../demos/index'

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

test('renders basic', () => {
  const { getByText } = render(<Basic />)
  fireEvent.click(getByText('最简单的用法'))
  expect(getByText('复制')).toHaveClass(`${classPrefix}-button-item-name`)
})
