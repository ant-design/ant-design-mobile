import { PropTypes } from 'react';
import React from 'react';
import assign from 'object-assign';
import { Image, View, Platform, TouchableHighlight, Text } from 'react-native';
import variables from '../style/themes/default';
import theme from './style/index';
import { ListItemProps, BriefProps } from './ListPropTypes';

const THEMES = theme.ThemesList;

class Brief extends React.Component<BriefProps, any> {
  render() {
    const { children, style } = this.props;
    return (<View style={{
      marginTop: variables.v_spacing_sm,
      height: variables.font_size_subhead,
    }}>
      <Text
        style={[THEMES.Brief, style]}
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
    // TODO remove last
    last: false,
    multipleLine: false,
  };

  static Brief: any;

  timer: any;

  render() {
    let line = 1;
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
          tempContentDom.push(<View key={`${index}-children`}>{el}</View>);
        } else {
          tempContentDom.push(<Text style={THEMES.Content} numberOfLines={1} key={`{index}-children`}>{el}</Text>);
        }
      });

      line = this.props.children.length;

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
              tempExtraDom.push(<Text
                numberOfLines={1}
                style={[THEMES.Extra, {textAlign: 'right'}]}
                key={`${index}-extra`}
              >
                {el}
              </Text>);
            } else {
              tempExtraDom.push(React.cloneElement(el, assign({}, el.props, {inExtra: true, key: index})));
            }
          });

          line = extraChildren.length > line ? extraChildren.length : line;

          extraDom = (<View style={{ flex: 1, flexDirection: 'column' }}>
            {tempExtraDom}
            </View>);
        } else {
          extraDom = this.props.extra;
        }
      } else {
        extraDom = (<View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={[THEMES.Extra, {textAlign: 'right'}]} numberOfLines={1}>{this.props.extra}</Text>
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

    let itemHeight;
    if (line === 2) {
      if (Platform.OS === 'android') {
        itemHeight = 60 + 2 * variables.v_spacing_sm;
      } else {
        itemHeight = 60 + variables.v_spacing_sm;
      }
    } else if (line > 2) {
      if (Platform.OS === 'android') {
        itemHeight = variables.list_item_height
          + (variables.font_size_subhead + variables.v_spacing_sm) * (line - 1)
          + 2 * variables.v_spacing_sm
          - 3;
      } else {
        itemHeight = variables.list_item_height
          + (variables.font_size_subhead + variables.v_spacing_sm) * (line - 1)
          + variables.v_spacing_sm
          - 3;
      }
    }

    const ItemStyle = [THEMES.Item,
      this.props.last ? THEMES.Last.Item : {},
      this.props.error ? THEMES.Error.Item : {},
      line > 1 ? { height: itemHeight} : {},
      this.props.style,
    ];

    const LineStyle = [THEMES.Line,
      this.props.multipleLine ? THEMES.multipleLine.Line : {},
      this.props.last ? THEMES.Last.Line : {},
      this.props.error ? THEMES.Error.Line : {},
    ];

    const itemView = (<View
      {...this.props}
      style={ItemStyle}
    >
      {thumbDom}
      <View
        style={LineStyle}
      >
        {contentDom}
        {extraDom}
        {arrowDom}
      </View>
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
