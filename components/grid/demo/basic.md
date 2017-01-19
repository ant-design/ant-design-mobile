---
order: 0
title: 示例
---

````__react
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `名字${i}`,
}));

const data1 = Array.from(new Array(5)).map((_val, i) => ({
  img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
  text: `名字${i}`,
}));

const GridExample = React.createClass({
  render() {
    return (<div>
      <Grid data={data} />

      <p style={{ margin: 10, color: '#999' }}>无边线</p>
      <Grid data={data} columnNum={3} hasLine={false} />

      <p style={{ margin: 10, color: '#999' }}>走马灯</p>
      <Grid data={data} columnNum={3} isCarousel onClick={(_el, index) => alert(index)} />

      <p style={{ margin: 10, color: '#999' }}>自定义格子内容</p>
      <Grid data={data1} columnNum={3} hasLine={false}
        renderItem={(dataItem, index) => (
          <div style={{ margin: '0.16rem', background: '#f7f7f7', textAlign: 'center' }}>
            <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem' }}>
              <span>{index + 1}.{dataItem.text}</span>
            </div>
            <img src={dataItem.img} style={{ width: '80%', margin: '0.12rem' }} />
          </div>
        )}
      />
    </div>);
  },
});

ReactDOM.render(<GridExample />, mountNode);
````
