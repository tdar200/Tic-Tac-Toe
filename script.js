const columns = document.querySelectorAll(".column");
const content = document.querySelectorAll(".content");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
const gameOver = document.querySelector(".game-over");

let p1Score = 0;
let p2Score = 0;
let player = "p1";
let p1Arr = [];
let p2Arr = [];

p1.innerHTML = p1Score;
p2.innerHTML = p2Score;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
content.forEach((c, idx) => {
  c.addEventListener("click", () => {
    if (player === "p1") {
      if (c.innerHTML !== "") {
      } else {
        c.innerHTML = "X";
        player = "p2";
        p1Arr.push(idx);
        count = count + 1;
      }
    }

    if (player === "p2") {
      if (c.innerHTML !== "") {
      } else {
        c.innerHTML = "O";
        player = "p1";
        p2Arr.push(idx);
        count = count + 1;
      }
    }

    console.log(count);

    if (winnerX()) {
      p1Score = p1Score + 1;
      p1.innerHTML = p1Score;
      message.innerHTML = "Player 1 won!";
      gameOver.style.display = "block";
      button.addEventListener("click", () => {
        player= "p1"
        gameOver.style.display = "none";
        resetBoard();
      });
      count = 0;

      return;
    }

    if (winnerY()) {
      p2Score = p2Score + 1;
      p2.innerHTML = p2Score;
      message.innerHTML = "Player 2 won!";

      gameOver.style.display = "block";

      button.addEventListener("click", () => {
        player= "p1"
        gameOver.style.display = "none";
        resetBoard();
      });

      count = 0;
      return;
    }

    if (count === 9) {
      message.innerHTML = "It's a Draw!";
      gameOver.style.display = "block";
      button.addEventListener("click", () => {
        gameOver.style.display = "none";
        resetBoard();
      });
    }
  });
});

const resetBoard = () => {
  content.forEach((c) => {
    return (c.innerHTML = "");
  });
};

const winnerX = () => {
  return winCombos.some((combos) => {
    return combos.every((combo) => {
      return content[combo].innerHTML === "X";
    });
  });
};

const winnerY = () => {
  return winCombos.some((combos) => {
    return combos.every((combo) => {
      return content[combo].innerHTML === "O";
    });
  });
};
