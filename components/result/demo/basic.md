---
order: 0
title: 示例
---

````jsx
import { Result, Icon } from 'antd-mobile';

const ResultExample = () => (<div>
  <p style={{ margin: 10, color: '#999' }}>支付成功</p>
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png"
    title="支付成功"
    message={<div><div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>998.00</div><del>1098元</del></div>}
  />

  <p style={{ margin: 10, color: '#999' }}>验证成功</p>
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png"
    title="验证成功"
    message="所提交内容已成功完成验证"
  />

  <p style={{ margin: 10, color: '#999' }}>支付失败</p>
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png"
    title="支付失败"
    message="所选银行卡余额不足"
  />

  <p style={{ margin: 10, color: '#999' }}>等待处理</p>
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png"
    title="等待处理"
    message="已提交申请，等待银行处理"
  />

  <p style={{ margin: 10, color: '#999' }}>操作失败</p>
  <Result
    imgUrl="https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png"
    title="无法完成操作"
    message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
  />

  <p style={{ margin: 10, color: '#999' }}>Fail</p>
  <Result
    img={<Icon type="ellipsis" style={{ verticalAlign: 'middle' }} />}
    title="Fail"
    message="不知道发生什么了.........."
  />
</div>);

ReactDOM.render(<ResultExample />, mountNode);
````
