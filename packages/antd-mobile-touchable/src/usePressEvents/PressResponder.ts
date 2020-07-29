/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getBoundingClientRect } from '../useResponderEvents/utils'

type TimeoutID = ReturnType<typeof setTimeout>

type ResponderEvent = any

export type PressResponderConfig = Readonly<{
  // The gesture can be interrupted by a parent gesture, e.g., scroll.
  // Defaults to true.
  cancelable?: boolean
  // Whether to disable initialization of the press gesture.
  disabled?: boolean
  // Duration (in addition to `delayPressStart`) after which a press gesture is
  // considered a long press gesture. Defaults to 500 (milliseconds).
  delayLongPress?: number
  // Duration to wait before calling `onPressIn`.
  delayPressIn?: number
  // Duration to wait before calling `onPressOut`.
  delayPressOut?: number
  // Called when a long press gesture has been triggered.
  onLongPress?: (event: ResponderEvent) => void
  // Called when a press gesture has been triggered.
  onPress?: (event: ResponderEvent) => void
  // Called when the press is activated to provide visual feedback.
  onPressIn?: (event: ResponderEvent) => void
  // Called when the press is deactivated to undo visual feedback.
  onPressOut?: (event: ResponderEvent) => void
}>

export type EventHandlers = Readonly<{
  onContextMenu: (event: ResponderEvent) => void
  onResponderGrant: (event: ResponderEvent) => void
  onResponderMove: (event: ResponderEvent) => void
  onResponderRelease: (event: ResponderEvent) => void
  onResponderTerminate: (event: ResponderEvent) => void
  onResponderTerminationRequest: (event: ResponderEvent) => boolean
  onStartShouldSetResponder: (event: ResponderEvent) => boolean
}>

/**
 * Touchable states.
 */
enum States {
  NOT_RESPONDER = 'NOT_RESPONDER', // Not the responder
  RESPONDER_INACTIVE_PRESS_IN = 'RESPONDER_INACTIVE_PRESS_IN', // Responder, inactive, in the `PressRect`
  RESPONDER_INACTIVE_PRESS_OUT = 'RESPONDER_INACTIVE_PRESS_OUT', // Responder, inactive, out of `PressRect`
  RESPONDER_ACTIVE_PRESS_IN = 'RESPONDER_ACTIVE_PRESS_IN', // Responder, active, in the `PressRect`
  RESPONDER_ACTIVE_PRESS_OUT = 'RESPONDER_ACTIVE_PRESS_OUT', // Responder, active, out of `PressRect`
  RESPONDER_ACTIVE_LONG_PRESS_IN = 'RESPONDER_ACTIVE_LONG_PRESS_IN', // Responder, active, in the `PressRect`, after long press threshold
  RESPONDER_ACTIVE_LONG_PRESS_OUT = 'RESPONDER_ACTIVE_LONG_PRESS_OUT', // Responder, active, out of `PressRect`, after long press threshold
  ERROR = 'ERROR',
}
/**
 * Inputs to the state machine.
 */
enum Signals {
  DELAY = 'DELAY',
  RESPONDER_GRANT = 'RESPONDER_GRANT',
  RESPONDER_RELEASE = 'RESPONDER_RELEASE',
  RESPONDER_TERMINATED = 'RESPONDER_TERMINATED',
  ENTER_PRESS_RECT = 'ENTER_PRESS_RECT',
  LEAVE_PRESS_RECT = 'LEAVE_PRESS_RECT',
  LONG_PRESS_DETECTED = 'LONG_PRESS_DETECTED',
}

/**
 * Mapping from States x Signals => States
 */
const Transitions = {
  NOT_RESPONDER: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
    RESPONDER_RELEASE: States.ERROR,
    RESPONDER_TERMINATED: States.ERROR,
    ENTER_PRESS_RECT: States.ERROR,
    LEAVE_PRESS_RECT: States.ERROR,
    LONG_PRESS_DETECTED: States.ERROR,
  },
  RESPONDER_INACTIVE_PRESS_IN: {
    DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR,
  },
  RESPONDER_INACTIVE_PRESS_OUT: {
    DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR,
  },
  RESPONDER_ACTIVE_PRESS_IN: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
  },
  RESPONDER_ACTIVE_PRESS_OUT: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR,
  },
  RESPONDER_ACTIVE_LONG_PRESS_IN: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
  },
  RESPONDER_ACTIVE_LONG_PRESS_OUT: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR,
  },
  error: {
    DELAY: States.NOT_RESPONDER,
    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.NOT_RESPONDER,
    LEAVE_PRESS_RECT: States.NOT_RESPONDER,
    LONG_PRESS_DETECTED: States.NOT_RESPONDER,
  },
}

/**
 * Quick lookup map for states that are considered to be "active"
 */
const IsActive = {
  RESPONDER_ACTIVE_PRESS_OUT: true,
  RESPONDER_ACTIVE_PRESS_IN: true,
}

/**
 * Quick lookup for states that are considered to be "pressing" and are
 * therefore eligible to result in a "selection" if the press stops.
 */
const IsPressingIn = {
  RESPONDER_INACTIVE_PRESS_IN: true,
  RESPONDER_ACTIVE_PRESS_IN: true,
  RESPONDER_ACTIVE_LONG_PRESS_IN: true,
}

const IsLongPressingIn = {
  RESPONDER_ACTIVE_LONG_PRESS_IN: true,
}

const DEFAULT_LONG_PRESS_DELAY_MS = 450 // 500 - 50
const DEFAULT_PRESS_DELAY_MS = 50

/**
 * =========================== PressResponder Tutorial ===========================
 *
 * The `PressResponder` class helps you create press interactions by analyzing the
 * geometry of elements and observing when another responder (e.g. ScrollView)
 * has stolen the touch lock. It offers hooks for your component to provide
 * interaction feedback to the user:
 *
 * - When a press has activated (e.g. highlight an element)
 * - When a press has deactivated (e.g. un-highlight an element)
 * - When a press should trigger an action, meaning it activated and deactivated
 *   while within the geometry of the element without the lock being stolen.
 *
 * A high quality interaction isn't as simple as you might think. There should
 * be a slight delay before activation. Moving your finger beyond an element's
 * bounds should trigger deactivation, but moving the same finger back within an
 * element's bounds should trigger reactivation.
 *
 * In order to use `PressResponder`, do the following:
 *
 *     const pressResponder = new PressResponder(config);
 *
 * 2. Choose the rendered component who should collect the press events. On that
 *    element, spread `pressability.getEventHandlers()` into its props.
 *
 *    return (
 *      <View {...this.state.pressResponder.getEventHandlers()} />
 *    );
 *
 * 3. Reset `PressResponder` when your component unmounts.
 *
 *    componentWillUnmount() {
 *      this.state.pressResponder.reset();
 *    }
 *
 * ==================== Implementation Details ====================
 *
 * `PressResponder` only assumes that there exists a `HitRect` node. The `PressRect`
 * is an abstract box that is extended beyond the `HitRect`.
 *
 * # Geometry
 *
 *  ┌────────────────────────┐
 *  │  ┌──────────────────┐  │ - Presses start anywhere within `HitRect`.
 *  │  │  ┌────────────┐  │  │
 *  │  │  │ VisualRect │  │  │
 *  │  │  └────────────┘  │  │ - When pressed down for sufficient amount of time
 *  │  │    HitRect       │  │   before letting up, `VisualRect` activates.
 *  │  └──────────────────┘  │
 *  │       Out Region   o   │
 *  └────────────────────│───┘
 *                       └────── When the press is released outside the `HitRect`,
 *                               the responder is NOT eligible for a "press".
 *
 * +-------------+ <---+ RESPONDER_RELEASE
 * |NOT_RESPONDER|
 * +-------------+ <---+ RESPONDER_TERMINATED
 *     +
 *     | RESPONDER_GRANT (HitRect)
 *     v
 * +---------------------------+  DELAY   +-------------------------+  T + DELAY     +------------------------------+
 * |RESPONDER_INACTIVE_PRESS_IN|+-------->|RESPONDER_ACTIVE_PRESS_IN| +------------> |RESPONDER_ACTIVE_LONG_PRESS_IN|
 * +---------------------------+          +-------------------------+                +------------------------------+
 *     +            ^                         +           ^                                 +           ^
 *     |LEAVE_      |ENTER_                   |LEAVE_     |ENTER_                           |LEAVE_     |ENTER_
 *     |PRESS_RECT  |PRESS_RECT               |PRESS_RECT |PRESS_RECT                       |PRESS_RECT |PRESS_RECT
 *     |            |                         |           |                                 |           |
 *     v            +                         v           +                                 v           +
 * +----------------------------+  DELAY  +--------------------------+               +-------------------------------+
 * |RESPONDER_INACTIVE_PRESS_OUT|+------->|RESPONDER_ACTIVE_PRESS_OUT|               |RESPONDER_ACTIVE_LONG_PRESS_OUT|
 * +----------------------------+         +--------------------------+               +-------------------------------+
 *
 * T + DELAY => LONG_PRESS_DELAY_MS + DELAY
 *
 */

export default class PressResponder {
  _dom: HTMLElement
  _config: PressResponderConfig
  _eventHandlers: EventHandlers = null
  _longPressDelayTimeout: TimeoutID = null
  _pressDelayTimeout: TimeoutID = null
  _pressOutDelayTimeout: TimeoutID = null
  _responder: any
  _touchActivatePosition: Readonly<{
    pageX: number
    pageY: number
  }>
  _touchState: States = States.NOT_RESPONDER

  constructor(config: PressResponderConfig) {
    this.configure(config)
  }

  configure(config: PressResponderConfig, dom?: HTMLElement): void {
    this._config = config
    if (dom) {
      this._dom = dom
    }
  }

  /**
   * Resets any pending timers. This should be called on unmount.
   */
  reset(): void {
    this._cancelLongPressDelayTimeout()
    this._cancelPressDelayTimeout()
    this._cancelPressOutDelayTimeout()

    this._dom = null
    this._responder = null
  }

  /**
   * Returns a set of props to spread into the interactive element.
   */
  getEventHandlers(): EventHandlers {
    if (this._eventHandlers == null) {
      this._eventHandlers = this._createEventHandlers()
    }
    return this._eventHandlers
  }

  _createEventHandlers(): EventHandlers {
    const start = (event: ResponderEvent): void => {
      event.persist()

      this._cancelPressOutDelayTimeout()

      this._responder = event.currentTarget
      this._touchState = States.NOT_RESPONDER
      this._receiveSignal(Signals.RESPONDER_GRANT, event)
      const delayPressIn = normalizeDelay(
        this._config.delayPressIn,
        0,
        DEFAULT_PRESS_DELAY_MS,
      )

      if (delayPressIn > 0) {
        this._pressDelayTimeout = setTimeout(() => {
          this._receiveSignal(Signals.DELAY, event)
        }, delayPressIn)
      } else {
        this._receiveSignal(Signals.DELAY, event)
      }

      const delayLongPress = normalizeDelay(
        this._config.delayLongPress,
        10,
        DEFAULT_LONG_PRESS_DELAY_MS,
      )
      this._longPressDelayTimeout = setTimeout(() => {
        this._handleLongPress(event)
      }, delayLongPress + delayPressIn)
    }

    return {
      onStartShouldSetResponder: () => {
        const { disabled } = this._config
        if (disabled == null) {
          return true
        }
        return !disabled
      },

      onResponderGrant: event => start(event),

      onResponderMove: event => {
        // press 还没生效
        if (this._touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
          return
        }

        // press 激活的返回未确定
        if (!this._touchActivatePosition) {
          return
        }

        const touch = getTouchFromResponderEvent(event)
        const deltaX = this._touchActivatePosition.pageX - touch.pageX
        const deltaY = this._touchActivatePosition.pageY - touch.pageY
        if (Math.hypot(deltaX, deltaY) > 10) {
          this._cancelLongPressDelayTimeout()
        }

        const { clientX, clientY } = touch
        const { left, top, right, bottom } = getBoundingClientRect(this._dom)

        const isTouchWithinActive =
          clientX > left && clientX < right && clientY > top && clientY < bottom

        if (isTouchWithinActive) {
          this._receiveSignal(Signals.ENTER_PRESS_RECT, event)
        } else {
          this._cancelLongPressDelayTimeout()
          this._receiveSignal(Signals.LEAVE_PRESS_RECT, event)
        }
      },

      onResponderRelease: event => {
        this._receiveSignal(Signals.RESPONDER_RELEASE, event)
      },

      // 中断
      onResponderTerminate: event => {
        this._receiveSignal(Signals.RESPONDER_TERMINATED, event)
      },

      // 可不可以中断 Responder
      onResponderTerminationRequest: (event): boolean => {
        const { cancelable = true } = this._config
        return cancelable
      },

      // 阻止右键/长按的默认动作
      onContextMenu: (event): void => {
        // 长按的时候，取消默认的表现
        if (this._config.onLongPress) {
          event.preventDefault()
        }
      },
    }
  }

  /**
   * Receives a state machine signal, performs side effects of the transition
   * and stores the new state. Validates the transition as well.
   */
  _receiveSignal(signal: Signals, event: ResponderEvent): void {
    const prevState = this._touchState
    const nextState = Transitions[prevState]?.[signal]

    if (!this._responder && signal === Signals.RESPONDER_RELEASE) {
      return
    }
    if (!nextState || nextState === States.ERROR) {
      console.error(
        `PressResponder: Invalid signal ${signal} for state ${prevState} on responder`,
      )
    } else if (prevState !== nextState) {
      this._performTransitionSideEffects(prevState, nextState, signal, event)
      this._touchState = nextState
    }
  }

  /**
   * Performs a transition between touchable states and identify any activations
   * or deactivations (and callback invocations).
   */
  _performTransitionSideEffects(
    prevState: States,
    nextState: States,
    signal: Signals,
    event: ResponderEvent,
  ): void {
    const isFinalSignal =
      signal === Signals.RESPONDER_TERMINATED ||
      signal === Signals.RESPONDER_RELEASE

    if (isFinalSignal) {
      this._touchActivatePosition = null
      this._cancelLongPressDelayTimeout()
    }

    if (IsPressingIn[prevState] && signal === Signals.LONG_PRESS_DETECTED) {
      const { onLongPress } = this._config
      onLongPress?.(event)
    }

    const prevIsHighlight = this._isHighlight(prevState)
    const newIsHighlight = this._isHighlight(nextState)

    if (!IsActive[prevState] && IsActive[nextState]) {
      this._saveActivatePosition(event)
    }

    if (newIsHighlight && !prevIsHighlight) {
      this._startHighlight(event)
    } else if (!newIsHighlight && prevIsHighlight) {
      this._endHighlight(event)
    }

    if (IsPressingIn[prevState] && signal === Signals.RESPONDER_RELEASE) {
      const { onLongPress, onPress } = this._config

      const pressIsLongButStillCallOnPress =
        IsLongPressingIn[prevState] && !onLongPress // 长按但是没有 onLongPress 回调

      const shouldInvokePress =
        !IsLongPressingIn[prevState] || pressIsLongButStillCallOnPress

      if (shouldInvokePress && onPress) {
        if (!newIsHighlight && !prevIsHighlight) {
          // we never highlighted because of delay, but we should highlight now
          this._startHighlight(event)
          this._endHighlight(event)
        }

        onPress?.(event)
      }
    }

    this._cancelPressDelayTimeout()
  }

  _saveActivatePosition(event: ResponderEvent) {
    const touch = getTouchFromResponderEvent(event)
    this._touchActivatePosition = {
      pageX: touch.pageX,
      pageY: touch.pageY,
    }
  }

  _startHighlight(event: ResponderEvent): void {
    const { onPressIn } = this._config
    this._saveActivatePosition(event)
    onPressIn?.(event)
  }

  _endHighlight(event: ResponderEvent): void {
    const { onPressOut } = this._config
    const delayPressOut = normalizeDelay(this._config.delayPressOut)
    if (delayPressOut > 0) {
      this._pressOutDelayTimeout = setTimeout(() => {
        onPressOut?.(event)
      }, delayPressOut)
    } else {
      onPressOut?.(event)
    }
  }

  _handleLongPress(event: ResponderEvent): void {
    if (
      this._touchState === States.RESPONDER_ACTIVE_PRESS_IN ||
      this._touchState === States.RESPONDER_ACTIVE_LONG_PRESS_IN
    ) {
      this._receiveSignal(Signals.LONG_PRESS_DETECTED, event)
    }
  }

  _cancelLongPressDelayTimeout(): void {
    if (this._longPressDelayTimeout != null) {
      clearTimeout(this._longPressDelayTimeout)
      this._longPressDelayTimeout = null
    }
  }

  _cancelPressDelayTimeout(): void {
    if (this._pressDelayTimeout != null) {
      clearTimeout(this._pressDelayTimeout)
      this._pressDelayTimeout = null
    }
  }

  _cancelPressOutDelayTimeout(): void {
    if (this._pressOutDelayTimeout != null) {
      clearTimeout(this._pressOutDelayTimeout)
      this._pressOutDelayTimeout = null
    }
  }

  _isHighlight(state: States) {
    return (
      state === States.RESPONDER_ACTIVE_PRESS_IN ||
      state === States.RESPONDER_ACTIVE_LONG_PRESS_IN
    )
  }
}

function normalizeDelay(delay: number, min = 0, fallback = 0): number {
  return Math.max(min, delay ?? fallback)
}

function getTouchFromResponderEvent(event: ResponderEvent) {
  const { changedTouches, touches } = event.nativeEvent
  if (touches != null && touches.length > 0) {
    return touches[0]
  }
  if (changedTouches != null && changedTouches.length > 0) {
    return changedTouches[0]
  }
  return event.nativeEvent
}
