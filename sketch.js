
let names = [{
  name: "Unicorn",
  word: "dazzling horse with a spiraling horn"
}, {
  name: "Hatchi",
  word: "blughgh",
}, {
  name: "Valkyrie",
  word: "love you",
}, {
  name: "Ittan-momen",
  word: "sentiment roll of cotton that files through the night and suffocates people"
}, {
  name: "Pegasus",
  word: "winged stallion that helps heroes conquer deadly foes"
}, {
  name: "European Dragon",
  word: "super!"
}, {
  name: "Chinese Dragon",
  word: "Long, serpentine creature with elemental powers"
}, {
  name: "Chimera",
  word: "I'm down"
}, {
  name: "Phoenix",
  word: "fire bird that eternally regenerates from its own ashes"
}, {
  name: "Airavata",
  word: "wanna go get some coffee?"
}, {
  name: "Santelmo",
  word: "spiritual presence in the form of a dancing orb of flame"
}, {
  name: "Androsphinx",
  word: "chao"
}];


let randomIndex;
let cv;
let rButton;
let clouds = [];


let rc = 50;
let gc = 120;
let bc = 230;

let wrds;

function setup() {
  cv = createCanvas(500, 500);
  cv.parent("#canvasDiv");  background(0);
  frameRate(60);
  intText();
  fortBall();
  button = createButton('click here to get your guardian!');
  button.parent('rButton');
  button.mousePressed(buttonPressed);
}

function draw() {
  bg();


}

function bg (){
  for (var i = 0; i < clouds.length; i++){
    clouds[i].move();
  }
}

function buttonPressed() {
  randomIndex = int(random(names.length));

  // wrds = mood[mr] + ' ' + geo[gr] + ' ' + being[br] + '.';
  rc = random(255);
  gc = random(255);
  bc = random(255);
  showingText();
  console.log(wrds);
}

function fortBall() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 100);
}

function fortRect() {
  fill(rc, gc, bc);
  rect(width*0.5,height*0.5, 100);
}

function fortBall2() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 50, 150);
}

function intText() {
  fill(255);
  textAlign(CENTER);
}

function showingText() {
  background(0);
  intText();
  fortBall();
  fill(255);
  textAlign(CENTER);
  text(names[randomIndex].name + " will guard you..", 150, 50);
  text(names[randomIndex].word, 200, 150);

  // text('You meet a', width*0.5, height*0.7);
  // text(wrds, width*0.5, height*0.75)
}
