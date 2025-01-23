let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const resetButton = document.querySelector("#reset-score");

const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "It's a Tie";
    }

    if (
        (userChoice === 'rock' && compChoice === 'scissors') || 
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return "You Win!";
    }

    return "You Lose!";
};

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const optionIdx = Math.floor(Math.random() * 3);
    return options[optionIdx];
};

const playGame = (userChoice) => {
    console.log(`Your choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);
    const result = determineWinner(userChoice, compChoice);

    if (result === "You Win!") {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else if (result === "You Lose!") {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    } else if (result === "It's a Tie") {
        msg.innerText = `Game Draw, you both chose ${userChoice}`;
        msg.style.backgroundColor = "#081b31";
    }

    setTimeout(() => {
        msg.innerText = "Make your choice!";
        msg.style.backgroundColor = "";
    }, 1000);
};

const resetScores = () => {
    userScore = 0;
    compScore = 0;
    user.innerText = `${userScore}`;
    comp.innerText = `${compScore}`;
    msg.innerText = "Make your choice!";
    msg.style.backgroundColor = "";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetButton.addEventListener("click", resetScores);
