<template>
  <article>
    <p v-if="shared.categories.length > 0"> {{ shared.navigator_contents[shared.current_category][shared.current_subcategory]['content'] }} </p>
  </article>
</template>

<script>

export default {
  name: 'Artikel',
  props: {
    shared: Object
  }
}


</script>

<style scoped>

  article {
    background-color: LightBlue; 
    vertical-align: top; 
    width: 59%; 
    display: inline-block; 
    border-radius: 1em; 
    padding: 1em 2em 1em 1em;
  }

</style>
