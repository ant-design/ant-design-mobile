# Date Picker

- order: 0

---

````jsx

import { ListDatePicker, List} from 'antm';
import {createForm} from 'rc-form';

let Test = React.createClass({
  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <List>
        <List.Header>店铺位置</List.Header>
        <List.Body>
          <ListDatePicker mode="date" { ...getFieldProps('date', {
            initialValue: '2015-11-11'
          })}>
            <List.Item arrow="horizontal">时间</List.Item>
          </ListDatePicker>
        </List.Body>
      </List>
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, document.getElementById('components-list-date-picker-demo-basic'));
````
