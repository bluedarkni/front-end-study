<template>
  <div id="app">
    <test></test>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Test from './components/Test'
export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
