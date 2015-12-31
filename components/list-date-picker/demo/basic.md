# Date Picker

- order: 0

---

````jsx

import { ListDatePicker, List} from 'antm';

ReactDOM.render(
  <div>
    <List>
      <List.Header>店铺位置</List.Header>
      <List.Body>
        <ListDatePicker mode="date" value="2015-11-11" onChange={function(date){ console.log(date); }} >
          <List.Item extra="请选择" arrow="horizonal">所在地区</List.Item>
        </ListDatePicker>
      </List.Body>
    </List>
  </div>
  , document.getElementById('components-list-date-picker-demo-basic'));
````
