import React from 'react';
import Page from '../common/Page';
import { Tag, WhiteSpace, WingBlank } from 'antm';

const TagExample = React.createClass({
  onChange(selected) {
    alert('selected:' + selected);
  },
  onClose() {
    alert('closed')
  },
  render() {
    return (
      <Page title="标签" subtitle="&lt;Tag /&gt;">
        <WingBlank mode={20}>
          标签尺寸/size:　
          <Tag type="action" size="large">大号标签</Tag>　
          <Tag type="action" size="small">小号标签</Tag>
          <WhiteSpace mode={20}/>
          标签失效状态/disabled:  <Tag type="action" disabled>失效型标签</Tag>
          <WhiteSpace mode={20}/>
          只读标签/read:　
          <Tag type="read" size="large">只读标签大</Tag>　
          <Tag type="read" size="small">只读标签小</Tag>
          <WhiteSpace mode={20}/>
          可关闭标签/closable:　
          <Tag type="action" size="large" closable>可关闭标签</Tag>
          <WhiteSpace mode={20}/>
          事件/onClose & afterClose& onChange:
          <Tag type="action" size="large" onChange={(selected) => {
            console.log('selected:' + selected);
          }}>标签onChange</Tag>　
          <Tag type="action" closable onClose={() => {
            console.log('closing');
          }} afterClose={() => {
            console.log('closed');
          }}>标签close</Tag>
          <WhiteSpace />
          标签默认选中:
          <Tag type="action" size="large" selected>大号标签默认选中</Tag>
          <WhiteSpace />
          <Tag type="action" size="small" selected>小号标签默认选中</Tag>
          <WhiteSpace />
        </WingBlank>
      </Page>
    );
  },
});

export default TagExample;
