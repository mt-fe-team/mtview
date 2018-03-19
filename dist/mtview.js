(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("mtview", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["mtview"] = factory(require("vue"));
	else
		root["mtview"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_clickoutside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_transfer_dom__ = __webpack_require__(11);
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

const prefixCls = 'mt-select';




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mt-select',
  directives: { clickoutside: __WEBPACK_IMPORTED_MODULE_0__directives_clickoutside__["a" /* default */], TransferDom: __WEBPACK_IMPORTED_MODULE_1__directives_transfer_dom__["a" /* default */] },
  data() {
    return {
      optionList: [],
      selectValue: undefined,
      selectOptionLabel: '',
      focusIndex: -1,
      showList: false,
      readonly: true
    };
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
    this.readonly = !(this.filters.length > 0);
    this.setOptions(this.options);
  },

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: function () {
        return [];
      }
    },
    filters: {
      type: Array,
      default: function () {
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
    clearable: {
      type: Boolean,
      default: true
    },
    onChange: Function,
    onClear: Function
  },

  computed: {
    wrapClasses() {
      return [`${prefixCls}`, {
        [`${prefixCls}-visible`]: this.showList,
        [`${prefixCls}-show-clear`]: this.showClear,
        [`${prefixCls}-loading`]: this.loading
      }];
    },
    showClear() {
      return this.selectValue && !this.disabled && this.clearable;
    },
    inputClasses() {
      return 'mt-input';
    },
    listClasses() {
      return `${prefixCls}_list`;
    },
    itemClasses() {
      return `${prefixCls}_item`;
    },
    selectionCls() {
      return `${prefixCls}-selection`;
    }
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  },

  watch: {
    'options'(val, oldValue) {
      this.setOptions(val);
    },

    'value'(val, oldValue) {
      this.checkItem(val);
      if (val == oldValue) return;
      this.$emit('on-change', val);
    },

    'selectValue'(val, oldValue) {
      this.$emit('input', val ? val + '' : '');
    }

  },
  methods: {
    hideList() {
      if (this.showList) {
        this.checkItem(this.value);
      }
      this.showList = false;
      this.focusIndex = -1;
    },

    handleKeydown(e) {
      if (this.showList) {
        const keyCode = e.keyCode;
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
          const opt = this.optionList[this.focusIndex];
          if (opt) {
            this.checkItem(opt[this.optionKey]);
            this.showList = false;
          }
        }
      }
    },

    navigateOptions(direction) {
      if (direction === 'next') {
        const next = this.focusIndex + 1;
        this.focusIndex = this.focusIndex === this.optionList.length - 1 ? 0 : next;
      } else if (direction === 'prev') {
        const prev = this.focusIndex - 1;
        this.focusIndex = this.focusIndex <= 0 ? this.optionList.length - 1 : prev;
      }
    },

    toggleList(event) {
      this.showList = !this.showList;
      if (this.showList && !this.readonly) {
        event.target.select();
        this.filterByKeyword('');
      } else {
        this.checkItem(this.value);
      }
      // event.stopPropagation()
    },

    setOptions(list = []) {
      this.optionList = list;
      this.checkItem(this.value);
    },

    handleCheck(id, event) {
      this.checkItem(id);
      this.showList = false;
      event.stopPropagation();
    },

    checkItem(id) {
      if (!id) {
        this.selectValue = id;
        this.selectOptionLabel = '';
      }
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i][this.optionKey] == id) {
          this.selectValue = this.options[i][this.optionKey];
          this.selectOptionLabel = this.options[i][this.optionLabel];
          break;
        }
      }
    },

    handleInput() {
      this.filterByKeyword(this.selectOptionLabel);
    },

    filterByKeyword(input) {
      this.showList = true;
      if (this.filters.length > 0) {
        this.optionList = this.options.filter(item => {
          return this.containsKeyword(item, input);
        });
      }
    },

    containsKeyword(item, input) {
      return this.filters.some(keyword => {
        return item[keyword] && item[keyword].toUpperCase().indexOf(input.toUpperCase()) > -1;
      });
    },

    clearCheck() {
      this.selectValue = undefined;
      this.selectOptionLabel = '';
      this.showList = false;
      setTimeout(() => {
        this.$emit('on-clear');
      });
    }

  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom__ = __webpack_require__(15);
//
//
//
//
//
//
//



const prefixCls = 'mt-affix';

function getScroll(target, top) {
  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';

  let ret = target[prop];

  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }

  return ret;
}

function getOffset(element) {
  const rect = element.getBoundingClientRect();

  const scrollTop = getScroll(window, true);
  const scrollLeft = getScroll(window);

  const docEl = window.document.body;
  const clientTop = docEl.clientTop || 0;
  const clientLeft = docEl.clientLeft || 0;

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
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
  data() {
    return {
      affix: false,
      styles: {}
    };
  },
  computed: {
    offsetType() {
      let type = 'top';
      if (this.offsetBottom >= 0) {
        type = 'bottom';
      }

      return type;
    },
    classes() {
      return [{
        [`${prefixCls}`]: this.affix
      }];
    }
  },
  mounted() {
    //            window.addEventListener('scroll', this.handleScroll, false);
    //            window.addEventListener('resize', this.handleScroll, false);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom__["b" /* on */])(window, 'scroll', this.handleScroll);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom__["b" /* on */])(window, 'resize', this.handleScroll);

    // invoke it when initializing
    this.handleScroll();
  },
  beforeDestroy() {
    //            window.removeEventListener('scroll', this.handleScroll, false);
    //            window.removeEventListener('resize', this.handleScroll, false);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* off */])(window, 'scroll', this.handleScroll);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* off */])(window, 'resize', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const affix = this.affix;
      const scrollTop = getScroll(window, true);
      const elOffset = getOffset(this.$el);
      const windowHeight = window.innerHeight;
      const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight;

      // Fixed Top
      if (elOffset.top - this.offsetTop < scrollTop && this.offsetType == 'top' && !affix) {
        this.affix = true;
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
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
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };

        this.$emit('on-change', true);
      } else if (elOffset.top + this.offsetBottom + elHeight < scrollTop + windowHeight && this.offsetType == 'bottom' && affix) {
        this.affix = false;
        this.styles = null;

        this.$emit('on-change', false);
      }
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

const prefixCls = 'mt-none';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mt-none',
  props: {
    placeholder: {
      type: String,
      default: '没有数据'
    },
    showImage: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
    placeholderCls() {
      return `${prefixCls}-placeholder`;
    },
    imgCls() {
      return [`${prefixCls}-img`, {
        [`${prefixCls}-img-large`]: this.size == 'large',
        [`${prefixCls}-img-small`]: this.size == 'small'
      }];
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

const prefixCls = 'mt-group-cell';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mt-group-cell',
  props: {
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      total: 1
    };
  },
  computed: {
    classes() {
      return [`${prefixCls}`, {
        [`${prefixCls}-border`]: this.showBorder
      }];
    },
    styles() {
      return {
        width: `${1 / this.total * 100}%`
      };
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const prefixCls = 'mt-group';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mt-group',
  props: {
    showBorder: {
      type: Boolean,
      default: true
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [`${prefixCls}`, {
        [`${prefixCls}-border`]: this.showBorder,
        [`${prefixCls}-border-${this.type}`]: this.showBorder && this.type,
        [`${prefixCls}-horizontal`]: this.horizontal
      }];
    }
  },
  mounted() {
    this.updateChildProps();
  },
  beforeDestroy() {},
  methods: {
    updateChildProps() {
      const total = this.$children.length;
      this.$children.forEach((child, index) => {
        if (this.horizontal) {
          child.total = total;
        }
      });
    }

  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const prefixCls = 'mt-checkbox';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mt-checkbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}-wrapper`, {
        [`${prefixCls}-wrapper-checked`]: this.currentValue,
        [`${prefixCls}-wrapper-disabled`]: this.disabled,
        [`${prefixCls}-${this.size}`]: !!this.size
      }];
    },
    checkboxClasses() {
      return [`${prefixCls}`, {
        [`${prefixCls}-checked`]: this.currentValue,
        [`${prefixCls}-${this.type}`]: this.type,
        [`${prefixCls}-disabled`]: this.disabled,
        [`${prefixCls}-indeterminate`]: this.indeterminate
      }];
    },
    innerClasses() {
      return `${prefixCls}-inner`;
    },
    inputClasses() {
      return `${prefixCls}-input`;
    }
  },
  mounted() {
    this.updateModel();
  },
  methods: {
    handleCheck(e) {
      this.$emit('on-check');
      e.stopPropagation();
    },
    updateModel() {
      this.currentValue = this.checked === this.trueValue;
    }
  },
  watch: {
    checked(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw new Error('Value should be trueValue or falseValue.');
      }
      this.updateModel();
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_select__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_affix__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_none__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_group__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_checkbox__ = __webpack_require__(26);






const mtview = {
  version: Object({"NODE_ENV":"production"}).VERSION, // eslint-disable-line no-undef
  'mt-select': __WEBPACK_IMPORTED_MODULE_0__components_select__["a" /* default */],
  'mt-affix': __WEBPACK_IMPORTED_MODULE_1__components_affix__["a" /* default */],
  'mt-none': __WEBPACK_IMPORTED_MODULE_2__components_none__["a" /* default */],
  'mt-group': __WEBPACK_IMPORTED_MODULE_3__components_group__["a" /* default */],
  'mt-cell': __WEBPACK_IMPORTED_MODULE_3__components_group__["a" /* default */].Cell,
  'mt-checkbox': __WEBPACK_IMPORTED_MODULE_4__components_checkbox__["a" /* default */]
};

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(mtview).forEach(key => {
    Vue.component(key, mtview[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: Object({"NODE_ENV":"production"}).VERSION, // eslint-disable-line no-undef
  install,
  Select: __WEBPACK_IMPORTED_MODULE_0__components_select__["a" /* default */],
  Affix: __WEBPACK_IMPORTED_MODULE_1__components_affix__["a" /* default */],
  None: __WEBPACK_IMPORTED_MODULE_2__components_none__["a" /* default */],
  Group: __WEBPACK_IMPORTED_MODULE_3__components_group__["a" /* default */],
  Checkbox: __WEBPACK_IMPORTED_MODULE_4__components_checkbox__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["default"] = (API); // eslint-disable-line no-undef

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_vue__ = __webpack_require__(9);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__select_vue__["a" /* default */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6617ed9a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(12);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6617ed9a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, vnode) {
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
  update() {},
  unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const directive = {
  inserted(el, {
    value
  }, vnode) {
    if (el.dataset.transfer !== 'true') return false;
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
    const parentNode = el.parentNode;
    if (!parentNode) return;
    const home = document.createComment('');
    let hasMovedOut = false;

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
  componentUpdated(el, {
    value
  }) {
    if (el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    const ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    const parentNode = ref$1.parentNode;
    const home = ref$1.home;
    const hasMovedOut = ref$1.hasMovedOut; // recall where home is

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
  unbind(el) {
    if (el.dataset.transfer !== 'true') return false;
    el.className = el.className.replace('v-transfer-dom', '');
    const ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (directive);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.hideList),expression:"hideList"}],class:_vm.wrapClasses},[_c('div',{class:_vm.selectionCls},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"mt-icon iconfont icon-loading-m"}),_vm._v(" "),_c('i',{staticClass:"mt-icon iconfont icon-arrow-down"}),_vm._v(" "),_c('i',{staticClass:"mt-icon iconfont icon-yuyueshibai",on:{"click":_vm.clearCheck}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectOptionLabel),expression:"selectOptionLabel"}],class:_vm.inputClasses,attrs:{"type":"text","readonly":_vm.readonly,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":(_vm.selectOptionLabel)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.selectOptionLabel=$event.target.value},_vm.handleInput],"click":_vm.toggleList}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showList),expression:"showList"},{name:"transfer-dom",rawName:"v-transfer-dom"}],class:_vm.listClasses},_vm._l((_vm.optionList),function(item,idx){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:item[_vm.optionKey],class:[_vm.itemClasses, {'on': _vm.selectValue == item[_vm.optionKey]}, {'focus': _vm.focusIndex === idx && _vm.selectValue != item[_vm.optionKey]}],on:{"click":function($event){_vm.handleCheck(item[_vm.optionKey], $event)}}},[_vm._v(_vm._s(item[_vm.optionLabel])+"\n    ")])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__affix_vue__ = __webpack_require__(14);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__affix_vue__["a" /* default */]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e10d4b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_affix_vue__ = __webpack_require__(17);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_affix_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e10d4b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_affix_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

const isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;

/* istanbul ignore next */
const on = function () {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = on;


/* istanbul ignore next */
const off = function () {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = off;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_vue__ = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__none_vue__["a" /* default */]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_none_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3333b1de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_none_vue__ = __webpack_require__(20);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_none_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3333b1de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_none_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:_vm.classes},[_vm._t("default",[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showImage),expression:"showImage"}],class:_vm.imgCls},[_c('i',{staticClass:"mt-icon iconfont icon-none2"})]),_vm._v(" "),_c('div',{class:_vm.placeholderCls},[_vm._v(_vm._s(_vm.placeholder))])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_vue__ = __webpack_require__(24);



__WEBPACK_IMPORTED_MODULE_1__group_vue__["a" /* default */].Cell = __WEBPACK_IMPORTED_MODULE_0__cell_vue__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__group_vue__["a" /* default */]);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e65afd0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_vue__ = __webpack_require__(23);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cell_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e65afd0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cell_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40b356ee_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_vue__ = __webpack_require__(25);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40b356ee_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("title",[_c('strong',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{class:_vm.classes},[_vm._t("default")],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_vue__ = __webpack_require__(27);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__checkbox_vue__["a" /* default */]);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_721ff665_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(28);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_721ff665_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.wrapClasses},[_c('span',{class:_vm.checkboxClasses},[_c('span',{class:_vm.innerClasses}),_vm._v(" "),_c('input',{class:_vm.inputClasses,attrs:{"type":"checkbox","disabled":_vm.disabled,"name":_vm.name},domProps:{"checked":_vm.currentValue},on:{"click":function($event){_vm.handleCheck($event)}}})]),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});