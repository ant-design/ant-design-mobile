# Date Picker

- order: 0

---

````jsx

import { ListDatePicker } from 'antm';

ReactDOM.render(
    <ListDatePicker mode="date" value="2015-11-11" onDestroy={function(date){ console.log(date); }} />
  , document.getElementById('components-list-date-picker-demo-basic'));
````
