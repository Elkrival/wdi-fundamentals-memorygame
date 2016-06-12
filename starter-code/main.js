console.log("JS file is connected to HTML! Woo!")
//var cardOne = 'queen';
//var cardTwo = 'queen';
//var cardThree = 'king';
//var cardFour = 'king';

//*if (cardOne === cardTwo) {
//*	alert('You found a match!');	
//*} else {
//*  alert('Sorry, try again.');
//*}

var gameBoard = document.getElementByID('game-board');
//variable of my board

function createBoard() {
 for (var i = 0; i < cards.length; i++) {
 		var memoryCard = document.createElement('div')
 		cardElement.className = 'card';

 		board.appendChild(cardElement);
 	}

 }