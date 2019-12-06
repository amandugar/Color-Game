var numSquares = 3;
var colors= [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();
function init() {
  setupmodeButtons();
setupSquares();
reset();
}

resetButton.addEventListener("click",function(){reset();
})

colorDisplay.textContent = pickedColor;


function changeColors(color){
  for (var i=0;i<colors.length;i++){
    squares[i].style.background = color;
  }
}
function pickColor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  //add num random colors to array
  // return that array
  var arr=[];
  for(var i=0; i<num;i++){
    arr.push(randomColor())

  }
  return arr;
}
function randomColor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+ r +", "+g + ", "+b +")";
  }
  function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Colors";
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++){
    if(colors[i])  {
      squares[i].style.background = colors[i];
      squares[i].style.display="block";
    }
    else{
      squares[i].style.display ="none";
    }
      h1.style.background = "steelblue";
}
 }
function setupmodeButtons(){
  for( var i =0 ; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      modeButtons[3].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent ==="Easy"){
      	numSquares = 3;
      }
      else if(this.textContent ==="Hard"){
      	numSquares = 6;
      }
      else if(this.textContent === "Very Hard"){
      	numSquares = 9;
      }
      else{
      	numSquares =12;
      }
      reset();
    } );
  }

}
function setupSquares() {
  for (var i=0;i<squares.length;i++){
    // add initial color to squares

    // add click listners to square
    squares[i].addEventListener("click",function() {
      //grab color of picked squares
      var clickedColor = this.style.background;
     //compare color to pickedColor
      if(clickedColor===pickedColor)
      {
      messageDisplay.textContent="Correct"
      changeColors(clickedColor);
      h1.style.background=clickedColor;
      resetButton.textContent = "Play Again";
      }
      else {
        this.style.background ="#232323";
        messageDisplay.textContent="Try Again";
      }
    });
   }

}
