<template>
  <div id="app">
    <Test id="test1"/><br><Test id="test2"/>
  </div>
</template>

<script>
import Test from './components/Test.vue';

export default {
  name: 'App',
  components: {
    Test
  }
};

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
