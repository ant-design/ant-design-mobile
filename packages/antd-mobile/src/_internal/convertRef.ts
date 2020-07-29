import * as React from 'react'

/**
 * Since react ref may Function-based or Ref-based
 *
 * Provide this hook to get Ref-based and Function-based in custom component
 *
 *
 * Usage:
 *
 *   function View(props) {
 *     const { hostRef, ref } = convertRef(props.forwardedRef)
 *
 *     const onClick = useCallback(() => {
 *        hostRef.current?.focus()
 *     })
 *
 *     return <div ref={ref} />;
 *   }
 *
 *   const App = React.forwardRef((props, ref) => (
 *     <View {...props} forwardedRef={ref} />
 *   ));
 */

export default function convertRef<T extends any>(
  forwardedRef: React.ElementRef<any>,
  // ref callback
  onRef?: (ref: React.ElementRef<any>) => void,
) {
  const hostRef = React.useRef<T>()

  function updater(ref: React.ElementRef<any>) {
    onRef?.(ref)
    // @ts-ignore
    hostRef.current = ref

    if (typeof forwardedRef === 'function') {
      forwardedRef(ref)
    } else if (typeof forwardedRef === 'object' && forwardedRef != null) {
      // @ts-ignore
      forwardedRef.current = ref
    }
  }

  return {
    // Ref-based
    hostRef,
    // Function-based
    ref: updater,
  }
}
