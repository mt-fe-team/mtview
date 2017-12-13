(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("mtview", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["mtview"] = factory(require("vue"));
	else
		root["mtview"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

var _affix = __webpack_require__(6);

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mtview = {
  version: Object({"NODE_ENV":"production"}).VERSION, // eslint-disable-line no-undef
  'mt-select': _select2.default,
  'mt-affix': _affix2.default
};

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(mtview).forEach(function (key) {
    Vue.component(key, mtview[key]);
  });
};

var API = {
  version: Object({"NODE_ENV":"production"}).VERSION, // eslint-disable-line no-undef
  install: install,
  Select: _select2.default,
  Affix: _affix2.default
};

module.exports.default = module.exports = API; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(3);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _select2.default;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cb73aea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(5);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cb73aea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var prefixCls = 'mt-select';

exports.default = {
  name: 'mt-select',
  data: function data() {
    return {
      optionList: [],
      selectValue: undefined,
      selectOptionLabel: '',
      showList: false,
      readonly: true
    };
  },
  mounted: function mounted() {
    document.addEventListener('click', this.domHandleClick);
    this.readonly = !(this.filters.length > 0);
    this.setOptions(this.options);
  },


  props: {
    value: [String, Number],
    options: Array,
    filters: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onChange: Function,
    onClear: Function
  },

  computed: {
    wrapClasses: function wrapClasses() {
      return ['' + prefixCls];
    },
    inputClasses: function inputClasses() {
      return 'mt-input';
    },
    listClasses: function listClasses() {
      return prefixCls + '_list';
    },
    itemClasses: function itemClasses() {
      return prefixCls + '_item';
    }
  },

  watch: {
    'options': function options(val, oldValue) {
      this.setOptions(val);
    },
    'value': function value(val, oldValue) {
      this.checkItem(val);
      this.$emit('on-change', val);
    },
    'selectValue': function selectValue(val, oldValue) {
      this.$emit('input', val ? val + '' : '');
    }
  },
  methods: {
    domHandleClick: function domHandleClick(event) {
      if (this.showList) {
        this.checkItem(this.value);
      }
      this.showList = false;
    },
    toggleList: function toggleList(event) {
      this.showList = !this.showList;
      if (this.showList && !this.readonly) {
        event.target.select();
        this.filterByKeyword('');
      } else {
        this.checkItem(this.value);
      }
      event.stopPropagation();
    },
    setOptions: function setOptions() {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this.optionList = list;
      this.checkItem(this.value);
    },
    handleCheck: function handleCheck(id, event) {
      this.checkItem(id);
      this.showList = false;
      event.stopPropagation();
    },
    checkItem: function checkItem(id) {
      if (!id) {
        this.selectValue = id;
        this.selectOptionLabel = '';
      }
      for (var i = 0; i < this.optionList.length; i++) {
        if (this.optionList[i].id == id) {
          this.selectValue = this.optionList[i].id;
          this.selectOptionLabel = this.optionList[i].name;
          break;
        }
      }
    },
    handleInput: function handleInput() {
      this.filterByKeyword(this.selectOptionLabel);
    },
    filterByKeyword: function filterByKeyword(input) {
      var _this = this;

      this.showList = true;
      if (this.filters.length > 0) {
        this.optionList = this.optionList.map(function (item) {
          item.hide = !_this.containsKeyword(item, input);
          return item;
        });
      }
    },
    containsKeyword: function containsKeyword(item, input) {
      return this.filters.some(function (keyword) {
        return item[keyword] && item[keyword].toUpperCase().indexOf(input.toUpperCase()) > -1;
      });
    },
    clearCheck: function clearCheck() {
      this.selectValue = undefined;
      this.selectOptionLabel = '';
      this.$emit('on-clear');
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"selectOptionLabel",class:_vm.wrapClasses},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"mt-icon iconfont icon-loading-m"}),_vm._v(" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectValue && !_vm.disabled),expression:"selectValue && !disabled"}],staticClass:"mt-icon iconfont icon-yuyueshibai",on:{"click":_vm.clearCheck}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectOptionLabel),expression:"selectOptionLabel"}],class:_vm.inputClasses,attrs:{"type":"text","readonly":_vm.readonly,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":(_vm.selectOptionLabel)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.selectOptionLabel=$event.target.value},_vm.handleInput],"click":_vm.toggleList}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showList),expression:"showList"}],class:_vm.listClasses},_vm._l((_vm.optionList),function(item){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:item.id,class:[_vm.itemClasses, {'on': _vm.selectValue == item.id}],on:{"click":function($event){_vm.handleCheck(item.id, $event)}}},[_vm._v(_vm._s(item.name)+"\n    ")])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _affix = __webpack_require__(7);

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _affix2.default;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41b20754_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_affix_vue__ = __webpack_require__(11);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41b20754_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_affix_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(9);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//

var prefixCls = 'mt-affix';

function getScroll(target, top) {
  var prop = top ? 'pageYOffset' : 'pageXOffset';
  var method = top ? 'scrollTop' : 'scrollLeft';

  var ret = target[prop];

  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }

  return ret;
}

function getOffset(element) {
  var rect = element.getBoundingClientRect();

  var scrollTop = getScroll(window, true);
  var scrollLeft = getScroll(window);

  var docEl = window.document.body;
  var clientTop = docEl.clientTop || 0;
  var clientLeft = docEl.clientLeft || 0;

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  };
}

exports.default = {
  name: 'mt-affix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    }
  },
  data: function data() {
    return {
      affix: false,
      styles: {}
    };
  },

  computed: {
    offsetType: function offsetType() {
      var type = 'top';
      if (this.offsetBottom >= 0) {
        type = 'bottom';
      }

      return type;
    },
    classes: function classes() {
      return [_defineProperty({}, '' + prefixCls, this.affix)];
    }
  },
  mounted: function mounted() {
    //            window.addEventListener('scroll', this.handleScroll, false);
    //            window.addEventListener('resize', this.handleScroll, false);
    (0, _dom.on)(window, 'scroll', this.handleScroll);
    (0, _dom.on)(window, 'resize', this.handleScroll);

    // invoke it when initializing
    this.handleScroll();
  },
  beforeDestroy: function beforeDestroy() {
    //            window.removeEventListener('scroll', this.handleScroll, false);
    //            window.removeEventListener('resize', this.handleScroll, false);
    (0, _dom.off)(window, 'scroll', this.handleScroll);
    (0, _dom.off)(window, 'resize', this.handleScroll);
  },

  methods: {
    handleScroll: function handleScroll() {
      var affix = this.affix;
      var scrollTop = getScroll(window, true);
      var elOffset = getOffset(this.$el);
      var windowHeight = window.innerHeight;
      var elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight;

      // Fixed Top
      if (elOffset.top - this.offsetTop < scrollTop && this.offsetType == 'top' && !affix) {
        this.affix = true;
        this.styles = {
          top: this.offsetTop + 'px',
          left: elOffset.left + 'px',
          width: this.$el.offsetWidth + 'px'
        };

        this.$emit('on-change', true);
      } else if (elOffset.top - this.offsetTop > scrollTop && this.offsetType == 'top' && affix) {
        this.affix = false;
        this.styles = null;

        this.$emit('on-change', false);
      }

      // Fixed Bottom
      if (elOffset.top + this.offsetBottom + elHeight > scrollTop + windowHeight && this.offsetType == 'bottom' && !affix) {
        this.affix = true;
        this.styles = {
          bottom: this.offsetBottom + 'px',
          left: elOffset.left + 'px',
          width: this.$el.offsetWidth + 'px'
        };

        this.$emit('on-change', true);
      } else if (elOffset.top + this.offsetBottom + elHeight < scrollTop + windowHeight && this.offsetType == 'bottom' && affix) {
        this.affix = false;
        this.styles = null;

        this.$emit('on-change', false);
      }
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.off = exports.on = undefined;

var _vue = __webpack_require__(10);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});