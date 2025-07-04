let boxes = document.querySelectorAll(".buttons");
let reset = document.querySelector("#reset");
let newGameButton = document.querySelector("#newgame");
let messageContainer = document.querySelector(".winner-message");
let msg = document.querySelector("#msg");
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    turnO = true;
    enableButtons();
    messageContainer.classList.add("hide");
}

let turnO = true;
let clicks = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O";
            clicks++;
            turnO = false;
        }
        else {
            box.innerText = "X";
            clicks++;
            turnO = true;
        }
        box.disabled = true;
        if (clicks == 9) {
            draw();
        }
        else {
            checkWinner();
        }

    })
})

const draw = () => {
    msg.innerText = `DRAW!`;
    messageContainer.classList.remove("hide");
    disableButtons();
}

const enableButtons = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congractulations ${winner} ! You Won!`;
    messageContainer.classList.remove("hide");
    disableButtons();
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

newGameButton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);