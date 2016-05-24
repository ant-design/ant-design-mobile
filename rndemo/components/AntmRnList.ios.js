import React from 'react';
import {
  Settings,
  SnapshotViewIOS,
  StyleSheet,
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

class UIExplorerList extends React.Component {
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
    return renderTextInput(styles.searchTextInput);
  }

  search(text: mixed) {
    Settings.set({
      searchText: text,
    });
  }

  onPressRow(example: any) {
    this.props.navigator.push({
      title: example.title,
      component: example.demo,
    });
  }
}

const styles = StyleSheet.create({
  searchTextInput: {
    height: 30,
  },
});

module.exports = UIExplorerList;
