---
order: 0
title: 示例
---

````__react
/* eslint global-require: 0 */
import { Result, Icon } from 'antd-mobile';

const ResultExample = () => (<div className="result-example">
  <p style={{ margin: 10, color: '#999' }}>支付成功</p>
  <Result
    img={<Icon type={require('./alipay.svg')} className="icon" />}
    title="支付成功"
    message={<div><div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>998.00</div><del>1098元</del></div>}
  />

  <p style={{ margin: 10, color: '#999' }}>验证成功</p>
  <Result
    img={<Icon type="check-circle" className="icon" style={{ fill: '#1F90E6' }} />}
    title="验证成功"
    message="所提交内容已成功完成验证"
  />

  <p style={{ margin: 10, color: '#999' }}>支付失败</p>
  <Result
    img={<Icon type="cross-circle-o" className="icon" style={{ fill: '#F13642' }} />}
    title="支付失败"
    message="所选银行卡余额不足"
  />

  <p style={{ margin: 10, color: '#999' }}>等待处理</p>
  <Result
    img={<Icon type={require('./waiting.svg')} className="icon" />}
    title="等待处理"
    message="已提交申请，等待银行处理"
  />

  <p style={{ margin: 10, color: '#999' }}>操作失败</p>
  <Result
    img={<Icon type={require('./notice.svg')} className="icon" />}
    title="无法完成操作"
    message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
  />
</div>);

ReactDOM.render(<ResultExample />, mountNode);
````
````css
.result-example .icon {
  width: 1.2rem;
  height: 1.2rem;
}
````
