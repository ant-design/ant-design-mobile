---
order: 0
title: 基本
---

PageResult


````jsx
import { PageResult, Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;

let PageResultExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png"
          title="加载出错"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/awwrfcIKXAKwGyx.png"
          title="系统繁忙"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/YUeWSaeIeRjuvQb.png"
          title="404"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/dlMevdYPbXUwgCQ.png"
          title="空白页"
          brief="可各业务自定义文案"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png"
          title="加载错误"
          brief="可各业务自定义文案"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png"
          title="网络无法连接"
          brief="请查看网络连接或稍后重试"
          buttonTxt="刷新"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png"
          title="内容为空"
          brief="可各业务自定义文案"
          buttonTxt="重新尝试"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png"
          title="警示"
          brief="可各业务自定义文案"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png"
          title="网络不给力"
          brief="请查看网络连接或稍后重试"
          buttonTxt="重新尝试"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace /></div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="选项卡一" key="1">
            <PageResult
              imgUrl="https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png"
              title="网络不给力"
              brief="请查看网络连接或稍后重试"
              buttonTxt="重新尝试"
              buttonClick={() => {alert('点击了按钮');}}
            />
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <PageResult
              imgUrl="https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png"
              title="警示"
              brief="可各业务自定义文案"
              buttonTxt="重新加载"
              buttonClick={() => {alert('点击了按钮');}}
            />
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <PageResult
              imgUrl="https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png"
              title="内容为空"
              brief="可各业务自定义文案"
              buttonTxt="重新尝试"
              buttonClick={() => {alert('点击了按钮');}}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
});

ReactDOM.render(<PageResultExample />, mountNode);
````
