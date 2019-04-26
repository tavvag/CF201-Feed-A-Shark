'use-strict';

var img = new Image;

var canvas = document.getElementById('Shark');
var ctx = canvas.getContext('2d');
console.log('Canvas Shark:', ctx);

var x, y;
window.addEventListener('click', setAttributesForAnimation);

function setAttributesForAnimation() {
  img.src = "shark.jpg";
  img.addEventListener('load', setIntervalForAnimation);
}

function setIntervalForAnimation() {
  x = 0;
  y = 0;
  setInterval(performAnimation, 1000/500);
}

function performAnimation() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(img, x, y);

  x += 1;
  if (x > ctx.canvas.width) {
      x = 0;
  }
}