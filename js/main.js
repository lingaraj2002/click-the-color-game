// Variables for the game
const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#008000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Gray", hex: "#808080" },
  { name: "Black", hex: "#000000" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Teal", hex: "#008080" },
  { name: "Navy", hex: "#000080" },
  { name: "Maroon", hex: "#800000" },
  { name: "Olive", hex: "#808000" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Khaki", hex: "#F0E68C" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "Peru", hex: "#CD853F" },
  { name: "Tomato", hex: "#FF6347" },
  { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Thistle", hex: "#D8BFD8" },
];
var selectedColor = [];
var questionColor = [];
var score = 0;
var life = 3;
var time = 60;
var pauseTimer = false;
let currentTimer = null;
let bgm = true;
const musicBtn = document.querySelector(".music-button");
const musicImage = document.querySelector(".music-img");
const menuBtn = document.querySelector(".menu-button");
const homeSection = document.getElementById("home-sec");
const tabShowText = document.getElementById("tabShowText");
const loadingContainer = document.querySelector(".loading-cntnr");
const gameLoader = document.getElementsByClassName("game-loader");
const rulesSection = document.getElementById("rules-sec");
const startBtn = document.querySelector(".start-btn");
const gameBoardSection = document.getElementById("board-sec");
const scoreBox = document.getElementById("score");
const timerDisplay = document.querySelector(".timer");
const colorName = document.getElementById("color-name");
const hearts = document.querySelectorAll(".heart");
const gameBoardOption = document.querySelectorAll(".board-col");
const popupContainer = document.getElementById("popup-cntnr");
const popupRow = document.querySelector(".popup-row");
const popupRowCorrect = document.querySelector(".popup-row-correct");
const popupRowWrong = document.querySelector(".popup-row-wrong");
const resumeBtn = document.querySelector(".resume-btn");
const retryBtn = document.querySelectorAll(".retry-btn");
const quitBtn = document.querySelectorAll(".quit-btn");
const gameOverSection = document.getElementById("game-over-sec");
const gameOverScoreSpan = document.querySelector(".game-over-score-span");
const gameTitle = document.querySelector(".game-title");
const gameBackgroundAudio = new Audio(
  "../css/assets/audio/game-background-music.mp3"
);
const buttonClickAudio = new Audio(
  "../css/assets/audio/button-click-audio.mp3"
);
const correctAnswerAudio = new Audio(
  "../css/assets/audio/correct-answer-audio.wav"
);
const wrongAnswerAudio = new Audio(
  "../css/assets/audio/wrong-answer-audio.mp3"
);
const gameOverNegativeAudio = new Audio(
  "../css/assets/audio/game-over-negative-audio.mp3"
);
const gameOverPositiveAudio = new Audio(
  "../css/assets/audio/game-over-positive-audio.mp3"
);

// Function for autoplay music
const musicPlay = () => {
  gameBackgroundAudio.volume = 0.5;
  gameBackgroundAudio.loop = true;
  gameBackgroundAudio.play();
};

musicPlay();

// Function for bgm pause & play
musicBtn.onclick = function () {
  if (bgm) {
    gameBackgroundAudio.pause();
    musicImage.src = "../css/assets/icons/click-the-color-mute-icon.svg";
    bgm = false;
  } else {
    gameBackgroundAudio.play();
    musicImage.src = "../css/assets/icons/click-the-color-unmute-icon.svg";
    bgm = true;
  }
};

// Function for game over
const handleGameOver = () => {
  try {
    if (score > 0) {
      gameOverPositiveAudio.play();
    } else {
      gameOverNegativeAudio.play();
    }
    gameOverSection.style.display = "grid";
    gameBoardSection.style.display = "none";
    gameOverScoreSpan.innerHTML = score;
  } catch (error) {
    console.log(error);
  }
};

// Function for game time countdown
function handleGameTimer() {
  try {
    console.log(currentTimer, "currentTimer 1");
    // Reset the timer display
    timerDisplay.style.color = "#000000";
    timerDisplay.textContent = time;
    // Clear any existing timer
    if (currentTimer) {
      // clearInterval(currentTimer);
      // currentTimer = null;
      console.log("closetimer 1");
    }
    // If time is already 0, handle game over immediately
    if (time <= 0) {
      // handleGameOver();
      // return;
    }
    // Start a new timer
    currentTimer = setInterval(() => {
      console.log(currentTimer, "currentTimer 1");
      if (pauseTimer) {
        if (time > 0) {
          time--;
          // Update timer display
          timerDisplay.textContent = time;
          // Change color when time is running out
          if (time <= 10) {
            timerDisplay.style.color = "#ff0000";
          }
        } else {
          // Stop the timer when time reaches 0
          // clearInterval(currentTimer);
          // currentTimer = null;
          handleGameOver();
          console.log("closetimer 2");
        }
      }
      console.log(time, "time");
    }, 1000);
  } catch (error) {
    console.error(error);
  }
}

// Function for format the time as MM:SS
const formatTime = (seconds) => {
  try {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  } catch (error) {
    console.log(error);
  }
};

// Function for go to rules page
const handleNavigateRulesPage = () => {
  try {
    homeSection.style.display = "none";
    rulesSection.style.display = "grid";
  } catch (error) {
    console.log(error);
  }
};

// Function for show the loader when click the landing page
homeSection.onclick = function () {
  try {
    tabShowText.style.display = "none";
    for (let i = 0; i < gameLoader.length; i++) {
      gameLoader[i].style.display = "flex";
    }
    setTimeout(handleNavigateRulesPage, 3500);
  } catch (error) {
    console.log(error);
  }
};

// Function for generate 6 color options & other setup colors
const handleGetRandomColors = () => {
  try {
    const selectedColors = [];
    const selectedOneColor = [];
    // Pick 6 unique colors
    while (selectedColors.length < 6) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomIndex];
      // Avoid duplicate color
      if (!selectedColors.includes(color)) {
        selectedColors.push(color);
        selectedOneColor.push();
      }
    }
    // Set the option for the each div
    gameBoardOption.forEach((div, index) => {
      if (selectedColors[index]) {
        div.innerHTML = selectedColors[index].name;
      }
    });
    // Get the question color
    const randomColor = Math.floor(Math.random() * selectedColors.length);
    const selectedOne = selectedColors[randomColor];
    questionColor = selectedOne;
    selectedOneColor.push(selectedOne);
    colorName.style.color = selectedOneColor[0].hex;
    selectedColor = selectedOneColor;
    // get the second color for set the question color name
    const remainingColors = selectedColors.filter(
      (color) => color !== selectedOne
    );
    const selectedSecondOne =
      remainingColors[Math.floor(Math.random() * remainingColors.length)];
    colorName.innerHTML = selectedSecondOne.name;
  } catch (error) {
    console.log(error);
  }
};

// Function for update the game life heart balance
function handleUpdateLife() {
  const lifeUpdate = hearts.forEach((heart, index) => {
    heart.style.visibility = index < life ? "visible" : "hidden";
  });
  if (life === 0) {
    setTimeout(() => handleGameOver(), 750);
    lifeUpdate;
  } else {
    lifeUpdate;
  }
}

// function for result popup closing
const resultPopupTimeout = () => {
  try {
    setTimeout(() => {
      popupContainer.style.display = "none";
    }, 750);
  } catch (error) {
    console.log(error);
  }
};

// Function for game option onclick
gameBoardOption.forEach((div) => {
  div.addEventListener("click", function (event) {
    // Get the option value
    const id = event.target.id;
    let option = document.getElementById(id).innerText;
    // Condition for result
    if (option === questionColor.name) {
      correctAnswerAudio.play();
      score++;
      popupRowCorrect.style.display = "flex";
      popupRowWrong.style.display = "none";
    } else {
      wrongAnswerAudio.play();
      life--;
      handleUpdateLife();
      popupRowCorrect.style.display = "none";
      popupRowWrong.style.display = "flex";
    }
    scoreBox.innerHTML = score;
    popupContainer.style.display = "grid";
    popupRow.style.display = "none";
    resultPopupTimeout();
    handleGetRandomColors();
    return option;
  });
});

// Function for common game setup
function handleStartGame(isFirstStart) {
  try {
    homeSection.style.display = "none";
    rulesSection.style.display = "none";
    gameBoardSection.style.display = "block";
    gameOverSection.style.display = "none";
    popupContainer.style.display = "none";
    // Start the game timer
    currentTimer = null;
    handleGameTimer(isFirstStart);
    // Reset game state
    score = 0;
    scoreBox.innerHTML = score;
    life = 3;
    time = 60;
    pauseTimer = false;
    handleUpdateLife();
    handleGetRandomColors();
  } catch (error) {
    console.log(error);
  }
}

// Function for start button onclick
startBtn.onclick = function () {
  buttonClickAudio.play();
  handleStartGame();
};

// Function For menu button onclick
menuBtn.onclick = function () {
  try {
    buttonClickAudio.play();
    popupContainer.style.display = "grid";
    popupRow.style.display = "flex";
    popupRowCorrect.style.display = "none";
    popupRowWrong.style.display = "none";
    pauseTimer = true;
  } catch (error) {
    console.log(error);
  }
};

// Function for resume button onclick
resumeBtn.onclick = function () {
  try {
    buttonClickAudio.play();
    popupContainer.style.display = "none";
    pauseTimer = false;
  } catch (error) {
    console.log(error);
  }
};

// Function for retry button onclick
retryBtn.forEach((button) => {
  buttonClickAudio.play();
  button.onclick = function () {
    handleStartGame();
  };
});

// Function for quit button onclick
quitBtn.forEach((button) => {
  button.onclick = function () {
    try {
      buttonClickAudio.play();
      homeSection.style.display = "flex";
      rulesSection.style.display = "none";
      gameBoardSection.style.display = "none";
      gameOverSection.style.display = "none";
      popupContainer.style.display = "none";
      tabShowText.style.display = "block";
      for (let i = 0; i < gameLoader.length; i++) {
        gameLoader[i].style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  };
});
