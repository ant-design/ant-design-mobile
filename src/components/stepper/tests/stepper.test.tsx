import { render, waitFor } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { fireEvent } from 'testing'
import { Stepper } from '../stepper'

describe('stepper', () => {
  test('control works', async () => {
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

    const plusButton = container.getElementsByTagName('button')[1]

    // plus
    fireEvent.click(plusButton)
    expect(onChange).toHaveBeenLastCalledWith(2)

    // plus
    fireEvent.click(plusButton)
    expect(onChange).toBeCalledTimes(1)

    const input = container.getElementsByTagName('input')[0]

    fireEvent.focus(input)

    // input change
    fireEvent.change(container.getElementsByTagName('input')[0], {
      target: { value: 1000 },
    })

    fireEvent.blur(input)

    expect(container.getElementsByTagName('input')[0].value).toBe('1000')
  })

  test('defaultValue works', async () => {
    const onChange = jest.fn()
    const { container } = render(
      <Stepper defaultValue={100} onChange={onChange} />
    )

    const input = container.getElementsByTagName('input')[0]

    expect(input.value).toBe('100')

    fireEvent.change(input, {
      target: {
        value: '',
      },
    })

    fireEvent.blur(input)

    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith(100)
    })
  })

  test('step works', async () => {
    const onChange = jest.fn()
    const { container } = render(
      <Stepper defaultValue={0} step={100} onChange={onChange} />
    )

    const minusButton = container.getElementsByTagName('button')[0]
    const plusButton = container.getElementsByTagName('button')[1]

    // minus
    fireEvent.click(minusButton)
    expect(onChange.mock.calls[0][0]).toBe(-100)

    // plus
    fireEvent.click(plusButton)
    expect(onChange.mock.calls[1][0]).toBe(0)
  })

  test('digits works', () => {
    const { container } = render(<Stepper value={0.1} digits={2} />)

    expect(container.getElementsByTagName('input')[0].value).toBe('0.10')
  })

  test('min and max works', async () => {
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

    const minusButton = container.getElementsByTagName('button')[0]
    const plusButton = container.getElementsByTagName('button')[1]

    // max
    for (let i = 1; i <= 11; i++) {
      fireEvent.click(plusButton)
      expect((onChange.mock as any).lastCall[0]).toBeLessThanOrEqual(0.2)
    }

    // min
    for (let i = 20; i >= -1; i--) {
      fireEvent.click(minusButton)
      expect((onChange.mock as any).lastCall[0]).toBeGreaterThanOrEqual(0)
    }

    const input = container.getElementsByTagName('input')[0]
    // input change
    fireEvent.change(input, {
      target: { value: 1000 },
    })

    fireEvent.blur(input)

    await waitFor(() => {
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

  test('disabled works', async () => {
    const onChange = jest.fn()
    const { container } = render(<Stepper disabled onChange={onChange} />)

    const minusButton = container.getElementsByTagName('button')[0]
    const plusButton = container.getElementsByTagName('button')[1]

    fireEvent.click(minusButton)
    fireEvent.click(plusButton)

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

  test('onFocus and onBlur works', () => {
    const onBlur = jest.fn()
    const onFocus = jest.fn()
    const { container } = render(<Stepper onBlur={onBlur} onFocus={onFocus} />)

    const input = container.getElementsByTagName('input')[0]

    fireEvent.focus(input)

    fireEvent.blur(input)

    expect(onFocus).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  test('value as NaN works', async () => {
    const { container } = render(<Stepper defaultValue={1000} />, {})

    const input = container.getElementsByTagName('input')[0]

    fireEvent.focus(input)

    fireEvent.compositionStart(input)

    fireEvent.change(input, {
      target: {
        value: '中文',
      },
    })

    fireEvent.compositionEnd(input)

    fireEvent.blur(input)

    await waitFor(() => {
      expect(input.value).toBe('1000')
    })
  })

  test('dynamic digits works', async () => {
    const Demo = () => {
      const [digits, setDigits] = useState(2)

      useEffect(() => {
        setTimeout(() => {
          setDigits(0)
        })
      }, [])

      return <Stepper digits={digits} defaultValue={1.23}></Stepper>
    }
    const { container } = render(<Demo />)

    const input = container.getElementsByTagName('input')[0]

    expect(input.value).toBe('1.23')

    await waitFor(() => {
      expect(input.value).toBe('1')
    })
  })
})
