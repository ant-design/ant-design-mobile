/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, InputItem } from '../../index.js';

const ListExample = React.createClass({
  render() {
    return (
      <Page title="列表" subtitle="&lt;List&gt;&lt;List.Item /&gt;&lt;List.Item /&gt;&lt;/List&gt;">
        <List>
          <List.Header>单行列表</List.Header>
          <List.Body>
            <List.Item
              arrow="horizontal"
              onClick={() => {console.log('onClick');}}
            >文本内容,无Active效果</List.Item>
            <List.Item
              extra="内容内容"
              arrow="down"
              onClick={() => {console.log('onClick');}}
            >文本信息</List.Item>
            <List.Item
              arrow="up"
              extra="内容内容"
              onClick={() => {console.log('onClick');}}
            >文本信息</List.Item>
            <List.Item
              extra="内容内容"
              arrow="ss"
              onClick={() => {console.log('onClick');}}
            >文本内容</List.Item>
            <List.Item
              extra="内容内容"
              onClick={() => {console.log('onClick');}}
            >文本内容</List.Item>
            <div>
            <List.Item
              extra="文本内容"
              arrow="horizontal"
              onClick={() => {console.log('onClick');}}
            >文本信息</List.Item></div>
          </List.Body>
          <List.Footer onClick={() => {console.log('onClick');}} style={{ color:'red' }} align="right"><a id="ddd">超链接</a>,改了样式,右对齐,快点我</List.Footer>
        </List>
        <List isIconList={true}>
          <List.Header>带icon</List.Header>
          <List.Body>
            <List.Item
              thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
              arrow="horizontal"
              onClick={window.openurl}
            >我有thumb</List.Item>
            <List.Item
              thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
              extra="写点就有剪头坑位"
              arrow="aaa"
              onClick={window.clickItem}
            >我有thumb</List.Item>
            <List.Item
              icon=""
              extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
              arrow="horizontal"
              onClick={window.clickItem}
            >我是内容22</List.Item>
          </List.Body>
        </List>
        <List>
          <List.Header>form列表</List.Header>
          <List.Body>
            <InputItem
              name="yyy"
              defaultValue="dada22"
              placeholder="dadads"
              clear={true}
              onChange={(e) => {console.log('onChange'); console.log(e);}}
              onBlur={(e) => {console.log('onBlur'); console.log(e);}}
              onFocus={(e) => {console.log('onFocus'); console.log(e);}}
            >我是</InputItem>
            <InputItem
              label=""
              name="yyy"
              defaultValue="dada22"
              placeholder="dadads"
              onChange={() => {console.log('onChange');}}
            >我是内</InputItem>
            <InputItem
              name="yyy"
              defaultValue="dada22"
              placeholder="dadads"
              clear={true}
              onChange={() => {console.log('onChange');}}
            />
          </List.Body>
        </List>
      </Page>
    );
  },
});

export default ListExample;
