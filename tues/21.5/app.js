const input = document.querySelector("input");
const submit = document.querySelector("#submit");
const smileyContainer = document.querySelector("#smiley-container");

submit.addEventListener("click", () => {
  smileyContainer.replaceChildren("");
  // retrieve value of input
  let num = input.value;
  console.log("num: ", num);
  for (let i = 0; i < num; i++) {
    // creating img element with smiley src
    const img = document.createElement("img");
    img.setAttribute("src", "smiley.png");
    smileyContainer.appendChild(img);
  }
});
