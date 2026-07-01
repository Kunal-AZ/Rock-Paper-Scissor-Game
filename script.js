let userScore = 0;
let compScore = 0;

// Select each choice (Rock, Paper, Scissors)
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};

// Draw Game
const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#4facfe";
};

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `Computer Wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Play Game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    console.log("User Choice:", userChoice);
    console.log("Computer Choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin;

    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
};

// Add Click Events
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});