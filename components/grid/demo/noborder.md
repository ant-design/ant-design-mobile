---
order: 1
title: 没有边线
---

````jsx
import { Grid } from 'antd-mobile';

const data2 = [
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

const GridExample = React.createClass({
  render() {
    return (<div>
      <Grid
        data={data2}
        hasLine={false}
        columnNum={3}
      />
    </div>);
  },
});

ReactDOM.render(<GridExample />, mountNode);
````
