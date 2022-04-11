import React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
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

describe('CascaderView', () => {
  test('a11y', async () => {
    await testA11y(<CascaderView options={options} />)
  })

  test('basic usage', async () => {
    const onChange = jest.fn()
    const { getByText, container } = await render(
      <CascaderView options={options} onChange={onChange} />
    )

    fireEvent.click(getByText('浙江'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('杭州'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('西湖区'))
    expect(container).toMatchSnapshot()

    expect(onChange).toBeCalledTimes(3)
    expect(onChange.mock.calls[2][0]).toEqual(['浙江', '杭州', '西湖区'])
  })

  test('controlled mode', async () => {
    const { container } = await render(
      <CascaderView options={options} value={['浙江', '宁波', '江北区']} />
    )
    expect(container).toMatchSnapshot()
  })

  test('same value in options', async () => {
    const { container } = await render(
      <CascaderView options={sameValueOptions} />
    )

    click(0, 0)
    expect(container).toMatchSnapshot()

    click(1, 0)
    expect(container).toMatchSnapshot()

    click(2, 0)
    expect(container).toMatchSnapshot()
  })
})
