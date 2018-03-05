var colors = [];
var squares = document.querySelectorAll(".square");
var choosedColor;
var numSqr = 6;
var displayColor = document.querySelector(".display-color");
var h1 = document.querySelector(".title");
var spacer = document.querySelector(".spacer");
var newGameBtn = document.querySelector(".item-1");
var easyBtn = document.querySelector(".item-2");
var hardBtn = document.querySelector(".item-3");

newGame();

function newGame() {
  toggleMode();
  setRandomColorsToSquares();
  chooseColor();
  pickedColor();
  h1.style.backgroundColor = "#5D737E";
  spacer.textContent = "";
}

function setRandomColorsToSquares() {
  for (var i = 0; i < numSqr; i++) {
    var x = Math.floor(Math.random()*255);
    var y = Math.floor(Math.random()*255);
    var z = Math.floor(Math.random()*255);
    colors[i] = "rgb(" +  x + ", " + y + ", " + z +")";
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.boxShadow = "0 0 40px -6px " + colors[i];
  }
}

function chooseColor() {
  var x = Math.floor(Math.random()*numSqr);
  choosedColor = colors[x];
  displayColor.textContent = choosedColor;
}

function pickedColor() {
  for (var i = 0; i < numSqr; i++) {
      squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === choosedColor) {
          h1.style.backgroundColor = this.style.backgroundColor;
          spacer.textContent = "YOU WIN!";
          for (var i = 0; i < numSqr; i++) {
            squares[i].style.backgroundColor = this.style.backgroundColor;
            squares[i].style.boxShadow = "0 0 40px -6px " + this.style.backgroundColor;
          }
        } else {
          this.style.backgroundColor = "transparent";
          this.style.boxShadow = "none";
          spacer.textContent = "TRY AGAIN!"
        }
      });
    }
}

function toggleMode() {
  if (numSqr === 3) {
    easyBtn.classList.add("active");
    hardBtn.classList.remove("active");
    for (var i = 3; i < 6; i++) {
      squares[i].style.display = "none";
    } 
  } else {
    hardBtn.classList.add("active");
    easyBtn.classList.remove("active");
      for (var i = 3; i < 6; i++) {
        squares[i].style.display = "block";
      }
    }
}

newGameBtn.addEventListener("click", function() {
  newGame();
});

hardBtn.addEventListener("click", function() {
  numSqr = 6;
  newGame();
});

easyBtn.addEventListener("click", function() {
  numSqr = 3;
  newGame();
});
