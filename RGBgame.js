var numSquares = 9;
var colors =generateColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var mediumBtn=document.querySelector("#mediumBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	numSquares=3;
	hardBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateColors(numSquares);
	pickedColor=pickColor();
	for(var i =0; i<squares.length;i++){
			if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
mediumBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	numSquares = 6;
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	mediumBtn.classList.add("selected");
	colors = generateColors(numSquares);
	pickedColor=pickColor();
	for(var i =0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
						squares[i].style.display="block";

		}
		else{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	numSquares=9;
	easyBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateColors(numSquares);
	pickedColor=pickColor();
	for(var i =0; i<numSquares;i++){
		squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

resetButton.addEventListener("click", function(){
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor = "lightblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent= "";
})

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor){
			resetButton.textContent = "Play Again?";
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "lightblue";
			messageDisplay.textContent = "Wrong.";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateColors(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g+", "+b+")";
}