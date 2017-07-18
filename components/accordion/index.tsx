/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text } from 'react-native';
import RNAccordion from 'react-native-collapsible/Accordion';
import AccordionProps from './PropsType';
import AccordionStyle, { TAccordionStyle } from './style/index';
import Icon from '../icon';

export interface AccordionPanelProps {
  key?: string;
  header: any;
}

export interface AccordionNativeProps extends AccordionProps {
  styles?: TAccordionStyle;
}

class AccordionPanel extends React.Component<AccordionPanelProps, any> {
  render() {
    return null;
  }
}

class Accordion extends React.Component<AccordionNativeProps, any> {
  static defaultProps = {
    styles: AccordionStyle,
  };

  static Panel: any;

  _renderHeader = (section, _, isActive) => {
    const styles = this.props.styles!;
    return (
      <View style={[styles.header, section.style]}>
        {
          React.isValidElement(section.title) ? section.title : (
            <View style={styles.headerWrap}>
              <Text style={styles.headerText}>{section.title}</Text>
            </View>
          )
        }
        <View style={styles.arrow}>
          <Icon type={isActive ? 'up' : 'down'} size={15} color="#000" />
        </View>
      </View>
    );
  }

  _renderContent = (section) => {
    const styles = this.props.styles!;
    return React.isValidElement(section.content) ? section.content : (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  }

  onChange = (idx) => {
    const { onChange, children } = this.props;
    let key;
    React.Children.map(children, (child: any, index) => {
      if (idx === index) {
        key = child.key || `${index}`;
      }
    });
    if (onChange) {
      onChange(key);
    }
  }

  render() {
    const { children, style, defaultActiveKey, activeKey } = this.props;
    const styles = this.props.styles!;

    let defaultActiveSection;
    let activeSection;
    const headers = React.Children.map(children, (child: any, index) => {
      const key = child.key || `${index}`;
      if (key === defaultActiveKey) {
        defaultActiveSection = index;
      }
      if (key === activeKey) {
        activeSection = index;
      }
      return {
        title: child.props.header,
        content: child.props.children,
        style: child.props.style || {},
      };
    });

    return (
      <View style={[style, styles.container]}>
        <RNAccordion
          initiallyActiveSection={defaultActiveSection}
          activeSection={activeSection}
          underlayColor="transparent"
          sections={headers}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={0}
          onChange={this.onChange}
        />
      </View>
    );
  }
}

Accordion.Panel = AccordionPanel;

export default Accordion;
