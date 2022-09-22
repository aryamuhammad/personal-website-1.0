const navigationHeight = document.querySelector("nav").offsetHeight;

console.log(navigationHeight);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

//form
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".message");
const buttonSubmit = document.querySelector(".submit");
const modalCard = document.querySelector(".modal");
const buttonModal = document.getElementById("submit");
const messageModal = document.querySelector(".modal .body-modal h1");
buttonSubmit.addEventListener("click", function () {
  messageModal.innerHTML = `Thank you ${nameInput.value}!`;
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  modalCard.style.display = "block";
});

buttonModal.addEventListener("click", function () {
  modalCard.style.display = "none";
});
