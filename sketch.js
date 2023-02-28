let bx;
let by;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
 let canvas = createCanvas(500, 500);
 canvas.parent('sketch-container');
  bx = 0;
  by = 0;
  bg = loadImage('bg.png');
  glass = loadImage('glass.png');
  hbanana = loadImage('hbanana.png');
  hcherry = loadImage('hcherry.png');
  hpine = loadImage('hpine.png');
  hwater = loadImage('hwater.png');
  ablack = loadImage('ablack.png'); 
  ablue = loadImage('ablue.png');
  apink = loadImage('apink.png');
  arainbow = loadImage('arainbow.png');
}

function mousePressed() {
  if (overBox) {
    locked = true;
    bx = 0; by = 0;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  } 
}

function mouseReleased() {
  locked = false;
}

function draw() {
  background(bg);

  if (
    mouseX > 180 &&
    mouseX < 360 &&
    mouseY > 180 &&
    mouseY < 260
  ) {
    overBox = true;
    if (!locked) {}
  } else {
    overBox = false;
  }

if (by <-125) {image(ablack,0,0) } else { }  
if (-125 < by && by < 0) {image(ablue,0,0) } else { } 
if (0 < by && by < 125) {image(apink,0,0) } else { } 
if (125 < by) {image(arainbow,0,0) } else { } 

if (bx == 0) {image(hpine,0,0) } else { }  
if (bx <-125) {image(hbanana,0,0) } else { }  
if (-125 < bx && bx < 0) {image(hcherry,0,0) } else { } 
if (0 < bx && bx < 125) {image(hpine,0,0) } else { } 
if (125 < bx) {image(hwater,0,0) } else { } 
  
  // Draw the glass
  if (locked) 
  {image(glass, bx, by)}
   else {
    image(glass, 0, 0)
 }}


