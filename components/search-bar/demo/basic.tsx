import React from 'react';
import { View, Alert } from 'react-native';
import { SearchBar } from 'antd-mobile';

export default React.createClass({
  getInitialState() {
    return {
      value: '美食',
    };
  },
  onChange(value) {
    this.setState({ value });
  },
  clear() {
    this.setState({ value: '' });
  },
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar
          defaultValue="初始值"
          placeholder="搜索"
        />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    );
  },
});
