<section>
    <div class="center">
        
        <input id="searchbar" placeholder="Suchen" style="float: left; margin-top: 25px">
        <h1 style="background-color: steelblue; margin: auto; border-radius: 1em; padding: 0.5em; text-align: center; width: fit-content;"> <u>Best contents</u> </h1>

        <nav id="app">
            <nav-item v-for="navitem in navitems" :key="navitem.titel" :link="navitem.link" :titel="navitem.titel" :beschreibung="navitem.beschreibung"> </nav-item>
        </nav>

    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script type="text/javascript" src="/javascript/vuesite.js"></script>