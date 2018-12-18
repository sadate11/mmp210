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
  var hairY = 170;
fill(hairColor);
rect(110, 40, hairY,200, 90);
rect(110, 20, hairY,100, 30);


//ears
var skinColor = color(141, 85, 36);
var earSize = 20;
var earY = 120;
stroke(24);
fill(skinColor);
rect(100, earY, 50,50, earSize);
rect(242, earY, 50,50, earSize);
//neck
var neckHeight = 80;
var neckY = 200;
var neckX = 155;
stroke(24);
fill(skinColor);
rect(neckX, neckY, 75, neckHeight);

//torso
stroke(24);
fill(239, 89, 86);
rect(45, 270, 300,200, 80);

//head
var headSize = 90;
var headY = 50;
var headX = 110;
stroke(24);
fill(skinColor);
rect(110, 50, 170,200, headSize);

//hairline
noStroke();
fill(hairColor);
rect(120, 40, 150,40, 75)

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

// glair
var glairY = 135;
fill(255,255, 255)
ellipse(155, glairY, 7, 7);
ellipse(245, glairY, 7, 7);

//mouth
var white = color(255,255,255);
stroke(24);
fill(white);
arc(195, 200, 75, 45, TWO_PI, PI);

//mouth
stroke(24);
noFill()
arc(194, 165, 35, 25, TWO_PI, PI);

// Beard
noStroke();
fill(hairColor);
ellipse(194, 245, 50,15);

}
