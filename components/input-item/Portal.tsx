import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const createPortal = (ReactDOM as any).createPortal;

export default class Portal extends React.Component<any, any> {
  static propTypes = {
    getContainer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  _container: any;

  constructor(props) {
    super(props);
    this._container = this.props.getContainer();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container);
    }
  }

  render() {
    if (this.props.children) {
      return createPortal(this.props.children, this._container);
    }
    return null;
  }
}
