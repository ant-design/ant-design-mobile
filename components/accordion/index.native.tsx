// tslint:disable:jsx-no-multiline-js
import React from 'react';
import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import RNAccordion from 'react-native-collapsible/Accordion';
import { AccordionPropsTypes } from './PropsType';
import AccordionStyles, { AccordionStyle } from './style/index.native';

export interface AccordionPanelProps {
  key?: string;
  header: any;
}

export interface AccordionNativeProps extends AccordionPropsTypes {
  styles?: AccordionStyle;
  style?: StyleProp<ViewStyle>;
}
export interface AccordionHeader {
  title: string;
  content: React.ReactElement<any>;
  style: StyleProp<ViewStyle>;
}
class AccordionPanel extends React.Component<AccordionPanelProps, any> {
  render() {
    return null;
  }
}

class Accordion extends React.Component<AccordionNativeProps, any> {
  static defaultProps = {
    styles: AccordionStyles as any,
  };

  static Panel: any;

  renderHeader = (section: AccordionHeader, _: number, isActive: boolean) => {
    const styles = this.props.styles!;
    return (
      <View style={[styles.header, section.style]}>
        {React.isValidElement(section.title) ? (
          section.title
        ) : (
          <View style={styles.headerWrap}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        <View style={styles.arrow}>
          <Image
            source={
              isActive
                ? require('./style/assets/up.png')
                : require('./style/assets/down.png')
            }
            style={styles.arrow}
          />
        </View>
      </View>
    );
  }

  renderContent = (section: AccordionHeader) => {
    const styles = this.props.styles!;
    return React.isValidElement(section.content) ? (
      section.content
    ) : (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  }

  onChange = (idx: number) => {
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
          sections={headers as any}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={0}
          onChange={this.onChange}
        />
      </View>
    );
  }
}

Accordion.Panel = AccordionPanel;

export default Accordion;
