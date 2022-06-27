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

    act(() => result.current[1]('1'))
    expect(onChange).toBeCalledTimes(1)
    act(() => result.current[1]('1'))
    expect(onChange).toBeCalledTimes(1)
  })

  test('onChange should not call when next value not change in controlled mode', () => {
    const onChange = jest.fn()
    const { result } = renderHook(usePropsValue, {
      initialProps: { value: '1', defaultValue: '', onChange },
    })
    act(() => result.current[1]('1'))
    expect(onChange).toBeCalledTimes(0)
  })

  test('onChange should call when `forceTrigger` is true', () => {
    const onChange = jest.fn()
    const { result } = renderHook(usePropsValue, {
      initialProps: { value: '1', defaultValue: '', onChange },
    })
    act(() => result.current[1]('1', true))
    expect(onChange).toBeCalledTimes(1)
  })
})
