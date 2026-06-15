import "./style.css";

const lightBtn = document.getElementById("nav-light-off");

lightBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-on");

  if (document.body.classList.contains("light-on")) {
    lightBtn.classList.remove("bi-lightbulb");
    lightBtn.classList.add("bi-lightbulb-off");
  } else {
    lightBtn.classList.remove("bi-lightbulb-off");
    lightBtn.classList.add("bi-lightbulb");
  }
});
