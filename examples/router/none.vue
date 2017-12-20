<template>
  <div class="mt-none-demo">
    <div v-for="n in list">{{n}}</div>
    <mt-none :show="list.length == 0" placeholder="抱歉，未找到数据" image-size="large" />
  </div>
</template>

<script>
export default {
  name: 'mtNoneDemo',
  data () {
    return {
      show: true,
      list: ['数据1']
    }
  },
  computed: {

  },
  mounted () {
    setInterval(() => {
      if (this.list.length == 0) {
        this.list.push('数据1')
      } else {
        this.list.pop()
      }
    }, 1000)
  }
}
</script>

<style scoped lang="less">
.mt-none-demo {
  text-align: center;
}
</style>
