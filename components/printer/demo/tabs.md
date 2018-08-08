---
order: 1
title:
  zh-CN: 标签页打印机
  en-US: 'Printer with Tabs'
---
Printer

````jsx
import { Printer, List, Tabs } from 'antd-mobile';
import classnames from 'classnames';

const Item = List.Item;
const monthList = [
  { name: 'Auguest Bill', value: '7,000.00', link: '/refund.html' },
  { name: 'Refund', value: '-2,000.00', link: '/refund.html' },
  { name: 'Paid', value: '-1,000.00', link: '/refund.html' },
  { name: 'Unpaid', value: '2,300.00', link: '/refund.html' },
];
const currMonthInfo = {
  title: 'Amount',
  amount: '8,800.00',
  desc: 'Before Aug. 10th, min payment: $800',
};

const tabs = [
  { title: 'Billed' },
  { title: 'UnBilled' },
  { title: 'UnAccounted' },
];


class PrinterWithTabsExample extends React.Component {
  constructor(props) {
    super(props);
    this.tabSelect = this.tabSelect.bind(this);
    this.state = {
      switchTabs: [false, false, false],
    };
  }

  tabSelect(tab, key: number) {
    console.log(key);
    const tempSwitchTabs = this.state.switchTabs;
    tempSwitchTabs[key] = !this.state.switchTabs[key];
    this.setState({
      switchTabs: tempSwitchTabs,
    });
  }

  render() {
    return (
      <Tabs
        prerenderingSiblingsNumber={0}
        tabs={tabs}
        onChange={this.tabSelect}
        initialPage={0}
        animated={false}
        swipeable={false}
        tabBarBackgroundColor="#108EE9"
        tabBarActiveTextColor="#fff"
        tabBarInactiveTextColor="#fff"
      >
        <div>
          <Printer switchCls={this.state.switchTabs[0]} initialAnim>
            <Up list={monthList} />
            <Down title={currMonthInfo.title} desc={currMonthInfo.desc} amount={currMonthInfo.amount} prefixCls="down" overDue />
          </Printer>
        </div>
        <div>
          <Printer switchCls={this.state.switchTabs[1]} >
            <Up list={monthList} />
            <Down title={currMonthInfo.title} desc={currMonthInfo.desc} amount={currMonthInfo.amount} prefixCls="down" overDue />
          </Printer>
        </div>
        <div>
          <Printer switchCls={this.state.switchTabs[2]} >
            <Up list={monthList} />
            <Down title={currMonthInfo.title} desc={currMonthInfo.desc} amount={currMonthInfo.amount} prefixCls="down" overDue />
          </Printer>
        </div>
      </Tabs>
    );
  }
}

class Up extends React.Component {
  handleClick(item) {
    if (item.link) {
      console.log('item clicked', item.link);
    }
  }

  render() {
    const { list, ...restProps } = this.props;
    let itemBillList;

    if (list && list.length !== 0) {
      itemBillList = list.map((item) => {
        const arrow = 'horizontal';
        return <Item extra={item.value} arrow={arrow} onClick={() => { this.handleClick(item); }} >{ item.name }</Item>;
      });
    }
    return (
      <div {...restProps}>
        {itemBillList}
      </div>
    );
  }
}

// Down Component
const Down = (props) => {
  const { prefixCls, title, amount, desc, overDue } = props;
  const wrapClassNames = classnames({
    [`${prefixCls}-ctnr`]: true,
    [`${prefixCls}-overdue-wrap`]: overDue,
  });

  return (
    <div className={wrapClassNames} >
      <div className={`${prefixCls}-overdue`} />
      <div className={`${prefixCls}-animate`} />
      <div className={`${prefixCls}-remain-title`}>
        { title }
      </div>
      <div className={`${prefixCls}-remian-amount`}>
        { amount }
      </div>
      <div className={`${prefixCls}-message`}>{ desc }</div>
    </div>
  );
};


ReactDOM.render(<PrinterWithTabsExample />, mountNode);
````

````css
.am-list-content {
  font-size: 16px !important;
  color: #000;
  font-weight: 400;
  padding: 0;
}
.am-list-line .am-list-extra {
  font-weight: 300;
  font-size: 16px !important;
  color: #888888 !important;
  padding-bottom: 10px;
}

.am-list-line {
  padding-right: 0 !important;
  padding-bottom: 5px 0;
}

.am-list-item.am-list-item-active {
  background-color: transparent;
}

.am-list-item {
  margin: 0;
  border-bottom: 1px solid #E7E7E7;
  padding-left: 0;
}
.am-list-item .am-list-line .am-list-arrow {
  width: 8px;
  height: 8px;
}

.am-list-item:last-child {
  border:none;
}

/* Down Component */
.down-remain-title {
  position: relative;
  color: #333333;
  margin-top:29px;
  font-size: 16px;
}
.down-remian-amount {
  position: relative;
  color: #000;
  font-size: 50px;
  margin: 15px 0 14px 0;
  font-weight: bold;
  line-height: 1;
}
.down-message {
  position: relative;
  font-size: 14px;
  color: #999999;
}

.am-tabs-default-bar-tab-active {
  font-weight: 500;
  font-size: 22px;
}

.am-tabs-default-bar-top .am-tabs-default-bar-tab {
  border-bottom: none;
  font-size: 14px;
  font-weight: 300;
}
.am-tabs-default-bar-underline {
  border-radius: 2px;
  width: 25px !important;
  height: 2px;
  background-color: #fff;
  text-align: center;
  border: 0;
  margin-left: 13%;
}

.bill-list-topbar {
  background: #108EE9;
  height: 314px;
  width: 100%;
  padding-top: 132px;
  margin: 0;
  .iphonex({
    padding-top: 132px + @iphonex-padding-bottom;
  });
}
.am-tabs-default-bar-tab::after {
  background: none !important;
}
.am-printer-button {

}
````
