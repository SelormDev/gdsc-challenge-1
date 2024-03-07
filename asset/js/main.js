"use strict"

const cancelBtn = document.getElementById("cancel");
const modal = document.getElementById("modal")
const signInBtn = document.getElementById("login_btn")

function toggleModal() {
    modal.classList.toggle("hidden")
}

signInBtn.addEventListener("click", toggleModal)
cancelBtn.addEventListener("click", toggleModal)