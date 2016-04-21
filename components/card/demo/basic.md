---
order: 0
title: 基本
---



````jsx
import { Card } from 'antm';


let CardExample = React.createClass({
  render() {
    return (
      <Card>
        <Card.Item
          title="卡片1,包含所有卡片元素"
          subject="文本内容文本内容"
          origin="邵逸夫医院"
          time="14-8-21"
          onMoreClick={() => {alert(11);}}
        >文本说明文本说明文本说明文本说明文本说明文本说明文本说明</Card.Item>
        <Card.Item
          title="卡片2,没有副标题"
          origin="邵逸夫医院"
          time="14-8-21"
          onClick={() => {alert(2222);}}
          onMoreClick={() => {alert(11);}}
        >文本说明文本说明文本说明文本说明文本说明文本说明文本说明</Card.Item>
        <Card.Item
          subject="卡片3,没有标题"
          origin="邵逸夫医院"
          time="14-8-21"
          onClick={() => {alert(2222);}}
          onMoreClick={() => {alert(11);}}
        >文本说明文本说明文本说明文本说明文本说明文本说明文本说明</Card.Item>
        <Card.Item
          title="卡片4,自闭合,没有内容"
          subject="文本内容文本内容"
          origin="邵逸夫医院"
          time="14-8-21"
          onMoreClick={() => {alert(11);}}
        />
        <Card.Item
          title="卡片5,没有更多"
          subject="文本内容文本内容"
          origin="邵逸夫医院"
          time="14-8-21"
        >文本说明文本说明文本说明文本说明文本说明文本说明文本说明</Card.Item>
      </Card>
    );
  }
});

ReactDOM.render(<CardExample />, document.getElementById('components-card-demo-basic'));
````
