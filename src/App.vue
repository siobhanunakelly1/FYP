<template>
  <div id="app">
    <Header />
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <Login />
          </b-col>
        </b-row>
      </b-container>
    <list />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    Header,
    Login,
    list
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
