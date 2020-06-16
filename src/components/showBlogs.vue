<template>
  <div id="show-blogs">
    <h1>All Blogs Article</h1>
    <div v-for="blog in blogs" :key="blog.id" class="single-blog">
        <h2>{{ blog.title }}</h2>
      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {

  data () {
    return {
      
      search: ''
    }
  },
  methods: {
  },
  computed: {
     ...mapGetters({
      blogs: "getBlog"
    })
  },
  mounted(){
      this.$store.dispatch('loadBlog')
  }
}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: #eee;
}
#input_text {
  max-width: 1800px !important;
  background: #000;
}

</style>
