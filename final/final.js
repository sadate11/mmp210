var serial;
var portName = "/dev/cu.usbmodem14101";
var sensorValue;

//graphic elements
 baby = loadImage("01.png");
 boy = loadImage("02.png");
 teenager = loadImage("03.png");
 graduate = loadImage("04.png");
 professional = loadImage("05.png");
 couple = loadImage("06.png");
 married = loadImage("07.png");
 oldcouple = loadImage("08.png");
 old = loadImage("09");


function setup() {
    createCanvas(800, 600);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
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
    
    // sun
    noStroke();
    fill('gold');
    ellipse(320, y, 50);
    
}
