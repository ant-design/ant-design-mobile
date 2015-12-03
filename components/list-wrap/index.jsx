import React, {PropTypes} from 'react';
const ListWarp = React.createClass({
  propTypes: {
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      didMount(){
      }
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  render() {
    return (
      <div data-am-mode="flat chip form 43px" className="am-list">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListWarp;
