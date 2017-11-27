<template>
  <div class="footer">
    <div class="footer-item" v-for="item in tabbarlist" :class="item.name">
      <router-link :to="item.link" exact>
        <span class="iconfont" :class="item.icon"></span>
        <p>{{item.text}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vfooter',
    data () {
      return {
        tabbarlist: [
          {
            text: '首页',
            link: '/',
            name: 'home',
            icon: 'icon-shouye'
          },
          {
            text: '收藏',
            link: '/collect',
            name: 'collect',
            icon: 'icon-fenlei'
          },
          {
            text: '我的',
            link: '/mine',
            name: 'mine',
            icon: 'icon-wode'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
    display: flex;
    height: 60px;
    .footer-item{
      flex: 1;
      a{
        color: #aaa;
        .iconfont{
          display: block;
          width: 32px;
          height: 28px;
          font-size: 28px;
          margin: 5px auto;
        }
        p{
          margin: 0;
          font-size: 14px;
          line-height: 12px;
        }
      }
      .router-link-active{
        color: #000;
      }
    }
  }
</style>
