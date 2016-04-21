/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, InputItem, Button } from 'antm';

const ListExample = React.createClass({
  render() {
    return (
      <Page title="列表" subtitle="&lt;List&gt;&lt;List.Item /&gt;&lt;List.Item /&gt;&lt;/List&gt;">
        <List>
          <List.Header>列表标题</List.Header>
          <List.Body>
            <List.Item extra="内容内容" needActive={false}>标题文字,无Active效果</List.Item>
            <List.Item extra="内容内容" onClick={() => {console.log('onClick');}}>标题文字</List.Item>
          </List.Body>
          <List.Footer>列表尾部</List.Footer>
        </List>
        <List>
          <List.Body>
            <List.Item extra="内容内容" onClick={() => {console.log('onClick');}}>标题文字</List.Item>
          </List.Body>
        </List>
        <List>
          <List.Header>列表标题</List.Header>
          <List.Body>
            <List.Item extra="内容内容">标题文字</List.Item>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
            ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
          </List.Body>
          <List.Footer onClick={() => {console.log('onClick');}} style={{ color:'red' }} align="right"><a id="ddd">超链接</a>,改了样式,右对齐,快点我</List.Footer>
        </List>
        <List>
          <List.Header>箭头</List.Header>
          <List.Body>
            <List.Item extra="内容内容" arrow="horizontal">标题文字</List.Item>
            <List.Item extra="内容内容" arrow="down">标题文字</List.Item>
            <List.Item extra="内容内容" arrow="up">标题文字</List.Item>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
              arrow="horizontal"
            ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
              arrow="down"
            ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
              arrow="up"
            ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
            <List.Item
              extra="写点就有箭头坑位"
              arrow="aaa"
            >内容内容</List.Item>
            <List.Item
              extra="arrow为空箭头没有坑位"
            >内容内容</List.Item>
          </List.Body>
        </List>
        <List>
          <List.Header>带icon</List.Header>
          <List.Body>
            <List.Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              arrow="horizontal"
              onClick={window.openurl}
            >我有thumb</List.Item>
            <List.Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              extra="写点就有剪头坑位"
              arrow="aaa"
              onClick={window.clickItem}
            >我有thumb</List.Item>
            <List.Item
              icon=""
              extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="29" height="29"/>}
              arrow="horizontal"
              onClick={window.clickItem}
            >我是内容22</List.Item>
            <List.Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              line={2}
              arrow="horizontal"
            ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></List.Item>
          </List.Body>
        </List>
        <List >
          <List.Header>对齐</List.Header>
          <List.Body>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
              arrow="horizontal"
            >垂直居中对齐</List.Item>
            <List.Item
              extra="内容内容"
              line={2}
              arrow="horizontal"
            ><div>垂直居中对齐<div className="am-list-brief">辅助文字内容</div></div></List.Item>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
              arrow="horizontal"
              align="top"
            >顶部对齐</List.Item>
            <List.Item
              extra="内容内容"
              line={2}
              arrow="horizontal"
              align="top"
            ><div>顶部对齐<div className="am-list-brief">辅助文字内容</div></div></List.Item>
            <List.Item
              extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
              line={2}
              arrow="horizontal"
              align="bottom"
            >底部对齐</List.Item>
            <List.Item
              extra="内容内容"
              line={2}
              arrow="horizontal"
              align="bottom"
            ><div>底部对齐<div className="am-list-brief">辅助文字内容</div></div></List.Item>
          </List.Body>
        </List>
      </Page>
    );
  },
});

export default ListExample;
