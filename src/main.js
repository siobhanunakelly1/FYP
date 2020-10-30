import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    usernameInput: '',
    passwordInput: '',
  },
  methods:{
    addUser: function() {
      //this.users.push({username: this.usernameInput, password : this.passwordInput})
      //alert("user added")
      this.usernameInput = ''
      return this.usernameInput
    }
  }
}).$mount('#app')
