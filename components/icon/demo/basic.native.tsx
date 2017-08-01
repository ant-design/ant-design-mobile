import React from 'react';
import { Icon, Grid } from 'antd-mobile';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
];

export default class IConDemo extends React.Component<any, any> {
  render() {
    const data = icons.map(item => ({
      icon: (<Icon type={item} />),
      text: item,
    })).concat([{
      icon: (<Icon type={'\ue601'} size={55} color="red" />),
      text: '自定义图标',
    }]);
    return (
      <Grid data={data} columnNum={3} hasLine={false} />
    );
  }
}

export const title = 'Icon';
export const description = 'Icon Example';
