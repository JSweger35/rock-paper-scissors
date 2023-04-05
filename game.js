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

console.log(getComputerChoice())