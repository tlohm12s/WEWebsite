<template>
  <nav>
    <button v-for="category in shared.categories" :key="category" @click="updateSite(category)"> {{ category }} </button>
  </nav>
</template>

<script>
export default {
  name: 'Kategorien',
  props: {
    shared: Object
  },
  methods: {
    updateSite: function (category) {
      this.shared.current_category = category;
      this.shared.subcategories = Object.keys(this.shared.navigator_contents[this.shared.current_category]);
      this.shared.current_subcategory = this.shared.subcategories[0]; 
    }
  }
}
</script>

<style scoped>
  nav {
    margin-top: 1.2em; 
    text-align: center;
  }
</style>
