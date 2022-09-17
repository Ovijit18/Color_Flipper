colors = [1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");

setInterval(function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += colors[getRandom()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}, 1000);

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
