---
order: 0
title:
  zh-CN: 国际化
  en-US: i18n
---

Wrap your app with `LocaleProvider`, and apply the corresponding language package.

````jsx
import { Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button, InputItem } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import moment from 'moment';

const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

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
        extra="Click to see i18n text"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">date</List.Item>
      </DatePicker>
    </List>
    <WhiteSpace />
    <InputItem type="money" placeholder="money input" />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isEnglish: !this.state.isEnglish,
    });
  }
  render() {
    const locale = this.state.isEnglish ? enUS : undefined;
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>{this.state.isEnglish ? 'change to chinese' : '切换到英文'}</Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page />
        </LocaleProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
