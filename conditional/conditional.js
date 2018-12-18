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
    
  // Ron Like
  image(img1, 0, 0);
  textSize(80);
  textFont("Helvetica");
  fill("white");
  text("Ron Like!",100,100);
  image(img4, 350, 420);
    
  if (mouseIsPressed) {
      
  // Ron Hate    
  image(img2, 0, 0);
  image(img3, 50, 420);
  textSize(80);
  fill("white");
  textFont("Helvetica");
  text("Ron Hate!", 100, 100); 
      
  }
    
    
}
