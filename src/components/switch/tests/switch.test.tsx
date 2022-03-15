import React, { useState } from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import Switch from '..'

const classPrefix = `adm-switch`

describe('Switch', () => {
  test('a11y', async () => {
    await testA11y(<Switch />)
  })

  test('renders with disabled', async () => {
    const { getByTestId } = await render(
      <Switch data-testid='switch' disabled />
    )

    expect(getByTestId('switch')).toHaveClass(`${classPrefix}-disabled`)
  })

  test('controlled mode', async () => {
    const App = () => {
      const [checked, setChecked] = useState(false)
      return (
        <Switch
          checked={checked}
          onChange={checked => {
            setChecked(checked)
          }}
          data-testid='switch'
        />
      )
    }

    const { getByTestId } = await render(<App />)
    fireEvent.click(getByTestId('switch'))
    expect(getByTestId('switch')).toHaveClass(`${classPrefix}-checked`)
    fireEvent.click(getByTestId('switch'))
    expect(getByTestId('switch')).not.toHaveClass(`${classPrefix}-checked`)
  })

  test('`beforeChange` should not work with loading', async () => {
    const beforeChange = jest.fn()
    const { getByTestId } = await render(
      <Switch data-testid='switch' loading beforeChange={beforeChange} />
    )

    fireEvent.click(getByTestId('switch'))

    expect(
      getByTestId('switch').querySelectorAll(`.${classPrefix}-spin-icon`).length
    ).toBeTruthy()

    expect(beforeChange).not.toBeCalled()
  })

  test('`beforeChange` in async mode', async () => {
    const App = () => {
      const beforeChange = (): Promise<void> => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      }
      return <Switch beforeChange={() => beforeChange()} data-testid='switch' />
    }

    const { getByTestId } = await render(<App />)
    fireEvent.click(getByTestId('switch'))
    expect(getByTestId('switch')).toHaveClass(`${classPrefix}-disabled`)

    await waitFor(() => {
      expect(getByTestId('switch')).toHaveClass(`${classPrefix}-checked`)
    })
  })
})
