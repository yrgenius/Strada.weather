const PAGES = document.querySelectorAll('.left__block');
const BUTTONS = document.querySelectorAll('.button');

export function buttonModule() {
    BUTTONS.forEach(button => button.addEventListener('click', () => buttonHandler()));
}

function buttonHandler() {
    toggleButton();
    showBlock();
}

function toggleButton() {
    BUTTONS.forEach(button => {
        button.classList.remove('button__active');
    });
    event.target.classList.add('button__active');
}

function showBlock() {
    const pages = { 'now': 'left__now', 'details': 'left__details', 'forecast': 'left__forecast' };

    PAGES.forEach(block => {
        if (block.className.indexOf(event.target.textContent) > 0) {
            block.style.display = 'block';
        }
        else { block.style.display = 'none' };
    });
}