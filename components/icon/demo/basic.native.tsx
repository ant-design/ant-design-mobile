import { Grid, Icon } from 'antd-mobile';
import React from 'react';

const list = [
  'check-circle',
  'check',
  'check-circle-o',
  'cross-circle',
  'cross',
  'cross-circle-o',
  'up',
  'down',
  'left',
  'right',
  'ellipsis',
];

export default class IConDemo extends React.Component<any, any> {
  render() {
    const data = list
      .map(item => ({
        icon: <Icon type={item} />,
        text: item,
      }))
      .concat([
        {
          icon: <Icon type={'\ue601'} size={55} color="red" />,
          text: 'Customized',
        },
      ]);
    return <Grid data={data} columnNum={3} hasLine={false} />;
  }
}

export const title = 'Icon';
export const description = 'Icon Example';
