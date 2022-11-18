const toggleBtn = document.querySelector(".slider");
const icon = document.getElementById("toggle");

const changeTheme = () => {
  document.body.classList.toggle("dark-mode");
};

toggleBtn.addEventListener("click", changeTheme);

// Menu JavaScript

const menu = document.querySelector("#menu");
const links = document.querySelector("ul");

menu.addEventListener("click", () => {
  if (links.style.display === "none") {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
});
