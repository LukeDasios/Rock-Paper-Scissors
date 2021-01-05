/*
Declaring the below variables
means we just "cached the DOM".
Storing everything in variables 
so they can accessed and used
later -> its gonna be simpler to use 
the variable name than the whole
document.getIlementId or 
document.querySelector spiel every
time we need to call reference them
*/
    
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Uses rng (random number generator) to determine computer's choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }

    else if (letter === "p") {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + "beats" + smallComputerWord + convertToWord(computerChoice) + ". User Wins!";

    //Adds a green glow to the winning selection
    document.getElementById(userChoice).classList.add('green-glow');

    //Removes the glow (so it's only for that round)
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 1000);

}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + "beats" + smallComputerWord + convertToWord(computerChoice) + ". Computer Wins!";

    //Adds a red glow to the losing selection
    document.getElementById(userChoice).classList.add('red-glow');

    //Removes the glow (so it's only for that round)
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 1000);

}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + "ties" + smallComputerWord + convertToWord(computerChoice) + ". Draw!";

    //Adds a gray glow to the drawing selection
    document.getElementById(userChoice).classList.add('gray-glow');

    //Removes the glow (so it's only for that round)
    setTimeout(function () { document.getElementById(userChoice).classList.remove('gray-glow') }, 1000);

}

//Takes userChoice and computerChoice, compares them, then spits out the result of the match (win, lose, draw)
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        //User winning situations
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        //User losing situations
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        //Tie situations
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}





function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

//executes the main function
main();

