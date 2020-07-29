type CallBack = (f: boolean) => void

const tasks = new Map<string, CallBack>()

export function subscribe(id: string, cb: CallBack) {
  if (!tasks.has(id)) {
    tasks.set(id, cb)
  }
}

export function unsubscribe(id: string) {
  if (tasks.has(id)) {
    tasks.delete(id)
  }
}

// 使其他 focus 状态的输入框 blur
export function blurExcept(id: string) {
  tasks.forEach((cb, key) => {
    if (key !== id) {
      cb(false)
    }
  })
}
