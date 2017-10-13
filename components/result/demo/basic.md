---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx
import { Result, Icon, WhiteSpace } from 'antd-mobile';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

const ResultExample = () => (<div className="result-example">
  <div className="sub-title">支付成功</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
    title="支付成功"
    message={<div>998.00元 <del>1098元</del></div>}
  />
  <WhiteSpace />
  <div className="sub-title">验证成功</div>
  <Result
    img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
    title="验证成功"
    message="所提交内容已成功完成验证"
  />
  <WhiteSpace />
  <div className="sub-title">支付失败</div>
  <Result
    img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
    title="支付失败"
    message="所选银行卡余额不足"
  />
  <WhiteSpace />
  <div className="sub-title">等待处理</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
    title="等待处理"
    message="已提交申请，等待银行处理"
  />
  <WhiteSpace />
  <div className="sub-title">操作失败</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
    title="无法完成操作"
    message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
  />
</div>);

ReactDOM.render(<ResultExample />, mountNode);
````

````css
.result-example .spe {
  width: 60px;
  height: 60px;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
  margin-left: 15px;
}
````
