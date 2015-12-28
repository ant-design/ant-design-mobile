# Date Picker

- order: 0

---

````jsx

import { ListDatePicker, ListItem, ListWrap, ListHeader, ListBody } from 'antm';

ReactDOM.render(
  <div>
    <ListWrap>
      <ListHeader>店铺位置</ListHeader>
      <ListBody>
        <ListDatePicker mode="date" value="2015-11-11" onChange={function(date){ console.log(date); }} >
          <ListItem extra="请选择" arrow="horizonal">所在地区</ListItem>
        </ListDatePicker>
      </ListBody>
    </ListWrap>
  </div>
  , document.getElementById('components-list-date-picker-demo-basic'));
````
