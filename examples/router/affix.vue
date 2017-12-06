<template>
  <div class="affix-wrap">
    <mt-affix :offset-top="50">
      <div class="affix-wrap-float">please scroll your scroll bar !</div>
    </mt-affix>

    <mt-affix :offset-top="100" v-if="show">
      <div class="affix-wrap-float">hidden div</div>
    </mt-affix>

    <button class="affix-wrap-btn" @click="show = true">show hidden affix div</button>
  </div>
</template>

<script>
export default {
  name: 'mtAffixDemo',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped lang="less">
.affix-wrap {
  position: relative;
  width: 300px;
  height: 1500px;
  overflow-y: auto;
  &-btn {
    position: absolute;
    bottom: 0;
  }
  &-float {
    background: #eee;
  }
}
</style>
