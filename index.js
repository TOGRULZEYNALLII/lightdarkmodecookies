const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const clear = document.getElementById("clear");
const body = document.querySelector("body");

const theme = localStorage.getItem("theme");
if (theme == "dark") body.classList.add("dark");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

refresh.addEventListener("click", () => {
  localStorage.removeItem("theme");
});

clear.addEventListener("click", () => {
  location.reload();
});
