---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
import { Icon, Grid } from 'antd-mobile';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
/* eslint global-require: 0 */

const Demo = () => {
  const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  })).concat([{
    icon: (<Icon type={require('./reload.svg')} />),
    text: '自定义图标',
  }]);
  return (
    <Grid data={data} columnNum={3} hasLine={false} />
  );
};

ReactDOM.render(<Demo />, mountNode);
````
