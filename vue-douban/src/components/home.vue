<template>
  <div class="box" v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="10">
    <h1>豆瓣电影</h1>
    <div class="list">
      <div class="list-item" v-for="item in moviesList">
        <router-link :to="{ name: 'detail', params: { id: item.id }}" exact>
          <img v-lazy="item.images.small" alt="">
          <p>{{item.title}}</p>
        </router-link>
      </div>
    </div>
    <div v-if="loading">loading...</div>
    <div class="footer">
      <w-footer></w-footer>
    </div>
  </div>
</template>

<script>
  import wFooter from './footer'
  export default {
    name: 'Home',
    data () {
      return {
        moviesList: [],
        count: 0,
        loading: false
      }
    },
    created () {
      this.loadList()
    },
    components: {
      wFooter
    },
    methods: {
      loadList () {
//        this.loading = false
        this.$http.get('/api/v2/movie/top250?count=' + this.count).then((res) => {
          this.moviesList = res.data.subjects
//          console.log(this.moviesList)
          this.loading = false
        })
      },
      loadMore () {
        this.loading = true
        this.count += 10
        this.loadList()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #454545;
  }
  .box{
    padding-bottom: 80px;
  }
  .list {
    width: 100%;
    font-size: 0;
    .list-item {
      display: inline-block;
      width: 45%;
      height: 260px;
      padding: 0 5px;
      font-size: 16px;
      vertical-align: top;
      img {
        width: 100%;
        height: 200px;
      }
      p {
        line-height: 40px;
        margin: 0;
      }
    }
  }
</style>
