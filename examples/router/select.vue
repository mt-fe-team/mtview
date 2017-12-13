<template>
  <div>
    <div style="width: 300px;">
      <mt-select
      v-model="select1"
      :options="list"
      placeholder="请输入"
      :filters="['name1']"></mt-select>
    </div>
  </div>

</template>

<script>
export default {
  name: 'mtSelectDemo',
  data () {
    return {
      select1: '',
      select2: '',
      list: [
        {id: 12, name: '王五', name1: '王五1'},
        {id: 23, name: '赵四', name1: '赵国1'},
        {id: 24, name: '李六', name1: '李七'},
      ]
    }
  }
}
</script>

<style scoped lang="less">

</style>
