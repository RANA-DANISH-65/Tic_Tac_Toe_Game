let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let mian = document.querySelector("#mian");
const player1Input = document.querySelector("#player1").innerText;
const player2Input = document.querySelector("#player2").innerText;

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
 let clickcount=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = `<span class= "o-color">O</span>`;
      turnO = false;
    } else {
      box.innerHTML = `<span class= "x-color">X</span>`;
      turnO = true;
    }
    box.disabled = true;
    Checkwinner();
    clickcount++;
    if(clickcount==9)
      {
        msg.innerText = `"Game Drawn!"`;
        msgcontainer.classList.remove("hide");
        mian.classList.add("hide");
        disabledbtns();
      }
  });
});
const resetgame = () => {
  turnO = true;
  enabledbtns();
  clickcount=0;
  msgcontainer.classList.add("hide");
  mian.classList.remove("hide");
  document.querySelector("#player1").value = "";
  document.querySelector("#player2").value = "";



};
const disabledbtns = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  let player1 = document.querySelector("#player1").value.toUpperCase();
  let player2 = document.querySelector("#player2").value.toUpperCase();
  
  if (winner === "O") {
    if(player1==="")
    {
      msg.innerText="The Winner is Player 1!"
    }
    else{

      msg.innerText = `"The Winner is ${player1}!"`;
    }
  } else {
    if(player2 ==="")
      {
        msg.innerText="The Winner is Player 2!"
      }
      else{
  
        msg.innerText = `"The Winner is ${player2}!"`;
      }
  }
  msgcontainer.classList.remove("hide");
  mian.classList.add("hide");
  disabledbtns();
};
const enabledbtns = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";

  });
};

const Checkwinner = () => {
  for (let pattern of winPatterns) {
    let box1 = boxes[pattern[0]].innerText;
    let box2 = boxes[pattern[1]].innerText;
    let box3 = boxes[pattern[2]].innerText;
    if (box1 != "" && box2 != "" && box3 != "") {
      if (box1 === box2 && box2 === box3) {
        showWinner(box1);
      }
    }
  }
};
resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
