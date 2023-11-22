import React from 'react'
import { fireEvent, render, testA11y } from 'testing'
import CascaderView from '../'
import { options, sameValueOptions } from '../../cascader/demos/data'

const classPrefix = `adm-cascader-view`

async function click(contentIndex: number, itemIndex: number) {
  const content = document.body.querySelectorAll(`.${classPrefix}-content`)[
    contentIndex
  ]
  const item = content.querySelectorAll(`.${classPrefix}-item`)[itemIndex]
  fireEvent.click(item)
}

const changeOptionKey = (arr: any[] = []): any[] =>
  arr.map(item => ({
    labelT: item.label,
    valueT: item.value,
    disabledT: item.disabled,
    childrenT: item.children && changeOptionKey(item.children),
  }))

describe('CascaderView', () => {
  test('a11y', async () => {
    await testA11y(<CascaderView options={options} />)
  })

  test('basic usage', async () => {
    const onChange = jest.fn()
    const onTabsChange = jest.fn()
    const { getByText, container } = render(
      <CascaderView
        options={options}
        onChange={onChange}
        onTabsChange={onTabsChange}
      />
    )
    fireEvent.click(getByText('请选择'))
    expect(onTabsChange).toBeCalledTimes(0)
    fireEvent.click(getByText('浙江'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('杭州'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('西湖区'))
    expect(container).toMatchSnapshot()

    expect(onChange).toBeCalledTimes(3)
    expect(onTabsChange).toBeCalledTimes(2)
    expect(onChange.mock.calls[2][0]).toEqual(['浙江', '杭州', '西湖区'])
  })
  test('test fieldNames', async () => {
    const onChange = jest.fn()
    const onTabsChange = jest.fn()
    const options2 = changeOptionKey(options)

    const { getByText, container } = render(
      <CascaderView
        options={options2}
        fieldNames={{
          label: 'labelT',
          value: 'valueT',
          children: 'childrenT',
          disabled: 'disabledT',
        }}
        onChange={onChange}
        onTabsChange={onTabsChange}
      />
    )

    fireEvent.click(getByText('请选择'))
    expect(onTabsChange).toBeCalledTimes(0)
    fireEvent.click(getByText('浙江'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('杭州'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('西湖区'))
    expect(container).toMatchSnapshot()

    expect(onChange).toBeCalledTimes(3)
    expect(onTabsChange).toBeCalledTimes(2)

    const [value, extend] = onChange.mock.calls[2]
    const item = extend.items[0]

    expect(value).toEqual(['浙江', '杭州', '西湖区'])
    expect(item).toHaveProperty('labelT')
    expect(item).toHaveProperty('valueT')
  })
  test('controlled mode', async () => {
    const { container } = render(
      <CascaderView options={options} value={['浙江', '宁波', '江北区']} />
    )
    expect(container).toMatchSnapshot()
  })

  test('same value in options', async () => {
    const { container } = render(<CascaderView options={sameValueOptions} />)

    click(0, 0)
    expect(container).toMatchSnapshot()

    click(1, 0)
    expect(container).toMatchSnapshot()

    click(2, 0)
    expect(container).toMatchSnapshot()
  })

  test('customize placeholder', async () => {
    render(
      <CascaderView
        options={options}
        placeholder={i => {
          if (i === 2) return '区/县'
          return '请选择'
        }}
      />
    )

    click(0, 0)
    click(1, 0)
    expect(document.querySelector('.adm-tabs-tab-active')).toHaveTextContent(
      '区/县'
    )
    click(2, 0)
    expect(document.querySelector('.adm-tabs-tab-active')).toHaveTextContent(
      '西湖区'
    )
  })
  test('loading', async () => {
    const { baseElement } = render(<CascaderView options={[]} loading />)

    expect(baseElement.querySelector('.adm-skeleton')).toBeInTheDocument()
  })
})
