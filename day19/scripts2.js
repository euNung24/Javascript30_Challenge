const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const video = document.querySelector(".player");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => console.log("Oh no!!!", err));
}

function paintToCanas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height), 16;
    let pixels = ctx.getImageData(0, 0, width, height);

    // 효과 주기
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.2;
    // pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  });
}

function takePhoto() {
  // 소리 재생
  snap.currentTime = 0;
  snap.play();

  // 이미지 다운로드 파일 추가
  const data = canvas.toDataURL("images/jpeg");
  const link = document.createElement("a");
  link.innerHTML = `<img src="${data}" alt="images">`;
  link.setAttribute("download", "img1");
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 150;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 100] = pixels.data[i + 1];
    pixels.data[i - 200] = pixels.data[i + 2];
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};
  document
    .querySelectorAll(".rgb input")
    .forEach((input) => (levels[input.name] = input.value));

  for (i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i + 0];
    blue = pixels.data[i + 1];
    green = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanas);
