const modalImg = document.querySelectorAll(".modal__buttons--image")
const modal = document.querySelector(".modals")
const closeBtn = document.querySelector(".exit-butom")
for(let i = 0; i < modalImg.length; i++){
    modalImg[i].addEventListener("click", (evt) => {
        modal.classList.add("modal-active")
    })
}
closeBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    modal.classList.remove("modal-active")
})