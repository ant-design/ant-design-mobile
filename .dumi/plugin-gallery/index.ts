import type { IApi } from '@umijs/types'

export default (api: IApi) => {
  api.modifyRoutes(routes => {
    routes.unshift({
      path: '/gallery',
      component: __dirname + '/gallery.tsx',
    })
    return routes
  })
}
