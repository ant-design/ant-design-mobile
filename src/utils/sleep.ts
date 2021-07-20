export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))
