"use strict";

const showButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overal = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");

function openModal() {
  modal.classList.add("hidden");
  overal.classList.add("hidden");
}

function closeModal() {
  modal.classList.remove("hidden");
  overal.classList.remove("hidden");
}

showButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", closeModal);
});

close.addEventListener("click", openModal);
overal.addEventListener("click", openModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overal.classList.contains("hidden")) {
    {
      closeModal();
      console.log("hideModal()");
    }
  }
});
