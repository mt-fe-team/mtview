<template>
  <div id="app">
    <div class="compo-nav">
      <div class="compo-nav-l">
        <img src="../src/assets/logo.png">
        <div><router-link to="/select">Select</router-link></div>
        <div><router-link to="/affix">Affix</router-link></div>
        <div><router-link to="/none">None</router-link></div>
        <div><router-link to="/group">Group</router-link></div>
      </div>

      <div class="compo-nav-r">
        <router-view />
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
  @import "../src/styles/index.less";
</style>
<style lang="less">
.compo-nav {
  .compo-nav-l {
    float: left;
    width: 20%;
    border-right: 1px solid #eee;
    min-height: 600px;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .compo-nav-r {
    padding: 20px;
    float: right;
    width: 70%;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
