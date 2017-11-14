import React from 'react';
import ReactDOM from 'react-dom';

const createPortal = (ReactDOM as any).createPortal;

export default class Portal extends React.Component<{
  getContainer: Function;
}, any> {

  _container: any;

  constructor(props) {
    super(props);
    this._container = this.props.getContainer();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    if (this.props.children) {
      return createPortal(this.props.children, this._container);
    }
    return null as any;
  }
}
