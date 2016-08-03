---
order: 1
title: IndexedList
destroyComponent: false
---

用于通讯薄等场景


````jsx
import { ListView, List, SearchBar } from 'antd-mobile';
const { Item } = List;

const NUM_SECTIONS = 26;
const NUM_ROWS_PER_SECTION = 10;

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
    for (let ii = 0; ii < NUM_SECTIONS; ii++) {
      const sectionName = String.fromCharCode(65 + ii);
      sectionIDs.push(sectionName);
      dataBlob[sectionName] = sectionName;
      rowIDs[ii] = [];

      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        rowIDs[ii].push(rowName);
        dataBlob[rowName] = rowName;
      }
    }
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
        renderRow={(rowData) => (<Item>Hello: {rowData}</Item>)}
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999, top: 83 },
          topOffset: -83,
        }}
        quickSearchBarStyle={{
          top: 85,
        }}
      />
    </div>);
  },
});

ReactDOM.render(<Demo />, mountNode);
````
