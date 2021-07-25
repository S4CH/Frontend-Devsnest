function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let icons = [
  "apple.png",
  "bread-loaf.png",
  "cake.png",
  "cheese.png",
  "cherry.png",
  "croissant.png",
  "cupcake.png",
  "cupcake-with-a-berry.png",
  "doughnut.png",
  "french-fries.png",
  "hamburger.png",
  "hot-dog.png",
  "ice-cream-cone.png",
  "noodles.png",
  "pizza.png",
  "popcorn.png",
  "sunny-side-up-eggs.png",
  "taco.png",
];

backgrounds = ['bg-bear.jpg', 'bg-cat.jpg', 'bg-cute.jpg', 'bg-math.jpg', 'bg-rabbit.jpg', 'bg-sea.jpg', 'bg-shapes.jpg', 'bg-unicorn.jpg']
let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

let total = 8;
let count = 0;

document.body.style.backgroundImage = `url(./backgrounds/${background})`;



let tempIcons = [];
let tiles = [];
const gameContainer = document.querySelector(".game-container");

for (let i = 0; i < 8; i++) {
  let icon = icons[Math.floor(Math.random() * icons.length)];
  tempIcons.push(icon);
  tempIcons.push(icon);
  icons.splice(icons.indexOf(icon), 1);
}

tempIcons = shuffle(tempIcons);

for (let i = 0; i < 16; i++) {
  let tile1 = document.createElement("img");
  let tile2 = document.createElement("img");
  tile1.classList.add("tile__face", "tile__face--front");
  tile2.classList.add("tile__face", "tile__face--back");
  tile1.src = "icons/" + tempIcons[i];
  let wrapper = document.createElement("div");
  wrapper.classList.add("tile");
  wrapper.appendChild(tile1);
  wrapper.appendChild(tile2);
  tiles.push(wrapper);
}

tiles = shuffle(tiles);

activeTiles = [];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const checkTiles = async () => {
  if (activeTiles.length === 1) {
    activeTiles[0].style.pointerEvents = "none";
  } else if (activeTiles.length === 2) {
    if (activeTiles[0].children[0].src === activeTiles[1].children[0].src) {
      activeTiles[0].style.pointerEvents = "none";
      activeTiles[1].style.pointerEvents = "none";
      count++;
      console.log("Match Found");
    } else {
      console.log("Try Again :(");
      await sleep(1000);
      activeTiles[0].style.pointerEvents = "auto";
      activeTiles[0].classList.toggle("is-flipped");
      activeTiles[1].style.pointerEvents = "auto";
      activeTiles[1].classList.toggle("is-flipped");
    }
    activeTiles = [];
  }
  if (count === 8) {
    alert("You Won!")
  }
};

tiles.forEach((tile) => {
  gameContainer.appendChild(tile);
  tile.classList.add("is-flipped");
  tile.addEventListener("click", function () {
    activeTiles.push(tile);
    checkTiles();
    tile.classList.toggle("is-flipped");
  });
});
