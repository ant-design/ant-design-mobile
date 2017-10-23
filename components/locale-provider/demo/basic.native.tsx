import React from 'react';
import { View } from 'react-native';
import {
  Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button, Picker, SearchBar,
} from 'antd-mobile';
import enUS from '../en_US';

const maxDate = new Date(2018, 11, 3, 22, 0);
const minDate = new Date(2015, 7, 6, 8, 30);

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

const Page = () => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <DatePicker
        mode="date"
        title="选择日期"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">日期</List.Item>
      </DatePicker>
      <Picker
        data={seasons}
        cascade={false}
      >
        <List.Item arrow="horizontal">picker</List.Item>
      </Picker>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
);

export default class LocaleProviderExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
    };
  }
  handleClick = () => {
    this.setState({
      isEnglish: !this.state.isEnglish,
    });
  }
  render() {
    const locale = this.state.isEnglish ? enUS : undefined;
    return (
      <View style={{ marginTop: 30 }}>
        <Button type="primary" onClick={this.handleClick}>
          {this.state.isEnglish ? 'change to chinese' : '切换到英文'}
        </Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page />
        </LocaleProvider>
      </View>
    );
  }
}
