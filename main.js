const firstBtn = document.querySelector('.first_btn')
const lastBtn = document.querySelector('.last_btn')
const boxModal = document.querySelector('.box_modal')
const modalContent = document.querySelector('.modal_content')
const title = document.querySelector('.modal_content p')
const closeModal = document.querySelector('.btn_close')
const audio = document.querySelector('.music1')


firstBtn.onclick = function () {
    boxModal.classList.add('active')
    modalContent.classList.add('active')
    audio.classList.add('active')
}

lastBtn.onclick = function(){
    boxModal.classList.add('active')
    title.classList.add('active')
}
closeModal.onclick = function(){
    boxModal.classList.remove('active')
    modalContent.classList.remove('active')
    audio.classList.remove('active')
    title.classList.remove('active')

}