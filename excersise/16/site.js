(async _ => {

    const TYPE_CATEGORY = 0, TYPE_SUBCATEGORY = 1;

    let categories = await fetch("navigator_contents.json").then(response => response.json());

    let category_list = document.getElementById("categories");
    let subcategory_list = document.getElementById("subcategories");

    let content_field = document.getElementById("content");
    let information_field = document.getElementById("information");

    let current_category = Object.keys(categories)[0];
    let current_subcategory = Object.keys(categories[current_category])[0];

    let category_buttons = [];
    let subcategory_buttons = [];

    Object.entries(categories).forEach(entry => {
        let button = createCategoryElement(entry[0], TYPE_CATEGORY);
        category_list.appendChild(button);
        
        category_buttons.push(button);
    });

    function createCategoryElement(title, type) {
        let category_element = document.createElement("input");
        category_element.type = "button";
        category_element.value = title;

        switch(type) {
            case TYPE_CATEGORY:
                category_element.onclick = function() { 
                    category_buttons.forEach(button => {
                        button.style.color = "black";
                    });
                    category_element.style.color = "blue"; 
                    current_category = title; 

                    updateSubcategories();
                    updateSite(current_category); 
                };
                break;

            case TYPE_SUBCATEGORY:
                category_element.onclick = function() { 
                    subcategory_buttons.forEach(button => {
                        button.style.color = "black";
                    });
                    category_element.style.color = "blue"; 
                    current_subcategory = title;

                    updateSite(current_category, current_subcategory); 
                };
                break;
        }
        

        return category_element;
    }

    function updateSubcategories() {
        subcategory_list.textContent = "";
        subcategory_buttons = [];

        Object.entries(categories[current_category]).forEach(entry => {
            let button = createCategoryElement(entry[0], TYPE_SUBCATEGORY);
            button.style = "margin-bottom: 1em;";
            subcategory_list.appendChild(button);
            
            subcategory_list.appendChild(document.createElement("br"));
            subcategory_buttons.push(button);
        });

        subcategory_buttons[0].style.color = "blue";
    }

    function updateSite(category, subcategory = undefined) {
        if(subcategory == undefined) subcategory = Object.keys(categories[category])[0];

        let current_references = "";
        categories[category][subcategory]['references'].forEach(reference => {
            current_references += "<li><a href='" + reference + "'>"  + reference + "</a> </li>\n";
        });
    
        information_field.innerHTML = "<u>Referenzen:</u> <br> <ul>" + current_references + "</ul>";
    
        content_field.textContent = categories[category][subcategory]['content'];
    }

    updateSubcategories();
    updateSite(current_category, current_subcategory);

    category_buttons[0].style.color = "blue";
    
})();
