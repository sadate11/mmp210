var serial;
var portName = "/dev/cu.usbmodem14101";
var sensorValue;
var baby;
var boy;
var teenager;
var graduate;
var professional;
var couple;
var married;
var oldcouple;
var old;
var grave;
var babycry;
var cheer;
var crickets;
var wedding;


function setup() {
    createCanvas(800, 600);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
    
    baby = loadImage("01.png");
    boy = loadImage("02.png");
    teenager = loadImage("03.png");
    graduate = loadImage("04.png");
    professional = loadImage("05.png");
    couple = loadImage("06.png");
    married = loadImage("07.png");
    oldcouple = loadImage("08.png");
    old = loadImage("09.png");
    grave = loadImage("10.png")
    
    
    
}

function preload() {
     babycry= loadSound("babycry.mp3");
    cheer = loadSound("cheer.wav");
    crickets = loadSound("crickets.mp3");
    wedding = loadSound("wedding.mp3");
}


function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 200);

    // sky
    background(c, c, c + 0);

    var y = map(sensorValue, 0, 1023, height, 0);
    var x = map(sensorValue, 0, 1023, height, 0);

    // sun
    noStroke();
    fill('gold');
    ellipse(320, y, 80);
    fill(255);
    image(baby,x, baby-sailboat.height, baby.width, baby.height);

}
