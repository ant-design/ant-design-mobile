---
order: 0
title:
  zh-CN: 国际化
  en-US: i18n
  ru-Ru: i18n
---

Wrap your app with `LocaleProvider`, and apply the corresponding language package.

````jsx
import {
  Pagination, LocaleProvider, List, DatePicker, WhiteSpace, WingBlank, InputItem,
  Picker, SearchBar,
} from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import ruRU from 'antd-mobile/lib/locale-provider/ru_RU';

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
  <div>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List
      className="date-picker-list"
      style={{ backgroundColor: 'white' }}
    >
      <DatePicker
        mode="date"
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">datePicker</List.Item>
      </DatePicker>
      <Picker
        data={seasons}
        cascade={false}
      >
        <List.Item arrow="horizontal">picker</List.Item>
      </Picker>
    </List>
    <WhiteSpace />
    <SearchBar placeholder="Search" showCancelButton />
    <WhiteSpace />
    <InputItem type="money" placeholder="money input" />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'English',
    };
  }

  onChange = (value) => {
    this.setState({
      locale: value[0],
    });
  }

  render() {
    const { locale } = this.state;
    const languages = [
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
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <LocaleProvider locale={currentLocale}>
          <Page />
        </LocaleProvider>
      </WingBlank>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
