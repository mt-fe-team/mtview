<template>
<div :class="classes" v-show="show">
  <slot>
    <div v-show="showImage"><img src="../../assets/none-data.png" /></div>
    <div :class="placeholderCls">{{placeholder}}</div>
  </slot>
</div>
</template>

<script>
const prefixCls = 'mt-none'

export default {
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
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    placeholderCls () {
      return `${prefixCls}-placeholder`
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {}
}
</script>
