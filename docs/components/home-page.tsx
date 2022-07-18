import React, { useContext } from 'react'
import styles from './home-page.less'
import { context } from 'dumi/theme'

const codesandboxLink =
  'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json'

export default () => {
  const { locale } = useContext(context)

  function trans<T>(en: T, zh: T) {
    return locale === 'zh' ? zh : en
  }

  const characteristics = [
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/dd5520d8-44b4-43a6-88ee-c970e3757d39.svg',
      title: trans('Fast', '高性能'),
      txt: trans(
        'No configuration required for optimal package size and performance.',
        '无需配置，即可拥有最佳的包体积大小和最优的性能'
      ),
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/33cb2ea7-3025-439a-9ce1-212aae26b1cc.svg',
      title: trans('Customizable', '可定制'),
      txt: trans(
        'Based on CSS variables, you can flexibly adjust the appearance of components or freely create your own themes.',
        '基于 CSS 变量，可以灵活地调整组件外观或自由创造自己的主题'
      ),
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/7329c998-6dfd-4764-865a-1839dbcc5653.svg',
      title: trans('Atomic', '原子化'),
      txt: trans(
        'The functionality provided by each component is just right for the business needs.',
        '每个组件提供的功能，恰到好处地满足业务所需'
      ),
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/0c1d3f71-9b1a-43df-84a8-8eed55700d65.svg',
      title: trans('Fluent', '流畅'),
      txt: trans(
        'With smooth gesture interaction and detailed animation, it helps to create the ultimate experience.',
        '拥有流畅的手势交互和细致的动画展示，助力打造极致体验'
      ),
    },
  ]
  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Ant Design Mobile</h1>
            <p className={styles.description}>
              {trans(
                'Explore the limits of mobile web experience',
                '探索移动端 Web 的体验极限'
              )}
            </p>
            <p className={styles.buttons}>
              <a href={trans('/guide/quick-start', '/zh/guide/quick-start')}>
                {trans('Get Started', '开始使用')}
              </a>
              <a href={trans('/components', '/zh/components')}>
                {trans('Components', '组件列表')}
              </a>
            </p>
          </div>
          <img
            className={styles.headerImage}
            alt='header-image'
            src='https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*72wxQ7yN4tEAAAAAAAAAAAAAARQnAQ'
          />
        </div>
        {/* 功能特性 */}
        <div className={styles.group}>
          <p className={styles.groupTitle}>{trans('Features', '功能特性')}</p>
          <ul className={styles.features}>
            {characteristics.map(item => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 74, height: 84 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              )
            })}
          </ul>
        </div>
        {/* 开发资源 */}
        <div className={styles.group}>
          <p className={styles.groupTitle}>{trans('Resources', '开发资源')}</p>
          <div className={styles.resourcesCardList}>
            <div className={styles.resourcesCard}>
              <p className={styles.development_con_title}>
                <span>{trans('Online Experience', '在线体验')}</span>
                <a href={codesandboxLink} target='_blank'>
                  {trans('Go', '开始体验')} &gt;
                </a>
              </p>
              <p>
                {trans(
                  'Experience online on Codesandbox without installing and configuring the environment.',
                  '在 Codesandbox 上在线体验，无需安装和配置环境'
                )}
              </p>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/b81e0f80-b78b-4a14-95f9-d5b20c648248.svg'
                alt=''
              />
              <div className={styles.development_pos}></div>
            </div>

            <div className={styles.resourcesCard}>
              <p className={styles.development_con_title}>
                <span>{trans('All Components', '组件列表')}</span>
                <a href={trans('/components/button', '/zh/components/button')}>
                  {trans('View All', '查看全部')} &gt;
                </a>
              </p>
              <p>
                {trans(
                  'Based on many business practices of Ant Group, abstractly build a mobile asset library.',
                  '基于蚂蚁集团的众多业务实践，抽象构建出移动端资产库'
                )}
              </p>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/59081d14-3243-4503-ac50-d566dea369dd.svg'
                alt=''
              />
              <div
                className={styles.development_pos}
                style={{
                  backgroundImage:
                    'linear-gradient(28deg, rgba(241,251,255,0.00) 44%, #DFF6FF 100%)',
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* 新手指引 */}
        <div className={styles.group}>
          <p className={styles.groupTitle}>{trans('Guidance', '新手指引')}</p>
          <div className={styles.guidance}>
            <div className={styles.guidanceCard}>
              <div>
                <p>{trans('Quick Start', '快速上手')}</p>
                <p>
                  {trans(
                    'Two easy steps, quick installation and introduction of components, antd-mobile automatically loads css style files.',
                    '轻松两步，快速实现安装和引入组件，Ant Design Mobile 自动加载 CSS 样式文件'
                  )}
                </p>
                <a href={trans('/guide/quick-start', '/zh/guide/quick-start')}>
                  {trans('Detail', '查看详情')} &gt;
                </a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/541d8987-2040-40d9-a36c-9f37a2bed91e.svg'
                alt=''
              />
            </div>
            <div className={styles.guidanceCard}>
              <div>
                <p>{trans('FAQ', '常见问题')}</p>
                <p>
                  {trans(
                    'We have sorted out some common problems for you. If you have any questions, please check it out first.',
                    '我们为你整理了一些常见的问题，遇到疑问不妨先来查阅一下'
                  )}
                </p>
                <a href={trans('/guide/faq', '/zh/guide/faq')}>FAQ &gt;</a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/0e5fba68-b7d4-4170-9fe2-3b0c2ba6350a.svg'
                alt=''
              />
            </div>
          </div>
        </div>
        {/* 谁在使用 */}
        <div className={styles.group}>
          <p className={styles.groupTitle}>
            {trans('Who is Using', '谁在使用')}
          </p>
          <ul className={styles.using}>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/feb60d13-3a19-4c7c-b2bd-d61cafa2edd0.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/f4d20a96-6898-4b09-ad23-9cfd66c625ad.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/0c0921d7-89fd-4e10-a5bf-b97e617b6ab9.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/6222405c-7c67-4ec3-b706-4d06c123643f.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/fd297ea4-9c2c-4740-9d67-f5ab1002b4d6.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/2a5ce8fc-bcae-43c5-b297-708dad8eb9c5.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/5feb260f-c94c-441b-9bfe-feaec2b27050.svg'
                alt=''
              />
            </li>
            <li>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/58f38529-43b2-4b0e-aa98-0e75b9f523bb.svg'
                alt=''
              />
            </li>
          </ul>
        </div>
      </div>
      {/* 底部导航 */}
      <div className={styles.footer}>
        <div className={styles.columns}>
          {footerGroups.map(group => (
            <ul key={group.title}>
              <li>{group.title}</li>
              {group.items.map(item => (
                <li key={item.title}>
                  <a href={item.link} target='_blank'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          <ul>
            <li>钉钉交流反馈群</li>
            <li>
              <img
                src='https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*hBjlR4nUWjkAAAAAAAAAAAAAARQnAQ'
                alt='ding-group'
                width={240}
              />
            </li>
          </ul>
        </div>

        <div className={styles.copyright}>
          Open-source MIT Licensed
          {' | '}
          Copyright © 2016-present Alipay.com
          {' | '}
          Powered by{' '}
          <a href='http://d.umijs.org' target='_blank'>
            dumi
          </a>
        </div>
      </div>
    </div>
  )
}

// TODO: add i18n for footer

const footerGroups = [
  {
    title: 'Ant Design Mobile',
    items: [
      {
        title: 'GitHub',
        link: 'https://github.com/ant-design/ant-design-mobile',
      },
      {
        title: '发布日志',
        link: 'https://github.com/ant-design/ant-design-mobile/releases',
      },
      {
        title: 'Roadmap',
        link: 'https://github.com/ant-design/ant-design-mobile/discussions/3924',
      },
      {
        title: '参与贡献',
        link: 'https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md',
      },
      {
        title: '提问与反馈',
        link: 'https://github.com/ant-design/ant-design-mobile/issues/new/choose',
      },
      {
        title: '博客',
        link: 'https://www.yuque.com/awmleer/rocket',
      },
    ],
  },
  {
    title: 'Ant Design',
    items: [
      { title: 'Ant Design - 桌面端组件库', link: 'https://ant.design' },
      {
        title: 'Ant Design Pro - 中台解决方案',
        link: 'https://pro.ant.design',
      },
      { title: 'Ant Motion - 设计动效', link: 'https://motion.ant.design' },
      { title: 'Ant Design Charts', link: 'https://charts.ant.design/' },
    ],
  },
  {
    title: '更多产品',
    items: [
      {
        title: 'ahooks - React Hooks 库',
        link: 'https://github.com/alibaba/hooks',
      },
      { title: 'Dumi - 组件/文档研发工具', link: 'https://d.umijs.org' },
      { title: 'Kitchen - Sketch 工具集', link: 'https://kitchen.alipay.com' },
      { title: 'AntV - 蚂蚁数据可视化方案', link: 'https://antv.vision' },
      { title: 'Egg - 企业级 Node Web 开发框架', link: 'https://eggjs.org' },
    ],
  },
]
