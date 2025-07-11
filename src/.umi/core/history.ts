// @ts-nocheck
import {
  createBrowserHistory,
  History,
} from '/Users/jilin/projects/antd/antd-mobile/node_modules/@umijs/runtime'

let options = {
  'basename': '/',
}
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER
  ? null
  : createBrowserHistory(options)
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options)
  }

  return history
}

export { history }
