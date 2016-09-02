---
order: 4
title: 自定义
---

````jsx
import { Grid } from 'antd-mobile';

const data1 = [
  {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
    text: '名字',
    link: 'hehe',
  },
];

const GridExample = React.createClass({
  render() {
    return (<div>
      <Grid
        data={data1}
        columnNum={3}
        hasLine={false}
        createItemElement={(dataItem, index) => (
          <div style={{ margin: '16px', background: '#f7f7f7', textAlign: 'center' }}>
            <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '8px' }}>
              <img src={dataItem.icon} style={{ width: '24px', margin: '0 8px' }} />
              <span>{index + 1}.{dataItem.text}</span>
            </div>
            <img src={dataItem.img} style={{ width: '80%', margin: '12px' }} />
          </div>
        )}
      />
    </div>);
  },
});

ReactDOM.render(<GridExample />, mountNode);
````
