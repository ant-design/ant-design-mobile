import React, {PropTypes} from 'react';
function noop() {}

const ListBody = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      didMount: noop,
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  render(){
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list-body'}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListBody;
