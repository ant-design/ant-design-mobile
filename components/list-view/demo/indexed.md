---
order: 1
title: IndexedList
destroyComponent: true
---

用于通讯薄等场景


````jsx
import { ListView, List, SearchBar } from 'antm';
const { Item } = List;

const NUM_SECTIONS = 20;
const NUM_ROWS_PER_SECTION = 10;

const Demo = React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    const getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };

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
      const sectionName = `Section ${ii}`;
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

  renderRow(rowData) {
    return (<Item>Hello: {rowData}</Item>);
  },

  renderSectionHeader(sectionData) {
    return (
      <div style={{ color: 'blue' }}>
        {sectionData}
      </div>
    );
  },

  render() {
    return (<div style={{ paddingTop: 40 }}>
      <div style={{ position: 'fixed', zIndex: 999, top: 43, left: 0, right: 0 }}>
      <SearchBar
        value=""
        placeholder="搜索"
        onSubmit={(value) => {console.log(`onSubmit${value}`);}}
        onChange={(value) => {console.log(value);}}
        onClear={() => {console.log('onClear');}}
        onCancel={() => {console.log('onCancel');}}
        onFocus={() => {console.log('onFocus');}}
        onBlur={() => {console.log('onBlur');}}
      />
      </div>
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => <span>footer</span>}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
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
