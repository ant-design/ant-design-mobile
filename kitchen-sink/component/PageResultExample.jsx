import React from 'react';
import Page from '../common/Page';
import { PageResult, Tab, WhiteSpace } from '../../index.js';

const PageResultExample = React.createClass({
  render() {
    return (
      <Page title="结果页面" subtitle="&lt;PageResult title='加载出错' buttonTxt='重新加载' /&gt;">
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png"
          title="加载出错"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/awwrfcIKXAKwGyx.png"
          title="系统繁忙"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/YUeWSaeIeRjuvQb.png"
          title="404"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/dlMevdYPbXUwgCQ.png"
          title="空白页"
          brief="可各业务自定义文案"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png"
          title="加载错误"
          brief="可各业务自定义文案"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png"
          title="网络无法连接"
          brief="请查看网络连接或稍后重试"
          buttonTxt="刷新"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png"
          title="内容为空"
          brief="可各业务自定义文案"
          buttonTxt="重新尝试"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <Tab>
          <Tab.Item>选项1</Tab.Item>
          <Tab.Item selected={true}>选项2</Tab.Item>
          <Tab.Item>选项3</Tab.Item>
        </Tab>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png"
          title="警示"
          brief="可各业务自定义文案"
          buttonTxt="重新加载"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <Tab>
          <Tab.Item>选项1</Tab.Item>
          <Tab.Item selected={true}>选项2</Tab.Item>
          <Tab.Item>选项3</Tab.Item>
        </Tab>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png"
          title="网络不给力"
          brief="请查看网络连接或稍后重试"
          buttonTxt="重新尝试"
          buttonClick={() => {alert('点击了按钮');}}
        />
        <div style={{ backgroundColor: '#def' }}><WhiteSpace/></div>
        <PageResult
          imgUrl="https://os.alipayobjects.com/rmsportal/hbGTnqHwPdYGedk.png"
          title="我是插画页"
          brief="页面成为插画页"
          buttonTxt="主按钮"
          buttonMode="blue"
          buttonClick={() => {alert('点击了按钮');}}
        />
      </Page>
    );
  },
});

export default PageResultExample;
