---
order: 2
title: 超出界面宽度，多于5个标签
---

可视区最多显示5个标签，点击两侧的标签后，滑动tabs


````__react
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const TabExample = React.createClass({
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="8" onChange={callback}>
          <TabPane tab="选项一" key="1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项一内容
            </div>
          </TabPane>
          <TabPane tab="选项二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项二内容
            </div>
          </TabPane>
          <TabPane tab="选项三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项三内容
            </div>
          </TabPane>
          <TabPane tab="选项四" key="4">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项四内容
            </div>
          </TabPane>
          <TabPane tab="选项五" key="5">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项五内容
            </div>
          </TabPane>
          <TabPane tab="选项六" key="6">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项六内容
            </div>
          </TabPane>
          <TabPane tab="选项七" key="7">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项七内容
            </div>
          </TabPane>
          <TabPane tab="选项八" key="8">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项八内容
            </div>
          </TabPane>
          <TabPane tab="选项九" key="9">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项九内容
            </div>
          </TabPane>
          <TabPane tab="选项十" key="10">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项十内容
            </div>
          </TabPane>
          <TabPane tab="选项十一" key="11">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              选项十一内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<TabExample />, mountNode);
````
