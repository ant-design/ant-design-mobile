import { useIsomorphicLayoutEffect } from 'ahooks'

interface InputHandleKeyDownType<T> {
  onEnterPress?: (e: React.KeyboardEvent<T>) => void
  onKeyDown?: (e: React.KeyboardEvent<T>) => void
  enterKeyHint?: React.InputHTMLAttributes<HTMLInputElement>['enterKeyHint']
  nativeInputRef: React.RefObject<T>
}

export function useInputHandleKeyDown<
  T extends HTMLInputElement | HTMLTextAreaElement,
>({
  onEnterPress,
  onKeyDown,
  nativeInputRef,
  enterKeyHint,
}: InputHandleKeyDownType<T>) {
  const handleKeydown = (e: React.KeyboardEvent<T>) => {
    if (onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      onEnterPress(e)
    }
    onKeyDown?.(e)
  }

  useIsomorphicLayoutEffect(() => {
    if (!enterKeyHint) return
    nativeInputRef.current?.setAttribute('enterkeyhint', enterKeyHint)
    return () => {
      nativeInputRef.current?.removeAttribute('enterkeyhint')
    }
  }, [enterKeyHint])

  return handleKeydown
}
