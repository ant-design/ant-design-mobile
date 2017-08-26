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
  'loading',
];

const Demo = () => {
  const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }));
  return (
    <Grid data={data} columnNum={3} hasLine={false} />
  );
};

ReactDOM.render(<Demo />, mountNode);
````
