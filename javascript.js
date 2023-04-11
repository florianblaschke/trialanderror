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
