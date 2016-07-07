import React from 'react';
import RcTable from 'rc-table';
import classNames from 'classnames';
function noop() {
}
import splitObject from '../_util/splitObject';

export default class Table extends React.Component {

  static defaultProps = {
    dataSource: [],
    prefixCls: 'am-table',
  }

  render() {
    const { columns, dataSource, hTitles, direction } = this.props;

    const [{
      style, className
    },restProps] = splitObject(this.props,
      ['style', 'className']);
    
    let table;
    // 默认纵向
    if (!direction || direction === 'vertical') {
      table = <RcTable {...restProps} columns={columns}
        data={dataSource}
        className="am-table"
      />
    // 横向
    } else if (direction === 'horizon' && hTitles.length > 0 ) {
      const columns_withTitle = [{dataIndex: 'horizonTitle', key: 'horizonTitle', className: 'am-table-horizonTitle'}].concat(columns)

      dataSource.map((item, index) => {
        item.horizonTitle = hTitles[index]
      })

      table = <RcTable {...restProps} columns={columns_withTitle}
        data={dataSource}
        className="am-table"
        showHeader={false}
      />  
    } else if (direction === 'mix' && hTitles.length > 0) {
      const columns_withTitle = [{dataIndex: 'horizonTitle', key: 'horizonTitle', className: 'am-table-horizonTitle'}].concat(columns)

      dataSource.map((item, index) => {
        item.horizonTitle = hTitles[index]
      })

      table = <RcTable {...restProps} columns={columns_withTitle}
        data={dataSource}
        className="am-table"
      />   
    }

    return (
      <div>
      {table}  
      </div>
    );
  }
}
