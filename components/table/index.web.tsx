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
    const { columns, dataSource, direction, scrollX, titleFixed } = this.props;

    const [{
      style, className
    },restProps] = splitObject(this.props,
      ['style', 'className']);
    
    let table;
    // 默认纵向
    if (!direction || direction === 'vertical') {
      if(titleFixed) {
        table = <RcTable {...restProps} columns={columns}
          data={dataSource}
          className="am-table"
          scroll={{ x: true }} 
          showHeader={false}  
        />
      } else {
        table = <RcTable {...restProps} columns={columns}
          data={dataSource}
          className="am-table"
          scroll={{ x: scrollX }}
        />
      }
    // 横向
    } else if (direction === 'horizon') {
      columns[0].className = 'am-table-horizonTitle'
      table = <RcTable {...restProps} columns={columns}
        data={dataSource}
        className="am-table"
        showHeader={false}
        scroll={{ x: scrollX }} 
      /> 
    // 混合 
    } else if (direction === 'mix') {
      const columns_withTitle = [{dataIndex: 'title', key: 'title', className: 'am-table-horizonTitle'}].concat(columns)
      table = <RcTable {...restProps} columns={columns_withTitle}
        data={dataSource}
        className="am-table"
        scroll={{ x: scrollX }} 
      />    
    }

    return (
      <div>
      {
        table
      }  
      </div>
    );
  }
}
