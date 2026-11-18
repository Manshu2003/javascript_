let numberContainer = document.querySelector(".numberContainer");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");
let timerValue = document.querySelector(".timerValue");
let numberOfCicles = 70;
let target;
let timer = 10;

function timerReset() {
  timer = 10;
}
timerReset();

setInterval(() => {
  if (timer <= 0) {
    numberContainer.innerHTML = `
        <div>Game over
        <button onclick="resetGame()">Play Again</button>
        </div>`;
    return;
  }
  timer--;
  timerValue.innerHTML = timer;
}, 1000);

function resetGame() {
  timerReset();
  generatTargetValue();
  generateNumber();
  scoreValue.innerHTML = 0;
}
resetGame();
function generatTargetValue() {
  target = Math.ceil(Math.random() * 10);

  targetValue.innerHTML = target;
}
generatTargetValue();

function generateNumber() {
  numberContainer.innerHTML = "";
  for (let i = 0; i <= numberOfCicles; i++) {
    let divElement = document.createElement("div");
    divElement.className = "circle";
    divElement.innerHTML = Math.ceil(Math.random() * 10);

    numberContainer.append(divElement);
  }
}
generateNumber();

numberContainer.addEventListener("click", function (e) {
  if (e.target.className === "circle") {
    let number = Number(e.target.innerText);

    if (target === number) {
      let score = Number(scoreValue.innerText);
      score += 10;
      scoreValue.innerText = score;
    }
    generatTargetValue();
  }
});
