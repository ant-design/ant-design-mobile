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
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="icon" />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
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
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 15px 0 9px 15px;
}
````
