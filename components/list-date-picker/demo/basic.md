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
            initialValue: ''
          })}
            minDate="2014-08-06"
            maxDate="2016-12-3"
          >
            <List.Item arrow="horizontal">日期</List.Item>
          </ListDatePicker>
          <ListDatePicker mode="time" { ...getFieldProps('time', {
            initialValue: ''
          })}
            minDate="00:30"
            maxDate="22:00"
          >
            <List.Item arrow="horizontal">时间</List.Item>
          </ListDatePicker>
          <ListDatePicker mode="datetime" { ...getFieldProps('datetime', {
            initialValue: ''
          })}
          >
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </ListDatePicker>
        </List.Body>
      </List>
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, document.getElementById('components-list-date-picker-demo-basic'));
````
