import React, { useState } from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import Cascader from '../'
import ConfigProvider from '../../config-provider'
import { options } from '../demos/data'

describe('Cascader', () => {
  test('a11y', async () => {
    await testA11y(<Cascader options={options} visible={true} />)
  })

  test('basic usage', async () => {
    const onConfirm = jest.fn()
    const onTabsChange = jest.fn()
    const App = () => {
      const [visible, setVisible] = useState(false)

      return (
        <>
          <button
            onClick={() => {
              setVisible(true)
            }}
          >
            Choose
          </button>

          <Cascader
            onTabsChange={onTabsChange}
            options={options}
            visible={visible}
            onClose={() => {
              setVisible(false)
            }}
            onConfirm={onConfirm}
          />
        </>
      )
    }

    const { getByText } = render(<App />)

    fireEvent.click(getByText('Choose'))
    await waitFor(() => {
      fireEvent.click(getByText('浙江'))
      fireEvent.click(getByText('杭州'))
    })
    fireEvent.click(getByText('请选择'))
    expect(onTabsChange).toBeCalledTimes(2)

    fireEvent.click(getByText('确定'))

    expect(onConfirm.mock.calls[0][0]).toEqual(['浙江', '杭州'])
  })

  test('use in an imperative way', async () => {
    const fn = jest.fn()
    const onClick = async () => {
      const value = await Cascader.prompt({
        options,
        title: 'Select the address',
      })
      fn(value)
    }

    const { getByText } = render(<button onClick={onClick}>Popup</button>)

    fireEvent.click(getByText('Popup'))

    await waitFor(() => {
      fireEvent.click(getByText('浙江'))
      fireEvent.click(getByText('杭州'))
      fireEvent.click(getByText('西湖区'))
    })

    fireEvent.click(getByText('确定'))

    await waitFor(() => {
      expect(fn.mock.calls[0][0]).toEqual(['浙江', '杭州', '西湖区'])
    })
  })

  test('should apply prefixCls from ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider prefixCls='config-prefix'>
        <Cascader options={[]} visible />
      </ConfigProvider>
    )
    expect(document.querySelector('.config-prefix-cascader')).toBeTruthy()
  })

  test('should prioritize component prefixCls over ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider prefixCls='config-prefix'>
        <Cascader options={[]} visible prefixCls='component-prefix' />
      </ConfigProvider>
    )
    expect(document.querySelector('.component-prefix')).toBeTruthy()
    expect(document.querySelector('.config-prefix-cascader')).toBeFalsy()
  })
})
