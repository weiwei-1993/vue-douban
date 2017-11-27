<template>
  <div>
    <app-head :message="title"></app-head>
    <div class="contain">
      <div class="block"></div>
      <div class="item-line">
        <span>账户</span>
        <input type="text" placeholder="请输入手机号" v-model="user">
      </div>
      <div class="item-line">
        <span>密码</span>
        <input type="text" placeholder="请输入密码" v-model="password">
      </div>
      <div class="btn">
        <button @click="log">立即登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  import appHead from './app-head'
  export default {
    name: 'login',
    data () {
      return {
        title: '登录',
        user: '',
        password: '',
        code: ''
      }
    },
    components: {
      appHead
    },
    methods: {
      log () {
        if (this.user !== '' && this.password !== '') {
          localStorage.setItem('user', this.user)
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .contain{
    padding-top: 50px;
    height: auto;
    .item-line{
      display: flex;
      width: 100%;
      height: 50px;
      padding: 0 20px;
      box-sizing: border-box;
      line-height: 50px;
      border-top: 1px solid #eee;
      span{
        font-size: 18px;
        width: 70px;
        text-align: left;
      }
      input{
        flex: 1;
        height: 50px;
        border: none;
        font-size: 16px;
      }
      input:focus{
        border: none;
        outline: none;
      }
    }
    .item-line:first-child{
      border-top: 0;
    }
    .btn{
      width: 100%;
      button{
        width: 80%;
        height: 50px;
        line-height: 50px;
        background: #ff8a07;
        color: #fff;
        margin: 20px auto;
        border: none;
        font-size: 18px;
        border-radius: 3px;
        letter-spacing: 2px;
      }
      button:focus{
        border: none;
        outline: none;
      }
    }
  }
</style>
