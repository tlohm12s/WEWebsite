function searchHoverEffect() : void {
    let svgLogo = document.getElementById("searchBarLogo");
    let svgRect = document.getElementById("searchBarRect");
    let svgSearchBar = document.getElementById("searchBarSvg");

    let searchBar : HTMLInputElement = <HTMLInputElement> document.getElementById("searchbar");

    if(svgLogo != null && svgRect != null) {
        svgLogo.setAttribute("transform", "translate(-27,-8) scale(0.7)");
        svgRect.classList.add("expandAnim");
    
        setTimeout(() => {
            if(svgSearchBar != null)
                svgSearchBar.remove();
            searchBar.style.visibility  = "visible";
            searchBar.focus();
        }, 2000);
    }
}