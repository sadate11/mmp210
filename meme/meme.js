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

function draw(){
  image(img1, 0, 0);
  image(img2, 0, 0);
  image(img4, 180, 420);
    textSize(100);
    fill("white");
	textFont("Helvetica");
	text("Ron Like!", 100, 100);
}
