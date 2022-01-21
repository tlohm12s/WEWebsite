(async _ => {

    window.onload = async _ => {

        let navigation = document.getElementById("navigation");
        let data = await fetch("links.json").then(response => response.json());

        for (const titel in data){
            let content = data[titel];

            console.log(content);
            
            let nav_item_title = document.createElement("a");
            nav_item_title.textContent = titel;
            nav_item_title.href = content['link'];
            nav_item_title.target = "_blank";
            nav_item_title.style.padding = "4px";

            let nav_item_description = document.createElement("p");
            nav_item_description.style.textDecoration = "none";
            nav_item_description.innerHTML = "Aufgabe: <br>" + content['beschreibung'];

            let nav_item = document.createElement("div");
            nav_item.classList.add("nav-item");
            nav_item.appendChild(nav_item_title);
            nav_item.appendChild(nav_item_description);
        
            let frame = document.createElement("iframe");
            frame.src = content['link'];

            nav_item.appendChild(frame);
            
            navigation.appendChild(nav_item);
        }

    };

})();