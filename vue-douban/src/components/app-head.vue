<template>
  <div class="app-title">
    <h2>
      <span class="iconfont icon-fanhui" @click="$router.back(-1)"></span>{{message}}</h2>
  </div>
</template>
<script>
  export default {
    props: [ 'message' ]
  }
</script>
<style scoped lang="less">
  .app-title{
    position: fixed;
    width: 100%;
    height:50px;
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 50px;
    font-size: 20px;
    z-index: 10;
    background: #fff;
  .iconfont{
    position: absolute;
    left: 20px;
    top: 0;
    display: block;
    height: 100%;
    color: #000;
    font-weight: bold;
  }
  }
</style>
