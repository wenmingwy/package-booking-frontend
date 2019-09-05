import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
 
  },
  getters:{
   
  },
  mutations: {

  },
  actions: {
    addMsg(store, form) {
      axios.post("http://localhost:8080/packagers", form)
    },   
    updateTime(store, form) {
 
    },
  }
})
