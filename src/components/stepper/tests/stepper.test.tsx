import { fireEvent, render, waitFor } from '@testing-library/react'
import { wait } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { Stepper } from '../stepper'

describe('stepper', () => {
  test('control works', () => {
    const onChange = jest.fn()

    const Element = () => {
      const [value, setValue] = useState<number>(1)
      return (
        <Stepper
          value={value}
          onChange={v => {
            if (v === 3) {
              return
            }
            setValue(v)
            onChange(v)
          }}
        />
      )
    }
    const { container } = render(<Element></Element>)

    // plus
    container.getElementsByTagName('button')[1].click()
    expect(onChange).toHaveBeenLastCalledWith(2)

    // plus
    container.getElementsByTagName('button')[1].click()
    expect(container.getElementsByTagName('input')[0].value).toBe('2')

    // input change
    fireEvent.change(container.getElementsByTagName('input')[0], {
      target: { value: 1000 },
    })

    expect(container.getElementsByTagName('input')[0].value).toBe('1000')
  })

  test('defaultValue works', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Stepper defaultValue={100} onChange={onChange} />
    )

    const input = container.getElementsByTagName('input')[0]

    expect(input.value).toEqual('100')

    fireEvent.change(input, {
      target: {
        value: '',
      },
    })

    waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith(100)
    })
  })

  test('step works', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Stepper defaultValue={0} step={100} onChange={onChange} />
    )
    // minus
    container.getElementsByTagName('button')[0].click()
    expect(onChange).toHaveBeenLastCalledWith(-100)

    // plus
    container.getElementsByTagName('button')[1].click()
    expect(onChange).toHaveBeenLastCalledWith(0)
  })

  test('digits works', () => {
    const { container } = render(<Stepper value={0.1} digits={2} />)

    expect(container.getElementsByTagName('input')[0].value).toEqual('0.10')
  })

  test('min and max works', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Stepper
        max={0.2}
        onChange={onChange}
        min={0}
        defaultValue={0.1}
        digits={2}
        step={0.01}
      />
    )

    // max
    for (let i = 1; i <= 11; i++) {
      container.getElementsByTagName('button')[1].click()

      expect((onChange.mock as any).lastCall[0]).toBeLessThanOrEqual(0.2)
    }

    // min
    for (let i = 20; i >= -1; i--) {
      container.getElementsByTagName('button')[0].click()
      expect((onChange.mock as any).lastCall[0]).toBeGreaterThanOrEqual(0)
    }

    // input change
    fireEvent.change(container.getElementsByTagName('input')[0], {
      target: { value: 1000 },
    })

    waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith(0.2)
    })
  })

  test('allowEmpty works', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Stepper defaultValue={100} allowEmpty onChange={onChange} />
    )

    const input = container.getElementsByTagName('input')[0]

    fireEvent.change(input, {
      target: {
        value: '',
      },
    })

    expect(onChange).toHaveBeenLastCalledWith(null)
  })

  test('disabled works', () => {
    const onChange = jest.fn()
    const { container } = render(<Stepper disabled onChange={onChange} />)

    container.getElementsByTagName('button')[0].click()
    container.getElementsByTagName('button')[1].click()
    fireEvent.change(container.getElementsByTagName('input')[0], {
      target: {
        value: 1000,
      },
    })

    expect(onChange).toHaveBeenCalledTimes(0)
  })

  test('inputReadOnly works', () => {
    const onChange = jest.fn()
    const { container } = render(<Stepper inputReadOnly onChange={onChange} />)
    expect(container.querySelector('input[readonly]')).not.toBeNull()
  })
})
