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
    message = "Tie: "+player+" = "+cpu;
} else if ((player == "ROCK" && cpu == "SCISSORS") || (player == "SCISSORS" && cpu == "PAPER") || (player == "PAPER" && cpu == "ROCK")){
    message = "You Win! "+player+" beats "+cpu;
} else {
    message = "You lose! "+cpu+" beats "+player;
}
    return message;
}

let winner = '';
function game(){
    let message = '';
    let playerScore = 0;
    let cpuScore = 0;
    let winner = '';
    for (let i = 1; i <= 5; i++) {
        let cpu = getComputerChoice();
        let player = playerSelection();
    
        message = playRound(player, cpu);
        console.log(message);
        if (message.slice(0, 8) == "You Win!"){
            playerScore++;
        } else if (message.slice(0, 8) == "You lose"){
            cpuScore++;
        }

    }
    if (playerScore > cpuScore){
        winner = ("Player Wins! " + playerScore + " - " + cpuScore);
    } else if (playerScore < cpuScore){
        winner = ("CPU Wins! " + cpuScore + " - " + playerScore);
    } else {
        winner = ("Player Ties CPU! " + playerScore + " - " + cpuScore);
    }
    return winner;
}
console.log(game());