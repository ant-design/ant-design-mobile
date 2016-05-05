---
order: 0
title: ActionSheet
---


````jsx
import { ActionSheet, Button, WhiteSpace } from 'antm';

const Test = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      BUTTONS: [
        'Option 0',
        'Option 1',
        'Option 2',
        'Delete',
        'Cancel',
      ],
      icons: [
        { iconName: 'android', title: '用Android' },
        { iconName: 'apple', title: '用Apple' },
        { iconName: 'github', title: '用github' },
        { iconName: 'github', title: '用github' },
        { iconName: 'github', title: '用github' },
        { iconName: 'github', title: '用github' },
      ],
    };
  },
  showActionSheet() {
    const BUTTONS = this.state.BUTTONS;
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      message: 'this is message',
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  showShareActionSheet() {
    const icons = this.state.icons;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      message: 'this is message',
    },
    (buttonIndex) => {
      this.setState({ clicked: icons[buttonIndex].title });
    });
  },
  showActionSheetWithCustom() {
    ActionSheet.showActionSheetWithCustom({
      message: 'this is message',
      component: <div style={{ color: 'red', padding: 20 }}>
        custom component
        <Button inline onClick={() => ActionSheet.close()}>close ActionSheet</Button>
      </div>
    });
  },
  render() {
    return (<div>
      <div>
        <Button type="primary" onClick={this.showActionSheet}>show ActionSheet</Button>
        <p>Clicked button: {this.state.clicked}</p>
      </div>
      <WhiteSpace />
      <div>
        <Button type="primary" onClick={this.showShareActionSheet}>showShareActionSheet</Button>
        <p>Clicked icon: {this.state.clicked}</p>
      </div>
      <WhiteSpace />
      <div>
        <Button type="primary" onClick={this.showActionSheetWithCustom}>showActionSheetWithCustom</Button>
        <p>Clicked: {this.state.clicked}</p>
      </div>
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
