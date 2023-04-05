function playerSelection(){
    let playerSelection = prompt("Enter Rock, Paper, or Scissors:").toUpperCase();
    return playerSelection;
}

/*if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS"){
    console.log(playerSelection);
} else {
    playerSelection = prompt("You must enter Rock, Paper, or Scissors:").toUpperCase();
}

/*while (pl < 5) {
    text += i + "<br>";
    i++;
  }*/

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

let cpu = getComputerChoice();
let player = playerSelection();

if (player == cpu){
    alert("Tie");
} else if ((player == "ROCK" && cpu == "SCISSORS") || (player == "SCISSORS" && cpu == "PAPER") || (player == "PAPER" && cpu == "ROCK")){
    alert("Player Wins");
} else {
    let message = ""
    return"CPU Wins")
}

console.log(player);
console.log(cpu);