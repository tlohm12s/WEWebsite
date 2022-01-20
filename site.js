(async _ => {

    window.onload = async _ => {

        let navigation = document.getElementById("navigation");
        let links = await fetch("links.json").then(response => response.json());

        for (const titel in links){
            let link = links[titel];
            
            let nav_item = document.createElement("a");
            nav_item.classList.add("nav-item");
            nav_item.textContent = titel;
            nav_item.href = link;
            nav_item.target = "_blank";
            
            let frame = document.createElement("iframe");
            frame.src = link;

            nav_item.appendChild(frame);

            navigation.appendChild(nav_item);
        }

    };

})();