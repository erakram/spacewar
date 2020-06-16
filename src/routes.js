import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';

export default[
  {path: '/show', component: showBlogs},
  {path: '/', component: addBlog}
]
