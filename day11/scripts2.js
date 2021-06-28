const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const sliders = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullScreen = player.querySelector(".full_screen");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function handleSlider() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function timeBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function handleTime(e) {
  const setTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = setTime;
}

function toggleFullScreen() {
  if (player.offsetWidth != window.innerWidth) {
    player.requestFullscreen();
    fullScreen.innerHTML = "<div>┚┖</div> <div>┒┎</div>";
  } else {
    document.exitFullscreen();
  }
}

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", timeBar);
toggle.addEventListener("click", togglePlay);

sliders.forEach((slider) => slider.addEventListener("change", handleSlider));
sliders.forEach((slider) => slider.addEventListener("mousemove", handleSlider));
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));
fullScreen.addEventListener("click", toggleFullScreen);

let mousedown = false;
progress.addEventListener("click", handleTime);
progress.addEventListener("mousemove", (e) => mousedown && handleTime(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
