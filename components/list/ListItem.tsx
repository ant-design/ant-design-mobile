import { PropTypes } from 'react';
import * as React from 'react';
import { Image, View, TouchableHighlight, Text } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import theme from './style/index';
const THEMES = theme.ThemesList;
const ASSETS = theme.AssetsList;

class Content extends React.Component<any, any> {
  render() {
    return (<Text style={[THEMES.Content, this.props.style]} numberOfLines={1}>{this.props.children}</Text>);
  }
}

class AffiliatedContent extends React.Component<any, any> {
  render() {
    return (<Text style={[THEMES.AffiliatedContent, this.props.style]} numberOfLines={1}>{this.props.children}</Text>);
  }
}

class Extra extends React.Component<any, any> {
  render() {
    return (<View style={{ alignItems: 'flex-end' }}>{this.props.children}</View>);
  }
}

class Detail extends React.Component<any, any> {
  render() {
    return (<Text style={[THEMES.Detail, this.props.style]} numberOfLines={1}>{this.props.children}</Text>);
  }
}

export default class Item extends React.Component<any, any> {
  static propTypes = {
    extra(props, propName) {
      if (props[propName]) {
        if (!React.isValidElement(props[propName]) && typeof(props[propName]) !== 'string') {
          throw new Error('extra must be a string or element');
        }
      }
    },
    onClick: PropTypes.func,
    line: PropTypes.number,
    arrow: PropTypes.oneOf(['horizontal', 'down', 'up']),
    error: PropTypes.bool,
    lazy: PropTypes.bool,
    last: PropTypes.bool
  };

  static defaultProps = {
    lazy: false,
    last: false,
    line: 1,
  };

  mixins: [TimerMixin];

  constructor(props) {
    super(props);
    this.state = {
      __lazy: this.props.lazy,
    };
  }

  componentWillMount() {
    if (this.state.__lazy) {
      this.setTimeout(() => this.setState({ __lazy: false }), 500);
    }
  }

  render() {
    if (this.state.__lazy) {
      return (<View />);
    }
    let thumbDom = [];
    let contentDom = [];
    let extraDom = [];
    let arrowDom = [];

    if (this.props.thumb) {
      thumbDom = (<Image source={{ uri: this.props.thumb }} style={[THEMES.Thumb,
        this.props.line === 2 ? THEMES.Line2.Thumb : {}]} />);
    }
    if ((this.props.line === 2) && React.isValidElement(this.props.children)) {
      contentDom = <View style={{ flex: 1 }}>{this.props.children}</View>;
    } else {
      contentDom = <Text style={THEMES.Content} numberOfLines={1}>{this.props.children}</Text>;
    }
    if (this.props.extra) {
      if (React.isValidElement(this.props.extra)) {
        extraDom = this.props.extra;
      } else {
        extraDom = <Text style={THEMES.Extra} numberOfLines={1}>{this.props.extra}</Text>;
      }
    }
    if (this.props.arrow) {
      switch (this.props.arrow) {
        case 'horizontal':
          arrowDom = <Image source={{ uri: ASSETS.arrowH }} style={THEMES.Arrow} />;
          break;
        case 'down':
          arrowDom = <Image source={{ uri: ASSETS.arrowDown }} style={THEMES.Arrow} />;
          break;
        case 'up':
          arrowDom = <Image source={{ uri: ASSETS.arrowUp }} style={THEMES.Arrow} />;
          break;
        default:
          arrowDom = <View style={THEMES.Arrow} />;
          break;
      }
    }
    const itemStyle = [THEMES.Item,
        this.props.line === 2 ? THEMES.Line2.Item : {},
        this.props.last ? THEMES.Last.Item : {},
        this.props.error ? THEMES.Error.Item : {},
        this.props.style];

    const itemView = (<View {...this.props} style={itemStyle}>
        {thumbDom}{contentDom}{extraDom}{arrowDom}
      </View>);

    if (this.props.onClick) {
      return (<TouchableHighlight activeOpacity={1} underlayColor={THEMES.underlayColor} onPress={this.props.onClick} onPressIn={() => {}} onPressOut={() => {}}>
        {itemView}
      </TouchableHighlight>);
    }

    return itemView;
  }
}

Item.Content = Content;
Item.AffiliatedContent = AffiliatedContent;
Item.Extra = Extra;
Item.Detail = Detail;
