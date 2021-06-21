const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => {
    tile.addEventListener("click",(e) => {
        if (tile.getAttribute("up") == "red") {
            tile.setAttribute("up", "white");
        }
        else if (tile.getAttribute("up") == "white") {
            tile.setAttribute("up", "red");
        }
    })
})