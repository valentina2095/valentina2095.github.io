var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var current = document.getElementById('current');
var line = document.getElementById('line')
var button = document.querySelector("button");

function colorChange() {
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  current.textContent = color1.value + ', ' + color2.value;
  line.textContent = 'background: ' + body.style.background + ';';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color1r = '#';
  var color2r = '#';
  for (var i = 0; i < 6; i++) {
    color1r += letters[Math.floor(Math.random() * 16)];
    color2r += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = color1r;
  color2.value = color2r;

  colorChange();
}

// color1.addEventListener("input", colorChange);
// color2.addEventListener("input", colorChange);
