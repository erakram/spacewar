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
    console.log(value)
    return axios.post('http://localhost:3000/addBlog',value)
  },
  loadBlog(context) {
      axios.get('http://localhost:3000/showblogs').then(function(data){
        console.log(data)
        context.commit('setBlog',data.data)
        
    });
  },
}


export default {
  state, getters, mutations, actions
}