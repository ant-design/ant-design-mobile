import { PropTypes } from 'react';
import * as React from 'react';
import assign from 'object-assign';
import { Image, View, TouchableHighlight, Text } from 'react-native';
import variables from '../style/themes/default';
import theme from './style/index';
const THEMES = theme.ThemesList;

export interface CommonProps {
  style?: React.CSSProperties;
  children?: any;
}

export interface BriefProps {
  style?: React.CSSProperties;
  children?: any;
  inExtra?: boolean;
}

export interface ListItemProps {
  style?: React.CSSProperties;
  onClick?: any;
  multipleLine?: boolean;
  thumb?: any;
  children?: any;
  extra?: any;
  arrow?: 'horizontal'|'down'|'up'|'empty'|'';
  error?: boolean;
  lazy?: boolean;
  last?: boolean;
}

class Brief extends React.Component<BriefProps, any> {
  render() {
    const { children, style, inExtra } = this.props;
    return (<View style={{
      marginTop: variables.v_spacing_sm,
      height: 14 + variables.border_width_sm,
    }}>
      <Text
        style={[THEMES.Brief, style, inExtra ? { textAlign: 'right'} : null]}
        numberOfLines={1}
      >
        {children}
      </Text>
    </View>);
  }
}

export default class Item extends React.Component<ListItemProps, any> {
  static propTypes = {
    extra(props, propName) {
      if (props[propName]) {
        if (!React.isValidElement(props[propName]) && typeof(props[propName]) !== 'string') {
          throw new Error('extra must be a string or element');
        }
      }
    },
    arrow: PropTypes.oneOf(['horizontal', 'down', 'up', 'empty', '']),
  };

  static defaultProps = {
    lazy: false,
    last: false,
    multipleLine: false,
  };

  static Brief: any;

  timer: any;

  constructor(props) {
    super(props);
    this.state = {
      __lazy: this.props.lazy,
    };
  }

  componentWillMount() {
    if (this.state.__lazy) {
      this.timer = setTimeout(() => this.setState({__lazy: false}), 500);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    if (this.state.__lazy) {
      return (<View />);
    }
    let thumbDom = null;
    let contentDom = null;
    let extraDom = null;
    let arrowDom = null;
    let thumb = this.props.thumb;

    if (thumb) {
      if (typeof thumb === 'string') {
        thumbDom = (<Image
          source={{ uri: thumb }}
          style={[THEMES.Thumb,
            this.props.multipleLine ? THEMES.multipleLine.Thumb : null,
          ]}
        />);
      } else {
        thumbDom = thumb;
      }
    }
    if (Array.isArray(this.props.children)) {
      const tempContentDom = [];
      this.props.children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(<View style={{ flex: 1, flexDirection: 'column' }} key={`${index}-children`}>{el}</View>);
        } else {
          tempContentDom.push(<Text style={THEMES.Content} numberOfLines={1} key={`{index}-children`}>{el}</Text>);
        }
      });
      contentDom = <View style={{ flex: 1, flexDirection: 'column' }}>{tempContentDom}</View>;
    } else {
      if (React.isValidElement(this.props.children)) {
        contentDom = <View style={{ flex: 1, flexDirection: 'column' }}>{this.props.children}</View>;
      } else {
        contentDom = <View style={{ flex: 1, flexDirection: 'column'}}>
          <Text style={THEMES.Content} numberOfLines={1}>{this.props.children}</Text>
        </View>;
      }
    }

    if (this.props.extra) {
      if (React.isValidElement(this.props.extra)) {
        const extraChildren = this.props.extra.props.children;
        if (Array.isArray(extraChildren)) {
          const tempExtraDom = [];
          extraChildren.forEach((el, index) => {
            if (typeof el === 'string') {
              tempExtraDom.push(<Text numberOfLines={1} style={THEMES.Extra} key={`${index}-extra`}>{el}</Text>);
            } else {
              tempExtraDom.push(React.cloneElement(el, assign({}, el.props, {inExtra: true, key: index})));
            }
          });

          extraDom = (<View style={{ flex: 1, flexDirection: 'column' }}>
            {tempExtraDom}
            </View>);
        } else {
          extraDom = this.props.extra;
        }
      } else {
        extraDom = (<View style={{ flex: 1}}>
          <Text style={THEMES.Extra} numberOfLines={1}>{this.props.extra}</Text>
        </View>);
      }
    }
    if (this.props.arrow) {
      switch (this.props.arrow) {
        case 'horizontal':
          arrowDom = <Image source={require('../style/images/arrow.png')} style={THEMES.Arrow}/>;
          break;
        case 'down':
          arrowDom = <Image source={require('../style/images/arrow-up.png')} style={THEMES.ArrowV}/>;
          break;
        case 'up':
          arrowDom = <Image source={require('../style/images/arrow-down.png')} style={THEMES.ArrowV}/>;
          break;
        default:
          arrowDom = <View style={THEMES.Arrow}/>;
          break;
      }
    }

    const itemStyle = [THEMES.Item,
      this.props.multipleLine ? THEMES.multipleLine.Item : {},
      this.props.last ? THEMES.Last.Item : {},
      this.props.error ? THEMES.Error.Item : {},
      this.props.style];

    const itemView = (<View
      {...this.props}
      style={itemStyle}>
      {thumbDom}
      {contentDom}
      {extraDom}
      {arrowDom}
    </View>);

    if (this.props.onClick) {
      return (
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={THEMES.underlayColor}
          onPress={this.props.onClick}
          onPressIn={() => {}}
          onPressOut={() => {}}
        >
          {itemView}
        </TouchableHighlight>
      );
    }

    return itemView;
  }
}

Item.Brief = Brief;
