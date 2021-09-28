import * as React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import TreeSelect from '../'

const classPrefix = `adm-tree-select`
const options = [
  {
    label: '分类A',
    value: 'A',
    children: [
      {
        label: '分类A-1',
        value: 'A1',
      },
      {
        label: '分类A-2',
        value: 'A2',
      },
    ],
  },
  {
    label: '分类B',
    value: 'B',
    children: [
      {
        label: '分类B-1',
        value: 'B1',
      },
      {
        label: '分类B-2',
        value: 'B2',
      },
    ],
  },
]

const optionsList = [
  {
    title: '分类A',
    data: 'A',
    list: [
      {
        title: '分类A-1',
        data: 'A1',
      },
      {
        title: '分类A-2',
        data: 'A2',
      },
    ],
  },
  {
    title: '分类B',
    data: 'B',
    list: [
      {
        title: '分类B-1',
        data: 'B1',
      },
      {
        title: '分类B-2',
        data: 'B2',
      },
    ],
  },
]

const optionsMultiple = [
  {
    label: '分类A',
    value: 'A',
    children: [
      {
        label: '分类A-1',
        value: 'A1',
        children: [
          {
            label: '分类A-1-1',
            value: 'A11',
          },
          {
            label: '分类A-1-2',
            value: 'A12',
          },
        ],
      },
      {
        label: '分类A-2',
        value: 'A2',
        children: [
          {
            label: '分类A-2-1',
            value: 'A21',
          },
          {
            label: '分类A-2-2',
            value: 'A22',
          },
        ],
      },
    ],
  },
  {
    label: '分类B',
    value: 'B',
    children: [
      {
        label: '分类B-1',
        value: 'B1',
        children: [
          {
            label: '分类B-1-1',
            value: 'B11',
          },
          {
            label: '分类B-1-2',
            value: 'B12',
          },
        ],
      },
      {
        label: '分类B-2',
        value: 'B2',
        children: [
          {
            label: '分类B-2-1',
            value: 'B21',
          },
          {
            label: '分类B-2-2',
            value: 'B22',
          },
        ],
      },
    ],
  },
]

it('passes a11y test', async () => {
  await testA11y(
    <TreeSelect
      defaultValue={['A', 'A1']}
      options={options}
      onChange={(value, nodes) => {
        console.log(value, nodes)
      }}
    />
  )
})

test('renders basic', () => {
  function Basic() {
    const [data, setData] = React.useState<string[]>()
    return (
      <>
        <TreeSelect
          defaultValue={['A', 'A1']}
          options={options}
          onChange={value => {
            setData(value)
          }}
        />
        <div data-testid='res'>{JSON.stringify(data)}</div>
      </>
    )
  }
  const { getByText, getByTestId } = render(<Basic />)
  // 判断 defaultValue 是否生效
  expect(getByText('分类A')).toHaveClass(`${classPrefix}-item-active`)
  expect(getByText('分类A-1')).toHaveClass(`${classPrefix}-item-active`)
  // 点选新的值
  fireEvent.click(getByText('分类B'))
  fireEvent.click(getByText('分类B-2'))
  // 判断 onChange 回传的数据是否正确
  expect(getByTestId('res')).toHaveTextContent('["B","B2"]')
})

test('renders with fieldNames', () => {
  const { getByText } = render(
    <TreeSelect
      defaultValue={['A', 'A1']}
      options={optionsList}
      fieldNames={{
        label: 'title',
        value: 'data',
        children: 'list',
      }}
    />
  )
  // 判断修改 fieldNames 之后，能从新 options 中取到值即可
  expect(getByText('分类A')).toHaveClass(`${classPrefix}-item-active`)
  expect(getByText('分类A-1')).toHaveClass(`${classPrefix}-item-active`)
})

test('renders with multiple', async () => {
  const fn = jest.fn()
  function MultipleBasic() {
    const [data, setData] = React.useState<string[]>()
    return (
      <>
        <TreeSelect.Multiple
          defaultValue={['A1']}
          defaultExpandKeys={['A', 'A1']}
          options={optionsMultiple}
          onExpand={() => {
            fn()
          }}
          onChange={value => {
            setData(value)
          }}
          selectAllText={['', '全选1', '全选2']}
        />
        <div data-testid='res'>{JSON.stringify(data)}</div>
      </>
    )
  }
  const { getByText, getByTestId } = render(<MultipleBasic />)
  // 判断 defaultExpandKeys 是否生效
  expect(getByText('分类A')).toHaveClass('adm-tree-select-multiple-item-expand')
  // multiple 多了一个小圆点
  expect(getByText('分类A').lastElementChild).toHaveClass(
    'adm-tree-select-multiple-dot'
  )
  expect(getByText('分类A-1')).toHaveClass(
    'adm-tree-select-multiple-item-expand'
  )
  expect(getByText('分类A-1').lastElementChild).toHaveClass(
    'adm-tree-select-multiple-dot'
  )
  // 第三列全勾选
  expect(getByText('全选2').firstChild).toHaveClass('adm-checkbox-checked')
  expect(getByText('分类A-1-1').firstChild).toHaveClass('adm-checkbox-checked')
  expect(getByText('分类A-1-2').firstChild).toHaveClass('adm-checkbox-checked')

  // 点选第二列的全选
  fireEvent.click(getByText('全选1'))
  // 判断 onChange 回传的数据是否正确
  expect(getByTestId('res')).toHaveTextContent('["A"]')
  // 点选第二列的A-2，再选第三列的全选，取消 A-2 的选中
  fireEvent.click(getByText('分类A-2'))
  fireEvent.click(getByText('全选2'))
  expect(getByText('分类A-2-2').firstChild).not.toHaveClass(
    'adm-checkbox-checked'
  )
  // 判断 onChange 回传的数据是否正确
  expect(getByTestId('res')).toHaveTextContent('["A1"]')
  await waitFor(() => {
    // onExpand 事件响应了一次
    expect(fn).toBeCalledTimes(1)
  })
  // 选中第一列的 分类B
  fireEvent.click(getByText('分类B'))
  // 点选第二列的全选
  fireEvent.click(getByText('全选1'))
  // 判断 onChange 回传的数据是否正确
  expect(getByTestId('res')).toHaveTextContent('["A1","B"]')
  await waitFor(() => {
    // onExpand 事件响应了2次
    expect(fn).toBeCalledTimes(2)
  })
})
