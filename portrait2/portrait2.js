function setup() {
  createCanvas(400, 400);
  var cnv = createCanvas(400, 400);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
// cnv.position(x, y);
  background(255, 255, 255);

}

function draw() {
//hair
  var hairColor = color("#242424");
  var hairTopY = 40;
  var hairBtmY = 20;
  var hairX = 110;
  var hairWidth = 170;
  var hairTopHeight = 200;
  var hairBtmHeight = 100;
fill(hairColor);
rect(hairX, hairTopY, hairWidth, hairTopHeight, 90);
rect(hairX, hairBtmY, hairWidth, hairBtmHeight, 30);


//ears
var skinColor = color(141, 85, 36);
var earSize = 20;
var earY = 120;
var earLeftX = 100;
var earRightX = 242;
stroke(24);
fill(skinColor);
rect(earLeftX, earY, 50,50, earSize);
rect(earRightX, earY, 50,50, earSize);
//neck
var neckHeight = 80;
var neckY = 200;
var neckX = 155;
stroke(24);
fill(skinColor);
rect(neckX, neckY, 75, neckHeight);

//torso
var torsoX = 45;
var torsoY = 270;
var torsoWidth = 300;
var torsoHeight = 200;
stroke(24);
fill(239, 89, 86);
rect(torsoX, torsoY, torsoWidth, torsoHeight, 80);

//head
var headSize = 90;
var headY = 50;
var headX = 110;
stroke(24);
fill(skinColor);
rect(headX, headY, 170, 200, headSize);


//eyes
var eyeSize = 40;
fill(255, 255, 255);
var eyeY = 140;
stroke(24);
ellipse(150, eyeY, 40, eyeSize); // left eye
ellipse(240, eyeY, 40, eyeSize); // right eye

//pupils
var pupilSize = 20;
pupilY = 140;
fill(24);
noStroke();
ellipse(150, pupilY, pupilSize, 20);
ellipse(240, pupilY, pupilSize, 20);



//mouth
var white = color(255,255,255);
stroke(24);
fill(white);
arc(195, 200, 75, 45, TWO_PI, PI);

//mouth
stroke(24);
noFill()
arc(194, 165, 35, 25, TWO_PI, PI);


}
