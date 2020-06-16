<template>
  <div id="app">
    <!-- <p>
      <router-link to="/show">Show blogs</router-link>
      <router-link to="/add">Add blog</router-link>
    </p> -->
    <router-view></router-view>
    <!-- <add-blog /> -->
    <!-- <show-blog/> -->
  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue'
// import showBlog from './components/showBlogs'

export default {
  name: 'App',
  components: {
    // 'add-blog' : addBlog,
    // 'show-blog' : showBlog
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
