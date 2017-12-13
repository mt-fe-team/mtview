<template>
  <div :class="wrapClasses" v-clickoutside="hideList">

    <!-- <i class="el-input__icon el-icon-loading" v-show="loading"></i> -->
    <div>
      <i class="mt-icon iconfont icon-loading-m" v-show="loading"></i>
      <i class="mt-icon iconfont icon-yuyueshibai" v-show="selectValue && !disabled" @click="clearCheck"></i>
    </div>

    <input
    :class="inputClasses"
    type="text"
    :readonly="readonly"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="selectOptionLabel"
    @input="handleInput"
    @click="toggleList" />

    <div :class="listClasses" v-show="showList" v-transfer-dom>
      <div :class="[itemClasses, {'on': selectValue == item[optionKey]}, {'focus': focusIndex === idx && selectValue != item[optionKey]}]"
        v-for="(item, idx) in optionList"
        :key="item[optionKey]"
        v-show="!item.hide"
        @click="handleCheck(item[optionKey], $event)">{{item[optionLabel]}}
      </div>
    </div>

  </div>
</template>

<script>
const prefixCls = 'mt-select'

import clickoutside from '../../directives/clickoutside'
import TransferDom from '../../directives/transfer-dom'

export default {
  name: 'mt-select',
  directives: { clickoutside, TransferDom },
  data () {
    return {
      optionList: [],
      selectValue: undefined,
      selectOptionLabel: '',
      focusIndex: -1,
      showList: false,
      readonly: true
    }
  },

  mounted () {
    document.addEventListener('keydown', this.handleKeydown)
    this.readonly = !(this.filters.length > 0)
    this.setOptions(this.options)
  },

  props: {
    value: [String, Number],
    options: Array,
    filters: {
      type: Array,
      default: function () {
        return []
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
    wrapClasses () {
      return [
        `${prefixCls}`
      ]
    },
    inputClasses () {
      return 'mt-input'
    },
    listClasses () {
      return `${prefixCls}_list`
    },
    itemClasses () {
      return `${prefixCls}_item`
    }
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.handleKeydown)
  },

  watch: {
    'options' (val, oldValue) {
      this.setOptions(val)
    },

    'value' (val, oldValue) {
      this.checkItem(val)
      this.$emit('on-change', val)
    },

    'selectValue' (val, oldValue) {
      this.$emit('input', (val ? (val + '') : ''))
    }

  },
  methods: {
    hideList () {
      if (this.showList) {
        this.checkItem(this.value)
      }
      this.showList = false
      this.focusIndex = -1
    },

    handleKeydown (e) {
      if (this.showList) {
        const keyCode = e.keyCode
        // Esc slide-up
        if (keyCode === 27) {
          e.preventDefault()
          this.hideList()
        }
        // next
        if (keyCode === 40) {
          e.preventDefault()
          this.navigateOptions('next')
        }
        // prev
        if (keyCode === 38) {
          e.preventDefault()
          this.navigateOptions('prev')
        }
        // enter
        if (keyCode === 13) {
          e.preventDefault()
          const opt = this.optionList[this.focusIndex]
          if (opt) {
            this.checkItem(opt[this.optionKey])
            this.showList = false
          }
        }
      }
    },

    navigateOptions (direction) {
      if (direction === 'next') {
        const next = this.focusIndex + 1
        this.focusIndex = (this.focusIndex === this.optionList.length - 1) ? 0 : next
      } else if (direction === 'prev') {
        const prev = this.focusIndex - 1
        this.focusIndex = (this.focusIndex <= 0) ? this.optionList.length - 1 : prev
      }
    },

    toggleList (event) {
      this.showList = !this.showList
      if (this.showList && !this.readonly) {
        event.target.select()
        this.filterByKeyword('')
      } else {
        this.checkItem(this.value)
      }
      // event.stopPropagation()
    },

    setOptions (list = []) {
      this.optionList = list
      this.checkItem(this.value)
    },

    handleCheck (id, event) {
      this.checkItem(id)
      this.showList = false
      event.stopPropagation()
    },

    checkItem (id) {
      if (!id) {
        this.selectValue = id
        this.selectOptionLabel = ''
      }
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i][this.optionKey] == id) {
          this.selectValue = this.options[i][this.optionKey]
          this.selectOptionLabel = this.options[i][this.optionLabel]
          break
        }
      }
    },

    handleInput () {
      this.filterByKeyword(this.selectOptionLabel)
    },

    filterByKeyword (input) {
      this.showList = true
      if (this.filters.length > 0) {
        this.optionList = this.options.filter((item) => {
          return this.containsKeyword(item, input)
        })
      }
    },

    containsKeyword (item, input) {
      return this.filters.some((keyword) => {
        return item[keyword] && item[keyword].toUpperCase().indexOf(input.toUpperCase()) > -1
      })
    },

    clearCheck () {
      this.selectValue = undefined
      this.selectOptionLabel = ''
      this.showList = false
      this.$emit('on-clear')
    }

  }
}
</script>
