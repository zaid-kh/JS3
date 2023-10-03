const submit = document.querySelector("#submit");
const txtArea = document.querySelector("#interestArea");

function wordCount(text) {
  let count = 0;
  const words = text.split(/\s+/);
  count = words.length;
  console.log("count: ", count);
  return count;
}

function checkWordCount(e) {
  // console.clear();
  const text = txtArea.value;
  console.log("text: ", text);
  const count = wordCount(text);
  console.log("count: ", count);
  // remove previous message if exists
  const exists = document.querySelector(".notify");
  if (exists) exists.remove();
  if (count < 100) {
    // msg to user : message should at least be 100 words
    console.error("msg should be 100+ words");
    const notifyMore = document.createElement("p");
    notifyMore.classList.add("notify");
    notifyMore.innerText = "Warning: Message should at least be 100 words!";
    submit.parentElement.appendChild(notifyMore);
  } else {
    // msg to user : success
    const success = document.createElement("p");
    success.classList.add("notify");
    success.innerText = "Your words are appreciated!";
    submit.parentElement.appendChild(success);
  }
}

submit.addEventListener("click", checkWordCount);
