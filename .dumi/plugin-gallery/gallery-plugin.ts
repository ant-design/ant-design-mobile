import type { IApi } from '@umijs/types'

export default (api: IApi) => {
  api.modifyRoutes(routes => {
    // 为 routes 对象添加新的路由
    const galleryRouteId = 'gallery'
    const galleryComponentRouteId = 'gallery-component'

    routes[galleryRouteId] = {
      id: galleryRouteId,
      path: '/gallery',
      file: __dirname + '/gallery.tsx',
    }

    routes[galleryComponentRouteId] = {
      id: galleryComponentRouteId,
      path: '/gallery/:component',
      file: __dirname + '/gallery.tsx',
    }

    return routes
  })
}
