/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { isTouchScreen } from './utils'

export type Touch = {
  force: number
  identifier: number
  // The locationX and locationY properties are non-standard additions
  locationX: any
  locationY: any
  pageX: number
  pageY: number
  target: any
}

export type TouchEvent = {
  altKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  shiftKey: boolean
  // TouchList is an array in the Responder system
  changedTouches: Array<Touch>
  force: number
  identifier: number
  locationX: any
  locationY: any
  pageX: number
  pageY: number
  target: any
  timeStamp: number
  // TouchList is an array in the Responder system
  touches: Array<Touch>
  type: string
}

export const BLUR = 'blur'
export const CONTEXT_MENU = 'contextmenu'
export const FOCUS_OUT = 'focusout'
export const MOUSE_DOWN = 'mousedown'
export const MOUSE_MOVE = 'mousemove'
export const MOUSE_UP = 'mouseup'
export const MOUSE_CANCEL = 'dragstart'
export const TOUCH_START = 'touchstart'
export const TOUCH_MOVE = 'touchmove'
export const TOUCH_END = 'touchend'
export const TOUCH_CANCEL = 'touchcancel'
export const SCROLL = 'scroll'
export const SELECT = 'select'
export const SELECTION_CHANGE = 'selectionchange'

export function isStartish(eventType: any): boolean {
  return isTouchScreen() ? eventType === TOUCH_START : eventType === MOUSE_DOWN
}

export function isMoveish(eventType: any): boolean {
  return isTouchScreen() ? eventType === TOUCH_MOVE : eventType === MOUSE_MOVE
}

export function isEndish(eventType: any): boolean {
  return isTouchScreen()
    ? eventType === TOUCH_END || eventType === TOUCH_CANCEL
    : eventType === MOUSE_UP || eventType === MOUSE_CANCEL
}

export function isCancelish(eventType: any): boolean {
  return isTouchScreen()
    ? eventType === TOUCH_CANCEL
    : eventType === MOUSE_CANCEL
}

export function isScroll(eventType: any): boolean {
  return eventType === SCROLL
}

export function isSelectionChange(eventType: any): boolean {
  return eventType === SELECT || eventType === SELECTION_CHANGE
}
