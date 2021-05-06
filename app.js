const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
console.log(modalBtn)
modalBtn.addEventListener("click", function () {
    console.log("modal button clicked");
    modal.classList.add("open-modal");
})

closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal")
})