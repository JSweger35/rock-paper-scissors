let playerSelection = prompt("Enter Rock, Paper, or Scissors:").toUpperCase();

if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS"){
    console.log(playerSelection);
} else {
    playerSelection = prompt("You must enter Rock, Paper, or Scissors:").toUpperCase();
}

function getComputerChoice(){
    let rps = '';
    let randomNum = parseInt(Math.floor(Math.random()*3));

    if (randomNum == 0){
        rps = "Rock";
    } else if (randomNum == 1){
        rps = "Paper"
    }else if (randomNum == 2){
        rps = "Scissors"
    }

    return rps;
}



console.log(getComputerChoice());