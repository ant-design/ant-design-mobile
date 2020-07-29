// fn(x, (res) => cb(res)): void
// ->
// fn(x, cb): Promise<res>

type TypeCallback<T> = (res?: T) => void

export default <K, T>(fn: (opts: K, cb: TypeCallback<T>) => void) => {
  return (opts: K, cb?: TypeCallback<T>) =>
    new Promise<T>((resolve, reject) => {
      fn(opts, res => {
        typeof cb === 'function' && cb(res)
        resolve(res)
      })
    })
}
