const checkButton = document.querySelector('#check');
const closeImage = document.querySelector('#close-image');
const menuImage = document.querySelector('#menu-image');

closeImage.style.display = 'none'

checkButton.addEventListener('click', function () {
    if (closeImage.style.display === 'none') {
        closeImage.style.display = 'block'
    } else {
        closeImage.style.display = 'none'
    }
})