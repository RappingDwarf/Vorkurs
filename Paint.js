let brushMode;
let button;
let button2;
let Button3;

function setup() {
  createCanvas(660, 660);
  d = 10;
  brushMode = 1;
  frameRate(200);
  button = createButton("Konvetti");
  button.position(10, 10);
  button.mousePressed(selectBrushModeA);
  
  button2 = createButton("Quadrat");
  button2.position(80, 10);
  button2.mousePressed(selectBrushModeB);
  
  button3 = createButton("Stift");
  button3.position(150, 10);
  button3.mousePressed(selectBrushModeC);
}

function selectBrushModeA() {
  brushMode = 0;
}

function selectBrushModeB() {
  brushMode = 1;
}

function selectBrushModeC() {
  brushMode = 2;
}

function draw() {
  if (mouseIsPressed) {
    if (brushMode == 1) {
      rect(mouseX - d / 2, mouseY - d / 2, d);
    } 
    if (brushMode == 0){
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      fill(r, g, b);
      circle(mouseX + random(-d, d), mouseY + random(-d, d), random(d, d + 30));
    }
    if (brushMode == 2){
      circle(mouseX,mouseY,d,d)
    }
    }
  }


function mouseWheel() {
  //print(event.delta);
  d = d + event.delta / 5;
  if (d <= 0) {
    d = 0;
  }
}
