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
    const { columns, dataSource, hTitles, direction, scrollX, fixedTitle, titleWidth } = this.props;

    const [{
      style, className
    },restProps] = splitObject(this.props,
      ['style', 'className']);
    
    let table;
    // 默认纵向
    if (!direction || direction === 'vertical') {
      if(fixedTitle) {
        
        let titleData = [];
    
        let titleColums = [];
        for(let i = 0; i < hTitles.length;i++) {
          
          titleData[i] = {
            title: hTitles[i],
            key:i 
          }
        }

        console.log(titleData)
        titleColums.push({
          title: 'tmp',
          dataIndex: 'title',
          key: 'title',
          width: titleWidth
        })

        table = <div style={{position:"relative"}}>
          <RcTable {...restProps} columns={titleColums}
            data={titleData}
            className="am-table am-table-vertical-title am-table-fixed-left"
            showHeader={false}
          />
          <div style={{marginLeft: titleWidth}}>
          <RcTable {...restProps} columns={columns}
            data={dataSource}
            className="am-table"
            scroll={{ x: true }} 
            showHeader={false}
          />
          </div>
        </div>
      } else {
        table = <RcTable {...restProps} columns={columns}
          data={dataSource}
          className="am-table"
          scroll={{ x: scrollX }} 
        />
      }
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
        scroll={{ x: scrollX }} 
      />  
    } else if (direction === 'mix' && hTitles.length > 0) {
      const columns_withTitle = [{dataIndex: 'horizonTitle', key: 'horizonTitle', className: 'am-table-horizonTitle'}].concat(columns)

      dataSource.map((item, index) => {
        item.horizonTitle = hTitles[index]
      })

      table = <RcTable {...restProps} columns={columns_withTitle}
        data={dataSource}
        className="am-table"
        scroll={{ x: scrollX }} 
      />   
    }

    return (
      <div style={{padding: 20}}>
      {
        table
      }  
      </div>
    );
  }
}
