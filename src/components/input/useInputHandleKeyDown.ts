interface InputHandleKeyDownType<T> {
  onEnterPress?: (e: React.KeyboardEvent<T>) => void
  onKeyDown?: (e: React.KeyboardEvent<T>) => void
}

export default function useInputHandleKeyDown<
  T extends HTMLInputElement | HTMLTextAreaElement,
>({ onEnterPress, onKeyDown }: InputHandleKeyDownType<T>) {
  const handleKeydown = (e: React.KeyboardEvent<T>) => {
    if (onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      onEnterPress(e)
    }
    onKeyDown?.(e)
  }

  return handleKeydown
}
