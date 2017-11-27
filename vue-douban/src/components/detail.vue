<template>
  <div class="detail">
    <app-head :message="movie.title"></app-head>
    <div class="contain">
      <div class="bg-blur">
        <img v-lazy="movie.images.small || ''" alt="" v-if="movie.images.small">
      </div>
      <div class="img">
        <img v-lazy="movie.images.small || ''" alt="" v-if="movie.images.small">
      </div>
      <div class="info">
        <p class="name">{{movie.title}}</p>
        <p class="original_title" v-if="movie.aka">
          {{movie.aka[0]}}
        </p>
        <p class="rating" v-if="movie.rating">
          <span class="rate">{{movie.rating.average}}</span>
          ({{movie.ratings_count}}人评)
        </p>
        <p class="genres" v-if="movie.genres">
          {{movie.genres.join(',')}}
        </p>
        <p class="countries" v-if="movie.countries">
          {{movie.countries.join(',')}}
        </p>
        <p class="directors">
          导演：
          <span v-for="item in movie.directors">{{item.name}} </span>
        </p>
        <p class="year">{{movie.year}}上映</p>
      </div>
    </div>
    <div class="btn" @click="collect">收藏</div>
    <div class="brief" :class=" {'brief-auto': briefAutoFlag }">
      简介：{{movie.summary}}
      <div class="v-icon" @click="briefHuto">
        <i class="iconfont" :class=" [ briefAutoFlag ? 'icon-jiantoushang' : 'icon-jiantouxia' ] "></i>
      </div>
    </div>
    <div class="block"></div>
    <div class="people">
      <ul>
        <li v-if="movie.directors" v-for="item in movie.directors">
          <img v-lazy="item.avatars.medium || ''" alt="加载中" v-if="item.avatars.medium">
          <p>{{item.name}}</p>
          <p class="pos">导演</p>
        </li>
        <li v-for="item in movie.casts">
          <img v-lazy="item.avatars.small || ''" alt="加载中" v-if="item.avatars.small">
          <p>{{item.name}}</p>
          <p class="pos">演员</p>
        </li>
      </ul>
    </div>
    <div class="block"></div>
    <div class="comments">
      <h3>短评</h3>
    </div>
  </div>
</template>
<script>
  import appHead from './app-head'
  import util from '../util.js'
  console.log(util)
  export default {
    name: 'detail',
    data () {
      return {
        id: this.$route.params.id,
        movie: {
          images: {
            small: ''
          }
        },
        briefAutoFlag: false
      }
    },
    created () {
      this.showDetail()
    },
    components: {
      appHead
    },
    methods: {
      showDetail () {
        let _this = this
        this.$http.get('/api/v2/movie/subject/' + this.id).then((res) => {
//          console.log(res)
          _this.movie = res.data
//          transition.next()
        })
      },
      briefHuto () {
        this.briefAutoFlag = !this.briefAutoFlag
      },
      collect () {
        let movieInfo = {}
        movieInfo.id = this.id
        movieInfo.title = this.movie.title
        movieInfo.casts = this.movie.casts
        movieInfo.year = this.movie.year
        movieInfo.image = this.movie.images.small
//        movieInfo = JSON.stringify(movieInfo)
        let arr = util.utils.getParam('collect') || []
        console.log(arr)
        console.log(movieInfo)
//        let arr = []
        if (arr.length) {
          for (let i = 0; i < arr.length; i++) {
            if (i.id !== this.id) {
              arr.push(movieInfo)
            }
          }
        } else {
          arr.push(movieInfo)
        }
        util.utils.setParam('collect', arr)
//        localStorage.setItem('collect', arr)
      }
    }
  }
</script>
<style scoped lang="less">
  .detail{
    .btn{
      width: 90%;
      height: 40px;
      background: #ff7100;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      margin: 20px auto 10px;
      border-radius: 5px;
    }
    .brief{
      position: relative;
      width: 90%;
      height: 109px;
      overflow: hidden;
      margin: 0 auto;
      text-align: left;
      padding-bottom: 22px;
      .v-icon{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 26px;
        background: #fff;
        text-align: center;
        line-height: 26px;
      }
    }
    .brief-auto{
      height: auto;
    }
  }
  .contain{
    position: relative;
    width: 100%;
    height: 258px;
    padding: 20px 20px;
    text-align: left;
    background: rgba(0,0,0,0.6);
    box-sizing: border-box;
    overflow: hidden;
    padding-top: 70px;
    .bg-blur{
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      /*background: rgba(0,0,0,0.5);*/
      -webkit-filter: blur(10px);
      filter: blur(10px);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .img{
      display: inline-block;
      width: 110px;
      margin-right: 10px;
      img{
        width: 100%;
      }
    }
    .info{
      display: inline-block;
      color: #fff;
      vertical-align: top;
      line-height: 23px;
      font-size: 12px;
      width: 180px;
      font-weight: 200;
      .name{
        font-size: 14px;
      }
      .original_title{
        font-size: 12px;
        font-weight: 200;
        line-height: 30px;
      }
      .rating{
        .rate{
          color: #ffc300;
          font-size: 14px;
        }
      }
    }
  }
  .people{
    width: 100%;
    /*border-top: 1px solid #ccc;*/
    padding-top: 16px;
    overflow: hidden;
    height: 160px;
    ul{
      width: 90%;
      margin: 0 auto;
      font-size: 0;
      height: 214px;
      white-space: nowrap;
      overflow-x: auto;
      li{
        display: inline-block;
        margin-left: 10px;
        width: 100px;
        /*height: 200px;*/
        vertical-align: top;
        padding-bottom: 10px;
        img{
          width: 100%;
          /*height: 150px;*/
        }
        p{
          overflow: hidden;
          height: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          /*color: #aaa;*/
          margin-top: 8px;
          line-height: 16px;
        }
        .pos{
          color: #aaa;
          margin: 4px 0;
        }
      };
      li:first-child{
        margin-left: 0;
      }
    }
  }
  .comments{
    h3{
      height: 50px;
      line-height: 50px;
      text-indent: 20px;
      text-align: left;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
    }
  }
</style>
