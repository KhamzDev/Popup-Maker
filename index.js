

const submitBtn = document.getElementById('submitBtn');
const okBtn = document.getElementById('okBtn');
const box = document.querySelector(".box")

submitBtn.addEventListener('click', () => {
    box.classList.add('show-box');
})

okBtn.addEventListener('click', () => {
    box.classList.remove('show-box');
})
