let timer = 0;
let likes = {};
let isPaused = false;
let intervalId;

const timerDisplay = document.querySelector("#timer");
const likeButton = document.querySelector("#like");
const likeDisplay = document.querySelector("#like-count");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const pauseButton = document.querySelector("#pause");
const allButtons = document.querySelectorAll("button");
const commentBox = document.querySelector("#comment-box");
const commentButton = document.querySelector("#submit-comment");
const commentList = document.querySelector("#comment-list");

setInterval(() => {
  if (!isPaused) {
    timer++;
    timerDisplay.textContent = timer;
  }
}, 1000);

plusButton.addEventListener("click", () => {
  timer++;
  timerDisplay.textContent = timer;
});

minusButton.addEventListener("click", () => {
  timer--;
  timerDisplay.textContent = timer;
});

likeButton.addEventListener("click", () => {
  if (!likes[timer]) {
    likes[timer] = 0;
  }
  likes[timer]++;
  likeDisplay.textContent = `Likes: ${likes[timer]}`;
});

pauseButton.addEventListener("click", () => {
  if (isPaused) {
    isPaused = false;
    startTimer();
    pauseButton.textContent = "Pause";
    allButtons.forEach(button => button.disabled = false);
  } else {
    isPaused = true;
    clearInterval(intervalId);
    pauseButton.textContent = "Resume";
    allButtons.forEach(button => button.disabled = true);
  }
});

function startTimer() {
  intervalId = setInterval(() => {
    if (!isPaused) {
      timer++;
      timerDisplay.textContent = timer;
    }
  }, 1000);
}

commentButton.addEventListener("click", () => {
  const comment = commentBox.value;
  if (comment) {
    const li = document.createElement("li");
    li.textContent = comment;
    commentList.appendChild(li);
    commentBox.value = "";
  }
});
