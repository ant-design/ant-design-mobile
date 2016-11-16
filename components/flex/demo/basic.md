---
order: 0
title: 示例集合
---


````jsx
import { Flex, WhiteSpace } from 'antd-mobile';

const PlaceHolder = (props) => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: 60,
    lineHeight: '60px',
    width: '100%',
  }} {...props}
  >Item</div>
);

const FlexExample = React.createClass({
  render() {
    return (
      <div className="flex-container">
        <div className="title">基本</div>
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />

        <div className="title">wrap 换行</div>
        <Flex wrap="wrap">
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />

        <div className="title">轴对齐方式</div>
        <Flex justify="center">
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace size="lg" />
        <Flex justify="end">
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace size="lg" />
        <Flex justify="between">
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline" />
        </Flex>

        <WhiteSpace size="lg" />
        <Flex align="start">
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline small" />
          <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace size="lg" />
        <Flex align="end">
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline small" />
          <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace size="lg" />
        <Flex align="baseline">
          <PlaceHolder className="inline" />
          <PlaceHolder className="inline small" />
          <PlaceHolder className="inline" />
        </Flex>
      </div>
    );
  },
});

ReactDOM.render(<FlexExample />, mountNode);
````
````css
.flex-container {
  padding: 30px;
}
.flex-container .title {
  color: #888;
  margin: 20px 0;
}
.flex-container .inline {
  width: 80px!important;
  margin: 0 18px;
}
.flex-container .small {
  height: 40px!important;
  line-height: 40px!important;
}
```
