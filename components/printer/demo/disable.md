---
order: 2
title:
  zh-CN: 禁用
  en-US: Disable
---
Printer

````jsx
import { Printer } from 'antd-mobile';
import classnames from 'classnames';

const currMonthInfo = {
  title: 'Auguest Amount',
  amount: '8,800.00',
  desc: 'Before Aug. 10th, min payment: $800',
};

const PrinterExample = () => (
  <Printer id="disable" initialAnim disable height="240">
    <Down title={currMonthInfo.title} desc={currMonthInfo.desc} amount={currMonthInfo.amount} prefixCls="down" overDue />
  </Printer>
);

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

ReactDOM.render(<PrinterExample />, mountNode);
````

````css
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

#disable .am-printer-component-cntr {
  height: 220px !important;
}
````
