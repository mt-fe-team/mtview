(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("mtview", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["mtview"] = factory(require("vue"));
	else
		root["mtview"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
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

var _affix = __webpack_require__(8);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f4c4016_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(7);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f4c4016_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
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

var _clickoutside = __webpack_require__(5);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _transferDom = __webpack_require__(6);

var _transferDom2 = _interopRequireDefault(_transferDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//

var prefixCls = 'mt-select';

exports.default = {
  name: 'mt-select',
  directives: { clickoutside: _clickoutside2.default, TransferDom: _transferDom2.default },
  data: function data() {
    return {
      optionList: [],
      selectValue: undefined,
      selectOptionLabel: '',
      focusIndex: -1,
      showList: false,
      readonly: true
    };
  },
  mounted: function mounted() {
    document.addEventListener('keydown', this.handleKeydown);
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
    optionKey: {
      type: String,
      default: 'id'
    },
    optionLabel: {
      type: String,
      default: 'name'
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

  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
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
    hideList: function hideList() {
      if (this.showList) {
        this.checkItem(this.value);
      }
      this.showList = false;
      this.focusIndex = -1;
    },
    handleKeydown: function handleKeydown(e) {
      if (this.showList) {
        var keyCode = e.keyCode;
        // Esc slide-up
        if (keyCode === 27) {
          e.preventDefault();
          this.hideList();
        }
        // next
        if (keyCode === 40) {
          e.preventDefault();
          this.navigateOptions('next');
        }
        // prev
        if (keyCode === 38) {
          e.preventDefault();
          this.navigateOptions('prev');
        }
        // enter
        if (keyCode === 13) {
          e.preventDefault();
          var opt = this.optionList[this.focusIndex];
          if (opt) {
            this.checkItem(opt[this.optionKey]);
            this.showList = false;
          }
        }
      }
    },
    navigateOptions: function navigateOptions(direction) {
      if (direction === 'next') {
        var next = this.focusIndex + 1;
        this.focusIndex = this.focusIndex === this.optionList.length - 1 ? 0 : next;
      } else if (direction === 'prev') {
        var prev = this.focusIndex - 1;
        this.focusIndex = this.focusIndex <= 0 ? this.optionList.length - 1 : prev;
      }
    },
    toggleList: function toggleList(event) {
      this.showList = !this.showList;
      if (this.showList && !this.readonly) {
        event.target.select();
        this.filterByKeyword('');
      } else {
        this.checkItem(this.value);
      }
      // event.stopPropagation()
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
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i][this.optionKey] == id) {
          this.selectValue = this.options[i][this.optionKey];
          this.selectOptionLabel = this.options[i][this.optionLabel];
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
        this.optionList = this.options.filter(function (item) {
          return _this.containsKeyword(item, input);
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
      this.showList = false;
      this.$emit('on-clear');
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  bind: function bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update: function update() {},
  unbind: function unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }
  if (node === true) {
    return document.body;
  }
  return node instanceof window.Node ? node : document.querySelector(node);
}

var directive = {
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    if (el.dataset.transfer !== 'true') return false;
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
    var parentNode = el.parentNode;
    if (!parentNode) return;
    var home = document.createComment('');
    var hasMovedOut = false;

    if (value !== false) {
      parentNode.replaceChild(home, el); // moving out, el is no longer in the document
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  componentUpdated: function componentUpdated(el, _ref2) {
    var value = _ref2.value;

    if (el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    var parentNode = ref$1.parentNode;
    var home = ref$1.home;
    var hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = Object.assign({}, el.__transferDomData, {
        hasMovedOut: true,
        target: getTarget(value)
      });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = Object.assign({}, el.__transferDomData, {
        hasMovedOut: false,
        target: getTarget(value)
      });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unbind: function unbind(el) {
    if (el.dataset.transfer !== 'true') return false;
    el.className = el.className.replace('v-transfer-dom', '');
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

exports.default = directive;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.hideList),expression:"hideList"}],class:_vm.wrapClasses},[_c('div',[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"mt-icon iconfont icon-loading-m"}),_vm._v(" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectValue && !_vm.disabled),expression:"selectValue && !disabled"}],staticClass:"mt-icon iconfont icon-yuyueshibai",on:{"click":_vm.clearCheck}})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectOptionLabel),expression:"selectOptionLabel"}],class:_vm.inputClasses,attrs:{"type":"text","readonly":_vm.readonly,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":(_vm.selectOptionLabel)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.selectOptionLabel=$event.target.value},_vm.handleInput],"click":_vm.toggleList}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showList),expression:"showList"},{name:"transfer-dom",rawName:"v-transfer-dom"}],class:_vm.listClasses},_vm._l((_vm.optionList),function(item,idx){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:item[_vm.optionKey],class:[_vm.itemClasses, {'on': _vm.selectValue == item[_vm.optionKey]}, {'focus': _vm.focusIndex === idx && _vm.selectValue != item[_vm.optionKey]}],on:{"click":function($event){_vm.handleCheck(item[_vm.optionKey], $event)}}},[_vm._v(_vm._s(item[_vm.optionLabel])+"\n    ")])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _affix = __webpack_require__(9);

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _affix2.default;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41b20754_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_affix_vue__ = __webpack_require__(13);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.off = exports.on = undefined;

var _vue = __webpack_require__(12);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});