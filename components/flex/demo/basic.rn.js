import { Button, Flex, WingBlank } from 'antm';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#aaccff',
    borderRadius: 10,
    borderWidth: 0.5,
    opacity: 0.5,
    padding: 5,
  },
});

const Circle = React.createClass({
  render() {
    const size = this.props.size || 20;
    return (
      <View
        style={{
          borderRadius: size / 2,
          backgroundColor: '#527fe4',
          width: size,
          height: size,
          margin: 1,
        }}
      />
    );
  }
});

const CircleBlock = React.createClass({
  render() {
    const circleStyle = {
      flexDirection: 'row',
      backgroundColor: '#f6f7f8',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      marginBottom: 2,
    };
    return (
      <View style={[circleStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
});

class FlexExample extends React.Component {
  render() {
    return (
      <View>
        <Text>row</Text>
        <CircleBlock style={{ flexDirection: 'row' }}>
          <Circle /><Circle /><Circle /><Circle /><Circle />
          <Circle /><Circle /><Circle /><Circle /><Circle />
          <Circle /><Circle /><Circle /><Circle /><Circle />
        </CircleBlock>
        <WingBlank>
          <CircleBlock style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button mode="white" size="little" style={{ borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>白色31px按钮</Button>
            <Button mode="white" size="little" style={{ borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>白色31px按钮</Button>
            <Button mode="white" size="little" style={{ borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>白色31px按钮</Button>
          </CircleBlock>
        </WingBlank>
        <WingBlank>
          <Button mode="white" size="little" style={{ borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>白色31px按钮</Button>
          <Button mode="white" size="little" style={{ borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>白色31px按钮</Button>
        </WingBlank>
        <Text>column</Text>
        <CircleBlock style={{ flexDirection: 'column' }}>
          <Circle /><Circle /><Circle /><Circle /><Circle />
        </CircleBlock>
        <View style={[styles.overlay, { position: 'absolute', top: 15, left: 160 }]}>
          <Text>{'top: 15, left: 160'}</Text>
        </View>
        <Flex><Text>白色31px按钮</Text></Flex>
        <Text>flex-start</Text>
        <CircleBlock style={{ justifyContent: 'flex-start' }}>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleBlock>
        <Text>center</Text>
        <CircleBlock style={{ justifyContent: 'center' }}>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleBlock>
        <Text>flex-end</Text>
        <CircleBlock style={{ justifyContent: 'flex-end' }}>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleBlock>
        <Text>space-between</Text>
        <CircleBlock style={{ justifyContent: 'space-between' }}>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleBlock>
        <Text>space-around</Text>
        <CircleBlock style={{ justifyContent: 'space-around' }}>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleBlock>
        <Button mode="red" size="tiny">红色26px按钮</Button>
        <Text>flex-start</Text>
        <CircleBlock style={{ alignItems: 'flex-start', height: 30 }}>
          <Circle size={15} /><Circle size={10} /><Circle size={20} />
          <Circle size={17} /><Circle size={12} /><Circle size={15} />
          <Circle size={10} /><Circle size={20} /><Circle size={17} />
          <Circle size={12} /><Circle size={15} /><Circle size={10} />
          <Circle size={20} /><Circle size={17} /><Circle size={12} />
          <Circle size={15} /><Circle size={8} />
        </CircleBlock>
        <Text>center</Text>
        <CircleBlock style={{ alignItems: 'center', height: 30 }}>
          <Circle size={15} /><Circle size={10} /><Circle size={20} />
          <Circle size={17} /><Circle size={12} /><Circle size={15} />
          <Circle size={10} /><Circle size={20} /><Circle size={17} />
          <Circle size={12} /><Circle size={15} /><Circle size={10} />
          <Circle size={20} /><Circle size={17} /><Circle size={12} />
          <Circle size={15} /><Circle size={8} />
        </CircleBlock>
        <Text>flex-end</Text>
        <CircleBlock style={{ alignItems: 'flex-end', height: 30 }}>
          <Circle size={15} /><Circle size={10} /><Circle size={20} />
          <Circle size={17} /><Circle size={12} /><Circle size={15} />
          <Circle size={10} /><Circle size={20} /><Circle size={17} />
          <Circle size={12} /><Circle size={15} /><Circle size={10} />
          <Circle size={20} /><Circle size={17} /><Circle size={12} />
          <Circle size={15} /><Circle size={8} />
        </CircleBlock>
        <Button mode="white" size="little">白色31px按钮</Button>
        <CircleBlock style={{ flexWrap: 'wrap' }}>
          {'oooooooooooooooo'.split('').map((char, i) => <Circle key={i} />)}
        </CircleBlock>
      </View>
    );
  }
}

exports.title = 'Flex';
exports.description = 'Flex example';
exports.demo = FlexExample;
