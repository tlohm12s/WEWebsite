<template>
  <div>
    <ul v-if="vertical">
      <li v-for="item in items" :key="item.name">
          <a :href="item.url"> {{ item.name }} </a>
      </li>
    </ul>

    <ul v-else>
      <li v-for="item in items" :key="item.name" style="display: inline-block;">
          <a :href="item.url"> {{ item.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    vertical: Boolean,
    items: Array
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0px 10px 5px 5px;
}
a {
  color: #42b983;
}
</style>
