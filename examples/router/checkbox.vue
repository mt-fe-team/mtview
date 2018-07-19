<template>
  <div>
    <div style="width: 300px;">
      <mt-checkbox
      :checked="list.indexOf(select) > -1"
      @on-check="handleCheck($event, 3)"
      type="default">check</mt-checkbox>
    </div>
  </div>

</template>

<script>
export default {
  name: 'mtCheckboxDemo',
  data () {
    return {
      select: 3,
      list: [1, 3, 4]
    }
  },

  methods: {
    handleCheck (e, val) {
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
