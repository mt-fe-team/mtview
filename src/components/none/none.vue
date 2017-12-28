<template>
<div :class="classes" v-show="show">
  <slot>
    <div v-show="showImage" :class="imgCls"><i class="mt-icon iconfont icon-none2"></i></div>
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
    size: {
      type: String,
      default: ''
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
    },
    imgCls () {
      return [`${prefixCls}-img`,
        {
          [`${prefixCls}-img-large`]: this.size == 'large',
          [`${prefixCls}-img-small`]: this.size == 'small'
        }
      ]
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {}
}
</script>
