/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button } from 'antd-mobile';
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
        title="选择日期"
        extra="点击查看国际化"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">日期</List.Item>
      </DatePicker>
    </List>
  </div>
);

export default class App extends React.Component {
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
        <Button type="primary" onClick={this.handleClick}>
          {this.state.isEnglish ? 'change to chinese' : '切换到英文'}
        </Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page />
        </LocaleProvider>
      </div>
    );
  }
}

export const title = '国际化';
export const description = '用 `LocaleProvider` 包裹你的应用，并引用对应的语言包。';
