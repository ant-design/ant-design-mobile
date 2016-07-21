---
order: 2
title: 换行
---

wrap="nowrap/wrap/wrap-reverse"

````jsx
import { Flex, List, Button, WhiteSpace } from 'antm';

let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <List>
          <List.Header>nowrap(默认):不换行</List.Header>
        </List>
        <Flex>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>1</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>2</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>3</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>4</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>5</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>6</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>7</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>8</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>9</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>10</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>11</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>12</Button>
        </Flex>
        <List>
          <List.Header>wrap:换行，第一行在上方</List.Header>
        </List>
        <Flex
          wrap="wrap"
        >
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>1</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>2</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>3</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>4</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>5</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>6</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>7</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>8</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>9</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>10</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>11</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>12</Button>
        </Flex>
        <List>
          <List.Header>wrap-reverse:换行，第一行在下方</List.Header>
        </List>
        <Flex
          wrap="wrap-reverse"
        >
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>1</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>2</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>3</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>4</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>5</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>6</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>7</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>8</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>9</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>10</Button>
          <Button size="small" type="primary" style={{ margin: '2px', width: '40px' }}>11</Button>
          <Button size="small" style={{ margin: '2px', width: '40px' }}>12</Button>
        </Flex>
      </div>
    );
  },
});

ReactDOM.render(<FlexExample />, mountNode);
````
