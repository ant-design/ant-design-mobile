---
order: 3
title: IndexedList sticky
destroyComponent: true
---

用于通讯薄等场景 sticky


````jsx
import province from 'site/data/province';
import { ListView, List, SearchBar } from 'antd-mobile';
const { Item } = List;

const Demo = React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    Object.keys(province).forEach((item, index) => {
      sectionIDs.push(item);
      dataBlob[item] = item;
      rowIDs[index] = [];

      province[item].forEach(jj => {
        rowIDs[index].push(jj.value);
        dataBlob[jj.value] = jj.label;
      });
    });
    return {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
    };
  },

  render() {
    return (<div style={{ paddingTop: 40 }}>
      <div style={{ position: 'fixed', zIndex: 999, top: 43, left: 0, right: 0 }}>
        <SearchBar
          value=""
          placeholder="搜索"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onChange={(value) => { console.log(value); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
          onFocus={() => { console.log('onFocus'); }}
          onBlur={() => { console.log('onBlur'); }}
        />
      </div>
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>头部内容请自定义</span>}
        renderFooter={() => <span>尾部内容请自定义</span>}
        renderSectionHeader={(sectionData) => (<div>{sectionData}</div>)}
        renderRow={(rowData) => (<Item>{rowData}</Item>)}
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999, top: 83 },
          topOffset: -83,
        }}
        quickSearchBarStyle={{
          top: 85,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>渲染中...</div>}
      />
    </div>);
  },
});

ReactDOM.render(<Demo />, mountNode);
````
