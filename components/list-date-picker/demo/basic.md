# Date Picker

- order: 0

---

````jsx
import { ListDatePicker, ListItem, ListWrap, ListHeader, ListBody, ListFooter } from 'antm';

ReactDOM.render(
  <div>
    <ListWrap>
      <ListHeader>列表头部,没有附带说明</ListHeader>
      <ListBody>
        <ListDatePicker mode="time" onChange={function(date){ console.log(date); }}>
          <ListItem arrow="horizonal">开始时间</ListItem>
        </ListDatePicker>
      </ListBody>
      <ListFooter>列表尾部</ListFooter>
    </ListWrap>
  </div>
  , document.getElementById('components-list-date-picker-demo-basic'));
````