import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react'

export const useDragAndPinch = createUseGesture([dragAction, pinchAction])
