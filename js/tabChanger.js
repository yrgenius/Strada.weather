const PAGES = document.querySelectorAll('.left__block');
const BUTTONS = document.querySelectorAll('.button');

BUTTONS.forEach(button => button.addEventListener('click', () => buttonHandler()));

function buttonHandler() {
    changeStyleButton();
    showBlock();
}

function changeStyleButton() {
    BUTTONS.forEach(button => {
        button.classList.remove('button__active');
    });
    event.target.classList.add('button__active');
}

function showBlock() {
    PAGES.forEach(block => {
        if (block.className.indexOf((event.target.textContent)) > 0) {
            block.style.display = 'block';
        }
        else { block.style.display = 'none' };
    });
}


