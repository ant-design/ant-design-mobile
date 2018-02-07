import {
  ActivityIndicator,
  Button,
  Flex,
  WhiteSpace,
  WingBlank,
} from 'antd-mobile';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ActivityIndicatorExample extends React.Component<
  any,
  any
> {
  closeTimer: any;
  constructor(props: any) {
    super(props);
    this.state = {
      animating: false,
    };
    this.loadingToast = this.loadingToast.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer);
  }

  loadingToast() {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 2000);
  }

  render() {
    return (
      <View style={[styles.demo]}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon without text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon with text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text="Loading..." />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Dark Background</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color="#fff" />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Large Size</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size="large" />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Button onClick={this.loadingToast}>Click to show Toast</Button>
        </WingBlank>
        <ActivityIndicator
          animating={this.state.animating}
          toast
          size="large"
          text="Loading..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42',
  },
  gray: {
    backgroundColor: '#CCC',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});
