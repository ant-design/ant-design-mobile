import type { IApi } from '@umijs/types'

export default (api: IApi) => {
  api.modifyRoutes(routes => {
    routes.unshift({
      path: '/all-components',
      component: __dirname + '/display.tsx',
    })
    return routes
  })
}
