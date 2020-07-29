/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useDebugValue, useEffect, useRef } from 'react'
import PressResponder, {
  EventHandlers,
  PressResponderConfig,
} from './PressResponder'

export default function usePressEvents(
  hostRef: any,
  config: PressResponderConfig,
): EventHandlers {
  const pressResponderRef = useRef(new PressResponder(config))
  const pressResponder = pressResponderRef.current

  // Re-configure to use the current node and configuration.
  useEffect(() => {
    pressResponder.configure(config, hostRef.current)
  }, [config, pressResponder])

  // Reset the `pressResponder` when cleanup needs to occur. This is
  // a separate effect because we do not want to rest the responder when `config` changes.
  useEffect(() => {
    return () => {
      pressResponder.reset()
    }
  }, [pressResponder])

  useDebugValue(config)

  return pressResponder.getEventHandlers()
}
