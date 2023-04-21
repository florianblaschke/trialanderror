const likeButton = document.querySelector('[data-js="button"]');
let likes = 0;
let counter = 0;

likeButton.addEventListener("click", () => {
  likes += 1;
  console.log(likes);
  document.getElementById("likes").innerHTML = likes;
});

const submitButton = document.querySelector('[data-js="submitButton"]');

counter = 0;

submitButton.addEventListener("click", () => {
  counter += 1;
  console.log(counter);
  document.getElementById("submit").innerHTML = counter;
});

const body = document.querySelector('[data-js="body"]');
const bigFatButton = document.querySelector('[data-js="bigFatButton"]');
const para = document.querySelector('[data-js="white"]');
const paras = document.querySelector('[data-js="paras"]');

bigFatButton.addEventListener("click", () => {
  body.classList.toggle("black");
  para.classList.toggle("white");
  paras.classList.toggle("white");
});

const disco = document.querySelector('[data-js="disco-slider"]');
const colorChange = document.querySelector('[data-js="color-slider"]');
const div = document.querySelector('[data-js="div1"]');
const round = document.querySelector('[data-js="round-slider"]');
const rotate = document.querySelector('[data-js="rotate-slider"]');

colorChange.addEventListener("input", () => {
  const color = colorChange.value;
  div.style.background = `conic-gradient(
    hsl(${color - 360}, 100%, 50%),
    hsl(${color - 315}, 100%, 50%),
    hsl(${color - 270}, 100%, 50%),
    hsl(${color - 225}, 100%, 50%),
    hsl(${color - 180}, 100%, 50%),
    hsl(${color - 135}, 100%, 50%),
    hsl(${color - 90}, 100%, 50%),
    hsl(${color - 45}, 100%, 50%),
    hsl(${color}, 100%, 50%)
  )`;
});

round.addEventListener("input", () => {
  const rounder = round.value;
  div.style.borderRadius = rounder + "%";
});

rotate.addEventListener("input", () => {
  const rotation = rotate.value;
  div.style.transform = `rotate(${rotation}deg)`;
});

disco.addEventListener("input", () => {
  const discopogo = disco.value;
  div.style.background = `conic-gradient(
    hsl(${discopogo - 360}, 100%, 50%),
    hsl(${discopogo - 315}, 100%, 50%),
    hsl(${discopogo - 270}, 100%, 50%),
    hsl(${discopogo - 225}, 100%, 50%),
    hsl(${discopogo - 180}, 100%, 50%),
    hsl(${discopogo - 135}, 100%, 50%),
    hsl(${discopogo - 90}, 100%, 50%),
    hsl(${discopogo - 45}, 100%, 50%),
    hsl(${discopogo}, 100%, 50%)
  )`;
  div.style.transform = `rotateY(${discopogo - 120}deg)`;
});
