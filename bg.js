const body = document.querySelector('body');
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  /* img 태그로 만들 경우
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);*/

  const wrapper = document.querySelector('.wrapper');

  wrapper.style.background = `url('images/${
    imgNumber + 1
  }.jpg') no-repeat center / cover`;
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
