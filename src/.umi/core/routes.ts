// @ts-nocheck
import React from 'react'
import {
  ApplyPluginsType,
  dynamic,
} from '/Users/jilin/projects/antd/antd-mobile/node_modules/@umijs/runtime'
import * as umiExports from './umiExports'
import { plugin } from './plugin'

export function getRoutes() {
  const routes = [
    {
      'path': '/gallery/:component',
      'component': dynamic({
        loader: () =>
          import(
            /* webpackChunkName: '.dumi__plugin-gallery__gallery' */ '/Users/jilin/projects/antd/antd-mobile/.dumi/plugin-gallery/gallery.tsx'
          ),
      }),
    },
    {
      'path': '/gallery',
      'component': dynamic({
        loader: () =>
          import(
            /* webpackChunkName: '.dumi__plugin-gallery__gallery' */ '/Users/jilin/projects/antd/antd-mobile/.dumi/plugin-gallery/gallery.tsx'
          ),
      }),
    },
    {
      'path': '/~demos/:uuid',
      'layout': false,
      'wrappers': [
        dynamic({
          loader: () =>
            import(/* webpackChunkName: 'wrappers' */ '../dumi/layout'),
        }),
      ],
      'component': (props =>
        dynamic({
          loader: async () => {
            const React = await import('react')
            const { default: getDemoRenderArgs } = await import(
              /* webpackChunkName: 'dumi_demos' */ '/Users/jilin/projects/antd/antd-mobile/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs'
            )
            const { default: Previewer } = await import(
              /* webpackChunkName: 'dumi_demos' */ '/Users/jilin/projects/antd/antd-mobile/.dumi/theme/builtins/Previewer.tsx'
            )
            const { usePrefersColor, context } = await import(
              /* webpackChunkName: 'dumi_demos' */ 'dumi/theme'
            )

            return props => {
              const { demos } = React.useContext(context)
              const [renderArgs, setRenderArgs] = React.useState([])

              // update render args when props changed
              React.useLayoutEffect(() => {
                setRenderArgs(getDemoRenderArgs(props, demos))
              }, [
                props.match.params.uuid,
                props.location.query.wrapper,
                props.location.query.capture,
              ])

              // for listen prefers-color-schema media change in demo single route
              usePrefersColor()

              switch (renderArgs.length) {
                case 1:
                  // render demo directly
                  return renderArgs[0]

                case 2:
                  // render demo with previewer
                  return React.createElement(
                    Previewer,
                    renderArgs[0],
                    renderArgs[1]
                  )

                default:
                  return `Demo ${props.match.params.uuid} not found :(`
              }
            }
          },
          loading: () => null,
        }))(),
    },
    {
      'path': '/_demos/:uuid',
      'redirect': '/~demos/:uuid',
    },
    {
      '__dumiRoot': true,
      'layout': false,
      'path': '/',
      'wrappers': [
        dynamic({
          loader: () =>
            import(/* webpackChunkName: 'wrappers' */ '../dumi/layout'),
        }),
        dynamic({
          loader: () =>
            import(
              /* webpackChunkName: 'wrappers' */ '/Users/jilin/projects/antd/antd-mobile/.dumi/theme/layouts/index.tsx'
            ),
        }),
      ],
      'routes': [
        {
          'path': '/404',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__404.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/404.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/404.en.md',
            'updatedTime': 1633200907000,
            'slugs': [],
            'locale': 'en',
            'nav': {
              'path': '/404',
              'title': '404',
            },
            'title': '404',
          },
          'title': '404 - Ant Design Mobile',
        },
        {
          'path': '/zh/404',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__404.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/404.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/404.zh.md',
            'updatedTime': 1632914505000,
            'slugs': [],
            'locale': 'zh',
            'nav': {
              'path': '/zh/404',
              'title': '404',
            },
            'title': '404',
          },
          'title': '404 - Ant Design Mobile',
        },
        {
          'path': '/',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/index.en.md',
            'updatedTime': 1639989651000,
            'title': 'Ant Design Mobile',
            'full': true,
            'gapless': true,
            'slugs': [],
            'locale': 'en',
          },
          'title': 'Ant Design Mobile - Ant Design Mobile',
        },
        {
          'path': '/zh',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/index.zh.md',
            'updatedTime': 1639989651000,
            'title': 'Ant Design Mobile',
            'full': true,
            'gapless': true,
            'slugs': [],
            'locale': 'zh',
          },
          'title': 'Ant Design Mobile - Ant Design Mobile',
        },
        {
          'path': '/resources',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__resources.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/resources.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/resources.en.md',
            'updatedTime': 1660032763000,
            'sidemenu': false,
            'slugs': [
              {
                'depth': 1,
                'value': 'Resources',
                'heading': 'resources',
              },
              {
                'depth': 2,
                'value': 'Design Resources',
                'heading': 'design-resources',
              },
              {
                'depth': 2,
                'value': 'Tech Resources',
                'heading': 'tech-resources',
              },
              {
                'depth': 2,
                'value': 'Other Links',
                'heading': 'other-links',
              },
            ],
            'title': 'Resources',
            'locale': 'en',
            'nav': {
              'path': '/resources',
              'title': 'Resources',
            },
          },
          'title': 'Resources - Ant Design Mobile',
        },
        {
          'path': '/zh/resources',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__resources.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/resources.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/resources.zh.md',
            'updatedTime': 1660032763000,
            'sidemenu': false,
            'slugs': [
              {
                'depth': 1,
                'value': '资源',
                'heading': '资源',
              },
              {
                'depth': 2,
                'value': '设计资源',
                'heading': '设计资源',
              },
              {
                'depth': 2,
                'value': '技术资源',
                'heading': '技术资源',
              },
              {
                'depth': 2,
                'value': '其他相关链接',
                'heading': '其他相关链接',
              },
            ],
            'title': '资源',
            'locale': 'zh',
            'nav': {
              'path': '/zh/resources',
              'title': 'Resources',
            },
          },
          'title': '资源 - Ant Design Mobile',
        },
        {
          'path': '/components/icon',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__components__icon__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/components/icon/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/components/icon/index.en.md',
            'updatedTime': 1696903562000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Icon',
                'heading': 'icon',
              },
              {
                'depth': 2,
                'value': 'Icon List',
                'heading': 'icon-list',
              },
              {
                'depth': 2,
                'value': 'Example',
                'heading': 'example',
              },
            ],
            'title': 'Icon',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/icon',
              'title': 'Icon',
            },
          },
          'title': 'Icon - Ant Design Mobile',
        },
        {
          'path': '/zh/components/icon',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__components__icon__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/components/icon/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/components/icon/index.zh.md',
            'updatedTime': 1696903562000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Icon 图标',
                'heading': 'icon-图标',
              },
              {
                'depth': 2,
                'value': '图标列表',
                'heading': '图标列表',
              },
              {
                'depth': 2,
                'value': '使用示例',
                'heading': '使用示例',
              },
            ],
            'title': 'Icon 图标',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/icon',
              'title': 'Icon',
            },
          },
          'title': 'Icon 图标 - Ant Design Mobile',
        },
        {
          'path': '/guide/css-variables',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__css-variables.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/css-variables.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/css-variables.en.md',
            'updatedTime': 1683687774000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Method 1: Set in the CSS file',
                'heading': 'method-1-set-in-the-css-file',
              },
              {
                'depth': 3,
                'value': 'Method 2: Set directly through the style attribute',
                'heading': 'method-2-set-directly-through-the-style-attribute',
              },
              {
                'depth': 3,
                'value': 'Method 3: Use the global variables',
                'heading': 'method-3-use-the-global-variables',
              },
              {
                'depth': 2,
                'value': 'CSS Variables Auto Fallback',
                'heading': 'css-variables-auto-fallback',
              },
            ],
            'title': 'CSS Variables',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'CSS Variables - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/css-variables',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__css-variables.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/css-variables.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/css-variables.zh.md',
            'updatedTime': 1683687774000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': '方法一：在 CSS 文件中设置',
                'heading': '方法一在-css-文件中设置',
              },
              {
                'depth': 3,
                'value': '方法二：直接通过 style 属性设置',
                'heading': '方法二直接通过-style-属性设置',
              },
              {
                'depth': 3,
                'value': '方法三：通过全局变量进行设置',
                'heading': '方法三通过全局变量进行设置',
              },
              {
                'depth': 2,
                'value': 'CSS 变量自动降级 ',
                'heading': 'css-变量自动降级',
              },
            ],
            'title': 'CSS 变量',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': 'CSS 变量 - Ant Design Mobile',
        },
        {
          'path': '/guide/dark-mode',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__dark-mode.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/dark-mode.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/dark-mode.en.md',
            'updatedTime': 1654597532000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Dark Mode ',
                'heading': 'dark-mode',
              },
            ],
            'title': 'Dark Mode ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Dark Mode  - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/dark-mode',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__dark-mode.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/dark-mode.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/dark-mode.zh.md',
            'updatedTime': 1654844881000,
            'slugs': [
              {
                'depth': 1,
                'value': '深色模式 ',
                'heading': '深色模式',
              },
            ],
            'title': '深色模式 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '深色模式  - Ant Design Mobile',
        },
        {
          'path': '/guide/faq',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__faq.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/faq.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/faq.en.md',
            'updatedTime': 1658224915000,
            'slugs': [
              {
                'depth': 1,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Does it support mini program?',
                'heading': 'does-it-support-mini-program',
              },
              {
                'depth': 3,
                'value': 'Does it support React Native?',
                'heading': 'does-it-support-react-native',
              },
              {
                'depth': 3,
                'value':
                  'Why did you jump from v2 to v5? Where did v3 and v4 go?',
                'heading':
                  'why-did-you-jump-from-v2-to-v5-where-did-v3-and-v4-go',
              },
              {
                'depth': 3,
                'value': 'Should I start using the v5 version now?',
                'heading': 'should-i-start-using-the-v5-version-now',
              },
              {
                'depth': 3,
                'value':
                  'How to check the exact version of antd-mobile installed in the project?',
                'heading':
                  'how-to-check-the-exact-version-of-antd-mobile-installed-in-the-project',
              },
              {
                'depth': 3,
                'value':
                  'How to solve the error after installing antd-mobile v5 in the umi project?',
                'heading':
                  'how-to-solve-the-error-after-installing-antd-mobile-v5-in-the-umi-project',
              },
              {
                'depth': 3,
                'value': 'How do I migrate from v2 to v5?',
                'heading': 'how-do-i-migrate-from-v2-to-v5',
              },
              {
                'depth': 3,
                'value': 'How to avoid the 300ms delay of click?',
                'heading': 'how-to-avoid-the-300ms-delay-of-click',
              },
              {
                'depth': 3,
                'value':
                  'In my project, the component gesture operation of antd-mobile cannot take effect, how to solve it?',
                'heading':
                  'in-my-project-the-component-gesture-operation-of-antd-mobile-cannot-take-effect-how-to-solve-it',
              },
              {
                'depth': 3,
                'value': 'About React Hot Loader',
                'heading': 'about-react-hot-loader',
              },
              {
                'depth': 3,
                'value': 'How to write a duplicate demo on CodesandBox',
                'heading': 'how-to-write-a-duplicate-demo-on-codesandbox',
              },
              {
                'depth': 3,
                'value':
                  "What is the import xxx from 'demos' that appears in the documentation demo?",
                'heading':
                  'what-is-the-import-xxx-from-demos-that-appears-in-the-documentation-demo',
              },
              {
                'depth': 3,
                'value': 'Does antd-mobile have umd package on CDN?',
                'heading': 'does-antd-mobile-have-umd-package-on-cdn',
              },
            ],
            'title': 'FAQ',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'FAQ - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/faq',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__faq.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/faq.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/faq.zh.md',
            'updatedTime': 1658224915000,
            'slugs': [
              {
                'depth': 1,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '支持小程序吗？',
                'heading': '支持小程序吗',
              },
              {
                'depth': 3,
                'value': '支持 React Native 吗？',
                'heading': '支持-react-native-吗',
              },
              {
                'depth': 3,
                'value': '为什么从 v2 直接跳跃到了 v5？v3 和 v4 跑到哪里去了？',
                'heading': '为什么从-v2-直接跳跃到了-v5v3-和-v4-跑到哪里去了',
              },
              {
                'depth': 3,
                'value': '我应该现在开始使用 v5 版本吗？',
                'heading': '我应该现在开始使用-v5-版本吗',
              },
              {
                'depth': 3,
                'value': '如何查看项目中安装的 antd-mobile 的准确版本？',
                'heading': '如何查看项目中安装的-antd-mobile-的准确版本',
              },
              {
                'depth': 3,
                'value': 'umi 项目安装 antd-mobile v5 后报错如何解决？',
                'heading': 'umi-项目安装-antd-mobile-v5-后报错如何解决',
              },
              {
                'depth': 3,
                'value': '从 v2 如何迁移到 v5？',
                'heading': '从-v2-如何迁移到-v5',
              },
              {
                'depth': 3,
                'value': '如何避免 300ms 的点击延迟？',
                'heading': '如何避免-300ms-的点击延迟',
              },
              {
                'depth': 3,
                'value':
                  '在我的项目中，antd-mobile 的组件手势操作无法生效，该怎么解决？',
                'heading':
                  '在我的项目中antd-mobile-的组件手势操作无法生效该怎么解决',
              },
              {
                'depth': 3,
                'value': '关于 React Hot Loader',
                'heading': '关于-react-hot-loader',
              },
              {
                'depth': 3,
                'value': '如何在 codesandbox 上写一个复现 demo',
                'heading': '如何在-codesandbox-上写一个复现-demo',
              },
              {
                'depth': 3,
                'value': "文档 demo 中出现的 import xxx from 'demos' 是什么？",
                'heading': '文档-demo-中出现的-import-xxx-from-demos-是什么',
              },
              {
                'depth': 3,
                'value': 'antd-mobile 有 CDN 上的 umd 包吗？',
                'heading': 'antd-mobile-有-cdn-上的-umd-包吗',
              },
            ],
            'title': 'FAQ',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': 'FAQ - Ant Design Mobile',
        },
        {
          'path': '/guide/hd',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__hd.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/hd.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/hd.en.md',
            'updatedTime': 1653966261000,
            'slugs': [
              {
                'depth': 1,
                'value': 'HD Adaptation',
                'heading': 'hd-adaptation',
              },
            ],
            'title': 'HD Adaptation',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'HD Adaptation - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/hd',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__hd.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/hd.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/hd.zh.md',
            'updatedTime': 1653966261000,
            'slugs': [
              {
                'depth': 1,
                'value': '高清适配',
                'heading': '高清适配',
              },
            ],
            'title': '高清适配',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '高清适配 - Ant Design Mobile',
        },
        {
          'path': '/guide/i18n',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__i18n.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/i18n.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/i18n.en.md',
            'updatedTime': 1724768772000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Internationalization',
                'heading': 'internationalization',
              },
              {
                'depth': 3,
                'value': 'ConfigProvider',
                'heading': 'configprovider',
              },
              {
                'depth': 3,
                'value': 'Add new language',
                'heading': 'add-new-language',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'Why the ConfigProvider not work when component used in an imperative way?',
                'heading':
                  'why-the-configprovider-not-work-when-component-used-in-an-imperative-way',
              },
            ],
            'title': 'Internationalization',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Internationalization - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/i18n',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__i18n.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/i18n.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/i18n.zh.md',
            'updatedTime': 1724768772000,
            'slugs': [
              {
                'depth': 1,
                'value': '国际化',
                'heading': '国际化',
              },
              {
                'depth': 3,
                'value': 'ConfigProvider',
                'heading': 'configprovider',
              },
              {
                'depth': 3,
                'value': '增加语言包',
                'heading': '增加语言包',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '为什么组件指令式的调用不支持 ConfigProvider？',
                'heading': '为什么组件指令式的调用不支持-configprovider',
              },
            ],
            'title': '国际化',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '国际化 - Ant Design Mobile',
        },
        {
          'path': '/guide/import-on-demand',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__import-on-demand.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/import-on-demand.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/import-on-demand.en.md',
            'updatedTime': 1642128431000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Import On Demand',
                'heading': 'import-on-demand',
              },
              {
                'depth': 2,
                'value': 'Import On Demand Manually',
                'heading': 'import-on-demand-manually',
              },
            ],
            'title': 'Import On Demand',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Import On Demand - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/import-on-demand',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__import-on-demand.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/import-on-demand.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/import-on-demand.zh.md',
            'updatedTime': 1647335595000,
            'slugs': [
              {
                'depth': 1,
                'value': '按需加载',
                'heading': '按需加载',
              },
              {
                'depth': 2,
                'value': '手动的按需加载',
                'heading': '手动的按需加载',
              },
            ],
            'title': '按需加载',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '按需加载 - Ant Design Mobile',
        },
        {
          'path': '/guide/migration',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__migration.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/migration.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/migration.en.md',
            'updatedTime': 1658211089000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Migrating from v2',
                'heading': 'migrating-from-v2',
              },
              {
                'depth': 2,
                'value': 'Method 1: Use antd-mobile-v2 (Recommended)',
                'heading': 'method-1-use-antd-mobile-v2-recommended',
              },
              {
                'depth': 2,
                'value': 'Method 2: Install v5 via alias',
                'heading': 'method-2-install-v5-via-alias',
              },
            ],
            'title': 'Migrating from v2',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Migrating from v2 - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/migration',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__migration.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/migration.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/migration.zh.md',
            'updatedTime': 1656498469000,
            'slugs': [
              {
                'depth': 1,
                'value': '从 v2 迁移',
                'heading': '从-v2-迁移',
              },
              {
                'depth': 2,
                'value': '方法一：使用 antd-mobile-v2（推荐）',
                'heading': '方法一使用-antd-mobile-v2推荐',
              },
              {
                'depth': 2,
                'value': '方法二：通过别名安装 v5',
                'heading': '方法二通过别名安装-v5',
              },
            ],
            'title': '从 v2 迁移',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '从 v2 迁移 - Ant Design Mobile',
        },
        {
          'path': '/guide/pre-built-bundles',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__pre-built-bundles.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/pre-built-bundles.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/pre-built-bundles.en.md',
            'updatedTime': 1660876111000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Pre-Built Bundles',
                'heading': 'pre-built-bundles',
              },
            ],
            'title': 'Pre-Built Bundles',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Pre-Built Bundles - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/pre-built-bundles',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__pre-built-bundles.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/pre-built-bundles.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/pre-built-bundles.zh.md',
            'updatedTime': 1660876111000,
            'slugs': [
              {
                'depth': 1,
                'value': '预构建产物',
                'heading': '预构建产物',
              },
            ],
            'title': '预构建产物',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '预构建产物 - Ant Design Mobile',
        },
        {
          'path': '/guide/quick-start',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__quick-start.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/quick-start.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/quick-start.en.md',
            'updatedTime': 1742800175000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Quick Start',
                'heading': 'quick-start',
              },
              {
                'depth': 2,
                'value': 'Installation',
                'heading': 'installation',
              },
              {
                'depth': 2,
                'value': 'Import',
                'heading': 'import',
              },
              {
                'depth': 2,
                'value': 'Compatibility',
                'heading': 'compatibility',
              },
              {
                'depth': 2,
                'value': 'Playground',
                'heading': 'playground',
              },
              {
                'depth': 2,
                'value': 'Discussion Groups',
                'heading': 'discussion-groups',
              },
              {
                'depth': 2,
                'value': 'Contributing',
                'heading': 'contributing',
              },
            ],
            'title': 'Quick Start',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Quick Start - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/quick-start',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__quick-start.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/quick-start.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/quick-start.zh.md',
            'updatedTime': 1742800175000,
            'slugs': [
              {
                'depth': 1,
                'value': '快速上手',
                'heading': '快速上手',
              },
              {
                'depth': 2,
                'value': '安装',
                'heading': '安装',
              },
              {
                'depth': 2,
                'value': '引入',
                'heading': '引入',
              },
              {
                'depth': 2,
                'value': '兼容性',
                'heading': '兼容性',
              },
              {
                'depth': 2,
                'value': '在线体验',
                'heading': '在线体验',
              },
              {
                'depth': 2,
                'value': '讨论组',
                'heading': '讨论组',
              },
              {
                'depth': 2,
                'value': '参与贡献',
                'heading': '参与贡献',
              },
            ],
            'title': '快速上手',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '快速上手 - Ant Design Mobile',
        },
        {
          'path': '/guide/reduce-motion',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__reduce-motion.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/reduce-motion.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/reduce-motion.en.md',
            'updatedTime': 1653964743000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Reduce Motion ',
                'heading': 'reduce-motion',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Follow System Settings',
                'heading': 'follow-system-settings',
              },
            ],
            'title': 'Reduce Motion ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Reduce Motion  - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/reduce-motion',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__reduce-motion.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/reduce-motion.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/reduce-motion.zh.md',
            'updatedTime': 1663581510000,
            'slugs': [
              {
                'depth': 1,
                'value': '减弱动效 ',
                'heading': '减弱动效',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': '跟随系统设置',
                'heading': '跟随系统设置',
              },
            ],
            'title': '减弱动效 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '减弱动效  - Ant Design Mobile',
        },
        {
          'path': '/guide/ssr',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__ssr.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/ssr.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/ssr.en.md',
            'updatedTime': 1696903562000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Server-side Rendering / SSR ',
                'heading': 'server-side-rendering--ssr',
              },
              {
                'depth': 2,
                'value': 'Next.js',
                'heading': 'nextjs',
              },
              {
                'depth': 3,
                'value': 'Next.js 12',
                'heading': 'nextjs-12',
              },
              {
                'depth': 3,
                'value': 'Next.js 13',
                'heading': 'nextjs-13',
              },
              {
                'depth': 2,
                'value': 'Remix',
                'heading': 'remix',
              },
            ],
            'title': 'Server-side Rendering / SSR ',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Server-side Rendering / SSR  - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/ssr',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__ssr.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/ssr.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/ssr.zh.md',
            'updatedTime': 1696903562000,
            'slugs': [
              {
                'depth': 1,
                'value': '服务端渲染 / SSR ',
                'heading': '服务端渲染--ssr',
              },
              {
                'depth': 2,
                'value': 'Next.js',
                'heading': 'nextjs',
              },
              {
                'depth': 3,
                'value': 'Next.js 12',
                'heading': 'nextjs-12',
              },
              {
                'depth': 3,
                'value': 'Next.js 13',
                'heading': 'nextjs-13',
              },
              {
                'depth': 2,
                'value': 'Remix',
                'heading': 'remix',
              },
            ],
            'title': '服务端渲染 / SSR ',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '服务端渲染 / SSR  - Ant Design Mobile',
        },
        {
          'path': '/guide/theming',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__theming.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/theming.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/theming.en.md',
            'updatedTime': 1656926671000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Theming',
                'heading': 'theming',
              },
            ],
            'title': 'Theming',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'Theming - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/theming',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__theming.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/theming.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/theming.zh.md',
            'updatedTime': 1656926671000,
            'slugs': [
              {
                'depth': 1,
                'value': '主题',
                'heading': '主题',
              },
            ],
            'title': '主题',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '主题 - Ant Design Mobile',
        },
        {
          'path': '/guide/v5-for-19',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__v5-for-19.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/v5-for-19.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/v5-for-19.en.md',
            'updatedTime': 1750228620000,
            'slugs': [
              {
                'depth': 1,
                'value': 'React 19 Compatibility',
                'heading': 'react-19-compatibility',
              },
              {
                'depth': 3,
                'value': 'React 19 Compatibility Issues',
                'heading': 'react-19-compatibility-issues',
              },
              {
                'depth': 3,
                'value': 'Compatibility Methods',
                'heading': 'compatibility-methods',
              },
              {
                'depth': 4,
                'value': 'unstableSetRender',
                'heading': 'unstablesetrender',
              },
            ],
            'title': 'React 19 Compatibility',
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': 'React 19 Compatibility - Ant Design Mobile',
        },
        {
          'path': '/zh/guide/v5-for-19',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__v5-for-19.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/v5-for-19.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/v5-for-19.zh.md',
            'updatedTime': 1750228620000,
            'slugs': [
              {
                'depth': 1,
                'value': 'React 19 兼容',
                'heading': 'react-19-兼容',
              },
              {
                'depth': 3,
                'value': 'React 19 兼容问题',
                'heading': 'react-19-兼容问题',
              },
              {
                'depth': 3,
                'value': '兼容方式',
                'heading': '兼容方式',
              },
              {
                'depth': 4,
                'value': 'unstableSetRender',
                'heading': 'unstablesetrender',
              },
            ],
            'title': 'React 19 兼容',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': 'React 19 兼容 - Ant Design Mobile',
        },
        {
          'path': '/guide/what-is-experimental',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__what-is-experimental.en.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/what-is-experimental.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/what-is-experimental.en.md',
            'updatedTime': 1698717526000,
            'slugs': [
              {
                'depth': 1,
                'value': "What are 'Experimental Features'?",
                'heading': 'what-are-experimental-features',
              },
            ],
            'title': "What are 'Experimental Features'?",
            'locale': 'en',
            'nav': {
              'path': '/guide',
              'title': 'Guide',
            },
          },
          'title': "What are 'Experimental Features'? - Ant Design Mobile",
        },
        {
          'path': '/zh/guide/what-is-experimental',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'docs__guide__what-is-experimental.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/docs/guide/what-is-experimental.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'docs/guide/what-is-experimental.zh.md',
            'updatedTime': 1646124838000,
            'slugs': [
              {
                'depth': 1,
                'value': '什么是试验性',
                'heading': '什么是试验性',
              },
            ],
            'title': '什么是试验性',
            'locale': 'zh',
            'nav': {
              'path': '/zh/guide',
              'title': 'Guide',
            },
          },
          'title': '什么是试验性 - Ant Design Mobile',
        },
        {
          'path': '/components/action-sheet',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__action-sheet__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/action-sheet/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/action-sheet/index.en.md',
            'updatedTime': 1689400273000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ActionSheet',
                'heading': 'actionsheet',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ActionSheet',
                'heading': 'actionsheet-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 3,
                'value': 'Imperative',
                'heading': 'imperative',
              },
            ],
            'title': 'ActionSheet',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/action-sheet',
              'title': 'Action-sheet',
            },
          },
          'title': 'ActionSheet - Ant Design Mobile',
        },
        {
          'path': '/zh/components/action-sheet',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__action-sheet__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/action-sheet/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/action-sheet/index.zh.md',
            'updatedTime': 1689400273000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ActionSheet 动作面板',
                'heading': 'actionsheet-动作面板',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ActionSheet',
                'heading': 'actionsheet',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 3,
                'value': '指令式',
                'heading': '指令式',
              },
            ],
            'title': 'ActionSheet 动作面板',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/action-sheet',
              'title': 'Action-sheet',
            },
          },
          'title': 'ActionSheet 动作面板 - Ant Design Mobile',
        },
        {
          'path': '/components/auto-center',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__auto-center__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/auto-center/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/auto-center/index.en.md',
            'updatedTime': 1653123553000,
            'componentName': 'auto-center',
            'slugs': [
              {
                'depth': 1,
                'value': 'AutoCenter',
                'heading': 'autocenter',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
            ],
            'title': 'AutoCenter',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/auto-center',
              'title': 'Auto-center',
            },
          },
          'title': 'AutoCenter - Ant Design Mobile',
        },
        {
          'path': '/zh/components/auto-center',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__auto-center__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/auto-center/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/auto-center/index.zh.md',
            'updatedTime': 1653123553000,
            'componentName': 'auto-center',
            'slugs': [
              {
                'depth': 1,
                'value': 'AutoCenter 自动居中',
                'heading': 'autocenter-自动居中',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
            ],
            'title': 'AutoCenter 自动居中',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/auto-center',
              'title': 'Auto-center',
            },
          },
          'title': 'AutoCenter 自动居中 - Ant Design Mobile',
        },
        {
          'path': '/components/avatar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__avatar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/avatar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/avatar/index.en.md',
            'updatedTime': 1680232837000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Avatar',
                'heading': 'avatar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Avatar',
                'heading': 'avatar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Avatar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/avatar',
              'title': 'Avatar',
            },
          },
          'title': 'Avatar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/avatar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__avatar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/avatar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/avatar/index.zh.md',
            'updatedTime': 1680232837000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Avatar 头像',
                'heading': 'avatar-头像',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Avatar',
                'heading': 'avatar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Avatar 头像',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/avatar',
              'title': 'Avatar',
            },
          },
          'title': 'Avatar 头像 - Ant Design Mobile',
        },
        {
          'path': '/components/badge',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__badge__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/badge/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/badge/index.en.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Badge',
                'heading': 'badge',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Badge',
                'heading': 'badge-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Badge',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/badge',
              'title': 'Badge',
            },
          },
          'title': 'Badge - Ant Design Mobile',
        },
        {
          'path': '/zh/components/badge',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__badge__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/badge/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/badge/index.zh.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Badge 徽标',
                'heading': 'badge-徽标',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Badge',
                'heading': 'badge',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Badge 徽标',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/badge',
              'title': 'Badge',
            },
          },
          'title': 'Badge 徽标 - Ant Design Mobile',
        },
        {
          'path': '/components/button',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__button__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/button/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/button/index.en.md',
            'updatedTime': 1744099196000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Button',
                'heading': 'button',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Button',
                'heading': 'button-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'Button',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/button',
              'title': 'Button',
            },
          },
          'title': 'Button - Ant Design Mobile',
        },
        {
          'path': '/zh/components/button',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__button__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/button/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/button/index.zh.md',
            'updatedTime': 1744099196000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Button 按钮',
                'heading': 'button-按钮',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Button',
                'heading': 'button',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'Button 按钮',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/button',
              'title': 'Button',
            },
          },
          'title': 'Button 按钮 - Ant Design Mobile',
        },
        {
          'path': '/components/calendar/calendar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__calendar__calendar.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/calendar/calendar.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/calendar/calendar.en.md',
            'updatedTime': 1697705050000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Calendar ',
                'heading': 'calendar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Calendar',
                'heading': 'calendar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'Calendar ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/calendar',
              'title': 'Calendar',
            },
          },
          'title': 'Calendar  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/calendar/calendar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__calendar__calendar.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/calendar/calendar.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/calendar/calendar.zh.md',
            'updatedTime': 1697705050000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Calendar 日历 ',
                'heading': 'calendar-日历',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Calendar',
                'heading': 'calendar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'Calendar 日历 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/calendar',
              'title': 'Calendar',
            },
          },
          'title': 'Calendar 日历  - Ant Design Mobile',
        },
        {
          'path': '/components/calendar-picker/calendar-picker',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__calendar-picker__calendar-picker.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/calendar-picker/calendar-picker.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/calendar-picker/calendar-picker.en.md',
            'updatedTime': 1701329659000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CalendarPicker ',
                'heading': 'calendarpicker',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'CalendarPicker',
                'heading': 'calendarpicker-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'CalendarPicker ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/calendar-picker',
              'title': 'Calendar-picker',
            },
          },
          'title': 'CalendarPicker  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/calendar-picker/calendar-picker',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__calendar-picker__calendar-picker.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/calendar-picker/calendar-picker.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/calendar-picker/calendar-picker.zh.md',
            'updatedTime': 1697705050000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CalendarPicker 日历选择器 ',
                'heading': 'calendarpicker-日历选择器',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'CalendarPicker',
                'heading': 'calendarpicker',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'CalendarPicker 日历选择器 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/calendar-picker',
              'title': 'Calendar-picker',
            },
          },
          'title': 'CalendarPicker 日历选择器  - Ant Design Mobile',
        },
        {
          'path': '/components/calendar-picker-view/calendar-picker-view',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__calendar-picker-view__calendar-picker-view.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/calendar-picker-view/calendar-picker-view.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath':
              'src/components/calendar-picker-view/calendar-picker-view.en.md',
            'updatedTime': 1730193851000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CalendarPickerView ',
                'heading': 'calendarpickerview',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'CalendarPickerView',
                'heading': 'calendarpickerview-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'CalendarPickerView ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/calendar-picker-view',
              'title': 'Calendar-picker-view',
            },
          },
          'title': 'CalendarPickerView  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/calendar-picker-view/calendar-picker-view',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__calendar-picker-view__calendar-picker-view.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/calendar-picker-view/calendar-picker-view.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath':
              'src/components/calendar-picker-view/calendar-picker-view.zh.md',
            'updatedTime': 1730193851000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CalendarPickerView 日历选择器视图 ',
                'heading': 'calendarpickerview-日历选择器视图',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'CalendarPickerView',
                'heading': 'calendarpickerview',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'CalendarPickerView 日历选择器视图 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/calendar-picker-view',
              'title': 'Calendar-picker-view',
            },
          },
          'title': 'CalendarPickerView 日历选择器视图  - Ant Design Mobile',
        },
        {
          'path': '/components/capsule-tabs',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__capsule-tabs__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/capsule-tabs/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/capsule-tabs/index.en.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CapsuleTabs',
                'heading': 'capsuletabs',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'CapsuleTabs',
                'heading': 'capsuletabs-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'CapsuleTabs.Tab',
                'heading': 'capsuletabstab',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'CapsuleTabs',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/capsule-tabs',
              'title': 'Capsule-tabs',
            },
          },
          'title': 'CapsuleTabs - Ant Design Mobile',
        },
        {
          'path': '/zh/components/capsule-tabs',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__capsule-tabs__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/capsule-tabs/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/capsule-tabs/index.zh.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CapsuleTabs 胶囊选项卡',
                'heading': 'capsuletabs-胶囊选项卡',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'CapsuleTabs',
                'heading': 'capsuletabs',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'CapsuleTabs.Tab',
                'heading': 'capsuletabstab',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'CapsuleTabs 胶囊选项卡',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/capsule-tabs',
              'title': 'Capsule-tabs',
            },
          },
          'title': 'CapsuleTabs 胶囊选项卡 - Ant Design Mobile',
        },
        {
          'path': '/components/card',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__card__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/card/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/card/index.en.md',
            'updatedTime': 1722246567000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Card',
                'heading': 'card',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Card',
                'heading': 'card-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Card',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/card',
              'title': 'Card',
            },
          },
          'title': 'Card - Ant Design Mobile',
        },
        {
          'path': '/zh/components/card',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__card__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/card/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/card/index.zh.md',
            'updatedTime': 1722246567000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Card 卡片',
                'heading': 'card-卡片',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Card',
                'heading': 'card',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Card 卡片',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/card',
              'title': 'Card',
            },
          },
          'title': 'Card 卡片 - Ant Design Mobile',
        },
        {
          'path': '/components/cascader',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__cascader__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/cascader/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/cascader/index.en.md',
            'updatedTime': 1688030397000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Cascader',
                'heading': 'cascader',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Cascader',
                'heading': 'cascader-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CascaderActions',
                'heading': 'cascaderactions',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'Loading ',
                'heading': 'loading',
              },
            ],
            'title': 'Cascader',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/cascader',
              'title': 'Cascader',
            },
          },
          'title': 'Cascader - Ant Design Mobile',
        },
        {
          'path': '/zh/components/cascader',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__cascader__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/cascader/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/cascader/index.zh.md',
            'updatedTime': 1688030397000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Cascader 级联选择',
                'heading': 'cascader-级联选择',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Cascader',
                'heading': 'cascader',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CascaderActions',
                'heading': 'cascaderactions',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': '加载中 ',
                'heading': '加载中',
              },
            ],
            'title': 'Cascader 级联选择',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/cascader',
              'title': 'Cascader',
            },
          },
          'title': 'Cascader 级联选择 - Ant Design Mobile',
        },
        {
          'path': '/components/cascader-view',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__cascader-view__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/cascader-view/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/cascader-view/index.en.md',
            'updatedTime': 1689241557000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CascaderView',
                'heading': 'cascaderview',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'CascaderView',
                'heading': 'cascaderview-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Loading ',
                'heading': 'loading',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'CascaderView',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/cascader-view',
              'title': 'Cascader-view',
            },
          },
          'title': 'CascaderView - Ant Design Mobile',
        },
        {
          'path': '/zh/components/cascader-view',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__cascader-view__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/cascader-view/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/cascader-view/index.zh.md',
            'updatedTime': 1689241557000,
            'slugs': [
              {
                'depth': 1,
                'value': 'CascaderView 级联选择视图',
                'heading': 'cascaderview-级联选择视图',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'CascaderView',
                'heading': 'cascaderview',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': '加载中 ',
                'heading': '加载中',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'CascaderView 级联选择视图',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/cascader-view',
              'title': 'Cascader-view',
            },
          },
          'title': 'CascaderView 级联选择视图 - Ant Design Mobile',
        },
        {
          'path': '/components/check-list',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__check-list__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/check-list/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/check-list/index.en.md',
            'updatedTime': 1680232787000,
            'componentName': 'check-list',
            'slugs': [
              {
                'depth': 1,
                'value': 'CheckList',
                'heading': 'checklist',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'CheckList',
                'heading': 'checklist-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'CheckList.Item',
                'heading': 'checklistitem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-1',
              },
            ],
            'title': 'CheckList',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/check-list',
              'title': 'Check-list',
            },
          },
          'title': 'CheckList - Ant Design Mobile',
        },
        {
          'path': '/zh/components/check-list',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__check-list__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/check-list/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/check-list/index.zh.md',
            'updatedTime': 1680232787000,
            'componentName': 'check-list',
            'slugs': [
              {
                'depth': 1,
                'value': 'CheckList 可勾选列表',
                'heading': 'checklist-可勾选列表',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'CheckList',
                'heading': 'checklist',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'CheckList.Item',
                'heading': 'checklistitem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-1',
              },
            ],
            'title': 'CheckList 可勾选列表',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/check-list',
              'title': 'Check-list',
            },
          },
          'title': 'CheckList 可勾选列表 - Ant Design Mobile',
        },
        {
          'path': '/components/checkbox',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__checkbox__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/checkbox/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/checkbox/index.en.md',
            'updatedTime': 1689155586000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Checkbox',
                'heading': 'checkbox',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Checkbox',
                'heading': 'checkbox-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Checkbox.Group',
                'heading': 'checkboxgroup',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'Checkbox',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/checkbox',
              'title': 'Checkbox',
            },
          },
          'title': 'Checkbox - Ant Design Mobile',
        },
        {
          'path': '/zh/components/checkbox',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__checkbox__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/checkbox/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/checkbox/index.zh.md',
            'updatedTime': 1689155586000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Checkbox 复选框',
                'heading': 'checkbox-复选框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Checkbox',
                'heading': 'checkbox',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Checkbox.Group',
                'heading': 'checkboxgroup',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'Checkbox 复选框',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/checkbox',
              'title': 'Checkbox',
            },
          },
          'title': 'Checkbox 复选框 - Ant Design Mobile',
        },
        {
          'path': '/components/collapse',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__collapse__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/collapse/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/collapse/index.en.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Collapse',
                'heading': 'collapse',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Collapse',
                'heading': 'collapse-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'Collapse.Panel',
                'heading': 'collapsepanel',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'Collapse',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/collapse',
              'title': 'Collapse',
            },
          },
          'title': 'Collapse - Ant Design Mobile',
        },
        {
          'path': '/zh/components/collapse',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__collapse__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/collapse/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/collapse/index.zh.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Collapse 折叠面板',
                'heading': 'collapse-折叠面板',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Collapse',
                'heading': 'collapse',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'Collapse.Panel',
                'heading': 'collapsepanel',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'Collapse 折叠面板',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/collapse',
              'title': 'Collapse',
            },
          },
          'title': 'Collapse 折叠面板 - Ant Design Mobile',
        },
        {
          'path': '/components/config-provider',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__config-provider__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/config-provider/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/config-provider/index.en.md',
            'updatedTime': 1740024849000,
            'componentName': 'config-provider',
            'slugs': [
              {
                'depth': 1,
                'value': 'ConfigProvider',
                'heading': 'configprovider',
              },
              {
                'depth': 2,
                'value': 'When to use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ConfigProvider',
                'heading': 'configprovider-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
            ],
            'title': 'ConfigProvider',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/config-provider',
              'title': 'Config-provider',
            },
          },
          'title': 'ConfigProvider - Ant Design Mobile',
        },
        {
          'path': '/zh/components/config-provider',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__config-provider__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/config-provider/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/config-provider/index.zh.md',
            'updatedTime': 1740024849000,
            'componentName': 'config-provider',
            'slugs': [
              {
                'depth': 1,
                'value': 'ConfigProvider 配置',
                'heading': 'configprovider-配置',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ConfigProvider',
                'heading': 'configprovider',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
            ],
            'title': 'ConfigProvider 配置',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/config-provider',
              'title': 'Config-provider',
            },
          },
          'title': 'ConfigProvider 配置 - Ant Design Mobile',
        },
        {
          'path': '/components/dialog',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__dialog__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/dialog/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/dialog/index.en.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Dialog',
                'heading': 'dialog',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Dialog',
                'heading': 'dialog-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 2,
                'value': 'Imperative',
                'heading': 'imperative',
              },
              {
                'depth': 3,
                'value': 'Dialog.show',
                'heading': 'dialogshow',
              },
              {
                'depth': 3,
                'value': 'Dialog.alert',
                'heading': 'dialogalert',
              },
              {
                'depth': 3,
                'value': 'Dialog.confirm',
                'heading': 'dialogconfirm',
              },
              {
                'depth': 3,
                'value': 'Dialog.clear',
                'heading': 'dialogclear',
              },
            ],
            'title': 'Dialog',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/dialog',
              'title': 'Dialog',
            },
          },
          'title': 'Dialog - Ant Design Mobile',
        },
        {
          'path': '/zh/components/dialog',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__dialog__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/dialog/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/dialog/index.zh.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Dialog 对话框',
                'heading': 'dialog-对话框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Dialog',
                'heading': 'dialog',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 2,
                'value': '指令式',
                'heading': '指令式',
              },
              {
                'depth': 3,
                'value': 'Dialog.show',
                'heading': 'dialogshow',
              },
              {
                'depth': 3,
                'value': 'Dialog.alert',
                'heading': 'dialogalert',
              },
              {
                'depth': 3,
                'value': 'Dialog.confirm',
                'heading': 'dialogconfirm',
              },
              {
                'depth': 3,
                'value': 'Dialog.clear',
                'heading': 'dialogclear',
              },
            ],
            'title': 'Dialog 对话框',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/dialog',
              'title': 'Dialog',
            },
          },
          'title': 'Dialog 对话框 - Ant Design Mobile',
        },
        {
          'path': '/components/divider',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__divider__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/divider/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/divider/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Divider',
                'heading': 'divider',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Divider',
                'heading': 'divider-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
            ],
            'title': 'Divider',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/divider',
              'title': 'Divider',
            },
          },
          'title': 'Divider - Ant Design Mobile',
        },
        {
          'path': '/zh/components/divider',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__divider__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/divider/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/divider/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Divider 分割线',
                'heading': 'divider-分割线',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Divider',
                'heading': 'divider',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
            ],
            'title': 'Divider 分割线',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/divider',
              'title': 'Divider',
            },
          },
          'title': 'Divider 分割线 - Ant Design Mobile',
        },
        {
          'path': '/components/dropdown',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__dropdown__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/dropdown/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/dropdown/index.en.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Dropdown ',
                'heading': 'dropdown',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Dropdown',
                'heading': 'dropdown-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Dropdown.Item',
                'heading': 'dropdownitem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'Dropdown ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/dropdown',
              'title': 'Dropdown',
            },
          },
          'title': 'Dropdown  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/dropdown',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__dropdown__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/dropdown/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/dropdown/index.zh.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Dropdown 下拉菜单 ',
                'heading': 'dropdown-下拉菜单',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Dropdown',
                'heading': 'dropdown',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Dropdown.Item',
                'heading': 'dropdownitem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'Dropdown 下拉菜单 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/dropdown',
              'title': 'Dropdown',
            },
          },
          'title': 'Dropdown 下拉菜单  - Ant Design Mobile',
        },
        {
          'path': '/components/ellipsis',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__ellipsis__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/ellipsis/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/ellipsis/index.en.md',
            'updatedTime': 1683516375000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Ellipsis',
                'heading': 'ellipsis',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Ellipsis',
                'heading': 'ellipsis-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'When the text content contains long and continuous numbers or English words, what should I do if there is no ellipsis?',
                'heading':
                  'when-the-text-content-contains-long-and-continuous-numbers-or-english-words-what-should-i-do-if-there-is-no-ellipsis',
              },
            ],
            'title': 'Ellipsis',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/ellipsis',
              'title': 'Ellipsis',
            },
          },
          'title': 'Ellipsis - Ant Design Mobile',
        },
        {
          'path': '/zh/components/ellipsis',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__ellipsis__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/ellipsis/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/ellipsis/index.zh.md',
            'updatedTime': 1683516375000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Ellipsis 文本省略',
                'heading': 'ellipsis-文本省略',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Ellipsis',
                'heading': 'ellipsis',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  '文本内容包含较长且连续的数字或英文时，不会出现省略怎么办？',
                'heading':
                  '文本内容包含较长且连续的数字或英文时不会出现省略怎么办',
              },
            ],
            'title': 'Ellipsis 文本省略',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/ellipsis',
              'title': 'Ellipsis',
            },
          },
          'title': 'Ellipsis 文本省略 - Ant Design Mobile',
        },
        {
          'path': '/components/empty',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__empty__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/empty/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/empty/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Empty',
                'heading': 'empty',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Empty',
                'heading': 'empty-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
            ],
            'title': 'Empty',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/empty',
              'title': 'Empty',
            },
          },
          'title': 'Empty - Ant Design Mobile',
        },
        {
          'path': '/zh/components/empty',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__empty__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/empty/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/empty/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Empty 空状态',
                'heading': 'empty-空状态',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Empty',
                'heading': 'empty',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
            ],
            'title': 'Empty 空状态',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/empty',
              'title': 'Empty',
            },
          },
          'title': 'Empty 空状态 - Ant Design Mobile',
        },
        {
          'path': '/components/error-block',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__error-block__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/error-block/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/error-block/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ErrorBlock',
                'heading': 'errorblock',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'ErrorBlock',
                'heading': 'errorblock-1',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'createErrorBlock',
                'heading': 'createerrorblock',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos-1',
              },
            ],
            'title': 'ErrorBlock',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/error-block',
              'title': 'Error-block',
            },
          },
          'title': 'ErrorBlock - Ant Design Mobile',
        },
        {
          'path': '/zh/components/error-block',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__error-block__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/error-block/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/error-block/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ErrorBlock 异常',
                'heading': 'errorblock-异常',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': 'ErrorBlock',
                'heading': 'errorblock',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'createErrorBlock',
                'heading': 'createerrorblock',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-1',
              },
            ],
            'title': 'ErrorBlock 异常',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/error-block',
              'title': 'Error-block',
            },
          },
          'title': 'ErrorBlock 异常 - Ant Design Mobile',
        },
        {
          'path': '/components/floating-bubble',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__floating-bubble__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/floating-bubble/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/floating-bubble/index.en.md',
            'updatedTime': 1669360828000,
            'slugs': [
              {
                'depth': 1,
                'value': 'FloatingBubble ',
                'heading': 'floatingbubble',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'FloatingBubble',
                'heading': 'floatingbubble-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'FloatingBubble ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/floating-bubble',
              'title': 'Floating-bubble',
            },
          },
          'title': 'FloatingBubble  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/floating-bubble',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__floating-bubble__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/floating-bubble/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/floating-bubble/index.zh.md',
            'updatedTime': 1669360828000,
            'slugs': [
              {
                'depth': 1,
                'value': 'FloatingBubble 浮动气泡 ',
                'heading': 'floatingbubble-浮动气泡',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'FloatingBubble',
                'heading': 'floatingbubble',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'FloatingBubble 浮动气泡 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/floating-bubble',
              'title': 'Floating-bubble',
            },
          },
          'title': 'FloatingBubble 浮动气泡  - Ant Design Mobile',
        },
        {
          'path': '/components/floating-panel',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__floating-panel__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/floating-panel/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/floating-panel/index.en.md',
            'updatedTime': 1740992347000,
            'slugs': [
              {
                'depth': 1,
                'value': 'FloatingPanel',
                'heading': 'floatingpanel',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'FloatingPanel',
                'heading': 'floatingpanel-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'FloatingPanel',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/floating-panel',
              'title': 'Floating-panel',
            },
          },
          'title': 'FloatingPanel - Ant Design Mobile',
        },
        {
          'path': '/zh/components/floating-panel',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__floating-panel__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/floating-panel/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/floating-panel/index.zh.md',
            'updatedTime': 1740992347000,
            'slugs': [
              {
                'depth': 1,
                'value': 'FloatingPanel 浮动面板',
                'heading': 'floatingpanel-浮动面板',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'FloatingPanel',
                'heading': 'floatingpanel',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'FloatingPanel 浮动面板',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/floating-panel',
              'title': 'Floating-panel',
            },
          },
          'title': 'FloatingPanel 浮动面板 - Ant Design Mobile',
        },
        {
          'path': '/components/footer',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__footer__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/footer/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/footer/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Footer',
                'heading': 'footer',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Footer',
                'heading': 'footer-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'ChipItem',
                'heading': 'chipitem',
              },
              {
                'depth': 3,
                'value': 'LinkItem',
                'heading': 'linkitem',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Footer',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/footer',
              'title': 'Footer',
            },
          },
          'title': 'Footer - Ant Design Mobile',
        },
        {
          'path': '/zh/components/footer',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__footer__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/footer/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/footer/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Footer 页脚',
                'heading': 'footer-页脚',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Footer',
                'heading': 'footer',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'ChipItem',
                'heading': 'chipitem',
              },
              {
                'depth': 3,
                'value': 'LinkItem',
                'heading': 'linkitem',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Footer 页脚',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/footer',
              'title': 'Footer',
            },
          },
          'title': 'Footer 页脚 - Ant Design Mobile',
        },
        {
          'path': '/components/form',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__form__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/form/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/form/index.en.md',
            'updatedTime': 1718178184000,
            'componentName': 'form',
            'slugs': [
              {
                'depth': 1,
                'value': 'Form',
                'heading': 'form',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Form',
                'heading': 'form-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'FormInstance',
                'heading': 'forminstance',
              },
              {
                'depth': 3,
                'value': 'validateMessages',
                'heading': 'validatemessages',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Form.Item',
                'heading': 'formitem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'dependencies',
                'heading': 'dependencies',
              },
              {
                'depth': 3,
                'value': 'shouldUpdate',
                'heading': 'shouldupdate',
              },
              {
                'depth': 3,
                'value': 'messageVariables',
                'heading': 'messagevariables',
              },
              {
                'depth': 2,
                'value': 'Custom field',
                'heading': 'custom-field',
              },
              {
                'depth': 2,
                'value': 'Form.Header',
                'heading': 'formheader',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-2',
              },
              {
                'depth': 2,
                'value': 'Form.Subscribe',
                'heading': 'formsubscribe',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-3',
              },
              {
                'depth': 3,
                'value': 'useWatch',
                'heading': 'usewatch',
              },
              {
                'depth': 3,
                'value': 'Demo',
                'heading': 'demo',
              },
              {
                'depth': 2,
                'value': 'Form.Array ',
                'heading': 'formarray',
              },
              {
                'depth': 3,
                'value': 'FormArrayField',
                'heading': 'formarrayfield',
              },
              {
                'depth': 3,
                'value': 'FormArrayOperation',
                'heading': 'formarrayoperation',
              },
              {
                'depth': 3,
                'value': 'Demo',
                'heading': 'demo-1',
              },
              {
                'depth': 2,
                'value': 'Some Common Type Definitions',
                'heading': 'some-common-type-definitions',
              },
              {
                'depth': 3,
                'value': 'NamePath',
                'heading': 'namepath',
              },
              {
                'depth': 3,
                'value': 'FieldData',
                'heading': 'fielddata',
              },
              {
                'depth': 3,
                'value': 'Rule',
                'heading': 'rule',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'How does Form.Item work with Picker / DatePicker / CascadePicker?',
                'heading':
                  'how-does-formitem-work-with-picker--datepicker--cascadepicker',
              },
            ],
            'title': 'Form',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/form',
              'title': 'Form',
            },
          },
          'title': 'Form - Ant Design Mobile',
        },
        {
          'path': '/zh/components/form',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__form__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/form/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/form/index.zh.md',
            'updatedTime': 1718178184000,
            'componentName': 'form',
            'slugs': [
              {
                'depth': 1,
                'value': 'Form 表单',
                'heading': 'form-表单',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Form',
                'heading': 'form',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'FormInstance',
                'heading': 'forminstance',
              },
              {
                'depth': 3,
                'value': 'validateMessages',
                'heading': 'validatemessages',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Form.Item',
                'heading': 'formitem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'dependencies',
                'heading': 'dependencies',
              },
              {
                'depth': 3,
                'value': 'shouldUpdate',
                'heading': 'shouldupdate',
              },
              {
                'depth': 3,
                'value': 'messageVariables',
                'heading': 'messagevariables',
              },
              {
                'depth': 2,
                'value': '自定义表单字段',
                'heading': '自定义表单字段',
              },
              {
                'depth': 2,
                'value': 'Form.Header',
                'heading': 'formheader',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-2',
              },
              {
                'depth': 2,
                'value': 'Form.Subscribe',
                'heading': 'formsubscribe',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-3',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-1',
              },
              {
                'depth': 3,
                'value': 'useWatch',
                'heading': 'usewatch',
              },
              {
                'depth': 2,
                'value': 'Form.Array ',
                'heading': 'formarray',
              },
              {
                'depth': 3,
                'value': 'FormArrayField',
                'heading': 'formarrayfield',
              },
              {
                'depth': 3,
                'value': 'FormArrayOperation',
                'heading': 'formarrayoperation',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-2',
              },
              {
                'depth': 2,
                'value': '一些通用的类型定义',
                'heading': '一些通用的类型定义',
              },
              {
                'depth': 3,
                'value': 'NamePath',
                'heading': 'namepath',
              },
              {
                'depth': 3,
                'value': 'FieldData',
                'heading': 'fielddata',
              },
              {
                'depth': 3,
                'value': 'Rule',
                'heading': 'rule',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'Form.Item 如何配合 Picker / DatePicker / CascadePicker 使用？',
                'heading':
                  'formitem-如何配合-picker--datepicker--cascadepicker-使用',
              },
            ],
            'title': 'Form 表单',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/form',
              'title': 'Form',
            },
          },
          'title': 'Form 表单 - Ant Design Mobile',
        },
        {
          'path': '/components/grid',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__grid__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/grid/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/grid/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Grid',
                'heading': 'grid',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Grid',
                'heading': 'grid-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Grid.Item',
                'heading': 'griditem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
            ],
            'title': 'Grid',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/grid',
              'title': 'Grid',
            },
          },
          'title': 'Grid - Ant Design Mobile',
        },
        {
          'path': '/zh/components/grid',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__grid__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/grid/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/grid/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Grid 栅格',
                'heading': 'grid-栅格',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Grid',
                'heading': 'grid',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Grid.Item',
                'heading': 'griditem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Grid 组件的兼容性说明',
                'heading': 'grid-组件的兼容性说明',
              },
            ],
            'title': 'Grid 栅格',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/grid',
              'title': 'Grid',
            },
          },
          'title': 'Grid 栅格 - Ant Design Mobile',
        },
        {
          'path': '/components/image',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__image__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/image/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/image/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Image',
                'heading': 'image',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Image',
                'heading': 'image-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'How to make Image change from block element to inline-block element?',
                'heading':
                  'how-to-make-image-change-from-block-element-to-inline-block-element',
              },
              {
                'depth': 3,
                'value':
                  'What is the difference between onContainerClick and onClick?',
                'heading':
                  'what-is-the-difference-between-oncontainerclick-and-onclick',
              },
            ],
            'title': 'Image',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/image',
              'title': 'Image',
            },
          },
          'title': 'Image - Ant Design Mobile',
        },
        {
          'path': '/zh/components/image',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__image__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/image/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/image/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Image 图片',
                'heading': 'image-图片',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Image',
                'heading': 'image',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '如何让 Image 从 block 元素变为 inline-block 元素？',
                'heading': '如何让-image-从-block-元素变为-inline-block-元素',
              },
              {
                'depth': 3,
                'value': 'onContainerClick 和 onClick 有什么区别？',
                'heading': 'oncontainerclick-和-onclick-有什么区别',
              },
            ],
            'title': 'Image 图片',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/image',
              'title': 'Image',
            },
          },
          'title': 'Image 图片 - Ant Design Mobile',
        },
        {
          'path': '/components/image-uploader',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__image-uploader__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/image-uploader/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/image-uploader/index.en.md',
            'updatedTime': 1692240690000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ImageUploader ',
                'heading': 'imageuploader',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ImageUploader',
                'heading': 'imageuploader-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'ImageUploadItem',
                'heading': 'imageuploaditem',
              },
              {
                'depth': 3,
                'value': 'UploadTask',
                'heading': 'uploadtask',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'The capture attribute is configured, but why some Android phones will still have the file option?',
                'heading':
                  'the-capture-attribute-is-configured-but-why-some-android-phones-will-still-have-the-file-option',
              },
              {
                'depth': 3,
                'value': 'Description of the columns Prop',
                'heading': 'description-of-the-columns-prop',
              },
              {
                'depth': 3,
                'value': 'How to use the client upload capability in the App?',
                'heading': 'how-to-use-the-client-upload-capability-in-the-app',
              },
            ],
            'title': 'ImageUploader ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/image-uploader',
              'title': 'Image-uploader',
            },
          },
          'title': 'ImageUploader  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/image-uploader',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__image-uploader__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/image-uploader/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/image-uploader/index.zh.md',
            'updatedTime': 1692240690000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ImageUploader 图片上传 ',
                'heading': 'imageuploader-图片上传',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ImageUploader',
                'heading': 'imageuploader',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'ImageUploadItem',
                'heading': 'imageuploaditem',
              },
              {
                'depth': 3,
                'value': 'UploadTask',
                'heading': 'uploadtask',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  '配置了 capture 属性，为什么部分安卓机型还是会带上文件选项？',
                'heading':
                  '配置了-capture-属性为什么部分安卓机型还是会带上文件选项',
              },
              {
                'depth': 3,
                'value': 'columns 属性说明',
                'heading': 'columns-属性说明',
              },
              {
                'depth': 3,
                'value': '如何在 App 中使用客户端提供的上传能力？',
                'heading': '如何在-app-中使用客户端提供的上传能力',
              },
            ],
            'title': 'ImageUploader 图片上传 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/image-uploader',
              'title': 'Image-uploader',
            },
          },
          'title': 'ImageUploader 图片上传  - Ant Design Mobile',
        },
        {
          'path': '/components/image-viewer',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__image-viewer__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/image-viewer/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/image-viewer/index.en.md',
            'updatedTime': 1741748567000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ImageViewer',
                'heading': 'imageviewer',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ImageViewer',
                'heading': 'imageviewer-1',
              },
              {
                'depth': 2,
                'value': 'ImageViewer.Multi',
                'heading': 'imageviewermulti',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Imperative',
                'heading': 'imperative',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'Why I updated the value of defaultIndex, but the image displayed by ImageViewer.Multi did not switch?',
                'heading':
                  'why-i-updated-the-value-of-defaultindex-but-the-image-displayed-by-imageviewermulti-did-not-switch',
              },
            ],
            'title': 'ImageViewer',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/image-viewer',
              'title': 'Image-viewer',
            },
          },
          'title': 'ImageViewer - Ant Design Mobile',
        },
        {
          'path': '/zh/components/image-viewer',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__image-viewer__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/image-viewer/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/image-viewer/index.zh.md',
            'updatedTime': 1741748567000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ImageViewer 图片查看器',
                'heading': 'imageviewer-图片查看器',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ImageViewer',
                'heading': 'imageviewer',
              },
              {
                'depth': 2,
                'value': 'ImageViewer.Multi',
                'heading': 'imageviewermulti',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': '指令式',
                'heading': '指令式',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  '为什么我更新了 defaultIndex 的值，但是 ImageViewer.Multi 显示的图片并没有切换？',
                'heading':
                  '为什么我更新了-defaultindex-的值但是-imageviewermulti-显示的图片并没有切换',
              },
            ],
            'title': 'ImageViewer 图片查看器',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/image-viewer',
              'title': 'Image-viewer',
            },
          },
          'title': 'ImageViewer 图片查看器 - Ant Design Mobile',
        },
        {
          'path': '/components/index-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__index-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/index-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/index-bar/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'IndexBar',
                'heading': 'indexbar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'IndexBar',
                'heading': 'indexbar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'IndexBar.Panel',
                'heading': 'indexbarpanel',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'IndexBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/index-bar',
              'title': 'Index-bar',
            },
          },
          'title': 'IndexBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/index-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__index-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/index-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/index-bar/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'IndexBar 序列',
                'heading': 'indexbar-序列',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'IndexBar',
                'heading': 'indexbar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'IndexBar.Panel',
                'heading': 'indexbarpanel',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'IndexBar 序列',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/index-bar',
              'title': 'Index-bar',
            },
          },
          'title': 'IndexBar 序列 - Ant Design Mobile',
        },
        {
          'path': '/components/infinite-scroll',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__infinite-scroll__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/infinite-scroll/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/infinite-scroll/index.en.md',
            'updatedTime': 1688030397000,
            'slugs': [
              {
                'depth': 1,
                'value': 'InfiniteScroll',
                'heading': 'infinitescroll',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'InfiniteScroll',
                'heading': 'infinitescroll-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Customized Content',
                'heading': 'customized-content',
              },
              {
                'depth': 3,
                'value': 'Use with search',
                'heading': 'use-with-search',
              },
              {
                'depth': 3,
                'value': 'Infinite virtualized List',
                'heading': 'infinite-virtualized-list',
              },
              {
                'depth': 3,
                'value': 'Support click to retry when the request fails',
                'heading': 'support-click-to-retry-when-the-request-fails',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Does it support pulling down?',
                'heading': 'does-it-support-pulling-down',
              },
              {
                'depth': 3,
                'value':
                  "Why do I get an error when used with ahooks' useDebounceFn or useThrottleFn?",
                'heading':
                  'why-do-i-get-an-error-when-used-with-ahooks-usedebouncefn-or-usethrottlefn',
              },
              {
                'depth': 3,
                'value':
                  'Why does InfiniteScroll keep loading when switching from hide to display?',
                'heading':
                  'why-does-infinitescroll-keep-loading-when-switching-from-hide-to-display',
              },
            ],
            'title': 'InfiniteScroll',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/infinite-scroll',
              'title': 'Infinite-scroll',
            },
          },
          'title': 'InfiniteScroll - Ant Design Mobile',
        },
        {
          'path': '/zh/components/infinite-scroll',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__infinite-scroll__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/infinite-scroll/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/infinite-scroll/index.zh.md',
            'updatedTime': 1688030397000,
            'slugs': [
              {
                'depth': 1,
                'value': 'InfiniteScroll 无限滚动',
                'heading': 'infinitescroll-无限滚动',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'InfiniteScroll',
                'heading': 'infinitescroll',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': '自定义 Content',
                'heading': '自定义-content',
              },
              {
                'depth': 3,
                'value': '配合搜索使用',
                'heading': '配合搜索使用',
              },
              {
                'depth': 3,
                'value': '滚动加载无限长列表',
                'heading': '滚动加载无限长列表',
              },
              {
                'depth': 3,
                'value': '请求失败时支持点击重试',
                'heading': '请求失败时支持点击重试',
              },
              {
                'depth': 2,
                'value': '常见问题',
                'heading': '常见问题',
              },
              {
                'depth': 3,
                'value': '是否支持下拉刷新？',
                'heading': '是否支持下拉刷新',
              },
              {
                'depth': 3,
                'value':
                  '为什么配合 ahooks 的 useDebounceFn 或者 useThrottleFn 使用时会出现报错？',
                'heading':
                  '为什么配合-ahooks-的-usedebouncefn-或者-usethrottlefn-使用时会出现报错',
              },
              {
                'depth': 3,
                'value':
                  '为什么 InfiniteScroll 由隐藏切换为显示时，一直处于 loading？',
                'heading':
                  '为什么-infinitescroll-由隐藏切换为显示时一直处于-loading',
              },
            ],
            'title': 'InfiniteScroll 无限滚动',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/infinite-scroll',
              'title': 'Infinite-scroll',
            },
          },
          'title': 'InfiniteScroll 无限滚动 - Ant Design Mobile',
        },
        {
          'path': '/components/input',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__input__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/input/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/input/index.en.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Input',
                'heading': 'input',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Input',
                'heading': 'input-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'When the type is number, why does the maxLength limit not take effect?',
                'heading':
                  'when-the-type-is-number-why-does-the-maxlength-limit-not-take-effect',
              },
              {
                'depth': 3,
                'value':
                  'On iOS devices, when I use the input method to input text and click the clear button, why does the input box lose focus sometimes?',
                'heading':
                  'on-ios-devices-when-i-use-the-input-method-to-input-text-and-click-the-clear-button-why-does-the-input-box-lose-focus-sometimes',
              },
              {
                'depth': 3,
                'value':
                  "Under iOS, why is autoFocus set but still can't get focus automatically?",
                'heading':
                  'under-ios-why-is-autofocus-set-but-still-cant-get-focus-automatically',
              },
            ],
            'title': 'Input',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/input',
              'title': 'Input',
            },
          },
          'title': 'Input - Ant Design Mobile',
        },
        {
          'path': '/zh/components/input',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__input__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/input/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/input/index.zh.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Input 输入框',
                'heading': 'input-输入框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Input',
                'heading': 'input',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '当 type 为 number 时，maxLength 限制为什么没有生效？',
                'heading': '当-type-为-number-时maxlength-限制为什么没有生效',
              },
              {
                'depth': 3,
                'value':
                  '在 iOS 下，当我使用输入法输入文字时，点击清除按钮，为什么有时候会导致输入框失去焦点？',
                'heading':
                  '在-ios-下当我使用输入法输入文字时点击清除按钮为什么有时候会导致输入框失去焦点',
              },
              {
                'depth': 3,
                'value':
                  '在 iOS 下，为什么设置了 autoFocus 还是不能自动获取焦点？',
                'heading':
                  '在-ios-下为什么设置了-autofocus-还是不能自动获取焦点',
              },
            ],
            'title': 'Input 输入框',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/input',
              'title': 'Input',
            },
          },
          'title': 'Input 输入框 - Ant Design Mobile',
        },
        {
          'path': '/components/jumbo-tabs',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__jumbo-tabs__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/jumbo-tabs/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/jumbo-tabs/index.en.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'JumboTabs',
                'heading': 'jumbotabs',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'JumboTabs',
                'heading': 'jumbotabs-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'JumboTabs.Tab',
                'heading': 'jumbotabstab',
              },
            ],
            'title': 'JumboTabs',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/jumbo-tabs',
              'title': 'Jumbo-tabs',
            },
          },
          'title': 'JumboTabs - Ant Design Mobile',
        },
        {
          'path': '/zh/components/jumbo-tabs',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__jumbo-tabs__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/jumbo-tabs/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/jumbo-tabs/index.zh.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'JumboTabs 复杂选项卡',
                'heading': 'jumbotabs-复杂选项卡',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'JumboTabs',
                'heading': 'jumbotabs',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'JumboTabs.Tab',
                'heading': 'jumbotabstab',
              },
            ],
            'title': 'JumboTabs 复杂选项卡',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/jumbo-tabs',
              'title': 'Jumbo-tabs',
            },
          },
          'title': 'JumboTabs 复杂选项卡 - Ant Design Mobile',
        },
        {
          'path': '/components/list',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__list__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/list/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/list/index.en.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'List',
                'heading': 'list',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'List',
                'heading': 'list-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'List.Item',
                'heading': 'listitem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Whether to support virtualized list?',
                'heading': 'whether-to-support-virtualized-list',
              },
              {
                'depth': 3,
                'value': 'Whether to support drag and drop the sorting?',
                'heading': 'whether-to-support-drag-and-drop-the-sorting',
              },
            ],
            'title': 'List',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/list',
              'title': 'List',
            },
          },
          'title': 'List - Ant Design Mobile',
        },
        {
          'path': '/zh/components/list',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__list__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/list/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/list/index.zh.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'List 列表',
                'heading': 'list-列表',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'List',
                'heading': 'list',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'List.Item',
                'heading': 'listitem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '列表能否支持虚拟滚动？',
                'heading': '列表能否支持虚拟滚动',
              },
              {
                'depth': 3,
                'value': '列表能否支持拖拽排序？',
                'heading': '列表能否支持拖拽排序',
              },
            ],
            'title': 'List 列表',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/list',
              'title': 'List',
            },
          },
          'title': 'List 列表 - Ant Design Mobile',
        },
        {
          'path': '/components/loading',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__loading__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/loading/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/loading/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Loading',
                'heading': 'loading',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'DotLoading',
                'heading': 'dotloading',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'SpinLoading',
                'heading': 'spinloading',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Loading',
                'heading': 'loading-1',
              },
            ],
            'title': 'Loading',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/loading',
              'title': 'Loading',
            },
          },
          'title': 'Loading - Ant Design Mobile',
        },
        {
          'path': '/zh/components/loading',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__loading__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/loading/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/loading/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Loading 加载中',
                'heading': 'loading-加载中',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': 'DotLoading 点状加载中',
                'heading': 'dotloading-点状加载中',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'SpinLoading 转圈加载中',
                'heading': 'spinloading-转圈加载中',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Loading',
                'heading': 'loading',
              },
            ],
            'title': 'Loading 加载中',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/loading',
              'title': 'Loading',
            },
          },
          'title': 'Loading 加载中 - Ant Design Mobile',
        },
        {
          'path': '/components/mask',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__mask__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/mask/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/mask/index.en.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Mask',
                'heading': 'mask',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Mask',
                'heading': 'mask-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Mask',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/mask',
              'title': 'Mask',
            },
          },
          'title': 'Mask - Ant Design Mobile',
        },
        {
          'path': '/zh/components/mask',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__mask__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/mask/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/mask/index.zh.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Mask 背景蒙层',
                'heading': 'mask-背景蒙层',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Mask',
                'heading': 'mask',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Mask 背景蒙层',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/mask',
              'title': 'Mask',
            },
          },
          'title': 'Mask 背景蒙层 - Ant Design Mobile',
        },
        {
          'path': '/components/modal',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__modal__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/modal/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/modal/index.en.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Modal',
                'heading': 'modal',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Modal',
                'heading': 'modal-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 2,
                'value': 'Imperative',
                'heading': 'imperative',
              },
              {
                'depth': 3,
                'value': 'Modal.show',
                'heading': 'modalshow',
              },
              {
                'depth': 3,
                'value': 'Modal.alert',
                'heading': 'modalalert',
              },
              {
                'depth': 3,
                'value': 'Modal.confirm',
                'heading': 'modalconfirm',
              },
              {
                'depth': 3,
                'value': 'Modal.clear',
                'heading': 'modalclear',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'Are there any pop-up windows with no content, no buttons, and no margins?',
                'heading':
                  'are-there-any-pop-up-windows-with-no-content-no-buttons-and-no-margins',
              },
            ],
            'title': 'Modal',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/modal',
              'title': 'Modal',
            },
          },
          'title': 'Modal - Ant Design Mobile',
        },
        {
          'path': '/zh/components/modal',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__modal__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/modal/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/modal/index.zh.md',
            'updatedTime': 1687835938000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Modal 弹窗',
                'heading': 'modal-弹窗',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Modal',
                'heading': 'modal',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 2,
                'value': '指令式',
                'heading': '指令式',
              },
              {
                'depth': 3,
                'value': 'Modal.show',
                'heading': 'modalshow',
              },
              {
                'depth': 3,
                'value': 'Modal.alert',
                'heading': 'modalalert',
              },
              {
                'depth': 3,
                'value': 'Modal.confirm',
                'heading': 'modalconfirm',
              },
              {
                'depth': 3,
                'value': 'Modal.clear',
                'heading': 'modalclear',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '有没有不含内容、不含各种按钮、不含边距的弹窗？',
                'heading': '有没有不含内容不含各种按钮不含边距的弹窗',
              },
            ],
            'title': 'Modal 弹窗',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/modal',
              'title': 'Modal',
            },
          },
          'title': 'Modal 弹窗 - Ant Design Mobile',
        },
        {
          'path': '/components/nav-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__nav-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/nav-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/nav-bar/index.en.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'NavBar',
                'heading': 'navbar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'NavBar',
                'heading': 'navbar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'NavBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/nav-bar',
              'title': 'Nav-bar',
            },
          },
          'title': 'NavBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/nav-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__nav-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/nav-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/nav-bar/index.zh.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'NavBar 导航栏',
                'heading': 'navbar-导航栏',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'NavBar',
                'heading': 'navbar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'NavBar 导航栏',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/nav-bar',
              'title': 'Nav-bar',
            },
          },
          'title': 'NavBar 导航栏 - Ant Design Mobile',
        },
        {
          'path': '/components/notice-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__notice-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/notice-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/notice-bar/index.en.md',
            'updatedTime': 1722837884000,
            'slugs': [
              {
                'depth': 1,
                'value': 'NoticeBar',
                'heading': 'noticebar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'NoticeBar',
                'heading': 'noticebar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'NoticeBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/notice-bar',
              'title': 'Notice-bar',
            },
          },
          'title': 'NoticeBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/notice-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__notice-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/notice-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/notice-bar/index.zh.md',
            'updatedTime': 1722837884000,
            'slugs': [
              {
                'depth': 1,
                'value': 'NoticeBar 通告栏',
                'heading': 'noticebar-通告栏',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'NoticeBar',
                'heading': 'noticebar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'NoticeBar 通告栏',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/notice-bar',
              'title': 'Notice-bar',
            },
          },
          'title': 'NoticeBar 通告栏 - Ant Design Mobile',
        },
        {
          'path': '/components/number-keyboard',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__number-keyboard__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/number-keyboard/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/number-keyboard/index.en.md',
            'updatedTime': 1702539311000,
            'slugs': [
              {
                'depth': 1,
                'value': 'NumberKeyboard ',
                'heading': 'numberkeyboard',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'NumberKeyboard',
                'heading': 'numberkeyboard-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'Does the NumberKeyboard support automatic reading of verification codes from SMS?',
                'heading':
                  'does-the-numberkeyboard-support-automatic-reading-of-verification-codes-from-sms',
              },
            ],
            'title': 'NumberKeyboard ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/number-keyboard',
              'title': 'Number-keyboard',
            },
          },
          'title': 'NumberKeyboard  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/number-keyboard',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__number-keyboard__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/number-keyboard/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/number-keyboard/index.zh.md',
            'updatedTime': 1702539311000,
            'slugs': [
              {
                'depth': 1,
                'value': 'NumberKeyboard 数字键盘 ',
                'heading': 'numberkeyboard-数字键盘',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'NumberKeyboard',
                'heading': 'numberkeyboard',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '数字键盘是否支持自动从短信中读取验证码？',
                'heading': '数字键盘是否支持自动从短信中读取验证码',
              },
            ],
            'title': 'NumberKeyboard 数字键盘 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/number-keyboard',
              'title': 'Number-keyboard',
            },
          },
          'title': 'NumberKeyboard 数字键盘  - Ant Design Mobile',
        },
        {
          'path': '/components/page-indicator',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__page-indicator__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/page-indicator/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/page-indicator/index.en.md',
            'updatedTime': 1693968291000,
            'componentName': 'page-indicator',
            'slugs': [
              {
                'depth': 1,
                'value': 'PageIndicator',
                'heading': 'pageindicator',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'PageIndicator',
                'heading': 'pageindicator-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'PageIndicator',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/page-indicator',
              'title': 'Page-indicator',
            },
          },
          'title': 'PageIndicator - Ant Design Mobile',
        },
        {
          'path': '/zh/components/page-indicator',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__page-indicator__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/page-indicator/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/page-indicator/index.zh.md',
            'updatedTime': 1693968291000,
            'componentName': 'page-indicator',
            'slugs': [
              {
                'depth': 1,
                'value': 'PageIndicator 分页符',
                'heading': 'pageindicator-分页符',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'PageIndicator',
                'heading': 'pageindicator',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'PageIndicator 分页符',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/page-indicator',
              'title': 'Page-indicator',
            },
          },
          'title': 'PageIndicator 分页符 - Ant Design Mobile',
        },
        {
          'path': '/components/passcode-input',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__passcode-input__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/passcode-input/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/passcode-input/index.en.md',
            'updatedTime': 1731306705000,
            'slugs': [
              {
                'depth': 1,
                'value': 'PasscodeInput ',
                'heading': 'passcodeinput',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'PasscodeInput',
                'heading': 'passcodeinput-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'PasscodeInput ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/passcode-input',
              'title': 'Passcode-input',
            },
          },
          'title': 'PasscodeInput  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/passcode-input',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__passcode-input__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/passcode-input/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/passcode-input/index.zh.md',
            'updatedTime': 1731306705000,
            'slugs': [
              {
                'depth': 1,
                'value': 'PasscodeInput 密码输入框 ',
                'heading': 'passcodeinput-密码输入框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'PasscodeInput',
                'heading': 'passcodeinput',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'PasscodeInput 密码输入框 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/passcode-input',
              'title': 'Passcode-input',
            },
          },
          'title': 'PasscodeInput 密码输入框  - Ant Design Mobile',
        },
        {
          'path': '/components/picker',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__picker__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/picker/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/picker/index.en.md',
            'updatedTime': 1750228620000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Picker',
                'heading': 'picker',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Picker',
                'heading': 'picker-1',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'PickerActions',
                'heading': 'pickeractions',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'CascadePicker',
                'heading': 'cascadepicker',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref-1',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-1',
              },
              {
                'depth': 2,
                'value': 'DatePicker',
                'heading': 'datepicker',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos-2',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-2',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref-2',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-2',
              },
              {
                'depth': 2,
                'value': 'Imperative Call',
                'heading': 'imperative-call',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'How to highlight the selected items?',
                'heading': 'how-to-highlight-the-selected-items',
              },
              {
                'depth': 3,
                'value':
                  'Why is the name of the component called "DatePicker" instead of "DatetimePicker"?',
                'heading':
                  'why-is-the-name-of-the-component-called-datepicker-instead-of-datetimepicker',
              },
              {
                'depth': 3,
                'value': 'Why is there no "hour-minute" or "month-day" option?',
                'heading': 'why-is-there-no-hour-minute-or-month-day-option',
              },
            ],
            'title': 'Picker',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/picker',
              'title': 'Picker',
            },
          },
          'title': 'Picker - Ant Design Mobile',
        },
        {
          'path': '/zh/components/picker',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__picker__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/picker/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/picker/index.zh.md',
            'updatedTime': 1750228620000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Picker 选择器',
                'heading': 'picker-选择器',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': 'Picker',
                'heading': 'picker',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'PickerActions',
                'heading': 'pickeractions',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'CascadePicker',
                'heading': 'cascadepicker',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-1',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref-1',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-1',
              },
              {
                'depth': 2,
                'value': 'DatePicker',
                'heading': 'datepicker',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-2',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-2',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref-2',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-2',
              },
              {
                'depth': 2,
                'value': '指令式调用',
                'heading': '指令式调用',
              },
              {
                'depth': 2,
                'value': '常见问题',
                'heading': '常见问题',
              },
              {
                'depth': 3,
                'value': '如何高亮当前选项',
                'heading': '如何高亮当前选项',
              },
              {
                'depth': 3,
                'value':
                  '为什么组件的名字叫 "DatePicker" 而不是 "DatetimePicker"？',
                'heading':
                  '为什么组件的名字叫-datepicker-而不是-datetimepicker',
              },
              {
                'depth': 3,
                'value': '日期选择器为什么没有 "时-分" 或者 "月-日" 选择？',
                'heading': '日期选择器为什么没有-时-分-或者-月-日-选择',
              },
            ],
            'title': 'Picker 选择器',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/picker',
              'title': 'Picker',
            },
          },
          'title': 'Picker 选择器 - Ant Design Mobile',
        },
        {
          'path': '/components/picker-view',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__picker-view__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/picker-view/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/picker-view/index.en.md',
            'updatedTime': 1720424307000,
            'slugs': [
              {
                'depth': 1,
                'value': 'PickerView',
                'heading': 'pickerview',
              },
              {
                'depth': 2,
                'value': 'PickerView',
                'heading': 'pickerview-1',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'CascadePickerView',
                'heading': 'cascadepickerview',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-1',
              },
              {
                'depth': 2,
                'value': 'DatePickerView',
                'heading': 'datepickerview',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos-2',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-2',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-2',
              },
            ],
            'title': 'PickerView',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/picker-view',
              'title': 'Picker-view',
            },
          },
          'title': 'PickerView - Ant Design Mobile',
        },
        {
          'path': '/zh/components/picker-view',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__picker-view__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/picker-view/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/picker-view/index.zh.md',
            'updatedTime': 1720424307000,
            'slugs': [
              {
                'depth': 1,
                'value': 'PickerView 选择器视图',
                'heading': 'pickerview-选择器视图',
              },
              {
                'depth': 2,
                'value': 'PickerView',
                'heading': 'pickerview',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'CascadePickerView',
                'heading': 'cascadepickerview',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-1',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-1',
              },
              {
                'depth': 2,
                'value': 'DatePickerView',
                'heading': 'datepickerview',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-2',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-2',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-2',
              },
            ],
            'title': 'PickerView 选择器视图',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/picker-view',
              'title': 'Picker-view',
            },
          },
          'title': 'PickerView 选择器视图 - Ant Design Mobile',
        },
        {
          'path': '/components/popover',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__popover__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/popover/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/popover/index.en.md',
            'updatedTime': 1697426805000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Popover',
                'heading': 'popover',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Popover',
                'heading': 'popover-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Popover.Menu',
                'heading': 'popovermenu',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-1',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Why the Popover not show in some cases?',
                'heading': 'why-the-popover-not-show-in-some-cases',
              },
              {
                'depth': 3,
                'value':
                  'What if the warning findDOMNode is deprecated in StrictMode. appears in the browser console?',
                'heading':
                  'what-if-the-warning-finddomnode-is-deprecated-in-strictmode-appears-in-the-browser-console',
              },
            ],
            'title': 'Popover',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/popover',
              'title': 'Popover',
            },
          },
          'title': 'Popover - Ant Design Mobile',
        },
        {
          'path': '/zh/components/popover',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__popover__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/popover/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/popover/index.zh.md',
            'updatedTime': 1697426805000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Popover 气泡弹出框',
                'heading': 'popover-气泡弹出框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Popover',
                'heading': 'popover',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Popover.Menu',
                'heading': 'popovermenu',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-1',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '为什么有些情况下 Popover 不显示？',
                'heading': '为什么有些情况下-popover-不显示',
              },
              {
                'depth': 3,
                'value':
                  '浏览器控制台中出现了 findDOMNode is deprecated in StrictMode. 这样的警告怎么办？',
                'heading':
                  '浏览器控制台中出现了-finddomnode-is-deprecated-in-strictmode-这样的警告怎么办',
              },
            ],
            'title': 'Popover 气泡弹出框',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/popover',
              'title': 'Popover',
            },
          },
          'title': 'Popover 气泡弹出框 - Ant Design Mobile',
        },
        {
          'path': '/components/popup',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__popup__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/popup/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/popup/index.en.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Popup',
                'heading': 'popup',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Popup',
                'heading': 'popup-1',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'CenterPopup',
                'heading': 'centerpopup',
              },
              {
                'depth': 3,
                'value': 'Demos',
                'heading': 'demos-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables-1',
              },
            ],
            'title': 'Popup',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/popup',
              'title': 'Popup',
            },
          },
          'title': 'Popup - Ant Design Mobile',
        },
        {
          'path': '/zh/components/popup',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__popup__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/popup/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/popup/index.zh.md',
            'updatedTime': 1718178184000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Popup 弹出层',
                'heading': 'popup-弹出层',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': 'Popup',
                'heading': 'popup',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'CenterPopup',
                'heading': 'centerpopup',
              },
              {
                'depth': 3,
                'value': '示例',
                'heading': '示例-1',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量-1',
              },
            ],
            'title': 'Popup 弹出层',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/popup',
              'title': 'Popup',
            },
          },
          'title': 'Popup 弹出层 - Ant Design Mobile',
        },
        {
          'path': '/components/progress-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__progress-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/progress-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/progress-bar/index.en.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ProgressBar',
                'heading': 'progressbar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ProgressBar',
                'heading': 'progressbar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'ProgressBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/progress-bar',
              'title': 'Progress-bar',
            },
          },
          'title': 'ProgressBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/progress-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__progress-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/progress-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/progress-bar/index.zh.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ProgressBar 进度条',
                'heading': 'progressbar-进度条',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ProgressBar',
                'heading': 'progressbar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'ProgressBar 进度条',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/progress-bar',
              'title': 'Progress-bar',
            },
          },
          'title': 'ProgressBar 进度条 - Ant Design Mobile',
        },
        {
          'path': '/components/progress-circle',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__progress-circle__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/progress-circle/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/progress-circle/index.en.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ProgressCircle',
                'heading': 'progresscircle',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ProgressCircle',
                'heading': 'progresscircle-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Important reminder about using rem',
                'heading': 'important-reminder-about-using-rem',
              },
            ],
            'title': 'ProgressCircle',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/progress-circle',
              'title': 'Progress-circle',
            },
          },
          'title': 'ProgressCircle - Ant Design Mobile',
        },
        {
          'path': '/zh/components/progress-circle',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__progress-circle__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/progress-circle/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/progress-circle/index.zh.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ProgressCircle 进度圈',
                'heading': 'progresscircle-进度圈',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ProgressCircle',
                'heading': 'progresscircle',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': '常见问题',
                'heading': '常见问题',
              },
              {
                'depth': 3,
                'value': '关于使用 rem 的重要提醒',
                'heading': '关于使用-rem-的重要提醒',
              },
            ],
            'title': 'ProgressCircle 进度圈',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/progress-circle',
              'title': 'Progress-circle',
            },
          },
          'title': 'ProgressCircle 进度圈 - Ant Design Mobile',
        },
        {
          'path': '/components/pull-to-refresh',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__pull-to-refresh__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/pull-to-refresh/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/pull-to-refresh/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'PullToRefresh',
                'heading': 'pulltorefresh',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Basic Usage',
                'heading': 'basic-usage',
              },
              {
                'depth': 3,
                'value': 'Customize Text',
                'heading': 'customize-text',
              },
              {
                'depth': 3,
                'value': 'Handle Refresh Error',
                'heading': 'handle-refresh-error',
              },
              {
                'depth': 3,
                'value': 'Nested Scroll Areas',
                'heading': 'nested-scroll-areas',
              },
              {
                'depth': 2,
                'value': 'PullToRefresh',
                'heading': 'pulltorefresh-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Does it support pull up to load more?',
                'heading': 'does-it-support-pull-up-to-load-more',
              },
              {
                'depth': 3,
                'value': "About the browser's default pull-down behavior",
                'heading': 'about-the-browsers-default-pull-down-behavior',
              },
            ],
            'title': 'PullToRefresh',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/pull-to-refresh',
              'title': 'Pull-to-refresh',
            },
          },
          'title': 'PullToRefresh - Ant Design Mobile',
        },
        {
          'path': '/zh/components/pull-to-refresh',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__pull-to-refresh__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/pull-to-refresh/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/pull-to-refresh/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'PullToRefresh 下拉刷新',
                'heading': 'pulltorefresh-下拉刷新',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '基础用法',
                'heading': '基础用法',
              },
              {
                'depth': 3,
                'value': '自定义提示文案',
                'heading': '自定义提示文案',
              },
              {
                'depth': 3,
                'value': '处理刷新失败的情况',
                'heading': '处理刷新失败的情况',
              },
              {
                'depth': 3,
                'value': '内容区域存在多层嵌套',
                'heading': '内容区域存在多层嵌套',
              },
              {
                'depth': 2,
                'value': 'PullToRefresh',
                'heading': 'pulltorefresh',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': '常见问题',
                'heading': '常见问题',
              },
              {
                'depth': 3,
                'value': '是否支持上拉加载更多？',
                'heading': '是否支持上拉加载更多',
              },
              {
                'depth': 3,
                'value': '关于浏览器的默认下拉行为',
                'heading': '关于浏览器的默认下拉行为',
              },
            ],
            'title': 'PullToRefresh 下拉刷新',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/pull-to-refresh',
              'title': 'Pull-to-refresh',
            },
          },
          'title': 'PullToRefresh 下拉刷新 - Ant Design Mobile',
        },
        {
          'path': '/components/radio',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__radio__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/radio/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/radio/index.en.md',
            'updatedTime': 1688453414000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Radio',
                'heading': 'radio',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Radio',
                'heading': 'radio-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Radio',
                'heading': 'radio-2',
              },
              {
                'depth': 3,
                'value': 'Radio.Group',
                'heading': 'radiogroup',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Radio',
                'heading': 'radio-3',
              },
            ],
            'title': 'Radio',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/radio',
              'title': 'Radio',
            },
          },
          'title': 'Radio - Ant Design Mobile',
        },
        {
          'path': '/zh/components/radio',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__radio__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/radio/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/radio/index.zh.md',
            'updatedTime': 1689155586000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Radio 单选框',
                'heading': 'radio-单选框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Radio',
                'heading': 'radio',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Radio',
                'heading': 'radio-1',
              },
              {
                'depth': 3,
                'value': 'Radio.Group',
                'heading': 'radiogroup',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Radio',
                'heading': 'radio-2',
              },
            ],
            'title': 'Radio 单选框',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/radio',
              'title': 'Radio',
            },
          },
          'title': 'Radio 单选框 - Ant Design Mobile',
        },
        {
          'path': '/components/rate',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__rate__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/rate/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/rate/index.en.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Rate',
                'heading': 'rate',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Rate',
                'heading': 'rate-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Rate',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/rate',
              'title': 'Rate',
            },
          },
          'title': 'Rate - Ant Design Mobile',
        },
        {
          'path': '/zh/components/rate',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__rate__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/rate/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/rate/index.zh.md',
            'updatedTime': 1693968291000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Rate 评分',
                'heading': 'rate-评分',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Rate',
                'heading': 'rate',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Rate 评分',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/rate',
              'title': 'Rate',
            },
          },
          'title': 'Rate 评分 - Ant Design Mobile',
        },
        {
          'path': '/components/result',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__result__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/result/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/result/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Result',
                'heading': 'result',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Result',
                'heading': 'result-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
            ],
            'title': 'Result',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/result',
              'title': 'Result',
            },
          },
          'title': 'Result - Ant Design Mobile',
        },
        {
          'path': '/zh/components/result',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__result__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/result/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/result/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Result 结果',
                'heading': 'result-结果',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Result',
                'heading': 'result',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
            ],
            'title': 'Result 结果',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/result',
              'title': 'Result',
            },
          },
          'title': 'Result 结果 - Ant Design Mobile',
        },
        {
          'path': '/components/result-page',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__result-page__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/result-page/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/result-page/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ResultPage ',
                'heading': 'resultpage',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Basic use',
                'heading': 'basic-use',
              },
              {
                'depth': 3,
                'value': 'Show detailed data',
                'heading': 'show-detailed-data',
              },
              {
                'depth': 3,
                'value': 'Use with Card',
                'heading': 'use-with-card',
              },
              {
                'depth': 3,
                'value': 'Bottom buttons',
                'heading': 'bottom-buttons',
              },
              {
                'depth': 3,
                'value': 'Custom use',
                'heading': 'custom-use',
              },
              {
                'depth': 2,
                'value': 'ResultPage',
                'heading': 'resultpage-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'ResultPage.Card',
                'heading': 'resultpagecard',
              },
            ],
            'title': 'ResultPage ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/result-page',
              'title': 'Result-page',
            },
          },
          'title': 'ResultPage  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/result-page',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__result-page__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/result-page/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/result-page/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ResultPage 结果页面 ',
                'heading': 'resultpage-结果页面',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '基础使用',
                'heading': '基础使用',
              },
              {
                'depth': 3,
                'value': '展示详细数据',
                'heading': '展示详细数据',
              },
              {
                'depth': 3,
                'value': '配合卡片使用',
                'heading': '配合卡片使用',
              },
              {
                'depth': 3,
                'value': '底部按钮',
                'heading': '底部按钮',
              },
              {
                'depth': 3,
                'value': '自定义',
                'heading': '自定义',
              },
              {
                'depth': 2,
                'value': 'ResultPage',
                'heading': 'resultpage',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'ResultPage.Card',
                'heading': 'resultpagecard',
              },
            ],
            'title': 'ResultPage 结果页面 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/result-page',
              'title': 'Result-page',
            },
          },
          'title': 'ResultPage 结果页面  - Ant Design Mobile',
        },
        {
          'path': '/components/safe-area',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__safe-area__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/safe-area/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/safe-area/index.en.md',
            'updatedTime': 1655109331000,
            'componentName': 'safe-area',
            'slugs': [
              {
                'depth': 1,
                'value': 'SafeArea',
                'heading': 'safearea',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Note',
                'heading': 'note',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'SafeArea',
                'heading': 'safearea-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  'In the rem layout, what should I do if the height of the SafeArea is small?',
                'heading':
                  'in-the-rem-layout-what-should-i-do-if-the-height-of-the-safearea-is-small',
              },
            ],
            'title': 'SafeArea',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/safe-area',
              'title': 'Safe-area',
            },
          },
          'title': 'SafeArea - Ant Design Mobile',
        },
        {
          'path': '/zh/components/safe-area',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__safe-area__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/safe-area/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/safe-area/index.zh.md',
            'updatedTime': 1655109331000,
            'componentName': 'safe-area',
            'slugs': [
              {
                'depth': 1,
                'value': 'SafeArea 安全区',
                'heading': 'safearea-安全区',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '说明',
                'heading': '说明',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'SafeArea',
                'heading': 'safearea',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '在 rem 布局下，SafeArea 高度很小怎么办？',
                'heading': '在-rem-布局下safearea-高度很小怎么办',
              },
            ],
            'title': 'SafeArea 安全区',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/safe-area',
              'title': 'Safe-area',
            },
          },
          'title': 'SafeArea 安全区 - Ant Design Mobile',
        },
        {
          'path': '/components/scroll-mask',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__scroll-mask__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/scroll-mask/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/scroll-mask/index.en.md',
            'updatedTime': 1653123553000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ScrollMask',
                'heading': 'scrollmask',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'ScrollMask',
                'heading': 'scrollmask-1',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
            ],
            'title': 'ScrollMask',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/scroll-mask',
              'title': 'Scroll-mask',
            },
          },
          'title': 'ScrollMask - Ant Design Mobile',
        },
        {
          'path': '/zh/components/scroll-mask',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__scroll-mask__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/scroll-mask/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/scroll-mask/index.zh.md',
            'updatedTime': 1653123553000,
            'slugs': [
              {
                'depth': 1,
                'value': 'ScrollMask 滚动两侧遮罩',
                'heading': 'scrollmask-滚动两侧遮罩',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'ScrollMask',
                'heading': 'scrollmask',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
            ],
            'title': 'ScrollMask 滚动两侧遮罩',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/scroll-mask',
              'title': 'Scroll-mask',
            },
          },
          'title': 'ScrollMask 滚动两侧遮罩 - Ant Design Mobile',
        },
        {
          'path': '/components/search-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__search-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/search-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/search-bar/index.en.md',
            'updatedTime': 1723515970000,
            'slugs': [
              {
                'depth': 1,
                'value': 'SearchBar',
                'heading': 'searchbar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'SearchBar',
                'heading': 'searchbar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'The keyboard button does not say Search but Return',
                'heading': 'the-keyboard-button-does-not-say-search-but-return',
              },
            ],
            'title': 'SearchBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/search-bar',
              'title': 'Search-bar',
            },
          },
          'title': 'SearchBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/search-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__search-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/search-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/search-bar/index.zh.md',
            'updatedTime': 1723515970000,
            'slugs': [
              {
                'depth': 1,
                'value': 'SearchBar 搜索框',
                'heading': 'searchbar-搜索框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'SearchBar',
                'heading': 'searchbar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '键盘按钮没有显示"搜索"，而是"返回"',
                'heading': '键盘按钮没有显示搜索而是返回',
              },
            ],
            'title': 'SearchBar 搜索框',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/search-bar',
              'title': 'Search-bar',
            },
          },
          'title': 'SearchBar 搜索框 - Ant Design Mobile',
        },
        {
          'path': '/components/segmented',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__segmented__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/segmented/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/segmented/index.en.md',
            'updatedTime': 1723020659000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Segmented',
                'heading': 'segmented',
              },
              {
                'depth': 2,
                'value': 'When To Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Segmented',
                'heading': 'segmented-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'SegmentedItemType',
                'heading': 'segmenteditemtype',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Segmented',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/segmented',
              'title': 'Segmented',
            },
          },
          'title': 'Segmented - Ant Design Mobile',
        },
        {
          'path': '/zh/components/segmented',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__segmented__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/segmented/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/segmented/index.zh.md',
            'updatedTime': 1723020659000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Segmented 分段控制器',
                'heading': 'segmented-分段控制器',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Segmented',
                'heading': 'segmented',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'SegmentedItemType',
                'heading': 'segmenteditemtype',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Segmented 分段控制器',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/segmented',
              'title': 'Segmented',
            },
          },
          'title': 'Segmented 分段控制器 - Ant Design Mobile',
        },
        {
          'path': '/components/selector',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__selector__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/selector/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/selector/index.en.md',
            'updatedTime': 1697705240000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Selector',
                'heading': 'selector',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Selector',
                'heading': 'selector-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Types',
                'heading': 'types',
              },
              {
                'depth': 3,
                'value': 'SelectorValue',
                'heading': 'selectorvalue',
              },
              {
                'depth': 3,
                'value': 'SelectorOption',
                'heading': 'selectoroption',
              },
              {
                'depth': 2,
                'value': 'Generics',
                'heading': 'generics',
              },
            ],
            'title': 'Selector',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/selector',
              'title': 'Selector',
            },
          },
          'title': 'Selector - Ant Design Mobile',
        },
        {
          'path': '/zh/components/selector',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__selector__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/selector/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/selector/index.zh.md',
            'updatedTime': 1710251080000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Selector 选择组',
                'heading': 'selector-选择组',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Selector',
                'heading': 'selector',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': '类型定义',
                'heading': '类型定义',
              },
              {
                'depth': 3,
                'value': 'SelectorValue',
                'heading': 'selectorvalue',
              },
              {
                'depth': 3,
                'value': 'SelectorOption',
                'heading': 'selectoroption',
              },
              {
                'depth': 2,
                'value': '泛型',
                'heading': '泛型',
              },
            ],
            'title': 'Selector 选择组',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/selector',
              'title': 'Selector',
            },
          },
          'title': 'Selector 选择组 - Ant Design Mobile',
        },
        {
          'path': '/components/side-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__side-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/side-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/side-bar/index.en.md',
            'updatedTime': 1675405634000,
            'slugs': [
              {
                'depth': 1,
                'value': 'SideBar',
                'heading': 'sidebar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'SideBar',
                'heading': 'sidebar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'SideBar.Item',
                'heading': 'sidebaritem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'SideBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/side-bar',
              'title': 'Side-bar',
            },
          },
          'title': 'SideBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/side-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__side-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/side-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/side-bar/index.zh.md',
            'updatedTime': 1675405634000,
            'slugs': [
              {
                'depth': 1,
                'value': 'SideBar 侧边导航',
                'heading': 'sidebar-侧边导航',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'SideBar',
                'heading': 'sidebar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'SideBar.Item',
                'heading': 'sidebaritem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'SideBar 侧边导航',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/side-bar',
              'title': 'Side-bar',
            },
          },
          'title': 'SideBar 侧边导航 - Ant Design Mobile',
        },
        {
          'path': '/components/skeleton/skeleton',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__skeleton__skeleton.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/skeleton/skeleton.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/skeleton/skeleton.en.md',
            'updatedTime': 1653997305000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Skeleton',
                'heading': 'skeleton',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Skeleton',
                'heading': 'skeleton-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Skeleton.Title',
                'heading': 'skeletontitle',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 2,
                'value': 'Skeleton.Paragraph',
                'heading': 'skeletonparagraph',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-2',
              },
            ],
            'title': 'Skeleton',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/skeleton',
              'title': 'Skeleton',
            },
          },
          'title': 'Skeleton - Ant Design Mobile',
        },
        {
          'path': '/zh/components/skeleton/skeleton',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__skeleton__skeleton.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/skeleton/skeleton.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/skeleton/skeleton.zh.md',
            'updatedTime': 1653997305000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Skeleton 骨架屏',
                'heading': 'skeleton-骨架屏',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Skeleton',
                'heading': 'skeleton',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Skeleton.Title',
                'heading': 'skeletontitle',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 2,
                'value': 'Skeleton.Paragraph',
                'heading': 'skeletonparagraph',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-2',
              },
            ],
            'title': 'Skeleton 骨架屏',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/skeleton',
              'title': 'Skeleton',
            },
          },
          'title': 'Skeleton 骨架屏 - Ant Design Mobile',
        },
        {
          'path': '/components/slider',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__slider__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/slider/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/slider/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Slider',
                'heading': 'slider',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Slider',
                'heading': 'slider-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Slider',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/slider',
              'title': 'Slider',
            },
          },
          'title': 'Slider - Ant Design Mobile',
        },
        {
          'path': '/zh/components/slider',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__slider__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/slider/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/slider/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Slider 滑动输入条',
                'heading': 'slider-滑动输入条',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Slider',
                'heading': 'slider',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Slider 滑动输入条',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/slider',
              'title': 'Slider',
            },
          },
          'title': 'Slider 滑动输入条 - Ant Design Mobile',
        },
        {
          'path': '/components/space',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__space__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/space/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/space/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Space',
                'heading': 'space',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Space',
                'heading': 'space-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Space',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/space',
              'title': 'Space',
            },
          },
          'title': 'Space - Ant Design Mobile',
        },
        {
          'path': '/zh/components/space',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__space__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/space/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/space/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Space 间距',
                'heading': 'space-间距',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Space',
                'heading': 'space',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Space 间距',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/space',
              'title': 'Space',
            },
          },
          'title': 'Space 间距 - Ant Design Mobile',
        },
        {
          'path': '/components/stepper',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__stepper__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/stepper/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/stepper/index.en.md',
            'updatedTime': 1688533650000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Stepper',
                'heading': 'stepper',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Stepper',
                'heading': 'stepper-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Stepper',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/stepper',
              'title': 'Stepper',
            },
          },
          'title': 'Stepper - Ant Design Mobile',
        },
        {
          'path': '/zh/components/stepper',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__stepper__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/stepper/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/stepper/index.zh.md',
            'updatedTime': 1688533650000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Stepper 步进器',
                'heading': 'stepper-步进器',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Stepper',
                'heading': 'stepper',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Stepper 步进器',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/stepper',
              'title': 'Stepper',
            },
          },
          'title': 'Stepper 步进器 - Ant Design Mobile',
        },
        {
          'path': '/components/steps',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__steps__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/steps/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/steps/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Steps',
                'heading': 'steps',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Steps',
                'heading': 'steps-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Steps.Step',
                'heading': 'stepsstep',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'Steps',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/steps',
              'title': 'Steps',
            },
          },
          'title': 'Steps - Ant Design Mobile',
        },
        {
          'path': '/zh/components/steps',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__steps__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/steps/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/steps/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Steps 步骤条',
                'heading': 'steps-步骤条',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Steps',
                'heading': 'steps',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Steps.Step',
                'heading': 'stepsstep',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'Steps 步骤条',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/steps',
              'title': 'Steps',
            },
          },
          'title': 'Steps 步骤条 - Ant Design Mobile',
        },
        {
          'path': '/components/swipe-action',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__swipe-action__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/swipe-action/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/swipe-action/index.en.md',
            'updatedTime': 1736233170000,
            'componentName': 'swipe-action',
            'slugs': [
              {
                'depth': 1,
                'value': 'SwipeAction',
                'heading': 'swipeaction',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'SwipeAction',
                'heading': 'swipeaction-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 2,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'SwipeAction',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/swipe-action',
              'title': 'Swipe-action',
            },
          },
          'title': 'SwipeAction - Ant Design Mobile',
        },
        {
          'path': '/zh/components/swipe-action',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__swipe-action__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/swipe-action/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/swipe-action/index.zh.md',
            'updatedTime': 1736233170000,
            'componentName': 'swipe-action',
            'slugs': [
              {
                'depth': 1,
                'value': 'SwipeAction 滑动操作',
                'heading': 'swipeaction-滑动操作',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'SwipeAction',
                'heading': 'swipeaction',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Action',
                'heading': 'action',
              },
              {
                'depth': 2,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'SwipeAction 滑动操作',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/swipe-action',
              'title': 'Swipe-action',
            },
          },
          'title': 'SwipeAction 滑动操作 - Ant Design Mobile',
        },
        {
          'path': '/components/swiper',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__swiper__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/swiper/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/swiper/index.en.md',
            'updatedTime': 1704250751000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Swiper',
                'heading': 'swiper',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 3,
                'value': 'Basic Usage',
                'heading': 'basic-usage',
              },
              {
                'depth': 3,
                'value': 'Slides which are not full-width',
                'heading': 'slides-which-are-not-full-width',
              },
              {
                'depth': 3,
                'value': 'Indicators',
                'heading': 'indicators',
              },
              {
                'depth': 3,
                'value': 'Full Page Guide',
                'heading': 'full-page-guide',
              },
              {
                'depth': 3,
                'value': 'Vertical',
                'heading': 'vertical',
              },
              {
                'depth': 3,
                'value': 'Virtual Scroll',
                'heading': 'virtual-scroll',
              },
              {
                'depth': 2,
                'value': 'Swiper',
                'heading': 'swiper-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Swiper.Item',
                'heading': 'swiperitem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
            ],
            'title': 'Swiper',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/swiper',
              'title': 'Swiper',
            },
          },
          'title': 'Swiper - Ant Design Mobile',
        },
        {
          'path': '/zh/components/swiper',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__swiper__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/swiper/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/swiper/index.zh.md',
            'updatedTime': 1712643902000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Swiper 走马灯',
                'heading': 'swiper-走马灯',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 3,
                'value': '基础用法',
                'heading': '基础用法',
              },
              {
                'depth': 3,
                'value': '不是满宽的滑块',
                'heading': '不是满宽的滑块',
              },
              {
                'depth': 3,
                'value': '指示器',
                'heading': '指示器',
              },
              {
                'depth': 3,
                'value': '全屏引导',
                'heading': '全屏引导',
              },
              {
                'depth': 3,
                'value': '竖向',
                'heading': '竖向',
              },
              {
                'depth': 3,
                'value': '虚拟滚动',
                'heading': '虚拟滚动',
              },
              {
                'depth': 2,
                'value': 'Swiper',
                'heading': 'swiper',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 2,
                'value': 'Swiper.Item',
                'heading': 'swiperitem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
            ],
            'title': 'Swiper 走马灯',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/swiper',
              'title': 'Swiper',
            },
          },
          'title': 'Swiper 走马灯 - Ant Design Mobile',
        },
        {
          'path': '/components/switch',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__switch__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/switch/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/switch/index.en.md',
            'updatedTime': 1688533650000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Switch',
                'heading': 'switch',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Switch',
                'heading': 'switch-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'How to handle exceptions in async onChange?',
                'heading': 'how-to-handle-exceptions-in-async-onchange',
              },
            ],
            'title': 'Switch',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/switch',
              'title': 'Switch',
            },
          },
          'title': 'Switch - Ant Design Mobile',
        },
        {
          'path': '/zh/components/switch',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__switch__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/switch/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/switch/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Switch 开关',
                'heading': 'switch-开关',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Switch',
                'heading': 'switch',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': '如何处理异步 onChange 中的异常？',
                'heading': '如何处理异步-onchange-中的异常',
              },
            ],
            'title': 'Switch 开关',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/switch',
              'title': 'Switch',
            },
          },
          'title': 'Switch 开关 - Ant Design Mobile',
        },
        {
          'path': '/components/tab-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tab-bar__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tab-bar/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tab-bar/index.en.md',
            'updatedTime': 1723818411000,
            'slugs': [
              {
                'depth': 1,
                'value': 'TabBar',
                'heading': 'tabbar',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'TabBar',
                'heading': 'tabbar-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 2,
                'value': 'TabBar.Item',
                'heading': 'tabbaritem',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value':
                  "Why can't the TabBar be fixed at the bottom of the page?",
                'heading':
                  'why-cant-the-tabbar-be-fixed-at-the-bottom-of-the-page',
              },
            ],
            'title': 'TabBar',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/tab-bar',
              'title': 'Tab-bar',
            },
          },
          'title': 'TabBar - Ant Design Mobile',
        },
        {
          'path': '/zh/components/tab-bar',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tab-bar__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tab-bar/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tab-bar/index.zh.md',
            'updatedTime': 1723010932000,
            'slugs': [
              {
                'depth': 1,
                'value': 'TabBar 标签栏',
                'heading': 'tabbar-标签栏',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'TabBar',
                'heading': 'tabbar',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 2,
                'value': 'TabBar.Item',
                'heading': 'tabbaritem',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性-1',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'TabBar 为什么不能固定在页面底部？',
                'heading': 'tabbar-为什么不能固定在页面底部',
              },
            ],
            'title': 'TabBar 标签栏',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/tab-bar',
              'title': 'Tab-bar',
            },
          },
          'title': 'TabBar 标签栏 - Ant Design Mobile',
        },
        {
          'path': '/components/tabs',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tabs__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tabs/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tabs/index.en.md',
            'updatedTime': 1709263348000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Tabs',
                'heading': 'tabs',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Tabs',
                'heading': 'tabs-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 2,
                'value': 'Tabs.Tab',
                'heading': 'tabstab',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Does Tabs support sticky effect?',
                'heading': 'does-tabs-support-sticky-effect',
              },
              {
                'depth': 3,
                'value':
                  'How does Tabs work with Swiper, PullToRefresh, and InfiniteScroll to implement a complex information flow interface?',
                'heading':
                  'how-does-tabs-work-with-swiper-pulltorefresh-and-infinitescroll-to-implement-a-complex-information-flow-interface',
              },
              {
                'depth': 3,
                'value': 'About the type of Tabs.Tab key',
                'heading': 'about-the-type-of-tabstab-key',
              },
            ],
            'title': 'Tabs',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/tabs',
              'title': 'Tabs',
            },
          },
          'title': 'Tabs - Ant Design Mobile',
        },
        {
          'path': '/zh/components/tabs',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tabs__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tabs/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tabs/index.zh.md',
            'updatedTime': 1692770370000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Tabs 标签页',
                'heading': 'tabs-标签页',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Tabs',
                'heading': 'tabs',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 2,
                'value': 'Tabs.Tab',
                'heading': 'tabstab',
              },
              {
                'depth': 2,
                'value': 'FAQ',
                'heading': 'faq',
              },
              {
                'depth': 3,
                'value': 'Tabs 是否支持 sticky 吸顶效果？',
                'heading': 'tabs-是否支持-sticky-吸顶效果',
              },
              {
                'depth': 3,
                'value':
                  'Tabs 怎么配合 Swiper、PullToRefresh、InfiniteScroll 实现一个复杂的信息流界面？',
                'heading':
                  'tabs-怎么配合-swiperpulltorefreshinfinitescroll-实现一个复杂的信息流界面',
              },
              {
                'depth': 3,
                'value': 'Tabs.Tab 关于 key 的类型问题',
                'heading': 'tabstab-关于-key-的类型问题',
              },
            ],
            'title': 'Tabs 标签页',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/tabs',
              'title': 'Tabs',
            },
          },
          'title': 'Tabs 标签页 - Ant Design Mobile',
        },
        {
          'path': '/components/tag',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tag__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tag/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tag/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Tag',
                'heading': 'tag',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Tag',
                'heading': 'tag-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'Tag',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/tag',
              'title': 'Tag',
            },
          },
          'title': 'Tag - Ant Design Mobile',
        },
        {
          'path': '/zh/components/tag',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tag__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tag/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tag/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Tag 标签',
                'heading': 'tag-标签',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Tag',
                'heading': 'tag',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'Tag 标签',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/tag',
              'title': 'Tag',
            },
          },
          'title': 'Tag 标签 - Ant Design Mobile',
        },
        {
          'path': '/components/text-area',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__text-area__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/text-area/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/text-area/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'TextArea',
                'heading': 'textarea',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'TextArea',
                'heading': 'textarea-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'TextArea',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/text-area',
              'title': 'Text-area',
            },
          },
          'title': 'TextArea - Ant Design Mobile',
        },
        {
          'path': '/zh/components/text-area',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__text-area__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/text-area/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/text-area/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'TextArea 文本域',
                'heading': 'textarea-文本域',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'TextArea',
                'heading': 'textarea',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
            ],
            'title': 'TextArea 文本域',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/text-area',
              'title': 'Text-area',
            },
          },
          'title': 'TextArea 文本域 - Ant Design Mobile',
        },
        {
          'path': '/components/toast',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__toast__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/toast/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/toast/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Toast',
                'heading': 'toast',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'Toast',
                'heading': 'toast-1',
              },
              {
                'depth': 3,
                'value': 'Imperative API',
                'heading': 'imperative-api',
              },
              {
                'depth': 3,
                'value': 'Toast.show',
                'heading': 'toastshow',
              },
              {
                'depth': 3,
                'value': 'Toast.clear',
                'heading': 'toastclear',
              },
              {
                'depth': 3,
                'value': 'Toast.config',
                'heading': 'toastconfig',
              },
            ],
            'title': 'Toast',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/toast',
              'title': 'Toast',
            },
          },
          'title': 'Toast - Ant Design Mobile',
        },
        {
          'path': '/zh/components/toast',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__toast__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/toast/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/toast/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'Toast 轻提示',
                'heading': 'toast-轻提示',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'Toast',
                'heading': 'toast',
              },
              {
                'depth': 3,
                'value': '指令式 API',
                'heading': '指令式-api',
              },
              {
                'depth': 3,
                'value': 'Toast.show',
                'heading': 'toastshow',
              },
              {
                'depth': 3,
                'value': 'Toast.clear',
                'heading': 'toastclear',
              },
              {
                'depth': 3,
                'value': 'Toast.config',
                'heading': 'toastconfig',
              },
            ],
            'title': 'Toast 轻提示',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/toast',
              'title': 'Toast',
            },
          },
          'title': 'Toast 轻提示 - Ant Design Mobile',
        },
        {
          'path': '/components/tree-select',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tree-select__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tree-select/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tree-select/index.en.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'TreeSelect ',
                'heading': 'treeselect',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'TreeSelect',
                'heading': 'treeselect-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'TreeSelect',
                'heading': 'treeselect-2',
              },
            ],
            'title': 'TreeSelect ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/tree-select',
              'title': 'Tree-select',
            },
          },
          'title': 'TreeSelect  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/tree-select',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__tree-select__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/tree-select/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/tree-select/index.zh.md',
            'updatedTime': 1670498529000,
            'slugs': [
              {
                'depth': 1,
                'value': 'TreeSelect 级联选择器 ',
                'heading': 'treeselect-级联选择器',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'TreeSelect',
                'heading': 'treeselect',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'TreeSelect',
                'heading': 'treeselect-1',
              },
            ],
            'title': 'TreeSelect 级联选择器 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/tree-select',
              'title': 'Tree-select',
            },
          },
          'title': 'TreeSelect 级联选择器  - Ant Design Mobile',
        },
        {
          'path': '/components/virtual-input',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__virtual-input__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/virtual-input/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/virtual-input/index.en.md',
            'updatedTime': 1677572423000,
            'componentName': 'virtual-input',
            'slugs': [
              {
                'depth': 1,
                'value': 'VirtualInput ',
                'heading': 'virtualinput',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'VirtualInput',
                'heading': 'virtualinput-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'VirtualInput ',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/virtual-input',
              'title': 'Virtual-input',
            },
          },
          'title': 'VirtualInput  - Ant Design Mobile',
        },
        {
          'path': '/zh/components/virtual-input',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__virtual-input__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/virtual-input/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/virtual-input/index.zh.md',
            'updatedTime': 1677572423000,
            'componentName': 'virtual-input',
            'slugs': [
              {
                'depth': 1,
                'value': 'VirtualInput 虚拟输入框 ',
                'heading': 'virtualinput-虚拟输入框',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'VirtualInput',
                'heading': 'virtualinput',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'Ref',
                'heading': 'ref',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'VirtualInput 虚拟输入框 ',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/virtual-input',
              'title': 'Virtual-input',
            },
          },
          'title': 'VirtualInput 虚拟输入框  - Ant Design Mobile',
        },
        {
          'path': '/components/water-mark',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__water-mark__index.en.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/water-mark/index.en.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/water-mark/index.en.md',
            'updatedTime': 1677637955000,
            'slugs': [
              {
                'depth': 1,
                'value': 'WaterMark',
                'heading': 'watermark',
              },
              {
                'depth': 2,
                'value': 'When to Use',
                'heading': 'when-to-use',
              },
              {
                'depth': 2,
                'value': 'Demos',
                'heading': 'demos',
              },
              {
                'depth': 2,
                'value': 'WaterMark',
                'heading': 'watermark-1',
              },
              {
                'depth': 3,
                'value': 'Props',
                'heading': 'props',
              },
              {
                'depth': 3,
                'value': 'CSS Variables',
                'heading': 'css-variables',
              },
            ],
            'title': 'WaterMark',
            'hasPreviewer': true,
            'locale': 'en',
            'nav': {
              'path': '/components',
              'title': 'Components',
            },
            'group': {
              'path': '/components/water-mark',
              'title': 'Water-mark',
            },
          },
          'title': 'WaterMark - Ant Design Mobile',
        },
        {
          'path': '/zh/components/water-mark',
          'component': dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'components__water-mark__index.zh.md' */ '/Users/jilin/projects/antd/antd-mobile/src/components/water-mark/index.zh.md'
              ),
          }),
          'exact': true,
          'meta': {
            'filePath': 'src/components/water-mark/index.zh.md',
            'updatedTime': 1677637955000,
            'slugs': [
              {
                'depth': 1,
                'value': 'WaterMark 水印',
                'heading': 'watermark-水印',
              },
              {
                'depth': 2,
                'value': '何时使用',
                'heading': '何时使用',
              },
              {
                'depth': 2,
                'value': '示例',
                'heading': '示例',
              },
              {
                'depth': 2,
                'value': 'WaterMark',
                'heading': 'watermark',
              },
              {
                'depth': 3,
                'value': '属性',
                'heading': '属性',
              },
              {
                'depth': 3,
                'value': 'CSS 变量',
                'heading': 'css-变量',
              },
            ],
            'title': 'WaterMark 水印',
            'hasPreviewer': true,
            'locale': 'zh',
            'nav': {
              'path': '/zh/components',
              'title': 'Components',
            },
            'group': {
              'path': '/zh/components/water-mark',
              'title': 'Water-mark',
            },
          },
          'title': 'WaterMark 水印 - Ant Design Mobile',
        },
        {
          'path': '/components',
          'meta': {},
          'exact': true,
          'redirect': '/components/button',
        },
        {
          'path': '/zh/components',
          'meta': {},
          'exact': true,
          'redirect': '/zh/components/button',
        },
        {
          'path': '/guide',
          'meta': {},
          'exact': true,
          'redirect': '/guide/quick-start',
        },
        {
          'path': '/zh/guide',
          'meta': {},
          'exact': true,
          'redirect': '/zh/guide/quick-start',
        },
        {
          'path': '/components/calendar',
          'meta': {},
          'exact': true,
          'redirect': '/components/calendar/calendar',
        },
        {
          'path': '/zh/components/calendar',
          'meta': {},
          'exact': true,
          'redirect': '/zh/components/calendar/calendar',
        },
        {
          'path': '/components/calendar-picker',
          'meta': {},
          'exact': true,
          'redirect': '/components/calendar-picker/calendar-picker',
        },
        {
          'path': '/zh/components/calendar-picker',
          'meta': {},
          'exact': true,
          'redirect': '/zh/components/calendar-picker/calendar-picker',
        },
        {
          'path': '/components/calendar-picker-view',
          'meta': {},
          'exact': true,
          'redirect': '/components/calendar-picker-view/calendar-picker-view',
        },
        {
          'path': '/zh/components/calendar-picker-view',
          'meta': {},
          'exact': true,
          'redirect':
            '/zh/components/calendar-picker-view/calendar-picker-view',
        },
        {
          'path': '/components/skeleton',
          'meta': {},
          'exact': true,
          'redirect': '/components/skeleton/skeleton',
        },
        {
          'path': '/zh/components/skeleton',
          'meta': {},
          'exact': true,
          'redirect': '/zh/components/skeleton/skeleton',
        },
      ],
      'title': 'Ant Design Mobile',
      'component': props => props.children,
    },
  ]

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  })

  return routes
}
