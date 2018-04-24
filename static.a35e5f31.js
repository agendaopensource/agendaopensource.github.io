(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://agendaopensource.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  githubUrl: 'https://github.com/agendaopensource/agendaopensource',
  newEventUrl: 'https://github.com/agendaopensource/agendaopensource/issues/new?template=event.md&title=New%20event&labels=event',
  cfpUrl: 'https://github.com/agendaopensource/agendaopensource/issues/new?template=cfp.md&title=Call+for+pappers&labels=event',
  googleMapsUrl: 'https://www.google.pt/maps/place'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _EventList = __webpack_require__(27);

var _EventList2 = _interopRequireDefault(_EventList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Open Agenda | Upcoming events'
      )
    ),
    _react2.default.createElement(_EventList2.default, null)
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Open Agenda | Speakers'
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Speakers'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Have you spoken in a conference recently?'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Share with us the subjects that you like to speak about and get ready to be selected for the next conference! ',
      _react2.default.createElement(
        'span',
        { 'aria-label': 'happy face', role: 'img' },
        '\uD83D\uDE42'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Open an issue in Github with your Bio, presentations, videos of your talks, and everything else that you might consider relevant to be shared on this page.'
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CallForPapers = function (_React$Component) {
  _inherits(CallForPapers, _React$Component);

  function CallForPapers(props) {
    _classCallCheck(this, CallForPapers);

    var _this = _possibleConstructorReturn(this, (CallForPapers.__proto__ || Object.getPrototypeOf(CallForPapers)).call(this, props));

    _this.state = {
      frequentCfp: props.frequentCallForPapers,
      sporadicCfp: props.sporadicCallForPapers
    };
    return _this;
  }

  _createClass(CallForPapers, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          frequentCfp = _state.frequentCfp,
          sporadicCfp = _state.sporadicCfp;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Open Agenda | Call for papers'
          )
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Call for Papers'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Do you want to share your talent and knowledge with others? Find here ongoing call for papers that you can submit your proposals.'
        ),
        _react2.default.createElement(
          'div',
          null,
          sporadicCfp.map(function (cfp) {
            return _react2.default.createElement(
              'div',
              { key: '' + cfp.deadline + cfp.name, className: 'card card-1' },
              _react2.default.createElement(
                'h1',
                { className: 'font-weight-normal text-black title' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: cfp.url, href: cfp.url, target: '_blank', rel: 'noopener' },
                  cfp.name
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                cfp.description
              ),
              _react2.default.createElement(
                'div',
                { className: 'action-bar' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: cfp.url, href: cfp.url, className: 'button', target: '_blank', rel: 'noopener' },
                  'Open event website'
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Frequent initiatives:'
        ),
        _react2.default.createElement(
          'div',
          null,
          frequentCfp.map(function (cfp) {
            return _react2.default.createElement(
              'div',
              { key: cfp.name, className: 'card card-1' },
              _react2.default.createElement(
                'h1',
                { className: 'font-weight-normal text-black title' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: cfp.url, href: cfp.url, target: '_blank', rel: 'noopener' },
                  cfp.name
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                cfp.description
              ),
              _react2.default.createElement(
                'div',
                { className: 'action-bar' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: cfp.url, href: cfp.url, className: 'button', target: '_blank', rel: 'noopener' },
                  'Open website'
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CallForPapers;
}(_react2.default.Component);

CallForPapers.propTypes = {
  frequentCallForPapers: _propTypes2.default.array.isRequired,
  sporadicCallForPapers: _propTypes2.default.array.isRequired
};

exports.default = (0, _reactStatic.withRouteData)(CallForPapers);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Open Agenda | About'
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'About'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This project was born to act as a glue to different organizations that are currently pushing events or meetups.',
      _react2.default.createElement('br', null),
      'Another goal is to link speakers to events and vice versa, by having a curated repository of Speakers and a call for papers list.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Please support this initiative by adding more events to the current curated list.'
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Open Agenda | Page not found :('
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'pagenotfound' },
      _react2.default.createElement(
        'p',
        { className: 'notfound' },
        '4',
        _react2.default.createElement(
          'span',
          { role: 'img', 'aria-label': 'sad face' },
          '\uD83D\uDE1E'
        ),
        '4'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Oh noes! Page not found!'
      ),
      _react2.default.createElement(
        'p',
        { className: 'link' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', href: '/' },
          'Go to homepage'
        )
      )
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _registerServiceWorker = __webpack_require__(16);

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;

  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };
  // Render!
  render(_App2.default);
  (0, _registerServiceWorker2.default)();
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(18);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(12);

var _reactHotLoader = __webpack_require__(32);

var _reactHelmet = __webpack_require__(3);

var _reactGa = __webpack_require__(33);

var _reactGa2 = _interopRequireDefault(_reactGa);

__webpack_require__(34);

var _AppBar = __webpack_require__(35);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Footer = __webpack_require__(38);

var _Footer2 = _interopRequireDefault(_Footer);

var _redux = __webpack_require__(40);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fireTracking = function fireTracking() {
  return _reactGa2.default.pageview(window.location.hash);
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var analytics = this.props.analytics;

      _reactGa2.default.initialize(analytics);

      if (window) {
        _reactGa2.default.pageview(window.location.pathname);
      }

      // Remove the server-side injected CSS.
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var googleSearchConsoleToken = this.props.googleSearchConsoleToken;


      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _redux2.default },
        _react2.default.createElement(
          _reactStatic.Router,
          { onUpdate: fireTracking },
          _react2.default.createElement(
            'div',
            { className: 'appContainer' },
            _react2.default.createElement(
              _reactHelmet.Helmet,
              null,
              _react2.default.createElement(
                'title',
                null,
                'Open Agenda'
              ),
              _react2.default.createElement('meta', { name: 'description', content: 'An opensource and curated list of tech events in Portugal' }),
              googleSearchConsoleToken && _react2.default.createElement('meta', { name: 'google-site-verification', content: googleSearchConsoleToken })
            ),
            _react2.default.createElement(_AppBar2.default, null),
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(_reactStaticRoutes2.default, null)
            ),
            _react2.default.createElement(_Footer2.default, null)
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  googleSearchConsoleToken: _propTypes2.default.string.isRequired,
  analytics: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactHotLoader.hot)(module)((0, _reactStatic.withSiteData)(App));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(19);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(20);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(21);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _reactUniversalComponent = __webpack_require__(23);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/travis/build/agendaopensource/agendaopensource/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Speakers',
  file: '/home/travis/build/agendaopensource/agendaopensource/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Speakers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Speakers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Speakers';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/CallForPapers',
  file: '/home/travis/build/agendaopensource/agendaopensource/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/CallForPapers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/CallForPapers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/CallForPapers';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/travis/build/agendaopensource/agendaopensource/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/travis/build/agendaopensource/agendaopensource/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          return _react2.default.createElement(Comp, _extends({ key: props.location.pathname }, props));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(24);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(25);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(1);

var _FriendlyRangeDate = __webpack_require__(28);

var _FriendlyRangeDate2 = _interopRequireDefault(_FriendlyRangeDate);

var _AppConfig = __webpack_require__(5);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var googleMapLink = function googleMapLink(url) {
  return _AppConfig2.default.googleMapsUrl + '/' + encodeURI(url);
};

var EventList = function (_React$Component) {
  _inherits(EventList, _React$Component);

  function EventList(props) {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));

    _this.state = {
      events: props.events
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Upcoming events'
        ),
        this.state.events.map(function (event) {
          return _react2.default.createElement(
            'div',
            { key: event.uniqId, className: 'card card-1' },
            event.location && event.location.district && _react2.default.createElement(
              'div',
              { className: 'small font-weight-medium text-muted text-uppercase' },
              event.location.district
            ),
            _react2.default.createElement(
              'h1',
              { className: 'font-weight-normal text-black title' },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: event.url, href: event.url, target: '_blank', rel: 'noopener' },
                event.name
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_FriendlyRangeDate2.default, { startDate: event.startDate, endDate: event.endDate }),
              event.location && _react2.default.createElement(
                'span',
                null,
                ' @ ',
                _react2.default.createElement(
                  _reactStatic.Link,
                  {
                    to: googleMapLink(event.location.address),
                    href: googleMapLink(event.location.address),
                    target: '_blank',
                    rel: 'noopener'
                  },
                  event.location.name
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              event.description
            ),
            _react2.default.createElement(
              'div',
              { className: 'action-bar' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'button', to: event.url, href: event.url, target: '_blank', rel: 'noopener' },
                'Open event website'
              ),
              event.location && _react2.default.createElement(
                _reactStatic.Link,
                {
                  to: googleMapLink(event.location.address),
                  href: googleMapLink(event.location.address),
                  className: 'button',
                  target: '_blank',
                  rel: 'noopener'
                },
                'Check Google Maps'
              )
            )
          );
        })
      );
    }
  }]);

  return EventList;
}(_react2.default.Component);

EventList.propTypes = {
  events: _propTypes2.default.array.isRequired
};

exports.default = (0, _reactStatic.withRouteData)(EventList);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(29);

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @todo: big refactor on this code!
var FriendlyRangeDate = function FriendlyRangeDate(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate;

  var startDateSplit = {
    year: (0, _moment2.default)(startDate).format('YYYY'),
    month: (0, _moment2.default)(startDate).format('MM'),
    day: (0, _moment2.default)(startDate).format('DD'),
    hour: (0, _moment2.default)(startDate).format('hh'),
    min: (0, _moment2.default)(startDate).format('mm')
  };

  var endDateSplit = {
    year: (0, _moment2.default)(endDate).format('YYYY'),
    month: (0, _moment2.default)(endDate).format('MM'),
    day: (0, _moment2.default)(endDate).format('DD'),
    hour: (0, _moment2.default)(endDate).format('hh'),
    min: (0, _moment2.default)(endDate).format('mm')
  };

  var nowDateSplit = {
    year: (0, _moment2.default)().format('YYYY'),
    month: (0, _moment2.default)().format('MM'),
    day: (0, _moment2.default)().format('DD')
  };

  var startDateMoment = (0, _moment2.default)(startDate);
  var endDateMoment = (0, _moment2.default)(endDate);

  var friendlyRangeDate = void 0;

  // Same day event, show month day and hour
  if (startDateMoment.format('YYYYMMDD') === endDateMoment.format('YYYYMMDD')) {
    // If current year, no need to add it
    var includeYear = '';
    if (startDateMoment.format('YYYY') !== (0, _moment2.default)().format('YYYY')) {
      includeYear = ' YYYY';
    }
    if (startDateMoment.format('hhmm') !== endDateMoment.format('hhmm')) {
      friendlyRangeDate = startDateMoment.format('MMM Do' + includeYear + ', h:mm') + ' - ' + endDateMoment.format('h:mm');
    } else {
      friendlyRangeDate = '' + startDateMoment.format('MMM Do' + includeYear);
    }
  } else {
    // If current year, no need to add it
    var includeStartYear = '';
    if (endDateMoment.format('YYYY') !== (0, _moment2.default)().format('YYYY')) {
      includeStartYear = ', YYYY';
    }
    var includeEndYear = '';
    if (endDateMoment.format('YYYY') !== (0, _moment2.default)().format('YYYY')) {
      includeEndYear = ', YYYY';
    }
    var includeEndMonth = '';
    if (startDateMoment.format('MM') !== endDateMoment.format('MM')) {
      includeEndMonth = 'MMM ';
    }

    friendlyRangeDate = startDateMoment.format('MMM D' + includeStartYear) + '-' + endDateMoment.format(includeEndMonth + 'Do' + includeEndYear);

    //    if (startDateMoment.format('YYYY') !== moment().format('YYYY'))
  }

  // Month 12th-
  if (startDateSplit.year === endDateSplit.year && startDateSplit.year !== nowDateSplit.year) {
    friendlyRangeDate.startYear = startDateSplit.year;
  }
  return _react2.default.createElement(
    'span',
    null,
    friendlyRangeDate
  );
};

FriendlyRangeDate.propTypes = {
  startDate: _propTypes2.default.string.isRequired,
  endDate: _propTypes2.default.string.isRequired
};

exports.default = FriendlyRangeDate;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("normalize.css");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(12);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Hbbar = function Hbbar(_ref) {
  var open = _ref.open,
      props = _objectWithoutProperties(_ref, ['open']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'hbbar', open: open }, props),
    _react2.default.createElement('div', { className: 'hb1' }),
    _react2.default.createElement('div', { className: 'hb2' }),
    _react2.default.createElement('div', { className: 'hb3' })
  );
};

var AppBar = function (_React$Component) {
  _inherits(AppBar, _React$Component);

  function AppBar(props) {
    _classCallCheck(this, AppBar);

    var _this = _possibleConstructorReturn(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(AppBar, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menu = this.props.menu;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('appBar', this.state.open && 'open') },
        _react2.default.createElement(Hbbar, { open: this.state.open, onClick: this.toggle }),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/', href: '/', className: 'logo' },
            'Open Agenda'
          ),
          menu.map(function (menuOption) {
            return _react2.default.createElement(
              _reactStatic.Link,
              {
                key: menuOption.id,
                to: menuOption.link,
                href: menuOption.link,
                rel: menuOption.rel,
                target: menuOption.target,
                onClick: _this2.toggle
              },
              menuOption.label
            );
          })
        )
      );
    }
  }]);

  return AppBar;
}(_react2.default.Component);

Hbbar.propTypes = {
  open: _propTypes2.default.bool.isRequired
};

AppBar.propTypes = {
  menu: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu
  };
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppBar);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _AppConfig = __webpack_require__(5);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'description' },
      _react2.default.createElement(
        'div',
        { className: 'about' },
        _react2.default.createElement(
          'p',
          { className: 'title' },
          'Open Agenda'
        ),
        _react2.default.createElement(
          'p',
          null,
          'An open source project to promote and share events and meetups.',
          _react2.default.createElement('br', null),
          'Please fork the project and help improving it.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'links' },
        _react2.default.createElement(
          'p',
          { className: 'title' },
          'Links'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            { className: 'listItem' },
            _react2.default.createElement(
              _reactStatic.Link,
              {
                to: _AppConfig2.default.githubUrl,
                href: _AppConfig2.default.githubUrl,
                target: '_blank',
                rel: 'noopener'
              },
              'GitHub'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'listItem' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/about', href: '/about' },
              'About'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'copywrite' },
      'Made with ',
      _react2.default.createElement(
        'span',
        { className: 'love' },
        '\u2764'
      ),
      ' !'
    )
  );
};

exports.default = Footer;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _reducers = __webpack_require__(41);

var _reducers2 = _interopRequireDefault(_reducers);

var _generateMenu = __webpack_require__(46);

var _generateMenu2 = _interopRequireDefault(_generateMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window === 'undefined') {
  global.window = {};
}

var initialState = {
  menu: _generateMenu2.default
};

/* eslint-disable no-underscore-dangle */
var store = (0, _redux.createStore)(_reducers2.default, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

exports.default = store;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _menu = __webpack_require__(42);

var _menu2 = _interopRequireDefault(_menu);

var _drawer = __webpack_require__(44);

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  menu: _menu2.default,
  drawer: _drawer2.default
});

exports.default = reducer;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(43);

var setMenuActive = function setMenuActive(state, id) {
  return state.map(function (item) {
    var itemUpdated = item;
    itemUpdated.active = item.id === id;
    return itemUpdated;
  });
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _menu.SET_MENU_ACTIVE:
      return setMenuActive(state, action.id);
    default:
      return state;
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_MENU_ACTIVE = exports.SET_MENU_ACTIVE = 'SET_MENU_ACTIVE';

var setMenuActive = exports.setMenuActive = function setMenuActive(id) {
  return {
    type: SET_MENU_ACTIVE,
    id: id
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _drawer = __webpack_require__(45);

var initialState = {
  open: false
};

var toggleDrawer = function toggleDrawer(state) {
  return _extends({}, state, {
    open: !state.open
  });
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _drawer.TOGGLE_DRAWER:
      return toggleDrawer(state);
    default:
      return state;
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOGGLE_DRAWER = exports.TOGGLE_DRAWER = 'TOGGLE_DRAWER';

var toggleDrawer = exports.toggleDrawer = function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppConfig = __webpack_require__(5);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  id: 1,
  link: '/',
  label: 'Upcoming',
  active: 0
}, {
  id: 2,
  link: '/call-for-papers',
  label: 'Call for papers',
  active: 0
}, {
  id: 3,
  link: '/speakers',
  label: 'Speakers',
  active: 0
}, {
  id: 4,
  link: _AppConfig2.default.newEventUrl,
  label: 'Suggest event',
  target: '_blank',
  rel: 'noopener',
  active: 0
}];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a35e5f31.js.map