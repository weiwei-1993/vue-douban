<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }
  h1,h2,h3,h4,h5,h6,em,i {
    font-weight: 100;
    font-style: normal
  }
  ul,ol,li {
    list-style-type: none
  }
  a {
    color: #666;
    text-decoration: none;
    outline: 0
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 10px;*/
  }
  h1{
    line-height: 50px;
    font-size: 20px;
  }
  img[lazy=loading] {
    background-image: url('./assets/loading.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  img[lazy=error] {
    background-image: url('./assets/loading.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .block{
    width: 100%;
    height: 10px;
    border-top: 1px solid #ccc;
    background: #f2f2f2;
    border-bottom: 1px solid #ccc;
  }
</style>
