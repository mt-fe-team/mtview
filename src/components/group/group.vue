<template>
  <div>
    <slot name="title">
      <strong>{{title}}</strong>
    </slot>
    <div :class="classes">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'mt-group'

export default {
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
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-border`]: this.showBorder,
          [`${prefixCls}-border-${this.type}`]: this.showBorder && this.type,
          [`${prefixCls}-horizontal`]: this.horizontal
        }
      ]
    }
  },
  mounted () {
    this.updateChildProps()
  },
  beforeDestroy () {
  },
  methods: {
    updateChildProps () {
      const total = this.$children.length
      this.$children.forEach((child, index) => {
        if (this.horizontal) {
          child.total = total
        }
      })
    }

  }
}
</script>
