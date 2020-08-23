let rainbowElements = document.querySelectorAll(".container > * , .a , .item");
let items = document.querySelectorAll(".item");
console.log(rainbowElements);

function randomRgbValue() {
  return Math.floor(Math.random() * 256);
}
function getRgbaBackground() {
  return `rgba(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()}, 0.5)`;
}

function MakeItRainbow() {
  rainbowElements.forEach((child) => {
    child.style.backgroundColor = getRgbaBackground();
  });
}

setInterval(MakeItRainbow, 5000);
