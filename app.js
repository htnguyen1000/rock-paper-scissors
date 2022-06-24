// Call a function that randomly returns R,P,S

function computerPlay () {
    const options = ["rock","paper","scissors"]
    return options[Math.floor(Math.random()*options.length)];
}

//console.log(computerPlay());

// Function that takes parameters playerSelection and computerSelection 
// returns a string that declares the winner of the round 
// Rock > Scissors ; Scissors > Paper ; Paper > Rock


//console.log(playerSelection);

//Function that checks the 3 scenarios of the game


function playRound(playerSelection,computerSelection) {
    //console.log(playerSelection);
    //console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !=="scissors")){
        return "Try Again! You entered a wrong choice."
    }
    else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

//console.log(playRound(playerSelection, computerSelection));


// Function that keeps score (first to 5) and reports a winner or loser at the end

function game() {
    var playerCount = 0;
    var computerCount = 0;
    while ((playerCount < 5) && (computerCount < 5)){
        var computerSelection = computerPlay();
        var playerSelection = (prompt("What is your selection?")).toLowerCase();
        var playerString = playRound(playerSelection,computerSelection);
        console.log(playerString);
        var result = playerString.slice(4,7);
        if (result === "Won") {
            playerCount++;
        }
        else if (result === "Los"){
            computerCount++;
        }
    }
}
    
game();
