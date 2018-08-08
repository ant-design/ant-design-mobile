---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---
Printer

````jsx
import { Printer, List } from 'antd-mobile';
import classnames from 'classnames';

const Item = List.Item;

const monthList = [
  { name: 'Auguest Bill', value: '7,000.00', link: '/refund.html' },
  { name: 'Refund', value: '-2,000.00', link: '/refund.html' },
  { name: 'Paid', value: '-1,000.00', link: '/refund.html' },
  { name: 'Unpaid', value: '2,300.00', link: '/refund.html' },
];
const currMonthInfo = {
  title: 'Auguest Amount',
  amount: '8,800.00',
  desc: 'Before Aug. 10th, min payment: $800',
};

const PrinterExample = () => (
  <Printer initialAnim>
    <Up list={monthList} />
    <Down title={currMonthInfo.title} desc={currMonthInfo.desc} amount={currMonthInfo.amount} prefixCls="down" overDue />
  </Printer>
);

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
  const prefixCls = 'down';
  const wrapClassNames = classnames({
    [`${prefixCls}-ctnr`]: true,
    [`${prefixCls}-overdue-wrap`]: props.overDue,
  });
  return (
    <div className={wrapClassNames} >
      <div className={`${prefixCls}-overdue`} />
      <div className={`${prefixCls}-animate`} />
      <div className={`${prefixCls}-remain-title`}>
        { props.title }
      </div>
      <div className={`${prefixCls}-remian-amount`}>
        { props.amount }
      </div>
      <div className={`${prefixCls}-message`}>{ props.desc }</div>
    </div>
  );
};


ReactDOM.render(<PrinterExample />, mountNode);
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
  padding-bottom: 10px !important;
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

````
