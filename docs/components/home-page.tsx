import React from 'react'
import styles from './hone-page.less'

export default () => {
  const characteristics = [
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/dd5520d8-44b4-43a6-88ee-c970e3757d39.svg',
      title: '高性能',
      txt: '为严苛场景精心优化，无需配置，即可拥有最佳的包体积大小和极致的性能。',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/33cb2ea7-3025-439a-9ce1-212aae26b1cc.svg',
      title: '可定制',
      txt: '基于 CSS 变量，你可以可靠且高效地对组件外观进行调整，或是创造出自己的主题。',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/7329c998-6dfd-4764-865a-1839dbcc5653.svg',
      title: '原子化',
      txt: '每个组件的功能，不多也不少，恰好就是你所需。',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/0c1d3f71-9b1a-43df-84a8-8eed55700d65.svg',
      title: '流畅',
      txt: '拥有流畅的手势和细腻的动画，助力产品打造出极致体验。',
    },
  ]
  return (
    <div className={styles.home_page}>
      {/* 内容部分 */}
      <div className={styles.honepage_index}>
        {/* 开始使用 */}
        <div className={styles.start_using}>
          <div className={styles.startusing_con}>
            <p className={styles.antmobile_style}>Ant Design Mobile v5.0发布</p>
            <p className={styles.startusing_style}>
              一个基于 Preact / React / React Native 的 UI 组件库
            </p>
            <p className={styles.button_style}>
              <button>开始使用</button>
              <button>在线体验</button>
            </p>
          </div>
        </div>
        {/* 功能特性 */}
        <div className={styles.characteristics}>
          <p className={styles.homepage_title}>功能特性</p>
          <ul>
            {characteristics.map(item => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              )
            })}
          </ul>
        </div>
        {/*  开发资源 */}
        <div className={styles.development}>
          <p className={styles.homepage_title}>开发资源</p>
          <div className={styles.development_li}>
            <div className={styles.development_con}>
              <p className={styles.development_con_title}>
                <span>在线体验</span>
                <a href='#'>开始体验 &gt;</a>
              </p>
              <p>你可以直接在 Codesandbox 上在线体验，无需安装和配置环境。</p>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/b81e0f80-b78b-4a14-95f9-d5b20c648248.svg'
                alt=''
              />
              <div className={styles.development_pos}></div>
            </div>

            <div
              className={styles.development_con}
              style={{
                backgroundColor: 'rgba(223,246,255,0.3)',
                background: 'rgba(223,246,255,0.3)',
              }}
            >
              <p className={styles.development_con_title}>
                <span>组件列表</span>
                <a href='#'>查看全部 &gt;</a>
              </p>
              <p>以支付宝移动设计为设计基础，在视觉上紧跟设计规范。</p>
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
        <div className={styles.novice_guidance}>
          <p className={styles.homepage_title}>新手指引</p>
          <div>
            <div className={styles.novice_guidance_con}>
              <div>
                <p>快速上手</p>
                <p>
                  轻松两步，快速实现安装和引入组件，antd-mobile 自动为你加载 css
                  样式文件。
                </p>
                <a href='#'>查看详情 &gt;</a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/541d8987-2040-40d9-a36c-9f37a2bed91e.svg'
                alt=''
              />
            </div>
            <div className={styles.novice_guidance_con}>
              <div>
                <p>常见问题</p>
                <p>我们为你整理了一些常见的问题，遇到疑问不妨先来查阅一下。</p>
                <a href='#'>FAQ &gt;</a>
              </div>
              <img
                src='https://gw.alipayobjects.com/zos/bmw-prod/0e5fba68-b7d4-4170-9fe2-3b0c2ba6350a.svg'
                alt=''
              />
            </div>
          </div>
        </div>
        {/* 谁在使用 */}
        <div className={styles.whouse}>
          <p className={styles.homepage_title}>谁在使用</p>
          <ul>
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
      <div className={styles.btmmenue}>
        <div className={styles.menue}>
          <ul>
            <li>帮助</li>
            <li>
              <a href='#'>发布日志</a>
            </li>
            <li>
              <a href='#'>Roadmap</a>
            </li>
            <li>
              <a href='#'>参与贡献</a>
            </li>
            <li>
              <a href='#'>GitHub</a>
            </li>
            <li>
              <a href='#'>提问与反馈</a>
            </li>
          </ul>

          <ul>
            <li>Ant Design</li>
            <li>
              <a href='#'>Ant Design</a>
            </li>
            <li>
              <a href='#'>Ant Design Mobile</a>
            </li>
            <li>
              <a href='#'>Ant Design Pro - 中台解决方案</a>
            </li>
            <li>
              <a href='#'>Ant Motiion - 设计动效</a>
            </li>
            <li>
              <a href='#'>Ant UX - 页面逻辑素材</a>
            </li>
          </ul>

          <ul>
            <li>更多产品</li>
            <li>
              <a href='#'>Ant Design - 蚂蚁 UI 设计体系</a>
            </li>
            <li>
              <a href='#'>AntV - 蚂蚁数据可视化方案</a>
            </li>
            <li>
              <a href='#'>Egg - 企业级 Node Web 开发框架</a>
            </li>
          </ul>

          <ul>
            <li>钉钉交流反馈群</li>
            <li>
              <img
                src='https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*8G6wSrrp1DoAAAAAAAAAAAAAARQnAQ'
                alt=''
              />
            </li>
          </ul>
        </div>

        <div className={styles.btm_foot}>
          <p>
            Open-source MIT Licensed &nbsp;&nbsp;|&nbsp;&nbsp; Copyright ©
            2016-present &nbsp;Alipay.com &nbsp;Powered by&nbsp;{' '}
            <a href=''>dumi</a>
          </p>
        </div>
      </div>
    </div>
  )
}
