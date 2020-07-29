/**
 * 假的 uuid
 *
 * 足够用于生成一些唯一 id
 */

function uuid() {
  let seed = Date.now()
  if (typeof window?.performance?.now === 'function') {
    seed += performance.now()
  }

  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (seed + Math.random() * 16) % 16 | 0
    seed = Math.floor(seed / 16)

    return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16)
  })

  return uuid
}

export default uuid
