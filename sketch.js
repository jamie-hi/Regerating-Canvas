function setup() {
    var canvas = createCanvas(800, 800);
  // creates a white background to compliment the hue of the shapes and overlapping of shapes
    background(255);
  // color mode set to hue saturation brightness
    colorMode(HSB);
  // removal of stroke to create a more accurate abstract art 'look'
    noStroke();

  // for loop generates [12] instances of the function
    for(i=0; i<12; i++)
    circles()
  
    for(i=0; i<8; i++)
    triangles()
  
    for(i=0; i<15; i++)
    polygons()
  
    for(i=0; i<5; i++)
    flower()
}

// a function for a flower inspire shape which was originally a star
function flower(){
  
  translate(width/2, height/2);
  // for loop creates 10 fragments of the original star shape
  for (let i = 0; i < 10; i ++) {
    // this hue can be overpowered by the other shapes when overlapped 
  fill(hue, 255, 255, 0.1);
  ellipse(120, 130, 5, 10);
    // rotation created with pi parameter divided by 5
  rotate(PI/5);
  }
  
}
// creation for polygons which ended up mistakenly being turned into rectangles with rounded corners 
function polygons(){

  // random number generated from 0 - 800 (max canvas height)
  var q = random(height);
  // random number generated frrom 0 - 800 (max canvas width)
  var w = random(width);
  // simply generates a random number from 25 - 325 to fill parameters of polygons
  var e = random(25,325);
  var hue = random(15, 250);
  
  fill(hue, 255, 255, 0.08);
  rect(q, w, e, w, q, w);
}

function triangles(){
  // same as polygons for triangles + circles
  var a = random(height);
  var s = random(width);
  var d = random(1,125);
  var hue = random(40, 550);
  
  fill(hue, 255, 255, 0.05);
  triangle(a, s, d, a, s, d);
  
}

function circles() {

    var x = random(height);
    var y = random(width);
    var z = random(1,500);
    var hue = random(180, 380);

    fill(hue, 255, 255, 0.11);
    ellipse(x, y, z);

}

// creates a function to setup user interaction of mouseclicked
function mouseClicked() {
  // calls the function each time 'mouseClicked' is triggered, regenerating the art
  setup();
}

function SaveImage(){
  
  if (keyCode === 81);
    saveCanvas('myCanvas.jpg');
}