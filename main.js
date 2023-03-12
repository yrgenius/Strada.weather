import { buttonHandler } from "./buttonHandler.js";

const BUTTONS = document.querySelectorAll('.button');

BUTTONS.forEach(button => button.addEventListener('click', () => buttonHandler()));


