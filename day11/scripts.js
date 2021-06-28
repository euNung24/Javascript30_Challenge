const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const player_sliders = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullScreen = player.querySelector(".full_screen");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleSlider() {
  video[this.name] = this.value;
  console.log(this.name, this.value);
}

function timeBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function changeProgress(e) {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
}

function makeFullScreen() {
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
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));
player_sliders.forEach((player_slider) =>
  player_slider.addEventListener("change", handleSlider)
);
player_sliders.forEach((player_slider) =>
  player_slider.addEventListener("mousemove", handleSlider)
); // 슬라이드바 클릭 후 이동 중에도 event 발생(소리크기, 재생속도)

let mousedown = false;
progress.addEventListener("click", changeProgress);
progress.addEventListener("mousemove", (e) => mousedown && changeProgress(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreen.addEventListener("click", makeFullScreen);
