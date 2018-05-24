import React from 'react';
import { View } from 'react-native';
import {
  Pagination, LocaleProvider, List, DatePicker, WhiteSpace, WingBlank,
  Picker, SearchBar,
} from 'antd-mobile';
import enUS from '../en_US';
import ruRU from '../ru_RU';

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
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">DatePicker</List.Item>
      </DatePicker>
      <Picker data={seasons} cascade={false}>
        <List.Item arrow="horizontal">picker</List.Item>
      </Picker>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
);

export default class LocaleProviderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      locale: 'English',
    };
  }

  onChange = (value: any) => {
    this.setState({
      locale: value[0],
    });
  }

  render() {
    const { locale } = this.state;
    const languages: Array<any> = [
      {
        value: '中国',
        label: '中国',
        language: undefined,
      },
      {
        value: 'English',
        label: 'English',
        language: enUS,
      },
      {
        value: 'Русский',
        label: 'Русский',
        language: ruRU,
      },
    ];
    const currentLocale = languages.find(item => item.value === locale).language;

    return (
      <WingBlank>
        <Picker
          data={languages}
          onChange={this.onChange}
          cols={1}
          value={[locale]}
        >
          <List.Item arrow="horizontal">Choose language</List.Item>
        </Picker>
        <WhiteSpace />
        <LocaleProvider locale={currentLocale}>
          <Page />
        </LocaleProvider>
      </WingBlank>
    );
  }
}
