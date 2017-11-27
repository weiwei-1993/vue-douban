<template>
  <div class="wrap">
    <h1>我的</h1>
    <div class="go-login">
      <div class="head">
        <i class="iconfont icon-shenfenzheng"></i>
      </div>
      <div class="text">
        <router-link to="/login" v-if="!hasUser">立即登录</router-link>
        <span v-if="hasUser">{{user}}</span>
      </div>
      <div class="right" v-if="hasUser">
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <div class="list">
      <h3 v-for="item in list">
        <router-link :to="item.link">
          <span>{{item.title}}</span>
          <i class="iconfont icon-jiantouyou"></i>
        </router-link>
      </h3>
    </div>
    <div class="footer">
      <w-footer></w-footer>
    </div>
  </div>
</template>
<script>
  import wFooter from './footer'
  export default {
    name: 'mine',
    data () {
      return {
        list: [
          {
            title: '收藏的电影',
            link: ''
          },
          {
            title: '看过的电影',
            link: ''
          },
          {
            title: '帮助与反馈',
            link: ''
          }
        ],
        user: '',
        hasUser: false
      }
    },
    components: {
      wFooter
    },
    created () {
      this.getUser()
    },
    methods: {
      getUser () {
        let username = localStorage.getItem('user')
        if (username) {
          this.user = username
          this.hasUser = true
          console.log(this.user)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .wrap{
    width: 100%;
    height: auto;
    padding: 0 20px;
    box-sizing: border-box;
    .go-login{
      display: flex;
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #eee;
      .head{
        width: 70px;
        height: 100%;
        text-align: left;
        line-height: 100px;
        font-size: 50px;
        .iconfont{
          display: block;
          font-size: 50px;
        }
      }
      .text{
        flex: 1;
        line-height: 100px;
        font-size: 30px;
        text-align: left;
      }
      .right{
        width: 50px;
        text-align: right;
        line-height: 100px;
      }
    }
  }
  .list{
    width: 100%;
    h3{
      line-height: 70px;
      font-size: 16px;
      text-align: left;
      border-top: 1px solid #eee;
      a{
        display: flex;
        width: 100%;
        span{
          flex: 1;
        }
        .iconfont{
          width: 50px;
          text-align: right;
        }
      }
    }
  }
</style>
