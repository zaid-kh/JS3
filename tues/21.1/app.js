const legalAge = 18;
const btnCheck = document.querySelector("#check");

btnCheck.addEventListener("click", () => {
  let age = Number.parseInt(document.querySelector("input").value);
  if (age >= legalAge) alert("You can drink");
  else alert("You are too young to drink");
});
