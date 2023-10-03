const MAX_SIZE = 100;
const MIN_SIZE = 6;

const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const paragraph = document.querySelector("p");

increaseBtn.addEventListener("click", () => {
  let currentSize = Number.parseInt(getComputedStyle(paragraph).fontSize);
  let newsize = Math.min(MAX_SIZE, currentSize + 10);
  paragraph.style.fontSize = newsize + "px";
});

decreaseBtn.addEventListener("click", () => {
  let currentSize = Number.parseInt(getComputedStyle(paragraph).fontSize);
  let newsize = Math.max(MIN_SIZE, currentSize - 10);
  paragraph.style.fontSize = newsize + "px";
});
