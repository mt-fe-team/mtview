import Select from './components/select'
import Affix from './components/affix'
import None from './components/none'

const mtview = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  'mt-select': Select,
  'mt-affix': Affix,
  'mt-none': None
}

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(mtview).forEach(key => {
    Vue.component(key, mtview[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  Select,
  Affix,
  None
}

module.exports.default = module.exports = API   // eslint-disable-line no-undef
