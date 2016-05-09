/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Collapse, List } from 'antm';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CollapseExample = React.createClass({
  render() {
    return (
      <Page title="折叠列表" subtitle="&lt;Collapse&gt;&lt;Collapse.Panel&gt;&lt;List.Item&gt;xxxx&lt;/List.Item&gt;&lt;/Collapse.Panel&gt;&lt;/Collapse&gt;">
        <Collapse
          prefixCls="am-collapse"
          defaultActiveKey="0"
        >
          <Collapse.Panel header="hellohellohellohellohellohe">
            <List.Item>子内容子内容</List.Item>
            <List.Item>子内容子内容</List.Item>
            <List.Item>子内容子内容</List.Item>
            <List.Item>子内容子内容</List.Item>
          </Collapse.Panel>
          <Collapse.Panel header="title2"><List.Item>this is panel content2 or other</List.Item></Collapse.Panel>
          <Collapse.Panel header="title3"><List.Item>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</List.Item></Collapse.Panel>
        </Collapse>
      </Page>
    );
  },
});

export default CollapseExample;
