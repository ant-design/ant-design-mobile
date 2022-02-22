export const sleep = (time: number) =>
  // Promise 模拟睡眠
  new Promise(resolve => setTimeout(resolve, time))
