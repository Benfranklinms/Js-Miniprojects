let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreSpan = document.querySelector('#user-score');
const compScoreSpan = document.querySelector('#comp-score');



const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScoreSpan.innerText = userScore;
        msg.innerText = "User win";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreSpan.innerText = compScore;
        msg.innerText = "Computer win";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);
    let userWin = true;

    if(userChoice == compChoice){
        msg.innerText = "It's a draw";
        msg.style.backgroundColor = "#824670";
    }
        if(userChoice == "rock"){
        if(userChoice = "rock"){
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("userChoice = ",userChoice);
        playGame(userChoice);
    });
});