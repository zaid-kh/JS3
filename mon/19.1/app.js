// Create a variable that holds the <li> element with the class “start-here”
const startHereLi = document.querySelector("li.start-here");

// 1. Change the text from “title 2” to “main title”
startHereLi.innerText = "main title";
// 2. Add another subtitle with the text “subtitle 4”
// new element to be added
const sub4 = document.createElement("li");
sub4.innerText = "sub title 4";
// find the elements correct place and insert it
const subtitles = startHereLi.nextElementSibling.firstElementChild;
subtitles.appendChild(sub4);
// 3. Delete the last <li> element from the list.
const list = startHereLi.parentElement;
list.lastElementChild.remove();
// 4. Change the <title> element text to “Master Of The Dom”.
const title = document.querySelector("title");
title.innerText = "Master Of The Dom";
// 5. Change the text of the <p> element ot something else of your choice
const p = document.querySelector("p");
p.innerText = "Nothing is true, everything is permitted.";
