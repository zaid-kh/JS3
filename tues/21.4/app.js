const bulb = document.querySelector("#bulb");
bulb.setAttribute("src", "bulbOff.png");
let light = false;
bulb.addEventListener("click", () => {
  // check bulb
  if (!light) {
    bulb.setAttribute("src", "bulbOn.png");
    light = true;
  } else {
    bulb.setAttribute("src", "bulbOff.png");
    light = false;
  }
});
