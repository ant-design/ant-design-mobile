import React, { useState } from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import Cascader from '../'
import { options } from '../../cascader/demos/data'

describe('Cascader', () => {
  test('a11y', async () => {
    await testA11y(<Cascader options={options} visible={true} />)
  })

  test('basic usage', async () => {
    const onConfirm = jest.fn()
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

    const { getByText } = await render(<App />)

    fireEvent.click(getByText('Choose'))

    await waitFor(() => {
      fireEvent.click(getByText('浙江'))
      fireEvent.click(getByText('杭州'))
    })

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

    const { getByText } = await render(<button onClick={onClick}>Popup</button>)

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
})
