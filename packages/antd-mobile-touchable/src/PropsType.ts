type Callback = (e: React.SyntheticEvent) => void

export interface TouchablePropType {
  /**
   * If true, disable all interactions for this component.
   */
  disabled?: boolean
  onLongPress?: Callback
  /**
   * Called when the touch is released, but not if cancelled (e.g. by a scroll
   * that steals the responder lock).
   */
  onPress?: Callback
  onPressIn?: Callback
  onPressOut?: Callback
}
