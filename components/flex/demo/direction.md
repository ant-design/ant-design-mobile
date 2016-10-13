---
order: 1
title: 排列方向
---

direction="row/row-reverse/column/column-reverse"

````jsx
import { Flex, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const FlexExample = React.createClass({
  render() {
    return (
      <div className="flex-container">
        <WhiteSpace />
        <List renderHeader={() => 'row:主轴为水平方向，起点在左端'} />
        <WingBlank size="lg">
          <Flex className="flex-direction-container">
            <Button type="primary">按钮1</Button>
            <Button>按钮2</Button>
            <Button type="primary">按钮3</Button>
            <Button>按钮4</Button>
          </Flex>
        </WingBlank>
        <List renderHeader={() => 'row-reverse:主轴为水平方向，起点在右端'} />
        <WingBlank size="lg">
          <Flex
            direction="row-reverse"
            className="flex-direction-container-reverse"
          >
            <Button type="primary">按钮1</Button>
            <Button>按钮2</Button>
            <Button type="primary">按钮3</Button>
            <Button>按钮4</Button>
          </Flex>
        </WingBlank>
        <List renderHeader={() => 'column:主轴为垂直方向，起点在上沿'} />
        <WingBlank size="lg">
          <Flex
            direction="column"
          >
            <Button type="primary" style={{ margin: '16px' }}>按钮1</Button>
            <Button style={{ margin: '16px' }}>按钮2</Button>
            <Button type="primary" style={{ margin: '16px' }}>按钮3</Button>
            <Button style={{ margin: '16px' }}>按钮4</Button>
          </Flex>
        </WingBlank>
        <List renderHeader={() => 'column-reverse:主轴为垂直方向，起点在下沿'} />
        <WingBlank size="lg">
          <Flex direction="column-reverse">
            <Button type="primary" style={{ margin: '16px' }}>按钮1</Button>
            <Button type="primary" style={{ margin: '16px' }}>按钮2</Button>
            <Button type="primary" style={{ margin: '16px' }}>按钮3</Button>
            <Button type="primary" style={{ margin: '16px' }}>按钮4</Button>
          </Flex>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<FlexExample />, mountNode);
````

````css
.flex-container {
  background: #f5f5f9;
}
.flex-direction-container button {
   margin-right: 0.28rem;
}
.flex-direction-container button:last-child {
   margin-right: 0;
}
.flex-direction-container-reverse button {
   margin-right: 0.28rem;
}
.flex-direction-container-reverse button:first-child {
   margin-right: 0;
}
````
