import React, { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

class Button extends React.Component {
  render() {
    return (<View style={[styles.button]}>
      {this.props.children}
    </View>);
  }
}

export default Button;
