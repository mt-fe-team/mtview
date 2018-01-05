<template>
  <div class="mt-group-demo">
    <mt-group :horizontal=true type="warning">
      <div slot="title">
        <p>显示多行信息</p>
        <p><i>可以自定义样式</i></p>
      </div>
      <mt-cell v-for="c in list" :key="c">{{c}}</mt-cell>
    </mt-group>
  </div>
</template>

<script>
export default {
  name: 'mtNoneDemo',
  data () {
    return {
      show: true,
      list: ['数据1', '数据2', 'data3']
    }
  },
  computed: {

  },
  mounted () {}
}
</script>

<style scoped lang="less">
</style>
