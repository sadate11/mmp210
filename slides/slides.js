/*
    final project presentation slides
*/
var slide = 0;

var bird, fish;

function preload() {
    baby = loadImage("baby.png");
    grave = loadImage("gravestone.png");
    sensor = loadImage("potentiometer.jpg");
    
}

function setup() {
    createCanvas(800, 600);
    textSize(60);
    textFont('Playfair Display');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(255, 255, 255);

    if (slide == 0) {
        text("Final Project Idea", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("Potentiometer", 200, 100);

        // potientiometer image
        image(sensor, 400, 200);
    } else if (slide == 2) {
        text("theme: Human Evolution", 200, 40);
        image(baby, 200, 100);
        image(grave, 400, 100);
    } else if (slide == 3) {
        text("The potentiometer will control the human evolution throughout time.", width/2, height/2);
        textSize(20);
    }
    
    
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
