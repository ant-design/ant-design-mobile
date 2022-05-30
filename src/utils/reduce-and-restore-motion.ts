import { Globals } from '@react-spring/web'

let reduced = false

export function reduceMotion() {
  reduced = true
  Globals.assign({
    skipAnimation: true,
  })
}

export function restoreMotion() {
  reduced = false
  Globals.assign({
    skipAnimation: false,
  })
}

export function isMotionReduced() {
  return reduced
}
