import { usePropsValue } from '../use-props-value'
import { renderHook, act } from 'testing'

describe('usePropsValue', () => {
  test('onChange should not call when next value not change in uncontrolled mode', () => {
    const onChange = jest.fn()
    const { result } = renderHook(() =>
      usePropsValue({
        value: undefined,
        defaultValue: '',
        onChange,
      })
    )

    const setState = result.current[1]
    act(() => setState('1'))
    expect(onChange).toBeCalledTimes(1)
    act(() => setState('1'))
    expect(onChange).toBeCalledTimes(1)
  })

  test('onChange should not call when next value not change in controlled mode', () => {
    const onChange = jest.fn()
    const { result } = renderHook(usePropsValue, {
      initialProps: { value: '1', defaultValue: '', onChange },
    })
    const setState = result.current[1]
    act(() => setState('1'))
    expect(onChange).toBeCalledTimes(0)
  })

  test('onChange should call when `forceTrigger` is true', () => {
    const onChange = jest.fn()
    const { result } = renderHook(usePropsValue, {
      initialProps: { value: '1', defaultValue: '', onChange },
    })
    const setState = result.current[1]
    act(() => setState('1', true))
    expect(onChange).toBeCalledTimes(1)
  })

  test('inner value should always be the same with outer value', () => {
    const { result, rerender } = renderHook(usePropsValue, {
      initialProps: { value: '0', defaultValue: '' },
    })
    for (let i = 0; i < 3; i++) {
      rerender({
        value: i.toString(),
        defaultValue: '',
      })
      expect(result.current[0]).toBe(i.toString())
    }
  })
})
