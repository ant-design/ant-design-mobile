import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ListView,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { APIS, COMPONENTS } from '../demoList';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
});

export default class RnIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRowsAndSections({
        components: [],
        apis: [],
      }),
      searchText: '',
    };

    this.search = this.search.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.search(this.state.searchText);
  }

  onPressRow(rowData) {
    if (rowData.title) {
      Actions[rowData.title]();
    } else {
      console.log('demoList.js 中配置的组件必须要有 title');
    }
  }

  search(text) {
    const regex = new RegExp(String(text), 'i');
    const filter = (component) => regex.test(component.title);

    this.setState({
      dataSource: ds.cloneWithRowsAndSections({
        apis: APIS.filter(filter),
        components: COMPONENTS.filter(filter),
      }),
      searchText: text,
    });
  }

  renderRow(rowData, i) {
    const icon = rowData.icon ? rowData.icon : 'https://zos.alipayobjects.com/rmsportal/lSsJiCJnOzSnBJG.png';
    return (
      <View key={i}>
        <TouchableHighlight onPress={() => this.onPressRow(rowData)}>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri: icon}} />
            <View style={{flex: 1}}>
              <Text style={styles.rowTitleText}>
                    {rowData.title}
              </Text>
              <Text style={styles.rowDetailText}>
                    {rowData.description}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  _renderSectionHeader(sectionData, sectionID) {
    return (
      <Text style={styles.sectionHeader}>
            {sectionID.toUpperCase()}
      </Text>
    );
  }

  _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchTextInput}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={this.search}
            placeholder="Search..."
            value={this.state.searchText}
          />
        </View>
        <ListView
          style={styles.list}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this._renderSectionHeader}
          renderSeparator={this._renderSeperator}
          keyboardShouldPersistTaps={true}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchRow: {
    backgroundColor: '#eeeeee',
    paddingTop: 75,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  searchTextInput: {
    height: 32,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 8
  },
  list: {
    backgroundColor: '#eeeeee',
    height: Dimensions.get('window').height - 117
  },
  sectionHeader: {
    padding: 5,
    fontWeight: '500',
    fontSize: 11,
  },
  row: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row'
  },
  image: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  rowTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  rowDetailText: {
    fontSize: 14,
    color: '#888888',
    lineHeight: 20,
  },
});
