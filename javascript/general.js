function searchHoverEffect() {
    let svgLogo = document.getElementById("searchBarLogo");
    let svgRect = document.getElementById("searchBarRect");

    let searchBar = document.getElementById("searchbar");
    
    svgLogo.setAttribute("transform", "translate(-27,-8) scale(0.7)");
    svgRect.classList.add("expandAnim");
    
    setTimeout(() => {
        document.getElementById("searchBarSvg").remove();
        searchBar.style.visibility  = "visible";
        searchBar.focus();
    }, 2000);
}