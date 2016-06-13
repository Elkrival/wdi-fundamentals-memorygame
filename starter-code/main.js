console.log("JS file is connected to HTML! Woo!")

var cards = ['Queen', 'Queen', 'King', 'King'];

var cardsInPlay = []

for (var i = 0; i< cards.lenght; i++){

}

var board = document.getElementById('game-board');
//game board

function createBoard() {
 for (var i = 0; i < cards.length; i++) 
//loop of cards
 {
 		var cardElement = document.createElement('div');
 		//create the space for cards
 		cardElement.className = 'card';
 		//This will set up our cards and array
 		//data-attributes are meant to store data about an element that is not ti
 		//not tied to a style.
 		//i.e. 'king'

 		cardElement.setAttribute('data-card', cards[i]);
 		//when a card is clicked the function isTwoCards will be executed

 		cardElement.addEventListener('click', isTwoCards);

 		//append the card to the board
 		board.appendChild(cardElement);
 		board.appendChild(cardElement);
 	}
 }


//checks to see if there are cards in play

function isTwoCards() {
	//add card to array of cards being viewed

	cardsInPlay.push(this.getAttribute('data-card'));
	//show cards image
	if (this.getAttribute('data-card') === 'king') 
	{
		this.innerHTML = "<img src='images/king.png'>" //image of king

	} else { 
		this.innerHTML = "<img src='images/queen.png'>";
	}//queen
	//if you have two cards in play and check for a match
	if (cardsInPlay.length === 2) {
		//pass the cardsInPlay as an argument to isMatch function
		isMatch(cardsInPlay);
		// clear cards in play array for next try
		cardsInPlay = [];
	}
}
