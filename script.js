// Define function to generate random number
function rollDice() {
    return Math.floor(Math.random()* 6 + 1);
}
function rolling() {
    return Math.floor(Math.random() * 6 + 1);
}


// Get references from HTML elements
const rollButton = document.getElementById('dice-roll');
const diceResult = document.getElementById('roll-result');
const scoreDisplay = document.getElementById('score-display');
const highScoreDisplay = document.getElementById('high-display');
const congratsMessage = document.getElementById('congrats-message');

// Initialize score variable
let score = 0;
let highScore = 0;

// Add event listener to the roll button
rollButton.addEventListener('click', function() {

    // Generate a random number when the roll button is clicked
    const randomNumber = rollDice();

        // Show random numbers between 1 and 5 for 1000ms
        let interval = setInterval(function() {
            diceResult.textContent = rolling();
        }, 75);

            setTimeout(function(){
                clearInterval(interval); //Stop initial rolling interval
            
                interval = setInterval(function(){
                    diceResult.textContent  = rolling();
                }, 125);
            }, 550);

            
        //After 1000ms, update the dice result element with the final generated number
        setTimeout(function() {
            clearInterval(interval); // Stop showing random numbers
            diceResult.textContent = randomNumber

    // Add generated number to the score, unless it's a 6
    if (randomNumber === 6)  {
        score = 0;
        scoreDisplay.textContent = "Oh no! Back to 0";
    } else {
        score += randomNumber;
        scoreDisplay.textContent = score;
    }

    
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;

        congratsMessage.textContent = "🥳 New High Score! 🕺🏼";
        congratsMessage.style.display = "block"; // Show congrats message
    } else {
        congratsMessage.style.display = "none"; // Block congrats message
    }

    }, 600);
});




/*
if (score > highScore) {
    highScore = score;
    console.log("High Score: ", highScore)
    highScoreDisplay.textContent = highScore;
} 
*/