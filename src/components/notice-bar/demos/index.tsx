import React, {useState} from 'react'
import {NoticeBar, Button} from 'antd-mobile'
import 'antd-mobile/lib/index.less'
import './index.less'
import {AimOutlined, CloseCircleOutlined} from '@ant-design/icons'

export default () => {
  const [visible, setVisible] = useState([true, true, true, true])
  const close = (index: number) =>
    setVisible(v => {
      const temp = [...v]
      temp[index] = false
      return temp
    })

  return (
    <div className='container'>
      {visible[0] && (
        <>
          <NoticeBar content='短公告' />
          <br />
        </>
      )}
      {visible[1] && (
        <>
          <NoticeBar
            closeable
            icon={null}
            onClose={() => close(1)}
            content={'无图标公告，如果超长则默认在 2 秒后开始滚动。'}
            type='error'
          />
          <br />
        </>
      )}
      {visible[2] && (
        <>
          <NoticeBar
            extra={<CloseCircleOutlined onClick={() => close(2)} />}
            icon={<AimOutlined />}
            onClose={() => close(2)}
            content={'自定义图标'}
          />
          <br />
        </>
      )}
      {visible[3] && (
        <>
          <NoticeBar
            extra={
              <>
                <a
                  href='https://taobao.com'
                  target='_blank'
                  rel='noreferrer'
                  style={{marginRight: 8}}
                >
                  查看详情
                </a>
                <span onClick={() => close(3)}>关闭</span>
              </>
            }
            content={'将 delay 设置为 0，可以在组件渲染后立即开始滚动'}
            delay={0}
            type='info'
          />
          <br />
        </>
      )}
      <Button block onClick={() => setVisible([true, true, true, true])}>
        恢复显示全部
      </Button>
    </div>
  )
}
