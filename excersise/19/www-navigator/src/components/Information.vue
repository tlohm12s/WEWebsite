<template>
  <aside>
    <u>Referenzen:</u> 
    <br> 
    <ul v-if="shared.categories.length > 0"> 
      <li v-for="reference in shared.navigator_contents[shared.current_category][shared.current_subcategory]['references']" :key="reference">
        <a :href='reference'> {{ reference }} </a> 
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Information',
  props: {
    shared: Object
  }
}
</script>

<style scoped>
  aside {
    display: inline-block; 
    word-wrap: break-word;

    vertical-align: top; 

    padding-left: 5em; 
    width: 20%; 
  }
</style>
