import * as React from 'react';
import { Grid } from 'antd-mobile';

const data1 = [
  {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: '名字',
    link: 'hehe',
  },
];

export default class BasicGridExample extends React.Component<any, any> {
  render() {
    return (
      <Grid data={data1} />
    );
  }
}
