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
        navitems: [],
        filteredItems: [],
        searchterm: ''
    },
    created: async function() {
        await fetch("resources/links.json").then(response => response.json()).then(result => {
            this.navitems = result;
            this.filteredItems = JSON.parse(JSON.stringify(this.navitems));
        });
    },
    watch: {
        searchterm: {
            handler() {
                this.filteredItems = JSON.parse(JSON.stringify(this.navitems));
                this.filteredItems = this.filteredItems.filter((currentItem) => {
                    return currentItem.titel.toLowerCase().includes(this.searchterm.toLowerCase()); 
                });
            }
        }
      }
});