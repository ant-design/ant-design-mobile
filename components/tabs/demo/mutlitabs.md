---
order: 9
title:
  zh-CN: '超出界面宽度，多于5个标签'
  en-US: 'overflow, more than 5 tabs'
---

There are at most 5 tab panes in the visible area, click on the both sides of `Tabs` to scroll.


````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

for (let i = 0; i < 47; i++) {
  const item = data[i % 3];
  data.push({ ...item });
}

function renderContent(tab) {
  return (<div style={{ backgroundColor: '#fff' }}>
    <p style={{ padding: 20, margin: 0, textAlign: 'center' }}>Content of {tab.title} {tab.max || data.length}</p>
    {data.map((obj, i) => {
      if (tab.max && i > tab.max) return null;
      return (<div key={i} className="row">
        <div className="row-title">{obj.title}</div>
        <div style={{ display: 'flex', padding: '15px 0' }}>
          <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="icon" />
          <div className="row-text">
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {i}</div>
          </div>
        </div>
      </div>);
    })}
  </div>);
}

const TabExample = () => (
  <div>
    <WhiteSpace />
    <div style={{ height: 400 }}>
      <Tabs tabs={[
        { title: '1st Tab' },
        { title: '2nd Tab', max: 5 },
        { title: '3rd Tab', max: 20 },
        { title: '4th Tab', max: 20 },
        { title: '5th Tab', max: 5 },
        { title: '6th Tab', max: 5 },
        { title: '7th Tab', max: 5 },
        { title: '8th Tab', max: 5 },
        { title: '9th Tab', max: 5 },
      ]}
      >
        {renderContent}
      </Tabs>
    </div>
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
````css
.row {
  padding: 0 15px;
  background-color: white;
}
.row-title {
  height: 50px;
  line-height: 50px;
  color: #888;
  font-size: 18px;
  border-bottom: 1px solid #F6F6F6;
}
.row-text {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
}
````
