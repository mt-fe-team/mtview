<template>
  <div>
    <div style="width: 300px;">
      <mt-checkbox
      v-model="list.indexOf(3) > -1"
      @on-check="handleCheck(3)"
      type="warning">check</mt-checkbox>
    </div>
  </div>

</template>

<script>
export default {
  name: 'mtCheckboxDemo',
  data () {
    return {
      select1: false,
      list: [1, 3, 4]
    }
  },

  methods: {
    handleCheck (val) {
      let idx = this.list.indexOf(val)
      if (idx > -1) {
        this.list.splice(idx, 1)
      } else {
        this.list.push(val)
      }

    }
  }
}
</script>

<style scoped lang="less">

</style>
