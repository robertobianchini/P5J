let px;
let py;
let r;
let minR;
let maxR;
let vx;

function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
  fill(255, 0 , 0);
  px = width / 2;
  py = height / 2;
  r = 50;
  vx = 3;
  minR = 50;
  maxR = 300; 
}

function draw() {
  background(0);
  ellipse(px, py, r, r);
  r += vx;
  if (r > maxR || raio < minR) {
    vx *= (-1);
  }
}
