---
order: 1
title:
  zh-CN: 吸顶距离
  en-US: Stick Top
---
Sticky Top

````jsx
import { Sticky, List } from 'antd-mobile';

const Item = List.Item;

const StickyExample = () => (
  <div>
    <div className="cntr">
      <Sticky stickTop="100" className="test">
        <List className="my-list">
          <Item ><strong>StickTop 100</strong></Item>
        </List>
      </Sticky>
      <div className="middle">
        <List className="my-list">
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
          <Item extra="$35.70">Snack</Item>
        </List>
      </div>
    </div>
  </div>
);

ReactDOM.render(<StickyExample />, mountNode);
````
````css
.middle {
  display: block;
}
.test {
  background-color: #fff;
}

.cntr {
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  background: #fff;
   box-shadow: 0 2px 8px 0 rgba(153, 153, 153, .2);
}
.am-list-body::before {
  background-color: #fff !important;
}

````
