---
order: 2
title: 走马灯有边线
---

````jsx
import { Grid } from 'antd-mobile';

let data3 = [
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

let GridExample = React.createClass({
  render() {
    return (<div>
      <Grid
        data={data3}
        isCarousel
        onClick={(el, index) => { alert(index); }}
        needActive={false}
      />
    </div>);
  },
});

ReactDOM.render(<GridExample />, mountNode);
````
