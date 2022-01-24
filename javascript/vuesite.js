Vue.component('nav-item', {
    props: ['titel', 'link', 'beschreibung'],
    template: `
        <div class='nav-item'>
            <a style='font-weight: bold;' :href='link' target='_blank'> 
                {{titel}} 
            </a>
            <p> 
                <b><u>Aufgabe:</u></b> 
                <br>
                {{beschreibung}}
            </p>

            <iframe :src="link"> </iframe>
        </div>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        navitems: [] 
    },
    created: async function() {
        await fetch("/resources/links.json").then(response => response.json()).then(result => {
            this.navitems = result;
        });
    }
});