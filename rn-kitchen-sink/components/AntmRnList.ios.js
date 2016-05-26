import React from 'react';
import {
  Settings,
  StyleSheet,
  ScrollView,
} from 'react-native';

import type { NavigationContext } from 'NavigationContext';
import AntmRnListBase from './AntmRnListBase';
import { COMPONENTS, APIS } from '../demoList';

type Props = {
  navigator: {
    navigationContext: NavigationContext,
    push: (route: {title: string, component: ReactClass<any,any,any>}) => void,
  },
  onExternalExampleRequested: Function,
};

class AntmRnList extends React.Component {
  props: Props;

  render() {
    return (
      <AntmRnListBase
        components={COMPONENTS}
        apis={APIS}
        searchText={Settings.get('searchText')}
        renderAdditionalView={this.renderAdditionalView.bind(this)}
        search={this.search.bind(this)}
        onPressRow={this.onPressRow.bind(this)}
      />
    );
  }

  renderAdditionalView(renderRow: Function, renderTextInput: Function): React.Component {
    return renderTextInput(styles.searchTextInput, styles.searchRow);
  }

  search(text: mixed) {
    Settings.set({
      searchText: text,
    });
  }

  onPressRow(example: any) {
    const Component = example.demo;
    this.props.navigator.push({
      title: example.title,
      component: React.createClass({
        render() {
          return (
            <ScrollView automaticallyAdjustContentInsets={true}>
              <Component />
            </ScrollView>
          );
        }
      }),
    });
  }
}

const styles = StyleSheet.create({
  searchRow: {
    paddingTop: 75,
  },
  searchTextInput: {
    height: 30,
  },
});

export default AntmRnList;
