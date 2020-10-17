<template>
  <v-app id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navigator/>
    <Home/>
    <v-btn> hello </v-btn>
  </v-app>
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navigator from './components/Navigator.vue'
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Navigator,
    Home
  }
}
</script>

<style>

</style>
