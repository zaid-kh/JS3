const body = document.querySelector("body");
// change title
const title = document.querySelector("title");
title.innerText = "19.4 | Dynamic Page";
// add a header
const mainHeader = document.createElement("h1");
mainHeader.innerText = "Dynamic Page";
body.append(mainHeader);
// add a second header
const secondHeader = document.createElement("h2");
secondHeader.innerText = "This page is created using pure JavaScript!";
body.append(secondHeader);
// get name from user and print a list with multiple items containing the name
const ul = document.createElement("ul");
const name = prompt("What is your name");
for (let i = 0; i < 8; i++) {
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
}
body.appendChild(ul);
ul.classList.add("list");
secondHeader.classList.add("new-color");
