import { renderHook, act } from '@testing-library/react'
import { useSpringResumeOnVisible } from '../../../utils/use-spring-resume-on-visible'

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('useSpringResumeOnVisible', () => {
  const mockSetActive = jest.fn()
  const mockAfterClose = jest.fn()
  const mockUnmountedRef = { current: false }
  const mockActiveRef = { current: true }
  const originalVisibilityState = Object.getOwnPropertyDescriptor(
    document,
    'visibilityState'
  )

  beforeEach(() => {
    jest.clearAllMocks()
    mockUnmountedRef.current = false
    mockActiveRef.current = true
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

  it('should call setActive(false) and afterClose when page becomes visible after close while hidden', () => {
    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        activeRef: mockActiveRef,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).toHaveBeenCalledWith(false)
    expect(mockAfterClose).toHaveBeenCalledTimes(1)
  })

  it('should not call afterClose when page is already visible and active matches visible', () => {
    mockActiveRef.current = false

    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        activeRef: mockActiveRef,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).not.toHaveBeenCalled()
    expect(mockAfterClose).not.toHaveBeenCalled()
  })

  it('should not call afterClose when component is unmounted', () => {
    mockUnmountedRef.current = true

    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        activeRef: mockActiveRef,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).not.toHaveBeenCalled()
    expect(mockAfterClose).not.toHaveBeenCalled()
  })

  it('shouldCallAfterClose should prevent double-calling afterClose', () => {
    const { result } = renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        activeRef: mockActiveRef,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    // Simulate visibilitychange handler calling afterClose first
    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockAfterClose).toHaveBeenCalledTimes(1)

    // Now onRest fires later - shouldCallAfterClose should return false
    expect(result.current.shouldCallAfterClose()).toBe(false)
  })

  it('shouldCallAfterClose should return true when afterClose has not been called', () => {
    mockActiveRef.current = false

    const { result } = renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        activeRef: mockActiveRef,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    // onRest fires normally (no visibilitychange handler intervention)
    expect(result.current.shouldCallAfterClose()).toBe(true)
    // Second call should return false
    expect(result.current.shouldCallAfterClose()).toBe(false)
  })

  it('should reset closedRef when visible becomes true', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        useSpringResumeOnVisible({
          visible,
          activeRef: mockActiveRef,
          setActive: mockSetActive,
          afterClose: mockAfterClose,
          unmountedRef: mockUnmountedRef,
        }),
      { initialProps: { visible: false } }
    )

    // Simulate afterClose being called (via onRest or visibilitychange)
    // shouldCallAfterClose returns true on first call, then false on subsequent calls
    expect(result.current.shouldCallAfterClose()).toBe(true)
    expect(result.current.shouldCallAfterClose()).toBe(false)

    // Now visible becomes true (new show cycle) - closedRef should be reset
    rerender({ visible: true })

    // shouldCallAfterClose should be reset and return true again
    expect(result.current.shouldCallAfterClose()).toBe(true)
  })

  it('should not trigger on visibilitychange when document is hidden', () => {
    renderHook(() =>
      useSpringResumeOnVisible({
        visible: false,
        activeRef: mockActiveRef,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    setVisibilityState('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).not.toHaveBeenCalled()
    expect(mockAfterClose).not.toHaveBeenCalled()
  })
})
