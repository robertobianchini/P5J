// Example converted from Openprocessing.org: https://www.openprocessing.org/sketch/186846

const PI = 3.141592653;
let t = 0;
const amplitude = 60;
const radius = 10;
const speed = PI / 36;
let sign = -1;

function setup() {
  createCanvas(600, 440);
  background(0);
  frameRate(10);
}

function draw() {
  translate(width / 2, height / 2);
  let x = amplitude * (2 * cos(t) - cos(2 * t));
  let y = sign * amplitude * (2 * sin(t) - sin(2 * t));
  
  stroke(0, 0, 128);
  line(0, 0, x, y);
  
  noStroke();
  fill(random(0, 256), random(0, 256), random(0, 256));
  ellipse(x, y, radius, radius);
  
  t += speed;
  if (abs(t) >= 2 * PI) {
    t = 0;
    sign *= -1;
    background(0); 
  }
}
