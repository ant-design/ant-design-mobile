import { PickerView } from 'antd-mobile';
import React from 'react';

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

export default class PickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value: any) => {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    );
  }
}
