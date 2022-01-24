function searchHoverEffect() : void {
    let svgLogo : HTMLElement = document.getElementById("searchBarLogo");
    let svgRect  : HTMLElement = document.getElementById("searchBarRect");
    let svgSearchBar : HTMLElement = document.getElementById("searchBarSvg");

    let searchBar : HTMLInputElement = <HTMLInputElement> document.getElementById("searchbar");

    svgLogo.setAttribute("transform", "translate(-27,-8) scale(0.7)");
    svgRect.classList.add("expandAnim");

    setTimeout(() => {
        if(svgSearchBar != null)
            svgSearchBar.remove();
        searchBar.style.visibility  = "visible";
        searchBar.focus();
    }, 2000);
}