<template>
  <aside>
    <div v-for="subcategory in shared.subcategories" :key="subcategory[0]">
      <button style="margin-top: 1em;" @click="updateSite(subcategory)">  {{ subcategory }} </button>
      <br>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Subkategorien',
  props: {
    shared: Object
  },     
  methods: {
      updateSite: function (subcategory) {
        this.shared.subcategories = Object.keys(this.shared.navigator_contents[this.shared.current_category]);
        this.shared.current_subcategory = subcategory;
      }
    }
}
</script>

<style scoped>
  aside {
    display: inline-block;
    vertical-align: top;  
    text-align: center; 
    width: 20%; 
  }

</style>
