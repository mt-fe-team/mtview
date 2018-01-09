<template>
<label :class="wrapClasses">
  <span :class="checkboxClasses">
    <span :class="innerClasses"></span>
    <input
      type="checkbox"
      :class="inputClasses"
      :disabled="disabled"
      :checked="currentValue"
      :name="name"
      @click="handleCheck($event)">
  </span>
  <slot></slot>
</label>
</template>
<script>
const prefixCls = 'mt-checkbox'

export default {
  name: 'Checkbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
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
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-checked`]: this.currentValue,
          [`${prefixCls}-wrapper-disabled`]: this.disabled,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ]
    },
    checkboxClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-indeterminate`]: this.indeterminate
        }
      ]
    },
    innerClasses () {
      return `${prefixCls}-inner`
    },
    inputClasses () {
      return `${prefixCls}-input`
    }
  },
  mounted () {
    this.updateModel()
  },
  methods: {
    handleCheck (e) {
      this.$emit('on-check')
      e.stopPropagation()
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    }
  },
  watch: {
    value (val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw new Error('Value should be trueValue or falseValue.')
      }
      this.updateModel()
    }
  }
}
</script>
