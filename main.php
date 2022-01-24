<section id="app" class="center" style="text-align: center;">
    <div style="position: relative; width: 500px; margin: auto; padding: 20px;">

        <input id="searchbar" v-model="searchterm" type="text" class="search" placeholder="Suchen" style="visibility: hidden; position: absolute; left: 100.1%; top: 50%; transform: translate(-50%, -50%);">
        
        <svg width="200" id="searchBarSvg" height="40" onmouseover="searchHoverEffect()" style="position: absolute; left: 100%; top: 50%; transform: translate(-50%, -50%);">
            <rect x="0" y="2" id="searchBarRect" width="35" height="35" style="fill:white; stroke-width:1; stroke:black" />
            
            <g id="searchBarLogo" transform="translate(-44,-5) scale(0.5)" style="transform-origin: 50% 50%;">
                <line x1="25" y1="25" x2="0" y2="50" style="stroke:rgb(0,0,0); stroke-width:3" />
                <circle cx="25" cy="25" r="15" stroke="black" stroke-width="2" fill="white" />
            </g>
        </svg>
      
        <h1 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); margin: 0; background-color: steelblue; border-radius: 1em; padding: 0.5em; width: fit-content;"> <u>Best contents</u> </h1>
    </div>

    <nav>
        <nav-item v-for="navitem in filteredItems" :key="navitem.titel" :link="navitem.link" :titel="navitem.titel" :beschreibung="navitem.beschreibung"> </nav-item>
    </nav>
</section>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script type="text/javascript" src="javascript/vuesite.js"></script>
<script type="text/javascript" src="javascript/general.js"></script>