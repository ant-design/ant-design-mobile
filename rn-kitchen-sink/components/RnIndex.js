import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List } from 'antd-mobile';
import { APIS, COMPONENTS } from '../demoList';

export default class RnIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      APIS,
      COMPONENTS,
    };

    this.search = this.search.bind(this);
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
      APIS: APIS.filter(filter),
      COMPONENTS: COMPONENTS.filter(filter),
      searchText: text,
    });
  }

  render() {
    const { APIS, COMPONENTS } = this.state;
    return (
      <ScrollView style={styles.container}>
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
        <List
          title="APIS"
          style={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <List.Body>
            {APIS.map((el, index) => {
              return (<List.Item
                thumb={el.icon}
                onClick={() => { this.onPressRow(el); }}
                arrow="horizontal"
                key={`APIS-${index}`}
              >{`${el.title} ${el.description}`}</List.Item>);
            })}
          </List.Body>
        </List>
        <List
          title="COMPONENTS"
          style={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <List.Body>
            {COMPONENTS.map((el, index) => {
              return (<List.Item
                thumb={el.icon}
                onClick={() => { this.onPressRow(el); }}
                arrow="horizontal"
                key={`COMPONENTS-${index}`}
              >{`${el.title} ${el.description}`}</List.Item>);
            })}
          </List.Body>
        </List>
      </ScrollView>
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
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  searchTextInput: {
    height: 36,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 0.5,
    paddingLeft: 8,
  },
});
