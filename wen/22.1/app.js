const form = document.querySelector("form");
let data = {};

form.addEventListener("input", (e) => {
  if (e.target.name === "name") {
    data.name = e.target.value;
  }
  if (e.target.name === "age") {
    data.age = e.target.value;
  }
  if (e.target.name === "email") {
    data.email = e.target.value;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("data: ", data);
  // if !empty
  if (data.name && data.age && data.email) {
    const msg = `Is this information correct?\n\nName = ${data.name}\nAge = ${data.age}\nEmail = ${data.email}`;
    const confirmed = confirm(msg);
    if (confirmed) {
      alert("Congratulations you successfully sent this form.");
      form.reset();
    }
  }
});
