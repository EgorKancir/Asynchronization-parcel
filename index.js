// 1

let messageIndex = 0;
function messagePush() {
    if (messageIndex < 5) {
        messageIndex += 1;
        alert(`Message number: (${messageIndex})`);
    } else {
        clearInterval(messageInterval);
        alert("END message!")
    }
}

const messageInterval = setInterval(messagePush, 3000);

// 2

const circle = document.querySelector(".atimation-group__circle");
const line = document.querySelector(".atimation-group__line");

const colorArr = ["red", "green", "blue", "yellow", "purpel"];
let circleIndex = 1;
let circleRight = false;

let lineIndex = 0;
let lineStatus = false;


function circleAnim() {
    if (circleIndex > colorArr.length - 1) {
        circleIndex = 0;
        circle.style.backgroundColor = colorArr[circleIndex];
    } else {
        circle.style.backgroundColor = colorArr[circleIndex];
        circleIndex += 1;
    }

    circleRight = !circleRight;
    circle.style.transform = `translateX(${circleRight ? 0 : 400}px)`;
}
function lineAnim() { 
    if (lineIndex > colorArr.length - 1) {
        lineIndex = 0;
        line.style.backgroundColor = colorArr[lineIndex];
    } else {
        line.style.backgroundColor = colorArr[lineIndex];
        lineIndex += 1;
    }

    lineStatus = !lineStatus;
    line.style.width = `${lineStatus ? 100 : 0}%`;
}

const circleInterval = setInterval(circleAnim, 2000);

const lineInterval = setInterval(lineAnim, 2000);

// 3

const gameCircle = document.querySelector(".game__circle");
const gameArea = document.getElementById("game__area");
const gameScoreDisplay = document.getElementById("game__score");
const newGameBtn = document.querySelector(".game__new-game-btn");
let score = 0;
let timeLeft = 30;
let gameInterval = null;

function moveCircle() {
    const maxX = gameArea.clientWidth - gameCircle.clientWidth;
    const maxY = gameArea.clientHeight - gameCircle.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    gameCircle.style.left = `${randomX}px`;
    gameCircle.style.top = `${randomY}px`;
}

gameCircle.addEventListener("click", () => {
    score++;
    gameScoreDisplay.textContent = `Очки: ${score}`;
});

newGameBtn.addEventListener("click", () => {
    score = 0;
    gameScoreDisplay.textContent = `Очки: ${score}`;
    gameCircle.style.display = "block"; 
    if (gameInterval) {
        clearInterval(gameInterval);
    }
    gameInterval = setInterval(moveCircle, 1500);
    setTimeout(() => {
        clearInterval(gameInterval);
        gameCircle.style.display = "none"; 
        alert(`Гра завершена! Ваш результат: ${score} очок`);
    }, timeLeft * 1000);
});

// 4

const secondsText = document.querySelector(".timer__seconds");
const timeInput = document.getElementById("timer__input");
const startBtn = document.getElementById("timer__start-btn");

function startTimer(seconds) {
    let timerSec = 0;
    let timerText = seconds;
    const timerInterval = setInterval(() => {
        if (timerSec <= seconds) {
            secondsText.textContent = timerText;
            timerText--;
            timerSec++;
        } else {
            clearInterval(timerInterval);
            alert("Timer END");
        }
    }, 1000); 
}
startBtn.addEventListener("click", () => {
    let userSeconds = Number(timeInput.value.trim());
    if (!isNaN(userSeconds) && userSeconds > 0) {
        startTimer(userSeconds);
    } else {
        alert("The number must be greater than 0!");
    }
});