---
order: 0
title: 选择器
---

````jsx
import { PickerView } from 'antd-mobile';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];
const PickerViewExample = React.createClass({
  getInitialState() {
    return {
      value: null,
    };
  },
  onChange(value) {
    console.log(value);
    this.setState({
      value,
    });
  },
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    );
  },
});

ReactDOM.render(<PickerViewExample />, mountNode);
````
