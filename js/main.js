import toggleActive from './toggleActive.js';

document
  .querySelectorAll('.edit-button, .save-button')
  .forEach(button => button.addEventListener('click', toggleActive));
