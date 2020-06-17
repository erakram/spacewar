import Vue from 'vue'
import axios from 'axios'

const state = {
  blog:[]
}

const getters = {
  getBlog: state => state.blog,
}

const mutations = {
   setBlog: (state, value) => {
    state.blog = value
  }
 
}

const actions = {
  addBlog(context,value) {
    return axios.post('https://testspacewarapi.herokuapp.com/addblog',value)
  },
  loadBlog(context) {
      axios.get('https://testspacewarapi.herokuapp.com/showblogs').then(function(data){
        context.commit('setBlog',data.data)
        
    });
  },
}


export default {
  state, getters, mutations, actions
}