<template>
  <div id="app" style="background-color: LightSteelBlue; border-radius: 1em; height: 100%;">
    <header style="background-color: steelblue; border-radius: 1em; padding-top: 0.1em; padding-bottom: 0.1em;"> 
      <h1 style="text-align: center;"> 
        <u> WWW-Navigator </u> 
      </h1> 
    </header>

    <Kategorien :shared="shared" />

    <Subkategorien :shared="shared" />

    <Artikel :shared="shared" />

    <Information :shared="shared" />
    
  </div>
</template>

<script>

  import Kategorien from './components/Kategorien.vue';
  import Subkategorien from './components/Subkategorien.vue';
  import Artikel from './components/Artikel.vue';
  import Information from './components/Information.vue';

  export default {
    name: 'App',
    data () { 
      return { shared: { current_category: "", current_subcategory: "", navigator_contents: [], categories: [], subcategories: [] } }; 
    },
    components: {
      Kategorien, Subkategorien, Artikel, Information
    },
    async created() {
      fetch("navigator_contents.json").then(response => response.json()).then(result => {
        this.shared.navigator_contents = result;
        
        this.shared.categories = Object.keys(this.shared.navigator_contents);
        this.shared.current_category = this.shared.categories[0];

        this.shared.subcategories = Object.keys(this.shared.navigator_contents[this.shared.current_category]);
        this.shared.current_subcategory = this.shared.subcategories[0];
      });
    },

  }
</script>

<style>
  * {
      box-sizing: border-box;
  }

  html, body {
      height: 99%;
  }

  button {
      width: 10em;
      height: 2em;
  }

  nav {
      margin-bottom: 3em;
  }

  nav button {
      margin-left: 1em;
      margin-right: 1em;
  }
</style>
