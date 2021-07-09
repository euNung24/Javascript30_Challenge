const displayLeftTime = document.querySelector(".display__time-left");
const displayEndTime = document.querySelector(".display__end-time");
const dataTimes = document.querySelectorAll("[data-time]");

let countdown;

function startTimer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  const endHours = new Date(then).getHours();
  const endMinutes = new Date(then).getMinutes();
  const endTime = `${endHours}:${endMinutes < 10 ? "0" : ""}${endMinutes}`;
  displayEndTime.textContent = `Time Out : ${endTime}`;

  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const leftTime = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  displayLeftTime.textContent = leftTime;
  document.title = `Day29 | ${leftTime}`;
}

function setTimer() {
  const settingTime = parseInt(this.dataset.time);
  startTimer(settingTime);
}

function submitTime(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  startTimer(mins * 60);
  this.reset();
}

dataTimes.forEach((dataTime) => dataTime.addEventListener("click", setTimer));
document.customForm.addEventListener("submit", submitTime);
