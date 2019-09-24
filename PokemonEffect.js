let numberOfCircles = 700;

function setup() {
  createCanvas(600, 400);
  background(0,0, 0);
  noStroke();
  frameRate(30);
}

function draw() {
  background(0, 0, 0);
  for (let i = 0; i < numberOfCircles; i++) {
    const px   = random(0, width);
    const py   = random(0, height);
    const raio = random(5, 100);
    const r    = random(0, 256);
    const g    = random(0, 256);
    const b    = random(0, 256);
    fill(r, g, b);
    ellipse(px, py, raio, raio);
    
  }
}
