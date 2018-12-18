var img1;
var img2;
var img3;
var img4;

function preload() {
  img1 = loadImage("ronlike.png");
  img2 = loadImage("ronhate.png");
  img3 = loadImage("veggies.png");
  img4 = loadImage("steak.png");
}

function setup() {
  createCanvas(600, 600);
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
// cnv.position(x, y);
  background(255, 255, 255);


}

var x = 100
var y = 420
function draw(){

  //Adding background image & caption
  image(img1, 0, 0);
  textSize(100);
  textFont("Helvetica-Bold");
  fill("white");
  text("Ron Like!", x, 100);

  // Animate text & Loop
  x += 4;
  if (x > width) {
		x = 0;
  }

  // Transform steak image
  y += .5;
  if (y > 420) {
      y = 400
  }
    image(img4, 200, y)





}
