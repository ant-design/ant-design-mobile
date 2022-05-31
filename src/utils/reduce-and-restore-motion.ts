import { Globals } from '@react-spring/web'
import { useSyncExternalStore } from 'use-sync-external-store/shim'

let reduced = false

const subscribers = new Set<() => void>()

function notify() {
  subscribers.forEach(subscriber => {
    subscriber()
  })
}

export function reduceMotion() {
  reduced = true
  notify()
  Globals.assign({
    skipAnimation: true,
  })
}

export function restoreMotion() {
  reduced = false
  notify()
  Globals.assign({
    skipAnimation: false,
  })
}

export function isMotionReduced() {
  return reduced
}

export function useMotionReduced() {
  return useSyncExternalStore(onStoreChange => {
    subscribers.add(onStoreChange)
    return () => {
      subscribers.delete(onStoreChange)
    }
  }, isMotionReduced)
}
