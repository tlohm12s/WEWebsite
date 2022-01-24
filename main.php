<section>
    <div class="center" style="text-align: center;">

        <div style="position: relative; width: 500px; height: 5%; margin: auto;">
            <input id="searchbar" type="text" class="search" placeholder="Suchen" style="position: absolute; left: 100%; top: 50%; transform: translate(-50%, -50%);">
            <h1 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); margin: 0; background-color: steelblue; border-radius: 1em; padding: 0.5em; width: fit-content;"> <u>Best contents</u> </h1>
        </div>

        <nav id="app">
            <nav-item v-for="navitem in navitems" :key="navitem.titel" :link="navitem.link" :titel="navitem.titel" :beschreibung="navitem.beschreibung"> </nav-item>
        </nav>

    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script type="text/javascript" src="/javascript/vuesite.js"></script>