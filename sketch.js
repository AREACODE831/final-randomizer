//the people you might have been passed and words

let names = [{
  name: "mojo",
  //word: "hey"
}, {
  name: "shamzi",
  //word: "love you"
}, {
  name: "Pop Tart",
  //word: "sweet"
}, {
  name: "nabi",
  //word: "my friend!"
}, {
  name: "Mari",
  //word: "super!"
}, {
  name: "ash",
  //word: "wonderful"
}, {
  name: "kiki",
  //word: "I'm down"
}, {
  name: "Pixie",
  //word: "you can do it"
}, {
  name: "Bubbles",
  //word: "wanna go get some coffee?"
}, {
  name: "Goose",
  //word: "bless you"
}, {
  name: "Lollipop",
  //word: "chao"
}];

// let words = [{
//   word: "hey"
// }, {
//   word: "love you"
// }, {
//   word: "sweet"
// }, {
//   word: "my friend!"
// }, {
//   word: "super!"
// }, {
//   word: "wonderful"
// }, {
//   word: "I'm down"
// }, {
//   word: "you can do it"
// }, {
//   word: "wanna go get some coffee?"
// }, {
//   word: "bless you"
// }, {
//   word: "chao"
// }];
let words = [];

let randomIndex;
let randomIndex2;
// let inconsolata;
// function preload() {
//   inconsolata = loadFont('assets/inconsolata.otf');
// }

let animating = false;
let cats = [];
let imageCounter = 0;
let startRadomizerbutton;
let addMoreButton;
let cv;
let nameInputs = [];
let firstTime = true;



function preload() {
  //'assets/cat_${i}.jpeg'
  for (let i = 0; i <= 7; i++) {
    cats[i] = loadImage("assets/cat_" + i + ".png")
  }
}


function setup() {
  cv = createCanvas(500, 500);
  cv.parent("#canvasDiv");
  //#=css refrence to id, .=class

  background(242, 194, 48);
  textSize(12);
  imageMode(CENTER);
  frameRate(8);
  textFont()

  //text("click to find your destiny moment of bumping into someone", 50, 50);
  textFont('Homemade Apple');
  text("start your radomizer with writing greetings or reactions.", 50, 50);
  text("then, cat will answer to you", 50, 80);
  text("ex) chao, hello, omg, cool!", 50, 110);

  //button = createButton("click to randomize");
  startRadomizerbutton = select("#rButton");
  startRadomizerbutton.mousePressed(buttonPressed);

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }



  // setTimeout(changeBackground, 1000);
  // setInterval(changeBackground, 1000);
  //function copy and past not



  // console.log("initial array is");
  // console.log(names);

  // names.shift();
  // //pop removes the last thing of the array
  // console.log("array after shift");
  // console.log(names);
  //
  // names.unshift("greg");
  // console.log("array after unshift");
  // console.log(names);
  // //unshift takes the premeter
  // //shift and pop: takes away the first one
  //names.splice(index, number);
  // names.splice(4, 1);
  // console.log("array after splice");
  // console.log(names);
  //splice to remove on that perticuilar section

}

function draw() {
  //text('click to find your destiny moment of bumping into someone', 45, 200);

  if (animating == true) {
    clear();
    //white clean the canvas image before
    image(cats[imageCounter], width / 2, height / 2);

    if (imageCounter < cats.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}


// function changeBackground(){
//   if (counter <= 5){
//   counter++;
//   console.log(counter);
//   background(random(255),random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
//
// }
//
// }
function addAnotherInput() {

  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");

}


function randomizer() {
  animating = false;

  if (names[0]) {

    //this displays random name and splices it out of array
    // background(random(240, 150, 238));
    clear();

    //names random
    randomIndex = int(random(names.length));
    randomIndex2 = int(random(words.length));
    textStyle(NORMAL);
    textFont('Orbitron');
    textAlign(CENTER, CENTER);
    // text('${names[randomIndex].name} says...', 180, 150);
    image(random(cats), width / 2, height / 2);
    //random image of cats

    text(names[randomIndex].name + " says...", width / 2, height - 50);


    //words random
    textStyle(ITALIC);
    textFont('Homemade Apple');
    textAlign(CENTER, CENTER);
    text(words[randomIndex2], width / 2, height - 25);

    names.splice(randomIndex, 1);
  } else {
    background(random(240, 150, 238));
    text("nothing left!", 50, 50);

  }

}

function buttonPressed() {

  if (firstTime == true){

    for (let i = 0; i < nameInputs.length; i++) {
      words.push(nameInputs[i].value());
    }
    firstTime = false;
  }

  animating = true;
  setTimeout(randomizer, 2000);


}
