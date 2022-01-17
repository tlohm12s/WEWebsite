<template>
  <div id="app">
    Horizontales Menü:
    <Menu :vertical="false" :items = "[{name: 'Google', url: 'https://www.google.de'}, {name: 'Youtube', url: 'https://www.youtube.de'}, {name: 'Facebook', url: 'https://www.facebook.com'}]"/>
    Vertikales Menü:
    <Menu :vertical="true" :items = "[{name: 'Google', url: 'https://www.google.de'}, {name: 'Youtube', url: 'https://www.youtube.de'}, {name: 'Facebook', url: 'https://www.facebook.com'}]"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
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
