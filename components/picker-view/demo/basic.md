---
order: 0
title:
  zh-CN: 选择器
  en-US: 'Basic'
---

````jsx
import { PickerView, WhiteSpace } from 'antd-mobile';

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

const season = [
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
];

class PickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }
  onScrollChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div>
        <PickerView
          onChange={this.onChange}
          onScrollChange={this.onScrollChange}
          value={this.state.value}
          data={seasons}
          cascade={false}
        />
        <WhiteSpace /><WhiteSpace />
        <PickerView
          data={season}
          cascade={false}
        />
      </div>
    );
  }
}

ReactDOM.render(<PickerViewExample />, mountNode);
````
