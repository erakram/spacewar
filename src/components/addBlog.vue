<template>
  <div class="form-group">
    <!-- <form-helper> -->
    <div v-if="!submitted">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Title</label>
              <md-input v-model="blog.title"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Blog Content</label>
              <md-textarea v-model="blog.content"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item">
          </div>
        </div>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
        </div>
        <div v-if="submitted" class="md-layout-item">
          <h3 class="md-raised md-primary">Thank you for adding your blog</h3>
        </div>
        <div class="md-layout-item">
        </div>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
        </div>
        <div class="md-layout-item">
          <md-button class="md-raised md-primary" v-on:click.prevent="post">Start Blogging!</md-button>
        </div>
        <div class="md-layout-item">
        </div>
      </div>
    <show-blog />
  </div>

</template>

<script>
import showBlog from './showBlogs';

export default{
  components:{
    'show-blog': showBlog,
  },
  data() {
    return {
      blog: {
        title: "",
        content: ""
      },
      submitted: false
    }
  },
  methods: {
    post: function() {
      console.log(this.blog)
      this.$store.dispatch('addBlog',this.blog).then((data) => {
        this.submitted = true;
        this.$store.dispatch('loadBlog');
      });
    }
  }
}

</script>

