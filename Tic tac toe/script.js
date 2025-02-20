let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "#A8DCD9";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#E2A3C7";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw();
    });
});
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
}
const showWinner = (winner) => {
    msg.innerText = `${winner} wins!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
                    boxes[pattern[0]].classList.add("winColor");
                    boxes[pattern[1]].classList.add("winColor");
                    boxes[pattern[2]].classList.add("winColor");
                disableBoxes();
            }
        }
    });
};

const checkDraw = () => {
    let isDraw = true;
    boxes.forEach((box) => {
        if(box.innerText == ""){
            isDraw = false;
        }
    });
    if(isDraw){
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("winColor");
    });
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
