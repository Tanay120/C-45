var bg,bg2,form,system,code,security;

var mathsButton;
var mathsImput;

var englishButton;
var englishImput;

function setup() {
  //var message = "hello world"
  //console.log(message.toUpperCase())
  createCanvas(10000,1000);
  
  color("Red")
  textSize(20)
  text("Maths",50,90);
  mathsButton = createButton("Check");
  mathsButton.position(50,135);

  mathsImput = createInput("Enter Maths Paper Number");
  mathsImput.position(50,100);

  mathsButton.mousePressed(maths);

  englishButton = createButton("Check");
  englishButton.position(300,370);

  englishImput = createInput("Enter English Paper Number");
  englishImput.position(300,350);

  englishButton.mousePressed(english);
   
}

function draw() {
  background("cyan");
}

 function maths(){
  console.log("maths");
  var paperNum = mathsImput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Mathematics%20(0580)/" + paperNum + ".pdf")
}

function english(){
  console.log("english");
  var paperNum = englishImput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/English%20-%20First%20Language%20(0500)/"+ paperNum + ".pdf")
}

