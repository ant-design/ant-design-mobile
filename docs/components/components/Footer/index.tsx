import React from 'react'
import {
  AntDesignOutlined,
  MediumOutlined,
  TwitterOutlined,
  ZhihuOutlined,
  GithubOutlined,
  BugOutlined,
  IssuesCloseOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import styles from './index.local.less'
import { useTrans } from '../../../hooks/useTrans'

const getFooterData = (en: boolean) => [
  {
    title: en ? 'Resource' : '相关资源',
    items: [
      {
        title: 'Ant Design Charts',
        url: 'https://charts.ant.design',
      },
      {
        title: 'Ant Design Pro',
        url: 'https://pro.ant.design',
      },
      {
        title: 'Ant Design Pro Components',
        url: 'https://procomponents.ant.design',
      },
      {
        title: 'Ant Design Mini',
        url: 'https://mini.ant.design',
      },
      {
        title: 'Ant Design Landing',
        description: !en && '首页模板集',
        url: 'https://landing.ant.design',
      },
      {
        title: 'Scaffolds',
        description: !en && '脚手架市场',
        url: 'https://scaffold.ant.design',
      },
      {
        title: 'Umi',
        description: en ? 'React app framework' : 'react 应用开发框架',
        url: 'https://umijs.org',
      },
      {
        title: 'Dumi',
        description: en
          ? 'Component/Document development tool'
          : '组件/文档研发工具',
        url: 'https://d.umijs.org',
      },
      {
        title: 'qiankun',
        description: en ? 'Micro app framework' : '微前端框架',
        url: 'https://qiankun.umijs.org',
      },
      {
        title: 'ahooks',
        description: en ? 'React Hooks lib' : 'React Hooks 库',
        url: 'https://github.com/alibaba/hooks',
      },
      {
        title: 'Ant Motion',
        description: en ? 'Motion Design' : '设计动效',
        url: 'https://motion.ant.design',
      },
    ],
  },
  {
    title: en ? 'Social' : '社区',
    items: [
      {
        icon: <AntDesignOutlined />,
        title: 'Awesome Ant Design',
        url: 'https://github.com/websemantics/awesome-ant-design',
      },
      {
        icon: <MediumOutlined />,
        title: 'Medium',
        url: 'http://medium.com/ant-design/',
      },
      {
        icon: <TwitterOutlined style={{ color: '#1DA1F2' }} />,
        title: 'Twitter',
        url: 'http://twitter.com/antdesignui',
      },
      !en && {
        icon: <ZhihuOutlined style={{ color: '#0084ff' }} />,
        title: '体验科技专栏',
        url: 'http://zhuanlan.zhihu.com/xtech',
      },
    ],
  },
  {
    title: en ? 'Help' : '帮助',
    items: [
      {
        icon: <GithubOutlined />,
        title: 'GitHub',
        url: 'https://github.com/ant-design/ant-design-mobile',
      },
      {
        icon: <BugOutlined />,
        title: en ? 'Report Bug' : '报告 Bug',
        url: 'https://github.com/ant-design/ant-design-mobile/issues',
      },
      {
        icon: <IssuesCloseOutlined />,
        title: en ? 'Issues' : '讨论列表',
        url: 'https://github.com/ant-design/ant-design-mobile/issues',
      },
      {
        icon: <QuestionCircleOutlined />,
        title: en ? 'Discussion' : '讨论',
        url: 'https://github.com/ant-design/ant-design-mobile/discussions',
      },
    ],
  },
  {
    title: en ? 'More' : '更多产品',
    items: [
      {
        icon: (
          <img
            src='https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
            alt='yuque'
            className={styles.columnItemCustomIcon}
          />
        ),
        title: en ? 'Lark' : '语雀',
        url: 'https://yuque.com',
        description: en
          ? 'Professional cloud knowledge base'
          : '专业的云端知识库',
      },
      {
        icon: (
          <img
            src='https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png'
            alt='AntV'
            className={styles.columnItemCustomIcon}
          />
        ),
        title: 'AntV',
        url: 'https://antv.vision',
        description: en ? 'Data Visualization Solutions' : '数据可视化解决方案',
      },
      {
        icon: (
          <img
            src='https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png'
            alt='Egg'
            className={styles.columnItemCustomIcon}
          />
        ),
        title: 'Egg',
        url: 'https://eggjs.org',
        description: en
          ? 'Enterprise Node.js framework'
          : '企业级 Node.js 框架',
      },
      {
        icon: (
          <img
            src='https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico'
            alt='kitchen'
            className={styles.columnItemCustomIcon}
          />
        ),
        title: 'Kitchen',
        description: en ? 'Sketch plugin' : 'Sketch 工具集',
        url: 'https://kitchen.alipay.com',
      },
      {
        icon: (
          <img
            src='https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg'
            alt='xtech'
            className={styles.columnItemCustomIcon}
          />
        ),
        title: en ? 'Ant Experience Technology' : '蚂蚁体验科技',
        url: 'https://xtech.antfin.com/',
      },
    ],
  },
]

export default () => {
  const trans = useTrans()

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBody}>
        {getFooterData(trans.en).map((column, index) => (
          <div className={styles.column} key={column.title}>
            <div className={styles.columnTile}>{column.title}</div>
            <div>
              {column.items.map(
                columnItem =>
                  columnItem && (
                    <div className={styles.columnItem} key={columnItem.title}>
                      <a
                        className={styles.columnItemUrl}
                        href={columnItem.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <span className={styles.columnItemIcon}>
                          {columnItem.icon}
                        </span>
                        {columnItem.title}
                      </a>
                      <span className={styles.columnItemDescription}>
                        {columnItem.description
                          ? ' - ' + columnItem.description
                          : ''}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.copyright}>
        © 2024 Made with ❤ by
        <a
          className={styles.copyrightLink}
          href='https://xtech.antfin.com'
          target='_blank'
        >
          XTech
        </a>
      </div>
    </div>
  )
}
