---
order: 0
title: ActionSheet
---


````jsx
import { ActionSheet, Button } from 'antm';

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },

  onClick() {
    this.setState({
      visible: true,
    });
  },

  onClose() {
    this.setState({
      visible: false,
    });
  },
  render() {
    let as = null;
    if (this.state.visible) {
      as = (
        <ActionSheet visible={this.state.visible}>
          ActionSheet
        </ActionSheet>
      );
    }
    return (<div>
      <Button onClick={this.onClick}>show ActionSheet</Button>
      {as}
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
