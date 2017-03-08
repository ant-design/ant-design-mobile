---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `名字${i}`,
}));

const data1 = Array.from(new Array(5)).map((_val, i) => ({
  img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
  text: `名字${i}`,
}));

const GridExample = () => (
  <div>
    <div className="sub-title">基本使用</div>
    <Grid data={data} />

    <div className="sub-title">无边线</div>
    <Grid data={data} columnNum={3} hasLine={false} />

    <div className="sub-title">走马灯</div>
    <Grid data={data} columnNum={3} isCarousel onClick={(_el, index) => alert(index)} />

    <div className="sub-title">自定义格子内容</div>
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
  </div>
);

ReactDOM.render(<GridExample />, mountNode);
````

````css
.am-grid {
  border: 1px solid #ddd;
}
.sub-title {
  color: #888;
  font-size: 28px;
  padding: 30px 0 18px 0;
}
````
