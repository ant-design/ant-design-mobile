---
order: 2
title: 换行
---

wrap="nowrap/wrap/wrap-reverse"

````jsx
import { Flex, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const FlexExample = React.createClass({
  render() {
    return (
      <div className="flex-container">
        <WhiteSpace />
        <List renderHeader={() => 'nowrap(默认):不换行'} />
        <WingBlank size="lg">
          <Flex className="flex-button-container">
            <Button type="primary">1</Button>
            <Button>2</Button>
            <Button type="primary">3</Button>
            <Button>4</Button>
            <Button type="primary">5</Button>
            <Button>6</Button>
            <Button type="primary">7</Button>
            <Button>8</Button>
            <Button type="primary">9</Button>
            <Button>10</Button>
          </Flex>
        </WingBlank>
        <List renderHeader={() => 'wrap:换行，第一行在上方'} />
        <WingBlank size="lg">
          <Flex
            wrap="wrap"
            className="flex-button-container"
          >
            <Button type="primary">1</Button>
            <Button>2</Button>
            <Button type="primary">3</Button>
            <Button>4</Button>
            <Button type="primary">5</Button>
            <Button>6</Button>
            <Button type="primary">7</Button>
            <Button>8</Button>
            <Button type="primary">9</Button>
            <Button>10</Button>
          </Flex>
        </WingBlank>
        <List renderHeader={() => 'wrap-reverse:换行，第一行在下方'} />
        <WingBlank size="lg">
          <Flex
            wrap="wrap-reverse"
            className="flex-button-container"
          >
            <Button type="primary">1</Button>
            <Button>2</Button>
            <Button type="primary">3</Button>
            <Button>4</Button>
            <Button type="primary">5</Button>
            <Button>6</Button>
            <Button type="primary">7</Button>
            <Button>8</Button>
            <Button type="primary">9</Button>
            <Button>10</Button>
          </Flex>
        </WingBlank>
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
.flex-button-container button {
   margin-right: 0.18rem;
   margin-bottom: 0.18rem;
   width: 1.1rem;
}
.flex-button-container button:last-child {
  margin-right: 0;
}

````
