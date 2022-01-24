async function run() {

    const TYPE_CATEGORY : number = 0, TYPE_SUBCATEGORY : number = 1;

    let categories : Response = await fetch("/resources/navigator_contents.json").then(response => response.json());

    let category_list : HTMLElement = document.getElementById("categories");
    let subcategory_list : HTMLElement = document.getElementById("subcategories");

    let article_field : HTMLElement = document.getElementById("article_field");
    let content_field : HTMLElement = document.getElementById("content");

    let information_field : HTMLElement = document.getElementById("information");
    let references_field : HTMLElement = document.getElementById("references");

    let editmode_toggle : HTMLInputElement = <HTMLInputElement> document.getElementById("editmode_toggle");

    let current_category : string = Object.keys(categories)[0];
    let current_subcategory : string = Object.keys(categories[current_category])[0];

    let category_buttons : HTMLInputElement[] = [];
    let subcategory_buttons : HTMLInputElement[] = [];

    let editmodeActivated : boolean = false;

    function addCategories() : void {
        category_list.innerHTML = "";

        Object.entries(categories).forEach(entry => {
            let button = createCategoryElement(entry[0], TYPE_CATEGORY);
            category_list.appendChild(button);
            
            category_buttons.push(button);
        });

        if(editmodeActivated) {
            addCategoryCreationButton();
            addCategoryRemovalButton();
        }
    }

    function addEditButton() : void {
        let content_edit_button = document.createElement("input");
        content_edit_button.id = "content_edit_button";
        content_edit_button.type = "button";
        content_edit_button.value = "<Edit>",
        content_edit_button.onclick = async function() { 
            let new_content = prompt("Enter the new content:", content_field.textContent);

            if(categories[current_category][current_subcategory] !== undefined) {
                categories[current_category][current_subcategory]['content'] = new_content;
                await updateContent();
                updateSite(current_category, current_subcategory);
            } else {
                alert("Please create a subcategory first!");
            }
        };
        article_field.appendChild(content_edit_button);    
    }

    function addReferenceClearButton() : void {
        let reference_remove_button = document.createElement("input");
        reference_remove_button.id = "reference_clear_button";
        reference_remove_button.type = "button";
        reference_remove_button.value = "<Clear References>";
        reference_remove_button.style.color = "red";
        reference_remove_button.onclick = async function() { 
            categories[current_category][current_subcategory]['references'] = [];
            references_field.innerHTML = "";
            await updateContent();
        };
        information_field.appendChild(reference_remove_button);
    }

    function addReferenceCreationButton() : void {
        let reference_add_button = document.createElement("input");
        reference_add_button.id = "reference_add_button";
        reference_add_button.type = "button";
        reference_add_button.value = "<Add Reference>";
        reference_add_button.style.color = "green";
        reference_add_button.onclick = async function() { 
            let name = prompt("Enter a new reference.");
            categories[current_category][current_subcategory]['references'].push(name);
            await updateContent();
            updateSite(current_category, current_subcategory);
        };
        information_field.appendChild(reference_add_button);
    }

    function addSubcategoryRemovalButton() : void {
        let subcategory_add_button = document.createElement("input");
        subcategory_add_button.id = "subcategory_remove_button";
        subcategory_add_button.type = "button";
        subcategory_add_button.value = "<Remove Subcategory>";
        subcategory_add_button.style.color = "red";
        subcategory_add_button.onclick = async function() { 
            let name = prompt("Enter the Subcategory name to remove:");
            
            if(name in categories[current_category]) { delete categories[current_category][name] }
            else { alert("Entered subcategory does not exist.");};

            current_subcategory = Object.keys(categories[current_category])[0];

            await updateContent();
            updateSubcategories(current_category);
            updateSite(current_category, current_subcategory);
            current_subcategory = name;
        };
        subcategory_list.appendChild(subcategory_add_button);
    }

    function addSubcategoryCreationButton() : void {
        let subcategory_add_button = document.createElement("input");
        subcategory_add_button.id = "subcategory_add_button";
        subcategory_add_button.type = "button";
        subcategory_add_button.value = "<Add Subcategory>";
        subcategory_add_button.style.color = "green";
        subcategory_add_button.onclick = async function() { 
            let name = prompt("Enter a new subcategory name.");
            categories[current_category][name] = {};
            categories[current_category][name]['references'] = [];
            categories[current_category][name]['content'] = "";

            await updateContent();
            updateSubcategories(current_category);
            current_subcategory = name;
        };
        subcategory_list.appendChild(subcategory_add_button);
    }

    function addCategoryCreationButton() : void {
        let category_add_button = document.createElement("input");
        category_add_button.id = "category_add_button";
        category_add_button.type = "button";
        category_add_button.value = "<Add Category>",
        category_add_button.style.color = "green";
        
        category_add_button.onclick = async function() { 
            let name = prompt("Enter a new category name.");
            categories[name] = {};

            await updateContent();

            current_category = name;
            addCategories();
            updateSubcategories(name);
            updateSite(name); 
        };
        category_list.appendChild(category_add_button);
    }

    function addCategoryRemovalButton() : void {
        let category_removal_button = document.createElement("input");
        category_removal_button.id = "category_remove_button";
        category_removal_button.type = "button";
        category_removal_button.style.color = "red";
        category_removal_button.value = "<Remove Category>",
        category_removal_button.onclick = async function() { 
            let name = prompt("Enter the category to remove.");

            if(name in categories) { delete categories[name] }
            else { alert("Entered category does not exist.");};

            current_category = Object.keys(categories)[0];
            current_subcategory = Object.keys(categories[current_category])[0];

            await updateContent();

            addCategories();
            updateSubcategories(current_category);
            updateSite(current_category, current_subcategory); 
        };
        category_list.appendChild(category_removal_button);
    }
    
    function createCategoryElement(title, type) : HTMLInputElement {
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
                    current_subcategory = Object.keys(categories[current_category])[0]; 

                    updateSubcategories(current_category);
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

    function updateSubcategories(category) : void {
        subcategory_list.innerHTML = "";
        subcategory_buttons = [];

        if(Object.keys(categories[category]).length !== 0) {

            Object.entries(categories[category]).forEach(entry => {
                let button = createCategoryElement(entry[0], TYPE_SUBCATEGORY);
                button.style.marginBottom = "1em";
                subcategory_list.appendChild(button);
                
                subcategory_list.appendChild(document.createElement("br"));
                subcategory_buttons.push(button);
            });

            subcategory_buttons[0].style.color = "blue";
        }

        if(editmodeActivated) {
            addSubcategoryCreationButton();
            addSubcategoryRemovalButton();
        }
    }

    function updateSite(category, subcategory = undefined) : void {
        let current_references = "";

        if(Object.keys(categories[category]).length !== 0) {
            if(subcategory == undefined) subcategory = Object.keys(categories[category])[0];

            if(categories[category][subcategory]['references'] !== undefined) {
                categories[category][subcategory]['references'].forEach(reference => {
                    current_references += "<li><a href='" + reference + "'>"  + reference + "</a> </li>\n";
                });
            }
                
            content_field.textContent = categories[category][subcategory]['content'];
        } else {
            content_field.textContent = "";
        }

        references_field.innerHTML =  current_references;
    }

    async function updateContent() : Promise<Response> {
        //Aus den Folien
        return fetch(new Request('./www-navigator/server.php'), {
            method: 'POST',
            mode: 'cors',
            cache: 'no-store',
            body: JSON.stringify(categories),
            headers: {
                'Content-Type' : 'application/json',
                'CSRF-TOKEN' : (<HTMLInputElement> document.getElementById('token')).value
            }
        });
    }

    async function init() : Promise<void> {            

        addCategoryCreationButton();

        editmode_toggle.addEventListener("click", function() {
            if(editmodeActivated) {
                editmode_toggle.value = "Edit Mode: Off";
                editmodeActivated = false;

                category_list.removeChild(document.getElementById("category_add_button")); 
                category_list.removeChild(document.getElementById("category_remove_button"));

                subcategory_list.removeChild(document.getElementById("subcategory_add_button")); 
                subcategory_list.removeChild(document.getElementById("subcategory_remove_button"));

                article_field.removeChild(document.getElementById("content_edit_button"));
                information_field.removeChild(document.getElementById("reference_add_button"));
                information_field.removeChild(document.getElementById("reference_clear_button"));

            } else {
                editmode_toggle.value = "Edit Mode: On";
                editmodeActivated = true;

                addEditButton();

                addReferenceCreationButton();
                addReferenceClearButton();

                addCategories();
                updateSubcategories(current_category);
                updateSite(current_category, current_subcategory);
            
            }
        });

        addCategories();

        updateSubcategories(current_category);
        updateSite(current_category, current_subcategory);
    
        category_buttons[0].style.color = "blue";
    }

    init();

    
}

run();
