webpackJsonp([160],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(489);
	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(4);
	const ReactRouter = __webpack_require__(159);
	const NProgress = __webpack_require__(650);
	__webpack_require__(532);
	const history = __webpack_require__(543);
	
	const chain = __webpack_require__(656);
	const toReactComponent = __webpack_require__(406);
	const exist = __webpack_require__(529);
	const NotFound = __webpack_require__(355);
	const data = __webpack_require__(496);
	
	const plugins = data.plugins;
	const converters = chain((plugin) => plugin.converters || [], plugins);
	const utils = {
	  get: exist.get,
	  toReactComponent(jsonml) {
	    return toReactComponent(jsonml, converters);
	  },
	};
	plugins.map((plugin) => plugin.utils || {})
	  .forEach((u) => Object.assign(utils, u));
	
	function calcPropsPath(dataPath, params) {
	  return Object.keys(params).reduce(
	    (path, param) => path.replace(`:${param}`, params[param]),
	    dataPath
	  );
	}
	
	function hasParams(dataPath) {
	  return dataPath.split('/').some((snippet) => snippet.startsWith(':'));
	}
	
	function defaultCollect(nextProps, callback) {
	  callback(null, nextProps);
	}
	function templateWrapper(template, dataPath = '') {
	  const Template = __webpack_require__(1540)("./template" + template.replace(/^\.\/template/, ''));
	
	  return (nextState, callback) => {
	    const propsPath = calcPropsPath(dataPath, nextState.params);
	    const pageData = exist.get(data.markdown, propsPath.replace(/^\//, '').split('/'));
	    const collect = Template.collect || defaultCollect;
	    collect(Object.assign({}, nextState, {
	      data: data.markdown,
	      pageData,
	      utils,
	    }), (err, nextProps) => {
	      const Comp = !hasParams(dataPath) || pageData ?
	              Template.default || Template : NotFound;
	      Comp.dynamicProps = nextProps;
	      callback(err, Comp);
	    });
	  };
	}
	
	const theme = __webpack_require__(919);
	const routes = Array.isArray(theme.routes) ? theme.routes : [theme.routes];
	
	function processRoutes(route) {
	  if (Array.isArray(route)) {
	    return route.map(processRoutes);
	  }
	
	  return Object.assign({}, route, {
	    onEnter: () => NProgress.start(),
	    component: undefined,
	    getComponent: templateWrapper(route.component, route.dataPath || route.path),
	    indexRoute: route.indexRoute && Object.assign({}, route.indexRoute, {
	      component: undefined,
	      getComponent: templateWrapper(
	        route.indexRoute.component,
	        route.indexRoute.dataPath || route.indexRoute.path
	      ),
	    }),
	    childRoutes: route.childRoutes && route.childRoutes.map(processRoutes),
	  });
	}
	
	const processedRoutes = processRoutes(routes);
	processedRoutes.push({
	  path: '*',
	  getComponents: templateWrapper('./template/NotFound'),
	});
	
	function createElement(Component, props) {
	  NProgress.done();
	  return React.createElement(Component, Object.assign({}, props, Component.dynamicProps));
	}
	
	const router = React.createElement(ReactRouter.Router, {
	  history: ReactRouter.useRouterHistory(history.createHistory)({
	    basename: '/kitchen-sink',
	  }),
	  routes: processedRoutes,
	  createElement,
	});
	ReactDOM.render(
	  router,
	  document.getElementById('react-content')
	);


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(7);
	
	__webpack_require__(6);
	
	var pixelRatio = Math.floor(window.devicePixelRatio || 1);
	if (pixelRatio >= 2) {
	    document.querySelector('html').classList.add('pixel-ratio-' + pixelRatio);
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 7:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 12:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = splitObject;
	function splitObject(obj, parts) {
	    var left = {};
	    var right = {};
	    Object.keys(obj).forEach(function (k) {
	        if (parts.indexOf(k) !== -1) {
	            left[k] = obj[k];
	        } else {
	            right[k] = obj[k];
	        }
	    });
	    return [left, right];
	}
	module.exports = exports['default'];

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _ListHeader = __webpack_require__(21);
	
	var _ListHeader2 = _interopRequireDefault(_ListHeader);
	
	var _ListBody = __webpack_require__(19);
	
	var _ListBody2 = _interopRequireDefault(_ListBody);
	
	var _ListFooter = __webpack_require__(20);
	
	var _ListFooter2 = _interopRequireDefault(_ListFooter);
	
	var _ListItem = __webpack_require__(22);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var List = function (_React$Component) {
	    _inherits(List, _React$Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    List.prototype.render = function render() {
	        var _classNames;
	
	        var _props = this.props;
	        var prefixCls = _props.prefixCls;
	        var children = _props.children;
	        var className = _props.className;
	        var style = _props.style;
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, className), _classNames));
	        return React.createElement(
	            'div',
	            { className: wrapCls, style: style },
	            children
	        );
	    };
	
	    return List;
	}(React.Component);
	
	List.defaultProps = {
	    prefixCls: 'am-list'
	};
	List.Header = _ListHeader2.default;
	List.Body = _ListBody2.default;
	List.Footer = _ListFooter2.default;
	List.Item = _ListItem2.default;
	exports.default = List;
	module.exports = exports['default'];

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(24);

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var ListBody = function (_React$Component) {
	    _inherits(ListBody, _React$Component);
	
	    function ListBody() {
	        _classCallCheck(this, ListBody);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    ListBody.prototype.render = function render() {
	        var _classNames;
	
	        var _props = this.props;
	        var prefixCls = _props.prefixCls;
	        var children = _props.children;
	        var className = _props.className;
	        var style = _props.style;
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-body', true), _defineProperty(_classNames, className, className), _classNames));
	        return React.createElement(
	            'div',
	            { className: wrapCls, style: style },
	            children
	        );
	    };
	
	    return ListBody;
	}(React.Component);
	
	exports.default = ListBody;
	
	ListBody.defaultProps = {
	    prefixCls: 'am-list'
	};
	module.exports = exports['default'];

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var ListFooter = function (_React$Component) {
	    _inherits(ListFooter, _React$Component);
	
	    function ListFooter() {
	        _classCallCheck(this, ListFooter);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    ListFooter.prototype.render = function render() {
	        var _classNames;
	
	        var _props = this.props;
	        var prefixCls = _props.prefixCls;
	        var children = _props.children;
	        var className = _props.className;
	        var style = _props.style;
	        var onClick = _props.onClick;
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-footer', true), _defineProperty(_classNames, className, className), _classNames));
	        return React.createElement(
	            'div',
	            { className: wrapCls, style: style, onClick: onClick },
	            children
	        );
	    };
	
	    return ListFooter;
	}(React.Component);
	
	exports.default = ListFooter;
	
	ListFooter.propTypes = {
	    prefixCls: _react.PropTypes.string
	};
	ListFooter.defaultProps = {
	    prefixCls: 'am-list'
	};
	module.exports = exports['default'];

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var ListHeader = function (_React$Component) {
	    _inherits(ListHeader, _React$Component);
	
	    function ListHeader() {
	        _classCallCheck(this, ListHeader);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    ListHeader.prototype.render = function render() {
	        var _classNames;
	
	        var _props = this.props;
	        var prefixCls = _props.prefixCls;
	        var children = _props.children;
	        var className = _props.className;
	        var style = _props.style;
	        var onClick = _props.onClick;
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-header', true), _defineProperty(_classNames, className, className), _classNames));
	        return React.createElement(
	            'div',
	            { className: wrapCls, style: style, onClick: onClick },
	            children
	        );
	    };
	
	    return ListHeader;
	}(React.Component);
	
	exports.default = ListHeader;
	
	ListHeader.defaultProps = {
	    prefixCls: 'am-list'
	};
	module.exports = exports['default'];

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var ListItem = function (_React$Component) {
	    _inherits(ListItem, _React$Component);
	
	    function ListItem(props) {
	        _classCallCheck(this, ListItem);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.onClick = function (e) {
	            if (_this.props.onClick) {
	                _this.setState({
	                    hover: true
	                });
	                setTimeout(function () {
	                    _this.setState({
	                        hover: false
	                    });
	                }, 200);
	                _this.props.onClick(e);
	            }
	        };
	        _this.onTouchStart = function () {
	            if (_this.props.onClick) {
	                _this.setState({
	                    hover: true
	                });
	            }
	        };
	        _this.onTouchEnd = function () {
	            if (_this.props.onClick) {
	                _this.setState({
	                    hover: false
	                });
	            }
	        };
	        _this.state = {
	            hover: false
	        };
	        return _this;
	    }
	
	    ListItem.prototype.render = function render() {
	        var _classNames, _classNames2;
	
	        var _props = this.props;
	        var prefixCls = _props.prefixCls;
	        var thumb = _props.thumb;
	        var arrow = _props.arrow;
	        var error = _props.error;
	        var children = _props.children;
	        var extra = _props.extra;
	        var className = _props.className;
	        var align = _props.align;
	        var style = _props.style;
	        var hover = this.state.hover;
	
	        var thumbDom = void 0;
	        var arrowDom = void 0;
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-item', true), _defineProperty(_classNames, prefixCls + '-item-error', error), _defineProperty(_classNames, prefixCls + '-item-top', align === 'top'), _defineProperty(_classNames, prefixCls + '-item-middle', align === 'middle'), _defineProperty(_classNames, prefixCls + '-item-bottom', align === 'bottom'), _defineProperty(_classNames, prefixCls + '-item-hover', hover), _defineProperty(_classNames, className, className), _classNames));
	        var arrowCls = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), _defineProperty(_classNames2, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), _defineProperty(_classNames2, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classNames2));
	        if (thumb) {
	            if (typeof thumb === 'string') {
	                thumbDom = React.createElement(
	                    'div',
	                    { className: prefixCls + '-thumb' },
	                    React.createElement('img', { src: thumb })
	                );
	            } else {
	                thumbDom = React.createElement(
	                    'div',
	                    { className: prefixCls + '-thumb' },
	                    thumb
	                );
	            }
	        }
	        /* arrow有值，则保留这个dom坑位 */
	        if (arrow !== '') {
	            /* 当值是horizontal时,渲染水平箭头 */
	            if (arrow === 'empty') {
	                arrowDom = React.createElement('div', { className: prefixCls + '-arrow' });
	            } else {
	                arrowDom = React.createElement(
	                    'div',
	                    { className: prefixCls + '-arrow' },
	                    React.createElement('span', { className: arrowCls })
	                );
	            }
	        } else {
	            arrowDom = null;
	        }
	        return React.createElement(
	            'div',
	            { className: wrapCls, onClick: this.onClick, onTouchStart: this.onTouchStart, onTouchEnd: this.onTouchEnd, onTouchCancel: this.onTouchEnd, style: style },
	            thumbDom,
	            React.createElement(
	                'div',
	                { className: prefixCls + '-line' },
	                children !== '' ? React.createElement(
	                    'div',
	                    { className: prefixCls + '-content' },
	                    children
	                ) : null,
	                extra !== '' ? React.createElement(
	                    'div',
	                    { className: prefixCls + '-extra' },
	                    extra
	                ) : null,
	                arrowDom
	            )
	        );
	    };
	
	    return ListItem;
	}(React.Component);
	
	exports.default = ListItem;
	
	ListItem.defaultProps = {
	    prefixCls: 'am-list',
	    thumb: '',
	    arrow: '',
	    children: '',
	    extra: '',
	    error: false,
	    align: 'middle'
	};
	module.exports = exports['default'];

/***/ },

/***/ 24:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Flex = function (_React$Component) {
	    _inherits(Flex, _React$Component);
	
	    function Flex() {
	        _classCallCheck(this, Flex);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    Flex.prototype.render = function render() {
	        var _classNames;
	
	        var _props = this.props;
	        var direction = _props.direction;
	        var wrap = _props.wrap;
	        var justify = _props.justify;
	        var align = _props.align;
	        var alignContent = _props.alignContent;
	        var className = _props.className;
	        var children = _props.children;
	        var prefixCls = _props.prefixCls;
	        var style = _props.style;
	        var onClick = _props.onClick;
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-dir-row', direction === 'row'), _defineProperty(_classNames, prefixCls + '-dir-row-reverse', direction === 'row-reverse'), _defineProperty(_classNames, prefixCls + '-dir-column', direction === 'column'), _defineProperty(_classNames, prefixCls + '-dir-column-reverse', direction === 'column-reverse'), _defineProperty(_classNames, prefixCls + '-nowrap', wrap === 'nowrap'), _defineProperty(_classNames, prefixCls + '-wrap', wrap === 'wrap'), _defineProperty(_classNames, prefixCls + '-wrap-reverse', wrap === 'wrap-reverse'), _defineProperty(_classNames, prefixCls + '-justify-start', justify === 'start'), _defineProperty(_classNames, prefixCls + '-justify-end', justify === 'end'), _defineProperty(_classNames, prefixCls + '-justify-center', justify === 'center'), _defineProperty(_classNames, prefixCls + '-justify-between', justify === 'between'), _defineProperty(_classNames, prefixCls + '-justify-around', justify === 'around'), _defineProperty(_classNames, prefixCls + '-align-top', align === 'top' || align === 'start'), _defineProperty(_classNames, prefixCls + '-align-middle', align === 'middle' || align === 'center'), _defineProperty(_classNames, prefixCls + '-align-bottom', align === 'bottom' || align === 'end'), _defineProperty(_classNames, prefixCls + '-align-baseline', align === 'baseline'), _defineProperty(_classNames, prefixCls + '-align-stretch', align === 'stretch'), _defineProperty(_classNames, prefixCls + '-align-content-start', alignContent === 'start'), _defineProperty(_classNames, prefixCls + '-align-content-end', alignContent === 'end'), _defineProperty(_classNames, prefixCls + '-align-content-center', alignContent === 'center'), _defineProperty(_classNames, prefixCls + '-align-content-between', alignContent === 'between'), _defineProperty(_classNames, prefixCls + '-align-content-around', alignContent === 'around'), _defineProperty(_classNames, prefixCls + '-align-content-stretch', alignContent === 'stretch'), _defineProperty(_classNames, className, className), _classNames));
	        return React.createElement(
	            'div',
	            { className: wrapCls, style: style, onClick: onClick },
	            children
	        );
	    };
	
	    return Flex;
	}(React.Component);
	
	exports.default = Flex;
	
	Flex.propTypes = {
	    direction: _react.PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
	    wrap: _react.PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	    justify: _react.PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
	    align: _react.PropTypes.oneOf(['start', 'end', 'center', 'top', 'middle', 'bottom', 'baseline', 'stretch']),
	    alignContent: _react.PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch'])
	};
	Flex.defaultProps = {
	    prefixCls: 'am-flexbox',
	    align: 'center',
	    onClick: function onClick() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var FlexItem = function (_React$Component) {
	    _inherits(FlexItem, _React$Component);
	
	    function FlexItem() {
	        _classCallCheck(this, FlexItem);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    FlexItem.prototype.render = function render() {
	        var _classNames;
	
	        var _props = this.props;
	        var children = _props.children;
	        var className = _props.className;
	        var prefixCls = _props.prefixCls;
	        var style = _props.style;
	        var onClick = _props.onClick;
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-item', true), _defineProperty(_classNames, className, className), _classNames));
	        return React.createElement(
	            'div',
	            { className: wrapCls, style: style, onClick: onClick },
	            children
	        );
	    };
	
	    return FlexItem;
	}(React.Component);
	
	exports.default = FlexItem;
	
	FlexItem.defaultProps = {
	    prefixCls: 'am-flexbox'
	};
	module.exports = exports['default'];

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Flex = __webpack_require__(35);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	var _FlexItem = __webpack_require__(36);
	
	var _FlexItem2 = _interopRequireDefault(_FlexItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Flex2.default.Item = _FlexItem2.default;
	exports.default = _Flex2.default;
	module.exports = exports['default'];

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(44);

/***/ },

/***/ 44:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _icon = __webpack_require__(18);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _splitObject3 = __webpack_require__(12);
	
	var _splitObject4 = _interopRequireDefault(_splitObject3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var NavBar = function (_React$Component) {
	    _inherits(NavBar, _React$Component);
	
	    function NavBar() {
	        _classCallCheck(this, NavBar);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    NavBar.prototype.render = function render() {
	        var _classNames;
	
	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'children', 'mode', 'className', 'iconName', 'leftContent', 'rightContent', 'onLeftClick']);
	
	        var _splitObject2 = _slicedToArray(_splitObject, 2);
	
	        var _splitObject2$ = _splitObject2[0];
	        var prefixCls = _splitObject2$.prefixCls;
	        var children = _splitObject2$.children;
	        var mode = _splitObject2$.mode;
	        var className = _splitObject2$.className;
	        var iconName = _splitObject2$.iconName;
	        var leftContent = _splitObject2$.leftContent;
	        var rightContent = _splitObject2$.rightContent;
	        var onLeftClick = _splitObject2$.onLeftClick;
	        var restProps = _splitObject2[1];
	
	        var wrapCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + mode, true), _classNames));
	        return React.createElement(
	            'div',
	            _extends({}, restProps, { className: wrapCls }),
	            React.createElement(
	                'div',
	                { className: prefixCls + '-left', onClick: onLeftClick },
	                iconName ? React.createElement(
	                    'span',
	                    { className: prefixCls + '-left-icon' },
	                    React.createElement(_icon2.default, { type: iconName })
	                ) : null,
	                React.createElement(
	                    'span',
	                    { className: prefixCls + '-left-content' },
	                    leftContent
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: prefixCls + '-title' },
	                children
	            ),
	            React.createElement(
	                'div',
	                { className: prefixCls + '-right' },
	                rightContent
	            )
	        );
	    };
	
	    return NavBar;
	}(React.Component);
	
	exports.default = NavBar;
	
	NavBar.defaultProps = {
	    prefixCls: 'am-navbar',
	    mode: 'dark',
	    iconName: 'left',
	    onLeftClick: function onLeftClick() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(79);

/***/ },

/***/ 79:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _KeyCode = __webpack_require__(113);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _rcAnimate = __webpack_require__(38);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _LazyRenderBox = __webpack_require__(84);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var uuid = 0;
	var openCount = 0;
	
	// Measure scrollbar width for padding body during modal show/hide
	var scrollbarMeasure = {
	  position: 'absolute',
	  top: '-9999px',
	  width: '50px',
	  height: '50px',
	  overflow: 'scroll'
	};
	
	/* eslint react/no-is-mounted:0 */
	
	function noop() {}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function setTransformOrigin(node, value) {
	  var style = node.style;
	  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	    style[prefix + 'TransformOrigin'] = value;
	  });
	  style['transformOrigin'] = value;
	}
	
	function offset(el) {
	  var rect = el.getBoundingClientRect();
	  var pos = {
	    left: rect.left,
	    top: rect.top
	  };
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScroll(w);
	  pos.top += getScroll(w, 1);
	  return pos;
	}
	
	var Dialog = _react2["default"].createClass({
	  displayName: 'Dialog',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    keyboard: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    mask: _react.PropTypes.bool,
	    children: _react.PropTypes.any,
	    onAfterClose: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    closable: _react.PropTypes.bool,
	    maskClosable: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    mousePosition: _react.PropTypes.object,
	    wrapStyle: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    wrapClassName: _react.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onAfterClose: noop,
	      className: '',
	      mask: true,
	      visible: false,
	      keyboard: true,
	      closable: true,
	      maskClosable: true,
	      prefixCls: 'rc-dialog',
	      onClose: noop
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.titleId = 'rcDialogTitle' + uuid++;
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({});
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    var mousePosition = this.props.mousePosition;
	    if (props.visible) {
	      // first show
	      if (!prevProps.visible) {
	        this.lastOutSideFocusNode = document.activeElement;
	        this.addScrollingEffect();
	        this.refs.wrap.focus();
	        var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
	        if (mousePosition) {
	          var elOffset = offset(dialogNode);
	          setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	        } else {
	          setTransformOrigin(dialogNode, '');
	        }
	      }
	    } else if (prevProps.visible) {
	      if (props.mask && this.lastOutSideFocusNode) {
	        try {
	          this.lastOutSideFocusNode.focus();
	        } catch (e) {
	          this.lastOutSideFocusNode = null;
	        }
	        this.lastOutSideFocusNode = null;
	      }
	    }
	  },
	  onAnimateLeave: function onAnimateLeave() {
	    // need demo?
	    // https://github.com/react-component/dialog/pull/28
	    if (this.refs.wrap) {
	      this.refs.wrap.style.display = 'none';
	    }
	    this.removeScrollingEffect();
	    this.props.onAfterClose();
	  },
	  onMaskClick: function onMaskClick(e) {
	    if (e.target === e.currentTarget && this.props.closable && this.props.maskClosable) {
	      this.close(e);
	    }
	  },
	  onKeyDown: function onKeyDown(e) {
	    var props = this.props;
	    if (props.closable && props.keyboard) {
	      if (e.keyCode === _KeyCode2["default"].ESC) {
	        this.close(e);
	      }
	    }
	    // keep focus inside dialog
	    if (props.visible) {
	      if (e.keyCode === _KeyCode2["default"].TAB) {
	        var activeElement = document.activeElement;
	        var dialogRoot = this.refs.wrap;
	        var sentinel = this.refs.sentinel;
	        if (e.shiftKey) {
	          if (activeElement === dialogRoot) {
	            sentinel.focus();
	          }
	        } else if (activeElement === this.refs.sentinel) {
	          dialogRoot.focus();
	        }
	      }
	    }
	  },
	  getDialogElement: function getDialogElement() {
	    var props = this.props;
	    var closable = props.closable;
	    var prefixCls = props.prefixCls;
	    var dest = {};
	    if (props.width !== undefined) {
	      dest.width = props.width;
	    }
	    if (props.height !== undefined) {
	      dest.height = props.height;
	    }
	
	    var footer = void 0;
	    if (props.footer) {
	      footer = _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-footer', ref: 'footer' },
	        props.footer
	      );
	    }
	
	    var header = void 0;
	    if (props.title) {
	      header = _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-header', ref: 'header' },
	        _react2["default"].createElement(
	          'div',
	          { className: prefixCls + '-title', id: this.titleId },
	          props.title
	        )
	      );
	    }
	
	    var closer = void 0;
	    if (closable) {
	      closer = _react2["default"].createElement(
	        'button',
	        {
	          onClick: this.close,
	          'aria-label': 'Close',
	          className: prefixCls + '-close'
	        },
	        _react2["default"].createElement('span', { className: prefixCls + '-close-x' })
	      );
	    }
	
	    var style = _extends({}, props.style, dest);
	    var transitionName = this.getTransitionName();
	    var dialogElement = _react2["default"].createElement(
	      _LazyRenderBox2["default"],
	      {
	        role: 'document',
	        ref: 'dialog',
	        style: style,
	        className: prefixCls + ' ' + (props.className || ''),
	        visible: props.visible
	      },
	      _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-content' },
	        closer,
	        header,
	        _react2["default"].createElement(
	          'div',
	          { className: prefixCls + '-body', style: props.bodyStyle, ref: 'body' },
	          props.children
	        ),
	        footer
	      ),
	      _react2["default"].createElement(
	        'div',
	        { tabIndex: '0', ref: 'sentinel', style: { width: 0, height: 0, overflow: 'hidden' } },
	        'sentinel'
	      )
	    );
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      {
	        key: 'dialog',
	        showProp: 'visible',
	        onLeave: this.onAnimateLeave,
	        transitionName: transitionName,
	        component: '',
	        transitionAppear: true
	      },
	      dialogElement
	    );
	  },
	  getZIndexStyle: function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  },
	  getWrapStyle: function getWrapStyle() {
	    return _extends({}, this.getZIndexStyle(), this.props.wrapStyle);
	  },
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(
	          _rcAnimate2["default"],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  },
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var animation = props.animation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getElement: function getElement(part) {
	    return this.refs[part];
	  },
	  setScrollbar: function setScrollbar() {
	    if (this.bodyIsOverflowing && this.scrollbarWidth) {
	      document.body.style.paddingRight = this.scrollbarWidth + 'px';
	    }
	  },
	  addScrollingEffect: function addScrollingEffect() {
	    openCount++;
	    if (openCount !== 1) {
	      return;
	    }
	    this.checkScrollbar();
	    this.setScrollbar();
	    document.body.style.overflow = 'hidden';
	    // this.adjustDialog();
	  },
	  removeScrollingEffect: function removeScrollingEffect() {
	    openCount--;
	    if (openCount !== 0) {
	      return;
	    }
	    document.body.style.overflow = '';
	    this.resetScrollbar();
	    // this.resetAdjustments();
	  },
	  close: function close(e) {
	    this.props.onClose(e);
	  },
	  checkScrollbar: function checkScrollbar() {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    if (this.bodyIsOverflowing) {
	      this.scrollbarWidth = this.measureScrollbar();
	    }
	  },
	  resetScrollbar: function resetScrollbar() {
	    document.body.style.paddingRight = '';
	  },
	  measureScrollbar: function measureScrollbar() {
	    if (this.scrollbarWidth !== undefined) {
	      return this.scrollbarWidth;
	    }
	    var scrollDiv = document.createElement('div');
	    for (var scrollProp in scrollbarMeasure) {
	      if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
	        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
	      }
	    }
	    document.body.appendChild(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    document.body.removeChild(scrollDiv);
	    this.scrollbarWidth = scrollbarWidth;
	    return scrollbarWidth;
	  },
	  adjustDialog: function adjustDialog() {
	    if (this.refs.wrap && this.scrollbarWidth) {
	      var modalIsOverflowing = this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
	      this.refs.wrap.style.paddingLeft = (!this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	      this.refs.wrap.style.paddingRight = (this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	    }
	  },
	  resetAdjustments: function resetAdjustments() {
	    if (this.refs.wrap) {
	      this.refs.wrap.style.paddingLeft = this.refs.wrap.style.paddingLeft = '';
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var style = this.getWrapStyle();
	    // clear hide display
	    // and only set display after async anim, not here for hide
	    if (props.visible) {
	      style.display = null;
	    }
	    return _react2["default"].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      _react2["default"].createElement(
	        'div',
	        {
	          tabIndex: '-1',
	          onKeyDown: this.onKeyDown,
	          className: prefixCls + '-wrap ' + (props.wrapClassName || ''),
	          ref: 'wrap',
	          onClick: this.onMaskClick,
	          role: 'dialog',
	          'aria-labelledby': props.title ? this.titleId : null,
	          style: style
	        },
	        this.getDialogElement()
	      )
	    );
	  }
	});
	
	exports["default"] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dialog = __webpack_require__(82);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _getContainerRenderMixin = __webpack_require__(86);
	
	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var DialogWrap = _react2["default"].createClass({
	  displayName: 'DialogWrap',
	
	  propTypes: {
	    visible: _react.PropTypes.bool
	  },
	  mixins: [(0, _getContainerRenderMixin2["default"])({
	    isVisible: function isVisible(instance) {
	      return instance.props.visible;
	    },
	
	    autoDestroy: false,
	    getComponent: function getComponent(instance, extra) {
	      return _react2["default"].createElement(_Dialog2["default"], _extends({}, instance.props, extra, {
	        key: 'dialog'
	      }));
	    }
	  })],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      visible: false
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(_ref) {
	    var visible = _ref.visible;
	
	    return !!(this.props.visible || visible);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.visible) {
	      this.renderComponent({
	        onAfterClose: this.removeContainer,
	        onClose: function onClose() {},
	
	        visible: false
	      });
	    } else {
	      this.removeContainer();
	    }
	  },
	  getElement: function getElement(part) {
	    return this._component.getElement(part);
	  },
	  render: function render() {
	    return null;
	  }
	});
	
	exports["default"] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var LazyRenderBox = _react2["default"].createClass({
	  displayName: 'LazyRenderBox',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    visible: _react.PropTypes.bool,
	    hiddenClassName: _react.PropTypes.string
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  },
	  render: function render() {
	    var className = this.props.className;
	    if (this.props.hiddenClassName && !this.props.visible) {
	      className += ' ' + this.props.hiddenClassName;
	    }
	    var props = _extends({}, this.props);
	    delete props.hiddenClassName;
	    delete props.visible;
	    props.className = className;
	    return _react2["default"].createElement('div', props);
	  }
	});
	
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(83);

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _rcDialog = __webpack_require__(85);
	
	var _rcDialog2 = _interopRequireDefault(_rcDialog);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _objectAssign = __webpack_require__(25);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var NORMAL = 'NORMAL';
	var SHARE = 'SHARE';
	var closeFn = function closeFn() {};
	function createActionSheet(flag, config, callback) {
	    var props = (0, _objectAssign2.default)({}, {
	        prefixCls: 'am-action-sheet'
	    }, config);
	    var prefixCls = props.prefixCls;
	    var transitionName = props.transitionName;
	    var maskTransitionName = props.maskTransitionName;
	    var _props$maskClosable = props.maskClosable;
	    var maskClosable = _props$maskClosable === undefined ? true : _props$maskClosable;
	
	    var div = document.createElement('div');
	    document.body.appendChild(div);
	    var d = void 0;
	    function close() {
	        d.setState({
	            visible: false
	        });
	        if (div) {
	            ReactDOM.unmountComponentAtNode(div);
	            div.parentNode.removeChild(div);
	            div = null;
	        }
	    }
	    closeFn = close;
	    function cb(info) {
	        callback(info);
	        close();
	    }
	    var title = props.title;
	    var message = props.message;
	    var options = props.options;
	    var destructiveButtonIndex = props.destructiveButtonIndex;
	    var cancelButtonIndex = props.cancelButtonIndex;
	
	    var titleMsg = [title ? React.createElement(
	        'h3',
	        { key: '0', className: prefixCls + '-title' },
	        title
	    ) : null, message ? React.createElement(
	        'div',
	        { key: '1', className: prefixCls + '-message' },
	        message
	    ) : null];
	    var children = null;
	    switch (flag) {
	        case NORMAL:
	            children = React.createElement(
	                'div',
	                { className: prefixCls + '-normal' },
	                titleMsg,
	                React.createElement(
	                    'ul',
	                    { className: prefixCls + '-button-list' },
	                    options.map(function (item, index) {
	                        var _cls;
	
	                        var extraProp = {
	                            onClick: function onClick() {
	                                return cb(index);
	                            }
	                        };
	                        var li = React.createElement(
	                            'li',
	                            _extends({ className: [prefixCls + '-button-list-item'], key: index }, extraProp),
	                            item
	                        );
	                        var cls = (_cls = {}, _defineProperty(_cls, prefixCls + '-destructive-button', destructiveButtonIndex === index), _defineProperty(_cls, prefixCls + '-cancel-button', cancelButtonIndex === index), _cls);
	                        if (cancelButtonIndex === index || destructiveButtonIndex === index) {
	                            li = React.createElement(
	                                'li',
	                                _extends({ key: index, className: (0, _classnames2.default)(cls) }, extraProp),
	                                item,
	                                cancelButtonIndex === index ? React.createElement('span', { className: prefixCls + '-cancel-button-mask' }) : null
	                            );
	                        }
	                        return li;
	                    })
	                )
	            );
	            break;
	        case SHARE:
	            children = React.createElement(
	                'div',
	                { className: prefixCls + '-share' },
	                titleMsg,
	                React.createElement(
	                    'ul',
	                    { className: prefixCls + '-share-content' },
	                    options.map(function (item, index) {
	                        var extraProp = {
	                            onClick: function onClick() {
	                                return cb(index);
	                            }
	                        };
	                        return React.createElement(
	                            'li',
	                            _extends({ key: index }, extraProp),
	                            React.createElement(
	                                'p',
	                                { className: prefixCls + '-share-item-icon' },
	                                item.iconName ? React.createElement(_index2.default, { type: item.iconName }) : item.icon
	                            ),
	                            React.createElement(
	                                'p',
	                                { className: prefixCls + '-share-item-title' },
	                                item.title
	                            )
	                        );
	                    })
	                )
	            );
	            break;
	        default:
	            children = React.createElement(
	                'div',
	                { className: prefixCls + '-custom' },
	                titleMsg,
	                React.createElement(
	                    'div',
	                    { className: prefixCls + '-custom-content' },
	                    props.component
	                )
	            );
	    }
	    ReactDOM.render(React.createElement(
	        _rcDialog2.default,
	        { prefixCls: prefixCls, visible: true, title: '', footer: '', transitionName: transitionName || prefixCls + '-slide-fade', maskTransitionName: maskTransitionName || prefixCls + '-fade', onClose: close, maskClosable: maskClosable },
	        children
	    ), div, function () {
	        d = this;
	    });
	}
	
	var ActionSheet = function ActionSheet() {
	    _classCallCheck(this, ActionSheet);
	};
	
	exports.default = ActionSheet;
	
	ActionSheet.showActionSheetWithOptions = function (config) {
	    var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	
	    createActionSheet(NORMAL, config, callback);
	};
	ActionSheet.showShareActionSheetWithOptions = function (config) {
	    var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	
	    createActionSheet(SHARE, config, callback);
	};
	ActionSheet.showActionSheetWithCustom = function (config) {
	    var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	
	    createActionSheet(null, config, callback);
	};
	ActionSheet.close = function () {
	    closeFn();
	};
	module.exports = exports['default'];

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(396);

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(530);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Item = _react2.default.createClass({
	  displayName: 'Item',
	
	  PropTypes: {
	    logo: _react.PropTypes.string,
	    title: _react.PropTypes.string,
	    subtitle: _react.PropTypes.string,
	    onClick: _react.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      logo: '',
	      title: '',
	      subtitle: '',
	      onClick: function onClick() {}
	    };
	  },
	  handleTouchStart: function handleTouchStart() {
	    this.refs.demoitem.style.backgroundColor = '#f2f2f2';
	  },
	  handleTouchEnd: function handleTouchEnd() {
	    this.refs.demoitem.style.backgroundColor = '#fff';
	  },
	  render: function render() {
	    var _props = this.props;
	    var logo = _props.logo;
	    var title = _props.title;
	    var subtitle = _props.subtitle;
	    var onClick = _props.onClick;
	    var style = _props.style;
	
	    return _react2.default.createElement(
	      'section',
	      {
	        className: 'am-demo-item',
	        onClick: onClick,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onTouchCancel: this.handleTouchEnd,
	        ref: 'demoitem',
	        style: style
	      },
	      _react2.default.createElement(
	        'div',
	        { className: 'am-demo-item-inner' },
	        _react2.default.createElement('div', { className: 'am-demo-item-logo', style: { backgroundImage: 'url(' + logo + ')' } }),
	        _react2.default.createElement(
	          'h1',
	          { className: 'am-demo-item-title' },
	          title
	        ),
	        _react2.default.createElement(
	          'h2',
	          { className: 'am-demo-item-subtitle' },
	          subtitle
	        )
	      )
	    );
	  }
	});
	
	exports.default = Item;
	module.exports = exports['default'];

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(531);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Page = _react2.default.createClass({
	  displayName: 'Page',
	
	  PropTypes: {
	    title: _react.PropTypes.string,
	    subtitle: _react.PropTypes.string,
	    children: _react.PropTypes.any,
	    isIndex: _react.PropTypes.bool,
	    logo: _react.PropTypes.string,
	    style: _react.PropTypes.object
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      logo: '',
	      title: '',
	      subtitle: '',
	      isApp: 0,
	      style: {}
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.initScroller();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.isIndex) {
	      window.scrolltopNumber = document.querySelector('.am-demo-page').scrollTop;
	    }
	  },
	  initScroller: function initScroller() {
	    /* eslint prefer-template: 0 */
	    this.refs.demoPage.style.height = document.documentElement.clientHeight + 'px';
	    this.refs.demoPage.style.overflowY = 'scroll';
	    if (this.props.isIndex) {
	      document.querySelector('.am-demo-page').scrollTop = window.scrolltopNumber;
	    } else {
	      document.querySelector('.am-demo-page').scrollTop = 0;
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var logo = _props.logo;
	    var title = _props.title;
	    var subtitle = _props.subtitle;
	    var children = _props.children;
	    var style = _props.style;
	    /* eslint prefer-template: 0 */
	
	    var logoDom = logo !== '' ? _react2.default.createElement('div', { className: 'logo', style: { backgroundImage: 'url(' + logo + ')' } }) : null;
	
	    return _react2.default.createElement(
	      'section',
	      { className: 'am-demo-page', ref: 'demoPage', style: style },
	      _react2.default.createElement(
	        'div',
	        { className: 'am-demo-hd' },
	        logoDom,
	        _react2.default.createElement(
	          'h1',
	          { className: 'am-demo-title' },
	          title
	        ),
	        _react2.default.createElement(
	          'h2',
	          { className: 'am-demo-subtitle' },
	          subtitle
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'am-demo-bd' },
	        children
	      )
	    );
	  }
	});
	
	exports.default = Page;
	module.exports = exports['default'];

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = NotFound;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function NotFound() {
	  return _react2.default.createElement(
	    'div',
	    { id: 'page-404' },
	    _react2.default.createElement(
	      'section',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        '404'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        '你要找的页面不存在 ',
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          '返回首页'
	        )
	      )
	    ),
	    _react2.default.createElement('style', { dangerouslySetInnerHTML: {
	        __html: '#react-content { height: 100%; background-color: #fff }'
	      } })
	  );
	}
	module.exports = exports['default'];

/***/ },

/***/ 396:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _style = __webpack_require__(76);
	
	var _navBar = __webpack_require__(75);
	
	var _navBar2 = _interopRequireDefault(_navBar);
	
	var _style2 = __webpack_require__(198);
	
	var _icon = __webpack_require__(18);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _style3 = __webpack_require__(340);
	
	var _actionSheet = __webpack_require__(339);
	
	var _actionSheet2 = _interopRequireDefault(_actionSheet);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.collect = collect;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _bluebird = __webpack_require__(9);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(199);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function collect(nextProps, callback) {
	  var componentsList = utils.collectDocs(nextProps.data.components);
	
	  var moduleDocs = [].concat(_toConsumableArray(utils.collectDocs(nextProps.data.docs.react)), _toConsumableArray(componentsList), [
	  /* eslint-disable new-cap */
	  nextProps.data.CHANGELOG()]);
	
	  // const componentName = nextProps.params.component;
	  var componentName = nextProps.params.component;
	  var demos = nextProps.utils.get(nextProps.data, ['components', componentName, 'demo']);
	
	  var promises = [_bluebird2.default.all(componentsList), _bluebird2.default.all(moduleDocs)];
	
	  if (demos) {
	    promises.push(_bluebird2.default.all(Object.keys(demos).map(function (key) {
	      if (typeof demos[key] === 'function') {
	        return demos[key]();
	        /* eslint-disable no-else-return */
	      } else {
	        return demos[key].web();
	      }
	    })));
	  }
	
	  _bluebird2.default.all(promises).then(function (list) {
	    return callback(null, _extends({}, nextProps, {
	      components: list[0],
	      moduleData: list[1],
	      demos: list[2]
	    }));
	  });
	}
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home(props) {
	    _classCallCheck(this, Home);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.getCurrent = function (name) {
	      var demoSort = _this.props.demos.sort(function (a, b) {
	        return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
	      });
	
	      var currentIndex = void 0;
	      demoSort.forEach(function (i, index) {
	        var fileArr = i.meta.filename.split('/');
	        var filename = fileArr[fileArr.length - 1].split('.')[0];
	        if (filename === name) {
	          currentIndex = index;
	        }
	      });
	
	      return currentIndex;
	    };
	
	    _this.showActionSheet = function () {
	      if (_this.actionSheetShown) {
	        _actionSheet2.default.close();
	        _this.actionSheetShown = false;
	        return;
	      }
	
	      var actionArr = [];
	      var demoSort = _this.props.demos.sort(function (a, b) {
	        return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
	      });
	      demoSort.forEach(function (demo, index) {
	        actionArr[index] = demo.meta.title;
	      });
	      actionArr.push('取消');
	
	      _this.actionSheetShown = true;
	      _actionSheet2.default.showActionSheetWithOptions({
	        options: actionArr,
	        cancelButtonIndex: actionArr.length - 1,
	        maskClosable: true
	      }, function (buttonIndex) {
	        if (buttonIndex < actionArr.length - 1) {
	          _this.setState({
	            current: buttonIndex,
	            customNavBar: _this.getNavBar(buttonIndex)
	          });
	        }
	      });
	    };
	
	    _this.demoPrev = function () {
	      var current = _this.state.current - 1;
	      _this.setState({
	        current: current,
	        customNavBar: _this.getNavBar(current)
	      });
	    };
	
	    _this.demoNext = function () {
	      var current = _this.state.current * 1 + 1;
	      _this.setState({
	        current: current,
	        customNavBar: _this.getNavBar(current)
	      });
	    };
	
	    _this.componentWillReceiveProps = function (nextProps) {
	      _this.setState({
	        current: _this.getCurrent(nextProps.params.index),
	        customNavBar: _this.getNavBar(nextProps.params.index)
	      });
	    };
	
	    _this.componentDidMount = function () {
	      var current = _this.state.current;
	      _this.setState({
	        customNavBar: _this.getNavBar(current)
	      });
	      if (_actionSheet2.default.close) {
	        _actionSheet2.default.close();
	      }
	    };
	
	    _this.componentDidMount = function () {
	      var current = _this.state.current;
	      _this.setState({
	        customNavBar: _this.getNavBar(current)
	      });
	      if (_actionSheet2.default.close) {
	        _actionSheet2.default.close();
	      }
	    };
	
	    _this.state = {
	      current: _this.getCurrent(props.params.index) || 0,
	      customNavBar: null
	    };
	    return _this;
	  }
	
	  Home.prototype.getNavBar = function getNavBar(index) {
	    var demos = this.props.demos;
	    var demoSort = demos.sort(function (a, b) {
	      return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
	    });
	    /* eslint-disable no-nested-ternary */
	    var leftContent = self === top ? _react2.default.createElement(
	      'a',
	      { href: '/kitchen-sink', style: { color: '#2db7f5', textDecoration: 'none', transition: 'color .3s ease' } },
	      '首页'
	    ) : index > 0 ? _react2.default.createElement(
	      'span',
	      { style: { fontSize: 16, cursor: 'pointer' }, onClick: this.demoPrev },
	      '上页'
	    ) : null;
	
	    var rightContent = index < demos.length - 1 ? _react2.default.createElement(
	      'span',
	      { style: { fontSize: 16, cursor: 'pointer' }, onClick: this.demoNext },
	      '下页'
	    ) : null;
	
	    var customNavBar = _react2.default.createElement(
	      _navBar2.default,
	      { iconName: false, leftContent: leftContent, rightContent: rightContent },
	      demoSort.length > 1 ? _react2.default.createElement(
	        'span',
	        { onClick: this.showActionSheet, style: { cursor: 'pointer' } },
	        '' + demoSort[index].meta.title,
	        ' ',
	        _react2.default.createElement(_icon2.default, { type: 'down', className: 'nav-arrow-down' })
	      ) : _react2.default.createElement(
	        'span',
	        null,
	        '' + demoSort[index].meta.title
	      )
	    );
	    return customNavBar;
	  };
	
	  Home.prototype.render = function render() {
	    var _this2 = this;
	
	    var demos = this.props.demos;
	    var current = this.state.current;
	
	    var name = this.props.params.component;
	
	    var demoSort = demos.sort(function (a, b) {
	      return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
	    });
	
	    demoSort[current].preview.call(this);
	    var customNavFlag = this.customNavFlag;
	
	    return _react2.default.createElement(
	      'div',
	      { id: name },
	      _react2.default.createElement(
	        'div',
	        { id: 'demoNavbar', style: { position: 'fixed', width: '100%', zIndex: 9998, top: 0 } },
	        !customNavFlag ? this.state.customNavBar : null
	      ),
	      demoSort.map(function (i, index) {
	        var isShow = current - index === 0;
	        // ListView 组件要占用全屏、不能多实例共存（用 destroyComponent 做标记）
	        if (i.meta.destroyComponent && window.name !== 'demoFrame') {
	          isShow = _this2.props.params.index === undefined && current === index;
	        }
	
	        var previewItemClass = (0, _classnames2.default)({
	          'demo-preview-item': true,
	          'demo-preview-item-custom': !!customNavFlag,
	          show: isShow,
	          hide: !isShow
	        });
	
	        return _react2.default.createElement(
	          'div',
	          { className: previewItemClass, id: name + '-demo-' + index, key: index },
	          !i.meta.destroyComponent || isShow ? i.preview(_react2.default, _reactDom2.default) : null,
	          !!i.style ? _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: i.style } }) : null
	        );
	      })
	    );
	  };
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _style = __webpack_require__(43);
	
	var _flex = __webpack_require__(37);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _style2 = __webpack_require__(17);
	
	var _list = __webpack_require__(16);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.collect = collect;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bluebird = __webpack_require__(9);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _utils = __webpack_require__(199);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _Page = __webpack_require__(354);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	var _Item = __webpack_require__(353);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var hashImgObj = {
	  'action-sheet': 'sTvsgvivVKnqQtS',
	  alert: 'XdSYKalBelFOMqd',
	  badge: 'nSDcLEWgUrOkCJq',
	  button: 'lOXYjfSRPpkwudh',
	  carousel: 'ifHkrPIiJFcMNzT',
	  checkbox: 'IznQRcXpGsRfHXX',
	  collapse: 'yIQQHiTULgYehij',
	  'date-picker': 'XjBSEKVWMeIulGv',
	  drawer: 'IptWdCkrtkAUfjE',
	  dropdown: 'PMIYKpJIhmqwyXI',
	  flex: 'KZtGFWmnMUFpiSE',
	  'float-menu': 'HhilRXHawmUwlML',
	  grid: 'QbGTlZewFSvHlSS',
	  icon: 'zRqLyIrksLZyGPo',
	  'input-item': 'nZNeLMIrNJiuSyr',
	  list: 'wlNeoTpEKIpTcOW',
	  'list-action': 'OJgqKyrKGdIEfwp',
	  'list-view': 'wlNeoTpEKIpTcOW',
	  menu: 'NRpaVQhCssmCMvT',
	  modal: 'AMszKQQdMvMmYng',
	  'nav-bar': 'VrOSRjcBgRlvffN',
	  'page-result': 'nQbMEPIMUYIxyfW',
	  picker: 'WYAMQVIuqdtAGqK',
	  progress: 'aIomfcRsRHmPyNo',
	  radio: 'MHMIvHaTJRwnFeV',
	  'refresh-control': 'kmDibjGUbFrdeeY',
	  'search-bar': 'UAJROWKghHcBeoL',
	  slider: 'ViixEhXOewlupTr',
	  stepper: 'aDugjLTLBeQffgX',
	  steps: 'aDugjLTLBeQffgX',
	  switch: 'NmMXnPngqRrKHrq',
	  tabs: 'oeOvbvMpweuBOvO',
	  tag: 'AkXOzPmaytaVYLD',
	  'textarea-item': 'aDugjLTLBeQffgX',
	  timeline: 'aIomfcRsRHmPyNo',
	  toast: 'IptWdCkrtkAUfjE',
	  'top-notice': 'AraRKTSdXQbKkGv',
	  uploader: 'CVHyVxhFqkhZfYs',
	  'white-space': 'mioJMWDMAmiurTR',
	  'wing-blank': 'WzZoGzTRKzQgMWi',
	  card: 'kkQBRgZgcqSyMPS',
	  tooltip: 'WFdIwNKWiAkOQYd',
	  pagination: 'xavLtHVkhbayZau',
	  loading: 'PfDTjHZZKwYguUV',
	  table: 'yZwezpbmJzARTxK',
	  form: 'gvFzrNIoBJneFUY'
	};
	
	function collect(nextProps, callback) {
	  var componentsList = utils.collectDocs(nextProps.data.components);
	
	  var moduleDocs = [].concat(_toConsumableArray(utils.collectDocs(nextProps.data.docs.react)), _toConsumableArray(componentsList), [
	  /* eslint-disable new-cap */
	  nextProps.data.CHANGELOG()]);
	
	  var promises = [_bluebird2.default.all(componentsList), _bluebird2.default.all(moduleDocs)];
	
	  _bluebird2.default.all(promises).then(function (list) {
	    return callback(null, _extends({}, nextProps, {
	      components: list[0]
	    }));
	  });
	}
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Home.prototype.render = function render() {
	    var customWidth = document.documentElement.clientWidth / 3;
	    var itemStyle = {
	      width: '33.33%',
	      height: (customWidth >= 138 ? 138 : customWidth) + 'px'
	    };
	
	    var props = this.props;
	
	    var lists = {};
	    props.components.forEach(function (i) {
	      var meta = i.meta;
	      if (!lists[meta.category]) {
	        lists[meta.category] = [];
	      }
	      lists[meta.category].push(meta);
	    });
	
	    return _react2.default.createElement(
	      _Page2.default,
	      { logo: 'https://zos.alipayobjects.com/rmsportal/EMcaWpnrUZqsOQt.png', title: 'AntD Mobile', subtitle: '移动端UI组件库', isIndex: true },
	      Object.keys(lists).map(function (cate, index) {
	        return _react2.default.createElement(
	          _list2.default,
	          { key: index },
	          _react2.default.createElement(
	            _list2.default.Header,
	            null,
	            cate
	          ),
	          _react2.default.createElement(
	            _list2.default.Body,
	            null,
	            function () {
	              var flexs = [];
	              var flexItems = [];
	
	              var _loop = function _loop(i) {
	                var ii = lists[cate][i];
	                var fileName = ii.filename.split('/')[1];
	                var img = hashImgObj[fileName] || 'IptWdCkrtkAUfjE';
	                flexItems.push(_react2.default.createElement(_Item2.default, {
	                  logo: 'https://os.alipayobjects.com/rmsportal/' + img + '.png',
	                  title: ii.chinese,
	                  subtitle: ii.english,
	                  onClick: function onClick() {
	                    location.href = window.location.protocol + '//' + window.location.host + '/kitchen-sink/' + fileName;
	                  },
	                  style: itemStyle,
	                  key: 'flexitem-' + i
	                }));
	              };
	
	              for (var i = 0; i < lists[cate].length; i++) {
	                _loop(i);
	              }
	              flexs.push(_react2.default.createElement(
	                _flex2.default,
	                { wrap: 'wrap', className: 'antm-demo-flex', key: 'flex-' + index },
	                flexItems
	              ));
	              return flexs;
	            }()
	          )
	        );
	      })
	    );
	  };
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;

/***/ },

/***/ 530:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 531:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 919:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  routes: [{
	    path: '/',
	    component: './template/KitchenSink/index'
	  }, {
	    path: '/:component/',
	    dataPath: '/components/:component',
	    component: './template/KitchenSink/Demo'
	  }, {
	    path: '/:component/:index',
	    dataPath: '/components/:component/demo/:index',
	    component: './template/KitchenSink/Demo'
	  }]
	};

/***/ },

/***/ 1540:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./template/KitchenSink/Demo": 483,
		"./template/KitchenSink/Demo.jsx": 483,
		"./template/KitchenSink/Item": 353,
		"./template/KitchenSink/Item.jsx": 353,
		"./template/KitchenSink/Item.less": 530,
		"./template/KitchenSink/Page": 354,
		"./template/KitchenSink/Page.jsx": 354,
		"./template/KitchenSink/Page.less": 531,
		"./template/KitchenSink/index": 484,
		"./template/KitchenSink/index.jsx": 484,
		"./template/NotFound": 355,
		"./template/NotFound.jsx": 355
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1540;


/***/ }

});