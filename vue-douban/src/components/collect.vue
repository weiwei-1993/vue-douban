<template>
  <div>
    <div>
      <h1>收藏</h1>
    </div>
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
    components: {
      wFooter
    }
  }
</script>
<style>

</style>
