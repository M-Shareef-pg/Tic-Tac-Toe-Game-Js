let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let gParent = document.getElementById("gParent");

// Player turn tracking
let player1 = true;

// Winning patterns
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

// Event listener for each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1) {
      box.innerText = "O";
      player1 = false;
    } else {
      box.innerText = "X";
      player1 = true;
    }
    box.disabled = true; // Disable clicked box
    checkWinner();
  });
});

// Winner check function
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val); // Call function to show winner
        return;
      }
    }
  }
};

// Function to display winner message and new game button
const showWinner = (winner) => {
  let winMsg = document.createElement("h2");
  winMsg.innerText = `🎉 Winner: ${winner} 🎉`;
  winMsg.style.fontSize = "2rem";
  winMsg.style.marginTop = "20px";

  let newGameBtn = document.createElement("button");
  newGameBtn.innerText = "New Game";
  newGameBtn.classList.add("reset");
  newGameBtn.style.marginTop = "10px";

  newGameBtn.addEventListener("click", resetGame);

  gParent.appendChild(winMsg);
  gParent.appendChild(newGameBtn);

  // Disable all boxes after winner is found
  boxes.forEach((box) => (box.disabled = true));
};

// Reset game function
const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });

  player1 = true;

  // Remove winner message and new game button if they exist
  let winnerText = document.querySelector("h2");
  let newGameBtn = document.querySelector(".reset");

  if (winnerText) winnerText.remove();
  if (newGameBtn) newGameBtn.remove();
};

// Attach reset function to reset button
reset.addEventListener("click", resetGame);
