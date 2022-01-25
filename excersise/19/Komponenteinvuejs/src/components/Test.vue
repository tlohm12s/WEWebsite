<template>
  <div>
      <!-- Mit https://regex101.com/ erstellt -->
      <input type="text" v-model="message">
      <br> Anzahl Buchstaben: {{ message.match(/\w/g) == null ? 0 : message.match(/\w/g).length }}
      <br> Anzahl Leerzeichen: {{ message.match(/\s/g) == null ? 0 : message.match(/\s/g).length }}
      <br> Anzahl Worte: {{ message.match(/(\s|\,|\.|\;)/g) == null ? 0 : message.match(/(\s|\,)/g).length }}
  </div>
</template>

<script>
  export default {
    data () {  return { message: 'Test' } }
  }
</script>

<style>

</style>