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
      alert(form.recipient)
      axios.post("http://localhost:8080/topackages", form)
    },   
    updateTime(store, form) {
 
    },
  }
})
