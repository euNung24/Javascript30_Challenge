const keys = document.querySelectorAll(".key");

function keyBoardPiano(e) {
  const key = document.querySelector(`kbd[data-key="${e.key}"]`);
  const sound = document.querySelector(`audio[data-key="${e.key}"]`);

  if (!sound) {
    return;
  }
  key.classList.add("toggle");
  sound.currentTime = 0;
  sound.play();
}

function clickPiano(e) {
  let key;
  if (e.target.tagName === "SPAN") {
    key = e.target.parentElement.dataset.key;
    console.log(key);
  } else if (e.target.tagName === "KBD") {
    key = e.target.dataset.key;
  } else return;
  const sound = document.querySelector(`audio[data-key="${key}"]`);

  if (!sound) {
    return;
  }
  e.target.classList.add("toggle");
  sound.currentTime = 0;
  sound.play();
}

window.addEventListener("keypress", keyBoardPiano);

keys.forEach((key) => {
  key.addEventListener("click", clickPiano);
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "box-shadow") return;
    e.target.classList.remove("toggle");
  });
});
