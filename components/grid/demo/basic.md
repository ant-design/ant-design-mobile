---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));


const GridExample = () => (
  <div>
    <div className="sub-title">basic usage， columnNum=3 </div>
    <Grid data={data} columnNum={3} />

    <div className="sub-title">basic usage， columnNum=3 </div>
    <Grid data={data} />

    <div className="sub-title">no border</div>
    <Grid data={data} hasLine={false} />

    <div className="sub-title">carousel</div>
    <Grid data={data} isCarousel onClick={_el => console.log(_el)} />

    <div className="sub-title">custom content</div>
    <Grid data={data1}
      columnNum={3}
      renderItem={dataItem => (
        <div style={{ padding: '0.25rem' }}>
          <img src={dataItem.icon} style={{ width: '1.5rem', height: '1.5rem' }} alt="icon" />
          <div style={{ color: '#888', fontSize: '0.28rem', marginTop: '0.24rem' }}>
            <span>我是标题..</span>
          </div>
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
  font-size: .28rem;
  padding: 0.3rem 0 0.18rem 0.3rem;
}
````
