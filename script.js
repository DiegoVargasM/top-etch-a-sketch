//initial color value
let color = "black";
//initial click value
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board");
  //remove the previous divs
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  //create grid
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white"
    board.insertAdjacentElement("beforeend",square);
  }
}

populateBoard(16);

//only allow a given range of sizes
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

//enable coloring when click is true
function colorSquare() {
  if (click) {
    //add random color function
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

//change color value
function changeColor(choice) {
  color = choice;
}

//reset board to default
function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"))
}

//function to toggle drawing on/off with clicking
body = document.querySelector("body");
body.addEventListener("click", changeValue);

//change the boolean value of click
function changeValue(e) {
  //Only fire the function when not clicking a button
  if (e.target.tagName != "BUTTON") {
    click = !click;
    //show the user current mode
    mode = document.querySelector(".mode");
    if (click) {
      mode.textContent = "Mode: Coloring";
    } else {
      mode.textContent = "Mode: Not coloring";
    }
  }
}
