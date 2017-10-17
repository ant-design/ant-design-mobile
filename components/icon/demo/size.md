---
order: 1
title:
  zh-CN: 大小
  en-US: Size
---

````jsx
import { Icon, Grid } from 'antd-mobile';

const Demo = () => {
  const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
  const data = size.map(item => ({
    icon: (<Icon type="search" size={item} />),
    text: item,
  }));
  return (<Grid data={data} columnNum={5} hasLine={false} activeStyle={false} />);
};
ReactDOM.render(<Demo />, mountNode);
````


