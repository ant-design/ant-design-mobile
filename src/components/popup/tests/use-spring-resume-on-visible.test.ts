import { act, renderHook } from '@testing-library/react'
import { useSpringResumeOnVisible } from '../../../utils/use-spring-resume-on-visible'

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('useSpringResumeOnVisible', () => {
  const onFinishClose = jest.fn()
  const originalVisibilityState = Object.getOwnPropertyDescriptor(
    document,
    'visibilityState'
  )

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    if (originalVisibilityState) {
      Object.defineProperty(
        document,
        'visibilityState',
        originalVisibilityState
      )
    } else {
      delete (document as any).visibilityState
    }
  })

  it('should finish closing when page becomes visible after close while hidden', () => {
    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        active: true,
        onFinishClose,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(onFinishClose).toHaveBeenCalledTimes(1)
  })

  it('should not finish closing when active matches visible', () => {
    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        active: false,
        onFinishClose,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(onFinishClose).not.toHaveBeenCalled()
  })

  it('should not finish closing after unmount', () => {
    const { unmount } = renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        active: true,
        onFinishClose,
      })
    )

    unmount()
    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(onFinishClose).not.toHaveBeenCalled()
  })

  it('should prevent closing twice after visibility resumes', () => {
    const { result } = renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        active: true,
        onFinishClose,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })
    result.current.finishClose()

    expect(onFinishClose).toHaveBeenCalledTimes(1)
  })

  it('should prevent closing twice after spring rests', () => {
    const { result } = renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        active: false,
        onFinishClose,
      })
    )

    result.current.finishClose()
    result.current.finishClose()

    expect(onFinishClose).toHaveBeenCalledTimes(1)
  })

  it('should reset closing state for the next visible cycle', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        useSpringResumeOnVisible({
          visible,
          active: true,
          onFinishClose,
        }),
      { initialProps: { visible: false } }
    )

    result.current.finishClose()
    rerender({ visible: true })
    rerender({ visible: false })
    result.current.finishClose()

    expect(onFinishClose).toHaveBeenCalledTimes(2)
  })

  it('should not finish closing while document is hidden', () => {
    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        active: true,
        onFinishClose,
      })
    )

    setVisibilityState('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(onFinishClose).not.toHaveBeenCalled()
  })
})
