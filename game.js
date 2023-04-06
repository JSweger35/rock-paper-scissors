let cpu = getComputerChoice();
let player = playerSelection();
let message = '';

//get input from user for rock, paper, or scissors
function playerSelection(){
    let playerSelection = prompt("Enter Rock, Paper, or Scissors:").toUpperCase();
    return playerSelection;
}

// randomly generates rock, paper, or scissors for cpu
function getComputerChoice(){
    let rps = '';
    let randomNum = parseInt(Math.floor(Math.random()*3));

    if (randomNum == 0){
        rps = "ROCK";
    } else if (randomNum == 1){
        rps = "PAPER"
    }else if (randomNum == 2){
        rps = "SCISSORS"
    }
    return rps;
}

//plays cpu vs player and determines who wins
function playRound(player,cpu){
if (player == cpu){
    message = "Tie";
} else if ((player == "ROCK" && cpu == "SCISSORS") || (player == "SCISSORS" && cpu == "PAPER") || (player == "PAPER" && cpu == "ROCK")){
    message = "You Win! "+player+" beats "+cpu;
} else {
    message = "You lose! "+cpu+" beats "+player;
}
    return message;
}

//displays winner, cpu or player
console.log(playRound(player, cpu))