import { PropTypes } from 'react';
import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import CheckboxStyle from './style/index';
import List from '../list/index';
import ListStyle from '../list/style/index';
import CheckboxItem from './CheckboxItem';

export default class Checkbox extends List.Item {
  static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    type: PropTypes.oneOf(['normal', 'agree']),
  };

  static defaultProps = {
    disabled: false,
    checked: false,
    type: 'normal',
  };

  constructor(props) {
    super(props);
    this.state = {checked: props.checked};
  }

  componentWillReceiveProps(props) {
    if (this.props.checked !== props.checked) {
      this.setState({checked: props.checked});
    }
  }

  render() {
    const state = this.state;
    const props = this.props;

    let checkboxDom = <CheckboxItem
      disabled={props.disabled}
      checked={state.checked}
      onChange={props.onChange} />;

    // default type is normal
    if (props.type === 'agree') {
      const content = (<View style={CheckboxStyle.CheckboxItem.AgreeItem}>
        {checkboxDom}
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
          {props.children}
        </View>
      </View>);
      if (props.disabled) {
        return content;
      } else {
        return (<TouchableWithoutFeedback onPress={() => this.setState({checked: !state.checked})}>
          {content}
        </TouchableWithoutFeedback>);
      }
    } else {
      const itemStyle = [ListStyle.ThemesList.Item,
        props.last ? ListStyle.ThemesList.Last.Item : {},
        props.error ? ListStyle.ThemesList.Error.Item : {},
        props.style];
      let labelDom = [];
      if (props.children) {
        labelDom = <Text style={CheckboxStyle.CheckboxItem.Label}>{props.children}</Text>;
      }

      if (props.disabled) {
        return (<View style={itemStyle}>{labelDom}{checkboxDom}</View>);
      } else {
        return (<TouchableWithoutFeedback onPress={() => this.setState({checked: !state.checked})}>
          <View style={itemStyle}>
            {labelDom}{checkboxDom}
          </View>
        </TouchableWithoutFeedback>);
      }
    }
  }
}
