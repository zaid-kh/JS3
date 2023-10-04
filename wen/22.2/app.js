const showImage = document.querySelector("#showImage");
const img = document.querySelector("img");
img.setAttribute("hidden", true);

console.log('img.getAttribute("hidden"): ', img.getAttribute("hidden"));
let visible = false;

showImage.addEventListener("click", () => {
  console.log('img.getAttribute("hidden"): ', img.getAttribute("hidden"));

  if (!visible) {
    console.log("visible: ", visible);
    img.removeAttribute("hidden");
    visible = true;
  } else {
    console.log("visible: ", visible);
    img.setAttribute("hidden", true);
    visible = false;
  }
});
