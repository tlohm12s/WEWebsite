"use strict";
function searchHoverEffect() {
    var svgLogo = document.getElementById("searchBarLogo");
    var svgRect = document.getElementById("searchBarRect");
    var svgSearchBar = document.getElementById("searchBarSvg");
    var searchBar = document.getElementById("searchbar");
    svgLogo.setAttribute("transform", "translate(-27,-8) scale(0.7)");
    svgRect.classList.add("expandAnim");
    setTimeout(function () {
        if (svgSearchBar != null)
            svgSearchBar.remove();
        searchBar.style.visibility = "visible";
        searchBar.focus();
    }, 2000);
}
