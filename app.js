//Mastermind Game

//Rules

// The play of the game goes as follows:
// 1) One player, known as the Codemaker, secretly places the 4 Code Pegs in the 4
// holes, which are then covered by flipping over the plastic shield to conceal them from
// the opponent's sight. The Codemaker can use any combination of the 6 colors he
// chooses. He can also use 2 or more Code Pegs of the same color if he wishes.
// 2) The other player, known as the Codebreaker, sits opposite the Codemaker and
// places Code Pegs in the 1st row of the Code Peg holes (closest to him). The
// Codebreaker is attempting to duplicate the exact colors and positions of the secret
// code.
// 3) The Codemaker responds by placing 0, 1, 2, 3, and 4 Key Pegs in the Key Peg holes on the 1st row

// (b) A black Key Peg to indicate a Code Peg of the right color and in the right position
// (without indication of which Code Peg it corresponds to).
// (b) A white Key Peg to indicate a Code Peg of the right color but in the wrong position.
// (b) No Key Peg to indicate a wrong color that does not appear in the secret code.
// .
// There is nothing about the placement of the Key Pegs to indicate which particular Code
// Pegs are meant. It is part of the challenge of the game for the Codebreaker to figure out
// which Code Pegs correspond to particular Key Pegs. The response when 2 pegs of the
// same color appear in the secret code and/or in the Codebreaker's row can cause some
// confusion. The basic principles are that one Key Peg corresponds to one Code Peg
// and, that black Key Peg takes precedence over a white one



// an array of colors
var colors = ["red", "yellow", "blue", "green", "turquoise", "magenta"];
// the variable secret code will be equal to the chooseColors function
var secretCode = chooseColors();
console.log(secretCode);
var playerCode = [];
var turnCounter = 0;


function chooseColors(){
	// the variable computerChoice is equal to an empty array
	var computerChoice = [];
	// this loop will shuffle the colors array and store the result of the shuffled array into a variable called randomColor
	for (i= 0; i < 4; i++){
		var randomColor = colors[Math.floor(Math.random()*colors.length)];
		// the result of the shuffled array is pushed into the empty randomColor array
		// This will serve as the computer's color choice for current round.
		computerChoice.push(randomColor);

	}

	return computerChoice;
}



$(document).ready(function(){

//picking colors
$("#color-choices div").click(function(){
console.log('clicked on '+$(this).attr('class'));

var length = $('#current-guess ul li').length;
if (length < 4) { // only 4 colors allowed
  var guess = $(this).attr('class');
  //guess will be the color they clicked on
  playerCode.push(guess);
  $('#current-guess ul').append('<li><span class='+guess+'></span></li>'); //display guess
  console.log(playerCode+' is the players current guess');
}
else {
  //error message
  alert('Only four colors may be chosen. Please click "Guess" or "Reset" button');
}
});

//reset button
$("#reset-btn").click(function(){
console.log('CLICKED RESET');
//empty out the current guess array
playerCode = [];
//dump all the list items in #current-guess ul
$('#current-guess ul').empty();
});

//score button
$("#score-btn").click(function(){
//calculate score
//computer code is secretCode lets store it temporarily, so we can safely manipulate its value
var theAnswer = secretCode;
var currentGuess = playerCode;

//iterate through secret code
for(i = 0; i < theAnswer.length; i++) {

  //iterate through players guess, nested loop compares each guess to the [i]th element
  for(k = 0; k < currentGuess.length; k++) {
  console.log('Compare CPU '+theAnswer[i]+' against player'+currentGuess[k]);

    //check for black peg
    //check for white peg
    //update the gameboard add colored pegs and scoring pegs
    //Tell them they win if its all black
    //Tell them they lose if this was their 12th guess
  }
}

});

});




// 4 black is a win

// 4 white is all the right colors but wrong position

// Each dot can start with a class of white, when you pick colors the current guess section can add and remove classes for a color change. After clicking the score button is only when you update the actual game board

// There are only two elements that need to except user input. The colors they can choose from, and the reset current guess button. 

// Everything else is calculating the black and white score pegs and waiting to tell the user they’ve won or lost.

// Thats very good, your next step is appending to the view, each guess they make. Be careful not to let them choose more than 4 pegs before hitting 'score' or 'reset'

// Once you have both sets of four pegs (CPU and player) you can compare them, and your compare function can return a shuffled array of white and black pegs to update the view

// This happens until they get 4 black pegs, or guess 12 times. At which point the game is over, and the winner is revealed.



