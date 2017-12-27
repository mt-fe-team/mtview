<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'mt-group-cell'

export default {
  name: 'mt-group-cell',
  props: {
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      total: 1
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-border`]: this.showBorder
        }
      ]
    },
    styles () {
      return {
        width: `${1 / this.total * 100}%`
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {}
}
</script>
